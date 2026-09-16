'use client';

import { useActionState } from 'react';
import { inviteUser } from '@/actions/org-actions';


export function InviteForm({ orgId }: { orgId: string }) {
    const [state, formAction, pending] = useActionState(inviteUser, null);

    return (
        <form action={formAction} className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Invite Member</h3>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="colleague@example.com"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    />
                </div>
                <div>
                    <label htmlFor="role" className="sr-only">Role</label>
                    <select
                        name="role"
                        id="role"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                        defaultValue="MEMBER"
                    >
                        <option value="MEMBER">Member</option>
                        <option value="ADMIN">Admin</option>
                    </select>
                </div>
                <input type="hidden" name="orgId" value={orgId} />
                <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {pending ? 'Inviting...' : 'Invite'}
                </button>
            </div>

            {state?.success && (
                <p className="text-sm text-green-600">{state.success}</p>
            )}
            {state?.error && (
                <p className="text-sm text-red-600">{state.error}</p>
            )}
        </form>
    );
}
