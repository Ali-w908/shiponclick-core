import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import prisma from '@/lib/db';
import { acceptInvite } from '@/actions/org-actions';
import Link from 'next/link';

export default async function InvitePage({
    params,
}: {
    params: Promise<{ token: string }>;
}) {
    const { token } = await params;
    const session = await auth();

    // Verify invite exists and is valid
    const invite = await prisma.invite.findUnique({
        where: { token },
        include: { organization: true },
    });

    if (!invite) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
                <div className="mx-auto w-full max-w-md text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Invalid Invitation
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        This invitation link is invalid or has expired. Please ask for a new invitation.
                    </p>
                    <Link
                        href="/"
                        className="mt-8 inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-medium text-white hover:bg-blue-700"
                    >
                        Go Home
                    </Link>
                </div>
            </div>
        );
    }

    if (invite.expires < new Date()) {
        return (
            <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
                <div className="mx-auto w-full max-w-md text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Invitation Expired
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        This invitation link has expired. Please ask for a new invitation.
                    </p>
                </div>
            </div>
        );
    }

    // Force login if not authenticated
    if (!session?.user) {
        redirect(`/login?callbackUrl=/invite/${token}`);
    }

    // Handle acceptance
    const acceptAction = async () => {
        'use server';
        const result = await acceptInvite(token);
        if (result.success && result.orgSlug) {
            redirect(`/${result.orgSlug}/dashboard`);
        } else {
            // Error handling - simpler query param redirect for now or error state
            redirect('/?error=invite-failed');
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-md space-y-8 rounded-xl bg-white p-10 shadow-lg dark:bg-gray-800">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                        Join {invite.organization.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        You have been invited to join <strong>{invite.organization.name}</strong> as a <strong>{invite.role.toLowerCase()}</strong>.
                    </p>
                    <p className="mt-4 text-xs text-gray-500">
                        Logged in as: {session.user.email}
                    </p>
                </div>

                <form action={acceptAction}>
                    <button
                        type="submit"
                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Accept Invitation
                    </button>
                </form>
            </div>
        </div>
    );
}
