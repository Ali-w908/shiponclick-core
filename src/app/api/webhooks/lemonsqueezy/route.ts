import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@/lib/lemonsqueezy';
import prisma from '@/lib/db';
import { SubscriptionStatus } from '@prisma/client';

/**
 * LemonSqueezy webhook handler.
 * 
 * Handles events:
 * - order_created: One-time purchase completed
 * - subscription_created: Subscription started (if we use subscriptions later)
 * - subscription_updated: Status change
 * - subscription_cancelled: Subscription ended
 * 
 * LemonSqueezy sends webhooks with X-Signature header for HMAC-SHA256 verification.
 */
export async function POST(request: NextRequest) {
    const rawBody = await request.text();
    const signature = request.headers.get('x-signature');

    if (!signature) {
        return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
    }

    // Verify webhook signature
    let isValid = false;
    try {
        isValid = await verifyWebhookSignature(rawBody, signature);
    } catch (error) {
        console.error('Webhook verification error:', error);
        return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
    }

    if (!isValid) {
        return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const eventName: string = event.meta?.event_name;
    const customData = event.meta?.custom_data;
    const orgId: string | undefined = customData?.org_id;

    if (!eventName) {
        return NextResponse.json({ error: 'Missing event name' }, { status: 400 });
    }

    // Idempotency check
    const eventId = event.meta?.webhook_id || event.data?.id;
    if (eventId) {
        const existingLog = await prisma.auditLog.findFirst({
            where: {
                action: `lemonsqueezy.${eventName}`,
                metadata: {
                    path: ['webhookId'],
                    equals: eventId,
                },
            },
        });

        if (existingLog) {
            return NextResponse.json({ received: true, duplicate: true });
        }
    }

    try {
        switch (eventName) {
            case 'order_created':
                await handleOrderCreated(event, orgId, eventId);
                break;

            case 'subscription_created':
                await handleSubscriptionCreated(event, orgId, eventId);
                break;

            case 'subscription_updated':
                await handleSubscriptionUpdated(event, orgId, eventId);
                break;

            case 'subscription_cancelled':
                await handleSubscriptionCancelled(event, orgId, eventId);
                break;

            default:
                console.log(`Unhandled LemonSqueezy event: ${eventName}`);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error(`Error processing webhook ${eventName}:`, error);
        return NextResponse.json({ error: 'Handler failed' }, { status: 500 });
    }
}

/**
 * Handle order_created event — one-time purchase.
 * Sets org to ACTIVE with lifetime access.
 */
async function handleOrderCreated(
    event: any,
    orgId: string | undefined,
    eventId: string,
) {
    if (!orgId) {
        console.error('No orgId in order_created custom_data');
        return;
    }

    const order = event.data?.attributes;
    const customerId = order?.customer_id?.toString();
    const orderNumber = order?.order_number?.toString();
    const variantId = order?.first_order_item?.variant_id?.toString();

    await prisma.$transaction(async (tx) => {
        await tx.organization.update({
            where: { id: orgId },
            data: {
                lsCustomerId: customerId || null,
                lsOrderId: orderNumber || null,
                lsVariantId: variantId || null,
                subscriptionStatus: SubscriptionStatus.ACTIVE,
                // For one-time purchases, set a far-future period end
                lsCurrentPeriodEnd: new Date('2099-12-31'),
            },
        });

        await tx.auditLog.create({
            data: {
                action: 'lemonsqueezy.order_created',
                entityId: orgId,
                entityType: 'organization',
                orgId,
                metadata: {
                    webhookId: eventId,
                    customerId,
                    orderNumber,
                    variantId,
                    totalFormatted: order?.total_formatted,
                },
            },
        });
    });
}

/**
 * Handle subscription_created event.
 */
async function handleSubscriptionCreated(
    event: any,
    orgId: string | undefined,
    eventId: string,
) {
    if (!orgId) {
        // Try to find org by customer ID
        const customerId = event.data?.attributes?.customer_id?.toString();
        if (customerId) {
            const org = await prisma.organization.findFirst({
                where: { lsCustomerId: customerId },
            });
            if (org) {
                await updateOrgFromSubscription(org.id, event, eventId);
                return;
            }
        }
        console.error('No orgId for subscription_created');
        return;
    }

    await updateOrgFromSubscription(orgId, event, eventId);
}

/**
 * Handle subscription_updated event.
 */
async function handleSubscriptionUpdated(
    event: any,
    orgId: string | undefined,
    eventId: string,
) {
    const subscriptionId = event.data?.id?.toString();

    if (!orgId && subscriptionId) {
        const org = await prisma.organization.findFirst({
            where: { lsSubscriptionId: subscriptionId },
        });
        if (org) {
            await updateOrgFromSubscription(org.id, event, eventId);
            return;
        }
    }

    if (orgId) {
        await updateOrgFromSubscription(orgId, event, eventId);
    }
}

/**
 * Handle subscription_cancelled event.
 */
async function handleSubscriptionCancelled(
    event: any,
    orgId: string | undefined,
    eventId: string,
) {
    const subscriptionId = event.data?.id?.toString();

    const org = orgId
        ? await prisma.organization.findUnique({ where: { id: orgId } })
        : subscriptionId
            ? await prisma.organization.findFirst({ where: { lsSubscriptionId: subscriptionId } })
            : null;

    if (!org) {
        console.error('No org found for subscription_cancelled');
        return;
    }

    const attrs = event.data?.attributes;
    const endsAt = attrs?.ends_at ? new Date(attrs.ends_at) : null;

    await prisma.$transaction(async (tx) => {
        await tx.organization.update({
            where: { id: org.id },
            data: {
                subscriptionStatus: SubscriptionStatus.CANCELED,
                lsCurrentPeriodEnd: endsAt,
            },
        });

        await tx.auditLog.create({
            data: {
                action: 'lemonsqueezy.subscription_cancelled',
                entityId: org.id,
                entityType: 'organization',
                orgId: org.id,
                metadata: {
                    webhookId: eventId,
                    subscriptionId,
                    endsAt: endsAt?.toISOString(),
                },
            },
        });
    });
}

/**
 * Helper to update org from subscription event data.
 */
async function updateOrgFromSubscription(
    orgId: string,
    event: any,
    eventId: string,
) {
    const attrs = event.data?.attributes;
    const subscriptionId = event.data?.id?.toString();
    const customerId = attrs?.customer_id?.toString();
    const variantId = attrs?.variant_id?.toString();
    const status = mapLSStatus(attrs?.status);
    const renewsAt = attrs?.renews_at ? new Date(attrs.renews_at) : null;
    const endsAt = attrs?.ends_at ? new Date(attrs.ends_at) : null;

    await prisma.$transaction(async (tx) => {
        await tx.organization.update({
            where: { id: orgId },
            data: {
                lsCustomerId: customerId || undefined,
                lsSubscriptionId: subscriptionId || undefined,
                lsVariantId: variantId || undefined,
                subscriptionStatus: status,
                lsCurrentPeriodEnd: renewsAt || endsAt,
            },
        });

        await tx.auditLog.create({
            data: {
                action: `lemonsqueezy.${event.meta?.event_name}`,
                entityId: orgId,
                entityType: 'organization',
                orgId,
                metadata: {
                    webhookId: eventId,
                    subscriptionId,
                    status: attrs?.status,
                },
            },
        });
    });
}

/**
 * Maps LemonSqueezy subscription status to our SubscriptionStatus enum.
 */
function mapLSStatus(status?: string): SubscriptionStatus {
    switch (status) {
        case 'active':
            return SubscriptionStatus.ACTIVE;
        case 'on_trial':
            return SubscriptionStatus.TRIALING;
        case 'past_due':
            return SubscriptionStatus.PAST_DUE;
        case 'paused':
            return SubscriptionStatus.PAUSED;
        case 'cancelled':
        case 'expired':
            return SubscriptionStatus.CANCELED;
        case 'unpaid':
            return SubscriptionStatus.UNPAID;
        default:
            return SubscriptionStatus.INCOMPLETE;
    }
}
