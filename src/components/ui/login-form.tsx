'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { authenticate, loginWithGoogle, loginWithGithub } from '@/actions/auth-actions';

function GoogleIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
    );
}

function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
    );
}

export default function LoginForm() {
    const [errorMessage, dispatch] = useActionState(authenticate, undefined);

    return (
        <div className="space-y-5 w-full max-w-sm mx-auto">
            <form action={dispatch} className="space-y-5">
                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="input-field"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        aria-describedby={errorMessage ? 'form-error' : undefined}
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-1.5" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="input-field"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                        minLength={8}
                    />
                </div>

                {/* Stay Signed In */}
                <div className="flex items-center gap-3 py-1">
                    <input
                        type="checkbox"
                        id="staySignedIn"
                        name="staySignedIn"
                        className="checkbox-custom"
                        defaultChecked
                    />
                    <label htmlFor="staySignedIn" className="text-sm font-medium text-zinc-300 cursor-pointer select-none">
                        Stay signed in on this device
                    </label>
                </div>

                {/* Submit */}
                <LoginButton />

                {/* Error */}
                <div className="min-h-[24px]" aria-live="polite" aria-atomic="true">
                    {errorMessage && (
                        <div id="form-error" className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2">
                            <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            {errorMessage}
                        </div>
                    )}
                </div>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
                <div className="h-px flex-1 bg-border-muted" />
                <span className="text-xs text-zinc-500 font-mono uppercase tracking-wider">or continue with</span>
                <div className="h-px flex-1 bg-border-muted" />
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
                <button
                    type="button"
                    onClick={() => loginWithGoogle()}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border-muted bg-surface-elevated/50 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-surface-hover hover:border-primary/50 transition-all cursor-pointer"
                >
                    <GoogleIcon className="h-4 w-4" />
                    Google
                </button>
                <button
                    type="button"
                    onClick={() => loginWithGithub()}
                    className="flex items-center justify-center gap-2 rounded-xl border border-border-muted bg-surface-elevated/50 px-4 py-2.5 text-sm font-medium text-zinc-300 hover:bg-surface-hover hover:border-primary/50 transition-all cursor-pointer"
                >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                </button>
            </div>
        </div>
    );
}

function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className="w-full btn-primary text-base py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={pending}
            aria-disabled={pending}
        >
            {pending ? (
                <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Signing in...
                </span>
            ) : (
                'Sign in'
            )}
        </button>
    );
}
