'use client';

import { removeMember, revokeInvite, updateMemberRole } from '@/actions/org-actions';
// import { UserRole } from '@prisma/client'; // Avoid importing server-side prisma client in client components
type UserRole = 'OWNER' | 'ADMIN' | 'MEMBER' | 'BILLING';

type Member = {
    id: string;
    role: UserRole;
    user: {
        name: string | null;
        email: string;
        image: string | null;
    };
    createdAt: Date;
};

type Invite = {
    id: string;
    email: string;
    role: UserRole;
    createdAt: Date;
    expires: Date;
};

export function MembersTable({
    members,
    invites,
    orgId,
    currentUserRole
}: {
    members: Member[];
    invites: Invite[];
    orgId: string;
    currentUserRole: UserRole;
}) {
    const isAdminOrOwner = currentUserRole === 'OWNER' || currentUserRole === 'ADMIN';

    async function handleRemoveMember(memberId: string) {
        if (!confirm('Are you sure you want to remove this member?')) return;
        try {
            await removeMember(memberId, orgId);
        } catch (error) {
            alert('Failed to remove member');
        }
    }

    async function handleRevokeInvite(inviteId: string) {
        if (!confirm('Are you sure you want to revoke this invitation?')) return;
        try {
            await revokeInvite(inviteId, orgId);
        } catch (error) {
            alert('Failed to revoke invitation');
        }
    }

    async function handleRoleChange(memberId: string, newRole: UserRole) {
        try {
            await updateMemberRole(memberId, orgId, newRole);
        } catch (error) {
            alert('Failed to update role');
        }
    }

    return (
        <div className="space-y-12">
            <div>
                <h3 className="text-sm font-bold text-foreground mb-4">Active Members</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-white/5">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted">User</th>
                                <th scope="col" className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted">Joined</th>
                                {isAdminOrOwner && <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td className="whitespace-nowrap py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-surface/50 flex items-center justify-center ring-1 ring-white/10">
                                            {member.user.image ? (
                                                <img className="h-10 w-10 rounded-full object-cover" src={member.user.image} alt="" />
                                            ) : (
                                                <span className="font-bold text-text-muted">
                                                    {member.user.name?.[0] || member.user.email[0].toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-bold text-foreground">{member.user.name || 'Unknown'}</div>
                                            <div className="text-sm text-text-secondary">{member.user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    {isAdminOrOwner && currentUserRole === 'OWNER' && member.role !== 'OWNER' ? (
                                        <select
                                            value={member.role}
                                            onChange={(e) => handleRoleChange(member.id, e.target.value as UserRole)}
                                            className="block rounded-lg bg-black/50 border border-white/10 px-3 py-1.5 text-sm text-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                                        >
                                            <option value="MEMBER">Member</option>
                                            <option value="ADMIN">Admin</option>
                                        </select>
                                    ) : (
                                        <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-bold text-primary ring-1 ring-primary/20">
                                            {member.role}
                                        </span>
                                    )}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                                    {new Date(member.createdAt).toLocaleDateString()}
                                </td>
                                {isAdminOrOwner && (
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        {member.role !== 'OWNER' && (
                                            <button
                                                onClick={() => handleRemoveMember(member.id)}
                                                className="text-sm font-bold text-red-500 hover:text-red-400 transition-colors"
                                            >
                                                Remove
                                            </button>
                                        )}
                                    </td>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>

            {invites.length > 0 && (
                <div>
                    <h3 className="text-sm font-bold text-foreground mb-4">Pending Invites</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-white/5">
                            <thead>
                                <tr>
                                    <th scope="col" className="py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted">Email</th>
                                    <th scope="col" className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted">Role</th>
                                    <th scope="col" className="px-6 py-3 text-left text-[10px] font-bold uppercase tracking-widest text-text-muted">Sent</th>
                                    {isAdminOrOwner && <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                            {invites.map((invite) => (
                                <tr key={invite.id}>
                                    <td className="whitespace-nowrap py-4 text-sm font-medium text-foreground">
                                        {invite.email}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                                        <span className="inline-flex items-center rounded-full bg-surface/50 px-2.5 py-0.5 text-xs font-bold text-text-muted ring-1 ring-white/10">
                                            {invite.role}
                                        </span>
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-text-secondary">
                                        {new Date(invite.createdAt).toLocaleDateString()}
                                    </td>
                                    {isAdminOrOwner && (
                                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleRevokeInvite(invite.id)}
                                                className="text-sm font-bold text-text-muted hover:text-red-400 transition-colors"
                                            >
                                                Revoke
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </div>
            )}
        </div>
    );
}
