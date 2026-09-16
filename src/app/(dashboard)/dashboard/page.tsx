import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { UserRole } from '@prisma/client';

/**
 * Dashboard router page.
 * Looks up the current user's first organization and redirects to its dashboard.
 * If no org exists (edge case), creates one automatically.
 */
export default async function DashboardRouter() {
    const session = await auth();

    if (!session?.user?.id) {
        redirect('/login');
    }

    // Find user's first membership
    const membership = await prisma.member.findFirst({
        where: { userId: session.user.id },
        include: { organization: true },
        orderBy: { createdAt: 'asc' },
    });

    if (membership?.organization) {
        redirect(`/${membership.organization.slug}/dashboard`);
    }

    // Edge case: user exists but has no org (shouldn't happen with new registration flow)
    // Create a default org for them
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
        select: { name: true, email: true },
    });

    const orgName = user?.name ? `${user.name}'s Workspace` : 'My Workspace';
    let slug = (user?.name || 'workspace')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
        .slice(0, 48);

    // Ensure unique slug
    let attempt = 0;
    while (true) {
        const existing = await prisma.organization.findUnique({ where: { slug } });
        if (!existing) break;
        attempt++;
        slug = `${slug}-${Math.random().toString(36).slice(2, 6)}`;
        if (attempt > 10) break;
    }

    const org = await prisma.organization.create({
        data: {
            name: orgName,
            slug,
            ownerId: session.user.id,
        },
    });

    await prisma.member.create({
        data: {
            userId: session.user.id,
            organizationId: org.id,
            role: UserRole.OWNER,
        },
    });

    redirect(`/${org.slug}/dashboard`);
}
