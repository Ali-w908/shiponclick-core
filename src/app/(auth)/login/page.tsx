import LoginForm from '@/components/ui/login-form';
import Link from 'next/link';
import { Logo } from '@/components/ui/logo';
import { Suspense } from 'react';

function RegisteredMessage() {
    return (
        <div className="mb-6 rounded-lg bg-success/10 border border-success/20 p-4">
            <div className="flex items-center gap-3">
                <svg className="h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-sm font-medium text-success">
                    Account created successfully. Please sign in.
                </p>
            </div>
        </div>
    );
}

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ registered?: string }> }) {
    const params = await searchParams;
    return (
        <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 dot-grid-bg opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
            
            <div className="w-full max-w-md p-6 relative z-10 animate-fade-in-up">
                <div className="glass-card p-8 md:p-10 shadow-2xl">
                    <div className="flex flex-col items-center text-center mb-8">
                        <Link href="/" className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 mb-6 group hover:scale-105 transition-transform">
                            <Logo className="h-6 w-6 text-primary" />
                        </Link>
                        <h1 className="text-2xl font-bold tracking-tight text-white font-heading">
                            Welcome back
                        </h1>
                        <p className="mt-2 text-sm text-zinc-400">
                            Sign in to your ShipOnClick dashboard
                        </p>
                    </div>

                    {params?.registered === 'true' && <RegisteredMessage />}

                    <Suspense fallback={<div className="h-[300px] flex items-center justify-center"><span className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" /></div>}>
                        <LoginForm />
                    </Suspense>

                    <p className="mt-8 text-center text-sm text-zinc-400">
                        Don't have an account?{' '}
                        <Link href="/register" className="font-semibold text-primary hover:text-primary-hover transition-colors">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
