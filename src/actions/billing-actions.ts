'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { createCheckoutSession } from '@/lib/lemonsqueezy';
import { UserRole } from '@prisma/client';

/**
 * Billing server actions with RBAC enforcement.
 * Uses LemonSqueezy for payments (Merchant of Record).
 */

// =============================================================================
// AUTHORIZATION HELPERS
// =============================================================================

/**
 * Verifies user has billing permissions for the organization.
 */
async function requireBillingPermission(orgId: string) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error('Not authenticated');
    }

    const member = await prisma.member.findFirst({
        where: {
            userId: session.user.id,
            organizationId: orgId,
            role: { in: [UserRole.OWNER, UserRole.ADMIN, UserRole.BILLING] },
        },
    });

    if (!member) {
        throw new Error('Unauthorized: Billing access requires OWNER, ADMIN, or BILLING role');
    }

    return { userId: session.user.id, member };
}

// =============================================================================
// CHECKOUT ACTIONS
// =============================================================================

/**
 * Creates a LemonSqueezy checkout and redirects to it.
 * @param orgId - Organization ID
 * @param variantId - LemonSqueezy Variant ID (from product setup)
 */
export async function createCheckout(orgId: string, variantId: string) {
    await requireBillingPermission(orgId);

    const session = await auth();

    // Get organization details
    const org = await prisma.organization.findUnique({
        where: { id: orgId },
        include: {
            members: {
                where: { role: UserRole.OWNER },
                include: { user: true },
            },
        },
    });

    if (!org) {
        throw new Error('Organization not found');
    }

    const ownerEmail = session?.user?.email || org.members[0]?.user?.email;
    const ownerName = session?.user?.name || org.members[0]?.user?.name;

    if (!ownerEmail) {
        throw new Error('Owner email not found');
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    try {
        const checkout = await createCheckoutSession({
            variantId,
            userEmail: ownerEmail,
            userName: ownerName || undefined,
            orgId: org.id,
            successUrl: `${appUrl}/${org.slug}/settings/billing?success=true`,
        });

        const checkoutUrl = (checkout as any)?.attributes?.url || (checkout as any)?.data?.attributes?.url;
        if (!checkoutUrl) {
            throw new Error('Failed to create checkout URL');
        }

        return { url: checkoutUrl };
    } catch (error: any) {
        console.error('Checkout error:', error);
        throw new Error('Failed to create checkout. Please try again.');
    }
}

// =============================================================================
// SUBSCRIPTION STATUS
// =============================================================================

/**
 * Gets the current subscription/purchase details for an organization.
 */
export async function getSubscriptionDetails(orgId: string) {
    const session = await auth();

    if (!session?.user?.id) {
        throw new Error('Not authenticated');
    }

    const member = await prisma.member.findFirst({
        where: {
            userId: session.user.id,
            organizationId: orgId,
        },
    });

    if (!member) {
        throw new Error('Not a member of this organization');
    }

    const org = await prisma.organization.findUnique({
        where: { id: orgId },
        select: {
            subscriptionStatus: true,
            lsVariantId: true,
            lsCurrentPeriodEnd: true,
            lsSubscriptionId: true,
            lsOrderId: true,
            lsCustomerId: true,
        },
    });

    if (!org) {
        throw new Error('Organization not found');
    }

    return {
        status: org.subscriptionStatus,
        variantId: org.lsVariantId,
        currentPeriodEnd: org.lsCurrentPeriodEnd,
        subscriptionId: org.lsSubscriptionId,
        orderId: org.lsOrderId,
        customerId: org.lsCustomerId,
        // One-time purchase = lifetime, so cancelAtPeriodEnd is always false
        cancelAtPeriodEnd: false,
    };
}
