import RegisterForm from '@/components/ui/register-form';
import Link from 'next/link';

function RocketIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    );
}

export default function RegisterPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#09090b] relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(99,102,241,0.08),transparent)]" />
            <div className="absolute inset-0 dot-grid-bg opacity-20" />

            <div className="relative z-10 mx-auto flex w-full max-w-[420px] flex-col space-y-6 p-6">
                {/* Logo */}
                <div className="flex flex-col items-center">
                    <Link href="/" className="flex items-center gap-2.5 mb-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20">
                            <RocketIcon className="h-5 w-5 text-indigo-400" />
                        </div>
                        <span className="text-xl font-bold text-zinc-50">
                            Ship<span className="gradient-text">OnClick</span>
                        </span>
                    </Link>
                    <p className="text-sm text-zinc-500 mt-1">Create your account</p>
                </div>

                {/* Form */}
                <RegisterForm />

                {/* Footer */}
                <p className="text-center text-sm text-zinc-500">
                    Already have an account?{' '}
                    <Link href="/login" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                        Sign in
                    </Link>
                </p>
            </div>
        </main>
    );
}
