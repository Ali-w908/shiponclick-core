'use client';

import { useActionState } from 'react';
import { updateUserProfile } from '@/actions/user-actions';

export function ProfileForm({
    user
}: {
    user: { name: string | null; email: string | null }
}) {
    const [state, formAction, pending] = useActionState(updateUserProfile, null);

    return (
        <form action={formAction} className="space-y-6 max-w-xl">
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    disabled
                    defaultValue={user.email || ''}
                    className="block w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-gray-500 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Display Name
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={user.name || ''}
                    required
                    minLength={2}
                    className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
            </div>

            <div className="flex items-center gap-4">
                <button
                    type="submit"
                    disabled={pending}
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {pending ? 'Saving...' : 'Save Changes'}
                </button>
                {state?.success && (
                    <p className="text-sm text-green-600">{state.success}</p>
                )}
                {state?.error && (
                    <p className="text-sm text-red-600">{state.error}</p>
                )}
            </div>
        </form>
    );
}
