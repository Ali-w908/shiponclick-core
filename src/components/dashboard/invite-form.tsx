'use client';

import { useActionState } from 'react';
import { inviteUser } from '@/actions/org-actions';


export function InviteForm({ orgId }: { orgId: string }) {
    const [state, formAction, pending] = useActionState(inviteUser, null);

    return (
        <form action={formAction} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="colleague@example.com"
                        className="block w-full rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm text-foreground placeholder-text-muted focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="role" className="sr-only">Role</label>
                    <select
                        name="role"
                        id="role"
                        className="block w-full sm:w-48 rounded-xl bg-black/50 border border-white/10 px-4 py-3 text-sm text-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
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
                    className="inline-flex justify-center items-center rounded-xl bg-primary text-primary-foreground px-6 py-3 text-sm font-bold shadow-md hover:opacity-90 focus:outline-none transition-opacity disabled:opacity-50"
                >
                    {pending ? 'Inviting...' : 'Send Invite'}
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
