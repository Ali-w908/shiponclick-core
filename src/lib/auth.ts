import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import prisma from '@/lib/db';
import { authConfig } from './auth.config';
import { cookies } from 'next/headers';

export const { handlers, auth, signIn, signOut } = NextAuth(async () => {
    let maxAge = 30 * 24 * 60 * 60; // default 30 days
    try {
        const cookieStore = await cookies();
        const staySignedIn = cookieStore.get('stay-signed-in')?.value;
        if (staySignedIn === 'false') {
            // If they didn't check "stay signed in", expire session after 12 hours
            // (True session cookies are hard to enforce via NextAuth JWT maxAge without overriding cookie policy)
            maxAge = 12 * 60 * 60; 
        }
    } catch (e) {
        // cookies() might throw at build time, ignore
    }

    return {
        ...authConfig,
        adapter: PrismaAdapter(prisma),
        session: { strategy: 'jwt', maxAge },
    callbacks: {
        async signIn({ user, account, profile }) {
            // Automatically capture the GitHub username if they login via GitHub
            if (account?.provider === 'github' && profile?.login && user.id) {
                try {
                    await prisma.user.update({
                        where: { id: user.id },
                        data: { githubUsername: profile.login as string }
                    });
                } catch (e) {
                    // Ignore errors, e.g., if user doesn't exist yet before creation
                }
            }
            return true;
        },
        async jwt({ token, user }) {
            // Persist user id in the JWT token on initial sign-in
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }) {
            // Send user id to the client in the session object
            if (session.user && token.id) {
                session.user.id = token.id as string;
            }
            return session;
        },
    },
    providers: [
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET,
            allowDangerousEmailAccountLinking: true,
        }),
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET,
            allowDangerousEmailAccountLinking: true,
            issuer: "https://github.com/login/oauth",
        }),
        Credentials({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {


                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(8) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await prisma.user.findUnique({ where: { email } });



                    if (!user || !user.password) return null;

                    const passwordsMatch = await bcrypt.compare(password, user.password);



                    if (passwordsMatch) return user;
                }

                return null;
            },
        }),
    ],
    };
});
