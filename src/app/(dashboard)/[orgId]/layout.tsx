import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { DashboardSidebar, MobileSidebar } from '@/components/dashboard/sidebar';
import { PRICING_PLANS } from '@/lib/subscription';

export default async function OrgLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ orgId: string }>;
}) {
    const session = await auth();
    const { orgId } = await params;

    if (!session?.user?.id) {
        redirect('/login');
    }

    const org = await prisma.organization.findUnique({
        where: { slug: orgId },
        include: {
            members: {
                where: { userId: session.user.id }
            }
        }
    });

    if (!org || org.members.length === 0) {
        redirect('/');
    }

    const membership = org.members[0];
    const isOwner = membership.role === 'OWNER';

    // Determine plan name
    const currentPlan = org.lsVariantId
        ? Object.values(PRICING_PLANS).find((p) => p.variantId === org.lsVariantId)
        : null;
    const planName = currentPlan?.name || 'Explorer';

    // Get user initials for avatar
    const initials = session.user.name
        ? session.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
        : (session.user.email?.[0] || 'U').toUpperCase();

    return (
        <div className="flex h-screen overflow-hidden bg-background">
            {/* Desktop Sidebar */}
            <aside className="hidden md:flex md:flex-shrink-0">
                <DashboardSidebar slug={org.slug} isOwner={isOwner} planName={planName} />
            </aside>

            {/* Content Area */}
            <div className="flex flex-1 flex-col overflow-hidden">
                {/* Header */}
                <header className="flex h-14 items-center justify-between border-b border-border-muted bg-background-deep px-4 md:px-6">
                    <div className="flex items-center gap-3">
                        {/* Mobile menu */}
                        <MobileSidebar slug={org.slug} isOwner={isOwner} planName={planName} />
                        <div className="hidden md:block">
                            <h1 className="text-sm font-semibold text-foreground truncate max-w-[200px]">
                                {org.name}
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Plan badge in header */}
                        <span className={`plan-badge ${planName === 'Explorer' ? 'plan-badge-free' : 'plan-badge-active'} hidden sm:inline-flex`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${planName === 'Explorer' ? 'bg-text-muted' : 'bg-primary'}`} />
                            {planName}
                        </span>

                        {/* User avatar */}
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-surface-elevated border border-border-muted flex items-center justify-center text-xs font-semibold text-text-secondary">
                                {initials}
                            </div>
                            <span className="text-xs text-text-muted hidden lg:block max-w-[160px] truncate">
                                {session.user.email}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Main content */}
                <main className="flex-1 overflow-y-auto bg-background p-4 md:p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
