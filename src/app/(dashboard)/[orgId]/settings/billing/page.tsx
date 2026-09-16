import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/db';
import { getSubscriptionDetails, createCheckout } from '@/actions/billing-actions';
import { PRICING_PLANS } from '@/lib/subscription';
import { SubscriptionStatus } from '@prisma/client';


export default async function BillingPage({
    params,
    searchParams,
}: {
    params: Promise<{ orgId: string }>;
    searchParams: Promise<{ success?: string; canceled?: string }>;
}) {
    const { orgId } = await params;
    const { success, canceled } = await searchParams;

    const session = await auth();
    if (!session?.user?.id) {
        redirect('/login');
    }

    // Get organization
    const org = await prisma.organization.findUnique({
        where: { slug: orgId },
        include: {
            members: {
                where: { userId: session.user.id },
            },
        },
    });

    if (!org || org.members.length === 0) {
        redirect('/');
    }

    // Get subscription details
    let subscription = null;
    try {
        subscription = await getSubscriptionDetails(org.id);
    } catch (error) {
        console.error('Error fetching subscription:', error);
    }

    const currentPlan = subscription?.variantId
        ? Object.values(PRICING_PLANS).find((p) => p.variantId === subscription.variantId)
        : PRICING_PLANS.FREE;

    const isActive = subscription?.status === SubscriptionStatus.ACTIVE ||
        subscription?.status === SubscriptionStatus.TRIALING;

    return (
        <div className="mx-auto max-w-4xl space-y-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-foreground font-heading">
                    Billing &amp; Plan
                </h1>
                <p className="text-sm text-text-muted">
                    Manage your subscription and billing details.
                </p>
            </div>

            {/* Success/Cancel Messages */}
            {success && (
                <div className="rounded-xl bg-primary/10 border border-primary/20 p-4 text-primary text-sm flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    Your purchase was successful! Your plan is now active.
                </div>
            )}
            {canceled && (
                <div className="rounded-xl bg-warning/10 border border-warning/20 p-4 text-warning text-sm flex items-center gap-2">
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
                    Checkout was canceled. No changes were made.
                </div>
            )}

            {/* Current Plan Card */}
            <div className="glass-card-static p-6 relative overflow-hidden">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: isActive ? 'linear-gradient(90deg, var(--primary), var(--secondary))' : 'linear-gradient(90deg, var(--border), transparent)' }} />

                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-xs text-text-dim uppercase tracking-wider font-semibold mb-2">Current Plan</p>
                        <p className="text-2xl font-bold text-foreground font-heading">
                            {currentPlan?.name || 'Open Source'}
                        </p>
                        {isActive && currentPlan && currentPlan.price > 0 && (
                            <p className="mt-1 text-sm text-text-muted">
                                Lifetime access — one-time purchase
                            </p>
                        )}
                        {!isActive && (
                            <div className="mt-1 flex items-center gap-2">
                                <p className="text-sm text-text-dim">
                                    Free tier
                                </p>
                                <a href="https://github.com/Ali-w908/shiponclick-core" target="_blank" className="text-xs text-primary hover:underline">
                                    View Repository →
                                </a>
                            </div>
                        )}
                    </div>
                    <StatusBadge status={subscription?.status} />
                </div>

                {/* Order info */}
                {subscription?.orderId && (
                    <div className="mt-4 pt-4 border-t border-border-muted">
                        <p className="text-xs text-text-dim">
                            Order: <span className="text-text-secondary font-mono">#{subscription.orderId}</span>
                        </p>
                    </div>
                )}
            </div>

            {/* Available Plans — shown when not active */}
            {!isActive && (
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-foreground font-heading">
                        Available Plans
                    </h2>
                    <div className="max-w-lg">
                        {/* Builder Plan */}
                        <div className="glass-card-static p-6 relative overflow-hidden group border-primary/30">
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary" />
                            <div className="absolute top-3 right-3">
                                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/15 text-primary border border-primary/20">
                                    Popular
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-foreground font-heading mb-1">{PRICING_PLANS.PRO.name}</h3>
                            <p className="text-sm text-text-muted mb-4">{PRICING_PLANS.PRO.description}</p>

                            <div className="mb-5">
                                <span className="text-3xl font-bold text-foreground font-heading">${PRICING_PLANS.PRO.price}</span>
                                <span className="text-text-dim ml-1 text-sm">USD — one time</span>
                            </div>

                            <ul className="space-y-2 mb-6">
                                {PRICING_PLANS.PRO.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                                        <svg className="h-4 w-4 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <form action={async () => {
                                'use server';
                                if (PRICING_PLANS.PRO.variantId) {
                                    const res = await createCheckout(org.id, PRICING_PLANS.PRO.variantId);
                                    if (res?.url) redirect(res.url);
                                }
                            }}>
                                <button type="submit" className="w-full btn-glow py-3 text-sm">
                                    Upgrade Now
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            )}

            {/* Support */}
            <div className="glass-card-static p-6">
                <h2 className="text-sm font-semibold text-foreground mb-2">Need help?</h2>
                <p className="text-sm text-text-muted">
                    For billing questions or plan changes, contact us at support.
                </p>
                <a
                    href="mailto:support@shiponclick.tech"
                    className="mt-3 inline-block text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                >
                    support@shiponclick.tech →
                </a>
            </div>
        </div>
    );
}

function StatusBadge({ status }: { status?: SubscriptionStatus | null }) {
    const statusConfig: Record<string, { label: string; className: string }> = {
        ACTIVE: { label: 'Active', className: 'bg-primary/10 text-primary border border-primary/20' },
        TRIALING: { label: 'Trial', className: 'bg-info/10 text-info border border-info/20' },
        PAST_DUE: { label: 'Past Due', className: 'bg-destructive/10 text-destructive border border-destructive/20' },
        CANCELED: { label: 'Canceled', className: 'bg-text-muted/10 text-text-muted border border-text-muted/20' },
        PAUSED: { label: 'Paused', className: 'bg-warning/10 text-warning border border-warning/20' },
    };

    const config = status ? statusConfig[status] : { label: 'Free', className: 'plan-badge-free' };

    return (
        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${config?.className || 'plan-badge-free'}`}>
            {config?.label || 'Free'}
        </span>
    );
}
