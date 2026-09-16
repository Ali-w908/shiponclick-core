'use server';

import { signIn, signOut, auth } from '@/lib/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';
import bcrypt from 'bcryptjs';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { UserRole } from '@prisma/client';

const RegisterSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(8, { message: 'Password must be at least 8 characters' }),
    name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
});

/**
 * Generates a URL-safe slug from a string.
 */
function generateSlug(input: string): string {
    return input
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 48);
}

/**
 * Ensures a slug is unique by appending a random suffix if needed.
 */
async function ensureUniqueSlug(baseSlug: string): Promise<string> {
    let slug = baseSlug;
    let attempt = 0;
    while (true) {
        const existing = await prisma.organization.findUnique({ where: { slug } });
        if (!existing) return slug;
        attempt++;
        const suffix = Math.random().toString(36).slice(2, 6);
        slug = `${baseSlug}-${suffix}`;
        if (attempt > 10) {
            slug = `${baseSlug}-${Date.now().toString(36)}`;
            return slug;
        }
    }
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        const rawCredentials = Object.fromEntries(formData);
        const staySignedIn = formData.get('staySignedIn') === 'on';
        
        // Store user preference in a non-HTTP-only cookie so we can optionally read it client-side if needed,
        // but mostly so auth.ts can read it to dynamically configure the JWT maxAge.
        try {
            const cookieStore = await cookies();
            cookieStore.set('stay-signed-in', staySignedIn ? 'true' : 'false', { 
                maxAge: 30 * 24 * 60 * 60, // remember preference for 30 days
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
            });
        } catch (e) {
            // Ignore error in test environments when cookies() is called outside request scope
        }

        await signIn('credentials', {
            email: rawCredentials.email,
            password: rawCredentials.password,
            redirectTo: '/dashboard',
        });
    } catch (error: any) {
        // Next.js redirect throws a NEXT_REDIRECT error which must be rethrown
        if (error?.message?.includes('NEXT_REDIRECT') || error?.digest?.includes('NEXT_REDIRECT')) {
            throw error;
        }

        console.error('Sign-in Error:', error);

        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid email or password.';
                default:
                    return 'Authentication failed. Please try again.';
            }
        }

        return error?.message || 'Something went wrong during sign-in.';
    }
}

export async function register(prevState: string | undefined, formData: FormData) {
    const validatedFields = RegisterSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!validatedFields.success) {
        const errors = validatedFields.error.flatten().fieldErrors;
        const firstError = Object.values(errors).flat()[0];
        return firstError || 'Invalid fields. Please check your input.';
    }

    const { email, password, name } = validatedFields.data;

    try {
        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return 'User already exists.';
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        // Create user + default organization + membership in a transaction
        await prisma.$transaction(async (tx) => {
            const user = await tx.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    name,
                },
            });

            // Generate org name and slug from user's name
            const orgName = `${name}'s Workspace`;
            const baseSlug = generateSlug(name);
            // Ensure unique slug (check outside transaction is fine for this case)
            let slug = baseSlug;
            let attempt = 0;
            while (true) {
                const existing = await tx.organization.findUnique({ where: { slug } });
                if (!existing) break;
                attempt++;
                const suffix = Math.random().toString(36).slice(2, 6);
                slug = `${baseSlug}-${suffix}`;
                if (attempt > 10) {
                    slug = `${baseSlug}-${Date.now().toString(36)}`;
                    break;
                }
            }

            const org = await tx.organization.create({
                data: {
                    name: orgName,
                    slug,
                    ownerId: user.id,
                },
            });

            await tx.member.create({
                data: {
                    userId: user.id,
                    organizationId: org.id,
                    role: UserRole.OWNER,
                },
            });

            // Audit log
            await tx.auditLog.create({
                data: {
                    action: 'user.registered',
                    entityId: user.id,
                    entityType: 'user',
                    userId: user.id,
                    orgId: org.id,
                    metadata: { email, orgSlug: slug },
                },
            });
        });
    } catch (error: any) {
        console.error('Registration Error:', error);

        // Handle Prisma specific errors
        if (error.code === 'P2002') {
            return 'This email is already in use.';
        }

        if (error.code === 'P5010') {
            return 'Database connection failed. Please try again later.';
        }

        return 'Something went wrong during registration. Please try again.';
    }

    // Redirect to login with success message
    redirect('/login?registered=true');
}

export async function loginWithGoogle() {
    await signIn('google', { redirectTo: '/dashboard' });
}

export async function loginWithGithub() {
    await signIn('github', { redirectTo: '/dashboard' });
}

export async function logOut() {
    await signOut({ redirectTo: '/' });
}

export async function deleteAccount() {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Not authenticated');
    }

    const userId = session.user.id;

    try {
        // Delete organizations owned by this user
        await prisma.organization.deleteMany({
            where: { ownerId: userId },
        });

        // Delete the user (cascades to members, accounts, sessions)
        await prisma.user.delete({
            where: { id: userId },
        });
        
    } catch (error) {
        console.error('Error deleting account:', error);
        throw new Error('Failed to delete account');
    }

    // Force sign out and redirect to home
    await signOut({ redirectTo: '/' });
}
