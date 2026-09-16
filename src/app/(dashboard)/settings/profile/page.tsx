import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { ProfileForm } from '@/components/dashboard/profile-form';
import { DeleteAccountButton } from '@/components/dashboard/delete-account-button';

export default async function ProfilePage() {
    const session = await auth();

    if (!session?.user) {
        redirect('/login');
    }

    const initials = session.user.name
        ? session.user.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
        : (session.user.email?.[0] || 'U').toUpperCase();

    return (
        <div className="min-h-screen bg-background">
            {/* Simple header */}
            <header className="flex h-14 items-center border-b border-border-muted bg-background-deep px-6">
                <a href="/" className="text-base font-bold text-foreground font-heading">
                    Ship<span className="gradient-text-emerald">OnClick</span>
                </a>
            </header>

            <main className="flex-1 p-6 md:p-10">
                <div className="mx-auto max-w-2xl space-y-6">
                    {/* User info header */}
                    <div className="flex items-center gap-4">
                        <div className="h-14 w-14 rounded-2xl bg-surface-elevated border border-border-muted flex items-center justify-center text-lg font-bold text-text-secondary font-heading">
                            {initials}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-foreground font-heading">Profile Settings</h1>
                            <p className="text-sm text-text-muted">
                                Manage your account information.
                            </p>
                        </div>
                    </div>

                    {/* Profile Form */}
                    <div className="glass-card-static p-6">
                        <h2 className="text-sm font-semibold text-foreground mb-4">Personal Information</h2>
                        <ProfileForm user={{ name: session.user.name ?? null, email: session.user.email ?? null }} />
                    </div>

                    {/* Danger Zone */}
                    <div className="glass-card-static p-6 border-destructive/20">
                        <h2 className="text-sm font-semibold text-destructive mb-2">Danger Zone</h2>
                        <p className="text-xs text-text-dim mb-4">
                            Permanently delete your account and all associated data. This action cannot be undone.
                        </p>
                        <DeleteAccountButton />
                    </div>
                </div>
            </main>
        </div>
    );
}
