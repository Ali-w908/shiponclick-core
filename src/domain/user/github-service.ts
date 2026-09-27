import prisma from '@/lib/db';
import { inviteUserToRepo } from '@/lib/github';
import { SubscriptionStatus } from '@prisma/client';

export class GithubService {
    static async updateGithubUsername(userId: string, username: string) {
        if (!username || username.trim() === '') {
            throw new Error('GitHub username is required.');
        }

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { githubInviteStatus: true }
        });

        if (user?.githubInviteStatus === 'ACCEPTED') {
            throw new Error('Your GitHub invite has already been accepted. You cannot change your username. Contact support if you need assistance.');
        }

        await prisma.user.update({
            where: { id: userId },
            data: { githubUsername: username.trim() },
        });
    }

    static async requestGithubAccess(userId: string) {
        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { githubUsername: true }
        });

        if (!user?.githubUsername) {
            throw new Error('Please link your GitHub account in the dashboard first.');
        }

        const githubUsername = user.githubUsername;

        // 1. Validate the user has an active, paid subscription.
        const organizations = await prisma.organization.findMany({
            where: {
                ownerId: userId,
                subscriptionStatus: SubscriptionStatus.ACTIVE,
            },
        });

        if (organizations.length === 0) {
            throw new Error('An active subscription is required to access the codebase. Please upgrade your plan.');
        }

        // 2. Update their invite status to pending
        await prisma.user.update({
            where: { id: userId },
            data: { githubInviteStatus: 'PENDING' },
        });

        // 3. Call inviteUserToRepo to send the invite via Octokit
        const inviteResult = await inviteUserToRepo(githubUsername);

        if (!inviteResult.success) {
            // Update status to FAILED
            await prisma.user.update({
                where: { id: userId },
                data: { githubInviteStatus: 'FAILED' },
            });
            throw new Error(inviteResult.error || 'Failed to send GitHub invitation.');
        }

        // 4. Update status to SENT
        await prisma.user.update({
            where: { id: userId },
            data: { githubInviteStatus: 'SENT' },
        });

        return { message: 'Invitation sent! Please check your email or GitHub notifications to accept it.' };
    }
}
