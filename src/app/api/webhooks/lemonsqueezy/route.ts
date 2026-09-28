import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature } from '@/lib/lemonsqueezy';
import prisma from '@/lib/db';
import { LemonSqueezyService } from '@/domain/billing/lemonsqueezy-service';

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
                await LemonSqueezyService.handleOrderCreated(event, orgId, eventId);
                break;

            case 'subscription_created':
                await LemonSqueezyService.handleSubscriptionCreated(event, orgId, eventId);
                break;

            case 'subscription_updated':
                await LemonSqueezyService.handleSubscriptionUpdated(event, orgId, eventId);
                break;

            case 'subscription_cancelled':
                await LemonSqueezyService.handleSubscriptionCancelled(event, orgId, eventId);
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
