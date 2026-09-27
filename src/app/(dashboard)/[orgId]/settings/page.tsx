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
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground font-heading">Team Settings</h1>
                <p className="mt-4 text-base md:text-lg text-text-muted max-w-2xl leading-relaxed">
                    Manage your team members, roles, and pending invitations.
                </p>
            </div>

            {isAdminOrOwner && (
                <div className="bg-surface/30 p-8 rounded-3xl ring-1 ring-white/5 backdrop-blur-md mb-8">
                    <h2 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-6">Invite Team Member</h2>
                    <InviteForm orgId={org.id} />
                </div>
            )}

            <div className="bg-surface/30 p-8 rounded-3xl ring-1 ring-white/5 backdrop-blur-md">
                <h2 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-6">Members</h2>
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
