import prisma from '@/lib/db';
import { SubscriptionStatus } from '@prisma/client';

/**
 * Subscription helper functions for feature gating and status checks.
 */

/**
 * Gets the subscription status for an organization.
 * @param orgId - Organization ID
 * @returns Subscription details or null if no subscription
 */
export async function getSubscriptionStatus(orgId: string) {
    const org = await prisma.organization.findUnique({
        where: { id: orgId },
        select: {
            subscriptionStatus: true,
            lsSubscriptionId: true,
            lsVariantId: true,
            lsCurrentPeriodEnd: true,
            lsCustomerId: true,
            lsOrderId: true,
        },
    });

    if (!org) return null;

    return {
        status: org.subscriptionStatus,
        subscriptionId: org.lsSubscriptionId,
        variantId: org.lsVariantId,
        currentPeriodEnd: org.lsCurrentPeriodEnd,
        customerId: org.lsCustomerId,
        orderId: org.lsOrderId,
        isActive: org.subscriptionStatus === SubscriptionStatus.ACTIVE,
        isTrialing: org.subscriptionStatus === SubscriptionStatus.TRIALING,
        isPastDue: org.subscriptionStatus === SubscriptionStatus.PAST_DUE,
        isCanceled: org.subscriptionStatus === SubscriptionStatus.CANCELED,
    };
}

/**
 * Checks if an organization has an active subscription/purchase.
 * @throws Error if subscription is not active or trialing
 */
export async function requireActiveSubscription(orgId: string) {
    const subscription = await getSubscriptionStatus(orgId);

    if (!subscription) {
        throw new Error('Organization not found');
    }

    const validStatuses: SubscriptionStatus[] = [
        SubscriptionStatus.ACTIVE,
        SubscriptionStatus.TRIALING,
    ];

    if (!subscription.status || !validStatuses.includes(subscription.status)) {
        throw new Error('Active subscription required');
    }

    return subscription;
}

/**
 * Checks if an organization is on a specific plan (by variant ID).
 */
export async function hasSubscriptionPlan(orgId: string, variantIds: string[]) {
    const subscription = await getSubscriptionStatus(orgId);

    if (!subscription || !subscription.variantId) {
        return false;
    }

    return variantIds.includes(subscription.variantId);
}

/**
 * Pricing configuration constants.
 * 
 * IMPORTANT: After creating products in LemonSqueezy dashboard,
 * update the variantId values with real LemonSqueezy variant IDs.
 * Set them via environment variables for flexibility.
 */
export const PRICING_PLANS = {
    FREE: {
        name: 'Open Source',
        variantId: null,
        price: 0,
        description: 'Start building for free with our open-core starter kit.',
        features: [
            'Next.js 15 App Router',
            'Auth.js v5 Configuration',
            'Prisma + PostgreSQL Setup',
            'Tailwind CSS + Framer Motion',
            'Community Support',
        ] as const,
    },
    PRO: {
        name: 'Builder',
        variantId: process.env.LEMONSQUEEZY_BUILDER_VARIANT_ID || '',
        price: 149,
        description: 'Everything you need to ship your SaaS.',
        features: [
            'Everything in Open Source, plus:',
            'LemonSqueezy Subscriptions & Webhooks',
            'Agentic Features & Skills (Open Code Review)',
            '190+ Automated Tests (E2E/Unit)',
            'GitHub Actions CI/CD Pipeline',
            'Dashboard & B2B Multi-tenancy',
            'One-Click Setup CLI',
            'Lifetime updates'
        ] as const,
    },
} as const;
