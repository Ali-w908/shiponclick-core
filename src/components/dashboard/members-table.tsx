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
        <div className="space-y-8">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">Active Members</h3>
                </div>
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">User</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Role</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Joined</th>
                            {isAdminOrOwner && <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                        {members.map((member) => (
                            <tr key={member.id}>
                                <td className="whitespace-nowrap px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                                            {member.user.image ? (
                                                <img className="h-10 w-10 rounded-full" src={member.user.image} alt="" />
                                            ) : (
                                                <span className="font-medium text-gray-500 dark:text-gray-400">
                                                    {member.user.name?.[0] || member.user.email[0].toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900 dark:text-white">{member.user.name || 'Unknown'}</div>
                                            <div className="text-sm text-gray-500 dark:text-gray-400">{member.user.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap px-6 py-4">
                                    {isAdminOrOwner && currentUserRole === 'OWNER' && member.role !== 'OWNER' ? (
                                        <select
                                            value={member.role}
                                            onChange={(e) => handleRoleChange(member.id, e.target.value as UserRole)}
                                            className="block rounded-md border-gray-300 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                        >
                                            <option value="MEMBER">Member</option>
                                            <option value="ADMIN">Admin</option>
                                        </select>
                                    ) : (
                                        <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                            {member.role}
                                        </span>
                                    )}
                                </td>
                                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                    {new Date(member.createdAt).toLocaleDateString()}
                                </td>
                                {isAdminOrOwner && (
                                    <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                        {member.role !== 'OWNER' && (
                                            <button
                                                onClick={() => handleRemoveMember(member.id)}
                                                className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
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

            {invites.length > 0 && (
                <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
                    <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Pending Invites</h3>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Email</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Role</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">Sent</th>
                                {isAdminOrOwner && <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                            {invites.map((invite) => (
                                <tr key={invite.id}>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-white">
                                        {invite.email}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {invite.role}
                                    </td>
                                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                                        {new Date(invite.createdAt).toLocaleDateString()}
                                    </td>
                                    {isAdminOrOwner && (
                                        <td className="whitespace-nowrap px-6 py-4 text-right text-sm font-medium">
                                            <button
                                                onClick={() => handleRevokeInvite(invite.id)}
                                                className="text-red-600 hover:text-red-900 dark:hover:text-red-400"
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
            )}
        </div>
    );
}
