import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { GithubConnectionCard } from '@/components/dashboard/github-connection-card';
import { CliInstructions } from '@/components/dashboard/cli-instructions';
import { PRICING_PLANS } from '@/lib/subscription';
import Link from 'next/link';

export default async function DashboardPage({
    params,
    searchParams,
}: {
    params: Promise<{ orgId: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const session = await auth();
    const { orgId } = await params;
    const resolvedSearchParams = await searchParams;
    const isSuccess = resolvedSearchParams.success === 'true';

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

    // Determine plan info from org subscription
    const currentPlan = org.lsVariantId
        ? Object.values(PRICING_PLANS).find((p) => p.variantId === org.lsVariantId)
        : null;

    const planName = currentPlan?.name || 'Explorer';
    const isActive = org.subscriptionStatus === 'ACTIVE' || org.subscriptionStatus === 'TRIALING';

    // Plan limits
    let canUseCliCommand = false;
    if (isActive && currentPlan) {
        if (currentPlan.name === 'Builder') {
            canUseCliCommand = true;
        }
    }

    const userDetails = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { githubUsername: true, githubInviteStatus: true }
    });

    const githubAccount = await prisma.account.findFirst({
        where: { userId: session.user.id, provider: 'github' }
    });

    // Get project count from localStorage is client-side, so we pass limits only
    const userName = session.user.name?.split(' ')[0] || 'there';

    return (
        <div className="flex-1 space-y-6">
            {/* Success Banner */}
            {isSuccess && !org.githubInviteClaimed && (
                <div className="animate-fade-in mb-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-emerald-400">
                        <SparklesIcon className="h-5 w-5" />
                        <span className="text-sm font-medium">Purchase successful! Your Builder plan is now active. Claim your repository access below to get started.</span>
                    </div>
                </div>
            )}

            {/* Welcome Section */}
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-heading">
                    Welcome back, {userName}
                </h1>
                <p className="mt-4 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
                    {isActive
                        ? `You're on the ${planName} plan with full repository access.`
                        : 'You\'re on the free Explorer plan. Explore the stack, then upgrade to ship.'
                    }
                </p>
            </div>

            {/* Upgrade Banner (Free Users Only) */}
            {!isActive && (
                <div className="animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
                    <div className="glass-card-static p-6 flex flex-col sm:flex-row items-center justify-between gap-6 border-primary/20 bg-primary/5">
                        <div className="flex items-center gap-4">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex flex-shrink-0 items-center justify-center">
                                <RocketIcon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground font-heading">
                                    Ready to Ship Your SaaS?
                                </h3>
                                <p className="text-sm text-text-muted">
                                    Upgrade to the Builder plan to get the complete, production-ready codebase with one command.
                                </p>
                            </div>
                        </div>
                        <Link
                            href={`/${orgId}/settings/billing`}
                            className="btn-glow text-sm px-6 py-2.5 whitespace-nowrap flex-shrink-0"
                        >
                            Upgrade to Builder — $149
                        </Link>
                    </div>
                </div>
            )}

            {/* Quick Actions */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                {isActive ? (
                    <>
                        <QuickAction
                            icon={<FolderPlusIcon className="h-5 w-5 text-primary" />}
                            iconBg="bg-primary/10 border-primary/20"
                            title="Overview"
                            description="Setup instructions"
                            href={`/${orgId}/dashboard`}
                        />
                        <QuickAction
                            icon={<SparklesIcon className="h-5 w-5 text-accent" />}
                            iconBg="bg-accent/10 border-accent/20"
                            title="Stack Explorer"
                            description="Explore the architecture"
                            href={`/${orgId}/playground`}
                        />
                        <QuickAction
                            icon={<GraphIcon className="h-5 w-5 text-secondary" />}
                            iconBg="bg-secondary/10 border-secondary/20"
                            title="Knowledge Graph"
                            description="Visualize codebase relations"
                            href={`/${orgId}/knowledge-graph`}
                        />
                        <QuickAction
                            icon={<UsersIcon className="h-5 w-5 text-warning" />}
                            iconBg="bg-warning/10 border-warning/20"
                            title="Team Settings"
                            description="Invite and manage members"
                            href={`/${orgId}/settings`}
                        />
                    </>
                ) : (
                    <>
                        <QuickAction
                            icon={<SparklesIcon className="h-5 w-5 text-primary" />}
                            iconBg="bg-primary/10 border-primary/20"
                            title="Stack Explorer"
                            description="Explore what you'll get"
                            href={`/${orgId}/playground`}
                            highlight
                        />
                        <QuickAction
                            icon={<GraphIcon className="h-5 w-5 text-secondary" />}
                            iconBg="bg-secondary/10 border-secondary/20"
                            title="Knowledge Graph"
                            description="Preview codebase structure"
                            href={`/${orgId}/knowledge-graph`}
                        />
                        <QuickAction
                            icon={<BookIcon className="h-5 w-5 text-accent" />}
                            iconBg="bg-accent/10 border-accent/20"
                            title="Open-Core Repo"
                            description="View public codebase"
                            href="https://github.com/Ali-w908/shiponclick-core#readme"
                            external
                        />
                        <QuickAction
                            icon={<ArrowUpIcon className="h-5 w-5 text-primary" />}
                            iconBg="bg-primary/10 border-primary/20"
                            title="Upgrade to Builder"
                            description="Get the full codebase"
                            href={`/${orgId}/settings/billing`}
                            highlight
                        />
                    </>
                )}
            </div>

            {/* GitHub Fulfillment and Onboarding (for paid users) */}
            {isActive && (
                <div className="relative z-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <GithubConnectionCard 
                        hasGithubOAuth={!!githubAccount}
                        orgId={org.id}
                        inviteClaimed={org.githubInviteClaimed}
                    />
                    
                    {org.githubInviteClaimed && canUseCliCommand && (
                        <CliInstructions />
                    )}
                </div>
            )}

        </div>
    );
}

/* ── Helper Components ── */

function QuickAction({ icon, iconBg, title, description, href, external, highlight }: {
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    description: string;
    href: string;
    external?: boolean;
    highlight?: boolean;
}) {
    const Component = external ? 'a' : Link;
    const extraProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Component
            href={href}
            className={`quick-action-card ${highlight ? 'border-primary/20 hover:border-primary/40' : ''}`}
            {...extraProps}
        >
            <div className={`quick-action-icon ${iconBg} border`}>
                {icon}
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-foreground">{title}</p>
                <p className="text-xs text-text-muted truncate">{description}</p>
            </div>
        </Component>
    );
}

/* ── Inline Icons ── */

function FolderPlusIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.06-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>;
}

function SparklesIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>;
}

function GraphIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><circle cx="5" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><circle cx="19" cy="6" r="2" /><path d="M6.7 7.5l3.8 8.5M17.3 7.5l-3.8 8.5" /><path d="M7 6h10" /></svg>;
}

function UsersIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}

function BookIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" /></svg>;
}

function ArrowUpIcon({ className }: { className?: string }) {
    return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>;
}

function RocketIcon({ className }: { className?: string }) {
    return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /></svg>;
}


