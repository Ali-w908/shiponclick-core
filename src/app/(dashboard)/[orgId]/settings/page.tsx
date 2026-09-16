import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { InviteForm } from '@/components/dashboard/invite-form';
import { MembersTable } from '@/components/dashboard/members-table';

export default async function SettingsPage({
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
        include: {
            members: {
                include: {
                    user: {
                        select: {
                            name: true,
                            email: true,
                            image: true,
                        },
                    },
                },
                orderBy: {
                    role: 'asc',
                },
            },
            invites: {
                orderBy: {
                    createdAt: 'desc',
                },
            },
        },
    });

    if (!org) {
        redirect('/');
    }

    const currentMember = org.members.find((m) => m.userId === session.user?.id);
    if (!currentMember) {
        redirect('/');
    }

    const isAdminOrOwner = currentMember.role === 'OWNER' || currentMember.role === 'ADMIN';

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-foreground font-heading">Team Settings</h1>
                <p className="text-sm text-text-muted">
                    Manage your team members and invitations.
                </p>
            </div>

            {isAdminOrOwner && (
                <div className="glass-card-static p-6 max-w-4xl">
                    <h2 className="text-sm font-semibold text-foreground mb-4">Invite Team Member</h2>
                    <InviteForm orgId={org.id} />
                </div>
            )}

            <div className="glass-card-static p-6 max-w-6xl">
                <h2 className="text-sm font-semibold text-foreground mb-4">Members</h2>
                <MembersTable
                    members={org.members}
                    invites={org.invites}
                    orgId={org.id}
                    currentUserRole={currentMember.role}
                />
            </div>
        </div>
    );
}
