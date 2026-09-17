import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    trustHost: true,
    pages: {
        signIn: '/login',
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const { pathname } = nextUrl;

            // Protected routes: anything under /[orgId]/* or /dashboard or /settings
            const isProtected =
                pathname.startsWith('/dashboard') ||
                pathname.startsWith('/settings') ||
                // Match /<orgSlug>/dashboard, /<orgSlug>/settings, etc.
                /^\/[^/]+\/(dashboard|settings|knowledge-graph)/.test(pathname);

            if (isProtected) {
                if (isLoggedIn) return true;
                return false; // Redirect to login
            }

            // Redirect logged-in users away from auth pages
            if (isLoggedIn) {
                const isOnAuth = pathname === '/login' || pathname === '/register';
                if (isOnAuth) {
                    const isUpgrade = nextUrl.searchParams.get('upgrade') === 'true';
                    return Response.redirect(new URL(isUpgrade ? '/dashboard?upgrade=true' : '/dashboard', nextUrl));
                }
            }

            return true;
        },
    },
    providers: [], // Providers added in auth.ts
} satisfies NextAuthConfig;
