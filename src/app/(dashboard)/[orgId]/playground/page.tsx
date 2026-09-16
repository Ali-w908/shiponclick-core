import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { StackExplorer } from '@/components/dashboard/stack-explorer';
import { PRICING_PLANS } from '@/lib/subscription';

export default async function PlaygroundPage({
    params,
}: {
    params: Promise<{ orgId: string }>;
}) {
    const session = await auth();
    const { orgId } = await params;

    if (!session?.user?.id) {
        redirect('/login');
    }

    const org = await prisma.organization.findUnique({
        where: { slug: orgId },
    });

    if (!org) {
        redirect('/');
    }

    // Verify membership
    const membership = await prisma.member.findUnique({
        where: {
            userId_organizationId: {
                userId: session.user.id,
                organizationId: org.id,
            },
        },
    });

    if (!membership) {
        redirect('/');
    }

    // Determine if paid
    const currentPlan = org.lsVariantId
        ? Object.values(PRICING_PLANS).find((p) => p.variantId === org.lsVariantId)
        : null;
    const isActive = org.subscriptionStatus === 'ACTIVE' || org.subscriptionStatus === 'TRIALING';
    const isPaid = isActive && !!currentPlan;

    return (
        <div className="flex-1 space-y-6 pt-2">
            <StackExplorer orgSlug={orgId} />
        </div>
    );
}
