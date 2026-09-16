'use client';

import { useTransition, useState } from 'react';
import { deleteAccount } from '@/actions/auth-actions';

export function DeleteAccountButton() {
    const [isPending, startTransition] = useTransition();
    const [confirm, setConfirm] = useState(false);

    const handleDelete = () => {
        if (!confirm) {
            setConfirm(true);
            return;
        }

        startTransition(async () => {
            try {
                await deleteAccount();
            } catch (error: any) {
                if (error?.message?.includes('NEXT_REDIRECT') || error?.digest?.includes('NEXT_REDIRECT')) {
                    // Next.js redirect exception, this is expected behavior from signOut()
                    return;
                }
                console.error(error);
                alert('Failed to delete account.');
                setConfirm(false);
            }
        });
    };

    return (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-6">
            <h2 className="text-lg font-semibold text-red-500 mb-2">Danger Zone</h2>
            <p className="text-sm text-zinc-400 mb-4">
                Permanently delete your account and all associated organizations. This action cannot be undone.
            </p>
            <button
                onClick={handleDelete}
                disabled={isPending}
                className="rounded-lg bg-red-500/20 border border-red-500/30 px-4 py-2 text-sm font-semibold text-red-400 hover:bg-red-500/30 transition-colors"
            >
                {isPending ? 'Deleting...' : confirm ? 'Click again to confirm' : 'Delete Account'}
            </button>
        </div>
    );
}
