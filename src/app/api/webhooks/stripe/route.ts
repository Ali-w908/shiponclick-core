import { NextRequest, NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';
import prisma from '@/lib/db';
import { SubscriptionStatus } from '@prisma/client';
import Stripe from 'stripe';

// Webhook secret for signature verification
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

// Type for subscription data we need
interface SubscriptionData {
    id: string;
    current_period_end: number;
    status: Stripe.Subscription.Status;
    cancel_at_period_end: boolean;
    priceId?: string;
}

/**
 * Stripe webhook handler.
 * 
 * SECURITY NOTES:
 * - Uses request.text() for raw body (required for signature verification)
 * - Verifies signature using stripe.webhooks.constructEvent()
 * - Implements idempotency by checking event.id
 * - Logs all events to AuditLog
 */
export async function POST(request: NextRequest) {
    if (!webhookSecret) {
        console.error('STRIPE_WEBHOOK_SECRET is not set');
        return NextResponse.json(
            { error: 'Webhook secret not configured' },
            { status: 500 }
        );
    }

    // Get raw body for signature verification
    const body = await request.text();
    const signature = request.headers.get('stripe-signature');

    if (!signature) {
        return NextResponse.json(
            { error: 'Missing stripe-signature header' },
            { status: 400 }
        );
    }

    let event: Stripe.Event;

    try {
        // Verify webhook signature (timing-safe comparison)
        event = getStripe().webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        console.error('Webhook signature verification failed:', message);
        return NextResponse.json(
            { error: 'Invalid signature' },
            { status: 400 }
        );
    }

    // Idempotency check - prevent duplicate processing
    const existingLog = await prisma.auditLog.findFirst({
        where: {
            action: `stripe.${event.type}`,
            metadata: {
                path: ['stripeEventId'],
                equals: event.id,
            },
        },
    });

    if (existingLog) {
        console.log(`Event ${event.id} already processed, skipping`);
        return NextResponse.json({ received: true, duplicate: true });
    }

    try {
        // Handle specific event types
        switch (event.type) {
            case 'checkout.session.completed':
                await handleCheckoutCompleted(event.data.object as Stripe.Checkout.Session, event.id);
                break;

            case 'customer.subscription.updated':
                await handleSubscriptionUpdated(event.data.object as Stripe.Subscription, event.id);
                break;

            case 'customer.subscription.deleted':
                await handleSubscriptionDeleted(event.data.object as Stripe.Subscription, event.id);
                break;

            case 'invoice.payment_succeeded':
                await handleInvoicePaymentSucceeded(event.data.object as Stripe.Invoice, event.id);
                break;

            case 'invoice.payment_failed':
                await handleInvoicePaymentFailed(event.data.object as Stripe.Invoice, event.id);
                break;

            default:
                console.log(`Unhandled event type: ${event.type}`);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        console.error(`Error processing webhook ${event.type}:`, message);
        return NextResponse.json(
            { error: 'Webhook handler failed' },
            { status: 500 }
        );
    }
}

/**
 * Get subscription ID from expandable field
 */
function getSubscriptionId(sub: string | Stripe.Subscription | null | undefined): string | undefined {
    if (!sub) return undefined;
    if (typeof sub === 'string') return sub;
    return sub.id;
}

/**
 * Get customer ID from expandable field
 */
function getCustomerId(customer: string | Stripe.Customer | Stripe.DeletedCustomer | null | undefined): string | undefined {
    if (!customer) return undefined;
    if (typeof customer === 'string') return customer;
    return customer.id;
}

/**
 * Retrieve and normalize subscription data from Stripe
 */
async function getSubscriptionData(subscriptionId: string): Promise<SubscriptionData> {
    const response = await getStripe().subscriptions.retrieve(subscriptionId);
    // Cast to unknown first, then to our interface to handle SDK type variations
    const sub = response as unknown as {
        id: string;
        current_period_end: number;
        status: Stripe.Subscription.Status;
        cancel_at_period_end: boolean;
        items: { data: Array<{ price: { id: string } }> };
    };
    return {
        id: sub.id,
        current_period_end: sub.current_period_end,
        status: sub.status,
        cancel_at_period_end: sub.cancel_at_period_end,
        priceId: sub.items.data[0]?.price.id,
    };
}

/**
 * Handle checkout.session.completed event.
 * Creates/updates subscription for the organization.
 */
async function handleCheckoutCompleted(session: Stripe.Checkout.Session, eventId: string) {
    const orgId = session.metadata?.orgId;
    if (!orgId) {
        console.error('No orgId in checkout session metadata');
        return;
    }

    const subscriptionId = getSubscriptionId(session.subscription);
    const customerId = getCustomerId(session.customer);

    let subscriptionData: SubscriptionData | null = null;

    if (subscriptionId) {
        subscriptionData = await getSubscriptionData(subscriptionId);
    }

    await prisma.$transaction(async (tx) => {
        // Update organization with subscription details
        await tx.organization.update({
            where: { id: orgId },
            data: {
                stripeCustomerId: customerId || null,
                stripeSubscriptionId: subscriptionData?.id,
                stripePriceId: subscriptionData?.priceId,
                stripeCurrentPeriodEnd: subscriptionData
                    ? new Date(subscriptionData.current_period_end * 1000)
                    : null,
                subscriptionStatus: mapStripeStatus(subscriptionData?.status),
            },
        });

        // Log to audit
        await tx.auditLog.create({
            data: {
                action: 'stripe.checkout.session.completed',
                entityId: orgId,
                entityType: 'organization',
                orgId,
                metadata: {
                    stripeEventId: eventId,
                    customerId: customerId || null,
                    subscriptionId: subscriptionData?.id || null,
                },
            },
        });
    });
}

/**
 * Handle customer.subscription.updated event.
 * Updates subscription status and details.
 */
async function handleSubscriptionUpdated(subscription: Stripe.Subscription, eventId: string) {
    const orgId = subscription.metadata?.orgId;
    if (!orgId) {
        // Try to find org by subscription ID
        const org = await prisma.organization.findFirst({
            where: { stripeSubscriptionId: subscription.id },
        });
        if (!org) {
            console.error('No org found for subscription update');
            return;
        }

        await updateOrgSubscription(org.id, subscription, eventId);
        return;
    }

    await updateOrgSubscription(orgId, subscription, eventId);
}

/**
 * Handle customer.subscription.deleted event.
 * Marks subscription as canceled.
 */
async function handleSubscriptionDeleted(subscription: Stripe.Subscription, eventId: string) {
    const org = await prisma.organization.findFirst({
        where: { stripeSubscriptionId: subscription.id },
    });

    if (!org) {
        console.error('No org found for subscription deletion');
        return;
    }

    // Cast to access snake_case properties
    const sub = subscription as unknown as { current_period_end: number };

    await prisma.$transaction(async (tx) => {
        await tx.organization.update({
            where: { id: org.id },
            data: {
                subscriptionStatus: SubscriptionStatus.CANCELED,
                stripeCurrentPeriodEnd: new Date(sub.current_period_end * 1000),
            },
        });

        await tx.auditLog.create({
            data: {
                action: 'stripe.customer.subscription.deleted',
                entityId: org.id,
                entityType: 'organization',
                orgId: org.id,
                metadata: {
                    stripeEventId: eventId,
                    subscriptionId: subscription.id,
                },
            },
        });
    });
}

/**
 * Handle invoice.payment_succeeded event.
 * Updates period end date.
 */
async function handleInvoicePaymentSucceeded(invoice: Stripe.Invoice, eventId: string) {
    // Access subscription from parent field (Stripe API v2024-12+)
    const subscriptionId = getSubscriptionId(invoice.parent?.subscription_details?.subscription);

    if (!subscriptionId) return;

    const org = await prisma.organization.findFirst({
        where: { stripeSubscriptionId: subscriptionId },
    });

    if (!org) return;

    const subscriptionData = await getSubscriptionData(subscriptionId);

    await prisma.$transaction(async (tx) => {
        await tx.organization.update({
            where: { id: org.id },
            data: {
                stripeCurrentPeriodEnd: new Date(subscriptionData.current_period_end * 1000),
                subscriptionStatus: SubscriptionStatus.ACTIVE,
            },
        });

        await tx.auditLog.create({
            data: {
                action: 'stripe.invoice.payment_succeeded',
                entityId: org.id,
                entityType: 'organization',
                orgId: org.id,
                metadata: {
                    stripeEventId: eventId,
                    invoiceId: invoice.id,
                    amountPaid: invoice.amount_paid,
                },
            },
        });
    });
}

/**
 * Handle invoice.payment_failed event.
 * Updates status to PAST_DUE and logs for notification.
 */
async function handleInvoicePaymentFailed(invoice: Stripe.Invoice, eventId: string) {
    // Access subscription from parent field (Stripe API v2024-12+)
    const subscriptionId = getSubscriptionId(invoice.parent?.subscription_details?.subscription);

    if (!subscriptionId) return;

    const org = await prisma.organization.findFirst({
        where: { stripeSubscriptionId: subscriptionId },
    });

    if (!org) return;

    await prisma.$transaction(async (tx) => {
        await tx.organization.update({
            where: { id: org.id },
            data: {
                subscriptionStatus: SubscriptionStatus.PAST_DUE,
            },
        });

        await tx.auditLog.create({
            data: {
                action: 'stripe.invoice.payment_failed',
                entityId: org.id,
                entityType: 'organization',
                orgId: org.id,
                metadata: {
                    stripeEventId: eventId,
                    invoiceId: invoice.id,
                    attemptCount: invoice.attempt_count,
                    // TODO: Trigger email notification to org owner
                },
            },
        });
    });
}

/**
 * Helper to update organization subscription details.
 */
async function updateOrgSubscription(
    orgId: string,
    subscription: Stripe.Subscription,
    eventId: string
) {
    // Cast to access snake_case properties
    const sub = subscription as unknown as {
        current_period_end: number;
        cancel_at_period_end: boolean;
        items: { data: Array<{ price: { id: string } }> };
    };

    await prisma.$transaction(async (tx) => {
        await tx.organization.update({
            where: { id: orgId },
            data: {
                stripePriceId: sub.items.data[0]?.price.id,
                stripeCurrentPeriodEnd: new Date(sub.current_period_end * 1000),
                subscriptionStatus: mapStripeStatus(subscription.status),
            },
        });

        await tx.auditLog.create({
            data: {
                action: 'stripe.customer.subscription.updated',
                entityId: orgId,
                entityType: 'organization',
                orgId,
                metadata: {
                    stripeEventId: eventId,
                    subscriptionId: subscription.id,
                    status: subscription.status,
                    cancelAtPeriodEnd: sub.cancel_at_period_end,
                },
            },
        });
    });
}

/**
 * Maps Stripe subscription status to our SubscriptionStatus enum.
 */
function mapStripeStatus(status?: Stripe.Subscription.Status): SubscriptionStatus {
    switch (status) {
        case 'active':
            return SubscriptionStatus.ACTIVE;
        case 'canceled':
            return SubscriptionStatus.CANCELED;
        case 'incomplete':
            return SubscriptionStatus.INCOMPLETE;
        case 'incomplete_expired':
            return SubscriptionStatus.INCOMPLETE_EXPIRED;
        case 'past_due':
            return SubscriptionStatus.PAST_DUE;
        case 'paused':
            return SubscriptionStatus.PAUSED;
        case 'trialing':
            return SubscriptionStatus.TRIALING;
        case 'unpaid':
            return SubscriptionStatus.UNPAID;
        default:
            return SubscriptionStatus.INCOMPLETE;
    }
}
