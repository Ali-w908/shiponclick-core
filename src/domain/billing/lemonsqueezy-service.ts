import prisma from '@/lib/db';
import { SubscriptionStatus } from '@prisma/client';

export class LemonSqueezyService {
    /**
     * Handle order_created event — one-time purchase.
     * Sets org to ACTIVE with lifetime access.
     */
    static async handleOrderCreated(event: any, orgId: string | undefined, eventId: string) {
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
    static async handleSubscriptionCreated(event: any, orgId: string | undefined, eventId: string) {
        if (!orgId) {
            const customerId = event.data?.attributes?.customer_id?.toString();
            if (customerId) {
                const org = await prisma.organization.findFirst({
                    where: { lsCustomerId: customerId },
                });
                if (org) {
                    await this.updateOrgFromSubscription(org.id, event, eventId);
                    return;
                }
            }
            console.error('No orgId for subscription_created');
            return;
        }

        await this.updateOrgFromSubscription(orgId, event, eventId);
    }

    /**
     * Handle subscription_updated event.
     */
    static async handleSubscriptionUpdated(event: any, orgId: string | undefined, eventId: string) {
        const subscriptionId = event.data?.id?.toString();

        if (!orgId && subscriptionId) {
            const org = await prisma.organization.findFirst({
                where: { lsSubscriptionId: subscriptionId },
            });
            if (org) {
                await this.updateOrgFromSubscription(org.id, event, eventId);
                return;
            }
        }

        if (orgId) {
            await this.updateOrgFromSubscription(orgId, event, eventId);
        }
    }

    /**
     * Handle subscription_cancelled event.
     */
    static async handleSubscriptionCancelled(event: any, orgId: string | undefined, eventId: string) {
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
    static async updateOrgFromSubscription(orgId: string, event: any, eventId: string) {
        const attrs = event.data?.attributes;
        const subscriptionId = event.data?.id?.toString();
        const customerId = attrs?.customer_id?.toString();
        const variantId = attrs?.variant_id?.toString();
        const status = this.mapLSStatus(attrs?.status);
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
    static mapLSStatus(status?: string): SubscriptionStatus {
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
}
