'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { inviteUserToRepo } from '@/lib/github';
import { SubscriptionStatus } from '@prisma/client';

import { revalidatePath } from 'next/cache';

export async function updateGithubUsername(username: string) {
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: 'Unauthorized' };
    }

    if (!username || username.trim() === '') {
        return { success: false, error: 'GitHub username is required.' };
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { githubInviteStatus: true }
        });

        if (user?.githubInviteStatus === 'ACCEPTED') {
            return { success: false, error: 'Your GitHub invite has already been accepted. You cannot change your username. Contact support if you need assistance.' };
        }

        await prisma.user.update({
            where: { id: session.user.id },
            data: { githubUsername: username.trim() },
        });
        
        revalidatePath('/', 'layout');
        return { success: true };
    } catch (error) {
        console.error('Error updating GitHub username:', error);
        return { success: false, error: 'Failed to update GitHub username.' };
    }
}

export async function requestGithubAccess() {
    const session = await auth();

    if (!session?.user?.id) {
        return { success: false, error: 'Unauthorized' };
    }

    try {
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            select: { githubUsername: true }
        });

        if (!user?.githubUsername) {
            return { success: false, error: 'Please link your GitHub account in the dashboard first.' };
        }

        const githubUsername = user.githubUsername;

        // 1. Validate the user has an active, paid subscription.
        // The user must own an organization that has an ACTIVE subscription.
        const organizations = await prisma.organization.findMany({
            where: {
                ownerId: session.user.id,
                subscriptionStatus: SubscriptionStatus.ACTIVE,
            },
        });

        if (organizations.length === 0) {
            return { 
                success: false, 
                error: 'An active subscription is required to access the codebase. Please upgrade your plan.' 
            };
        }

        // 2. Update their invite status to pending
        await prisma.user.update({
            where: { id: session.user.id },
            data: { githubInviteStatus: 'PENDING' },
        });

        // 3. Call inviteUserToRepo to send the invite via Octokit
        const inviteResult = await inviteUserToRepo(githubUsername);

        if (!inviteResult.success) {
            // Update status to FAILED
            await prisma.user.update({
                where: { id: session.user.id },
                data: { githubInviteStatus: 'FAILED' },
            });
            return { success: false, error: inviteResult.error || 'Failed to send GitHub invitation.' };
        }

        // 4. Update status to SENT
        await prisma.user.update({
            where: { id: session.user.id },
            data: { githubInviteStatus: 'SENT' },
        });

        revalidatePath('/', 'layout');
        return { 
            success: true, 
            message: 'Invitation sent! Please check your email or GitHub notifications to accept it.' 
        };

    } catch (error: any) {
        console.error('Error requesting GitHub access:', error);
        return { success: false, error: 'An unexpected error occurred. Please try again.' };
    }
}
