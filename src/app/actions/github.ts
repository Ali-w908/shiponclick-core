'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { requireActiveSubscription } from '@/lib/subscription';
import { Octokit } from '@octokit/rest';

export async function claimGithubRepository(orgId: string) {
    const session = await auth();
    if (!session?.user?.id) {
        throw new Error('Unauthorized');
    }

    // 1. Verify organization and membership
    const org = await prisma.organization.findUnique({
        where: { id: orgId },
        include: {
            members: {
                where: { userId: session.user.id }
            }
        }
    });

    if (!org) throw new Error('Organization not found');
    if (org.members.length === 0) throw new Error('You are not a member of this organization');
    if (org.githubInviteClaimed) throw new Error('Repository access has already been claimed for this purchase');

    // 2. Verify active PRO subscription
    const hasAccess = await requireActiveSubscription(orgId);
    if (!hasAccess) {
        throw new Error('An active Builder subscription is required');
    }

    // 3. Find the user's connected GitHub account
    const githubAccount = await prisma.account.findFirst({
        where: {
            userId: session.user.id,
            provider: 'github'
        }
    });

    if (!githubAccount || !githubAccount.providerAccountId) {
        throw new Error('Please connect your GitHub account first');
    }

    const githubId = githubAccount.providerAccountId;
    // We need the GitHub username, not just the ID. 
    // We can fetch the username using the Octokit client and the user's ID.
    const octokit = new Octokit({
        auth: process.env.GITHUB_PAT
    });

    try {
        // Get user details by ID
        const { data: user } = await octokit.rest.users.getByUsername({
            // The API requires username, but if we only have providerAccountId (which is a number), 
            // we can look up the user by calling the generic API.
            username: await getUsernameById(octokit, githubId)
        });

        const repoString = process.env.GITHUB_REPO_NAME;
        if (!repoString) throw new Error('GITHUB_REPO_NAME is not configured');
        
        const [owner, repo] = repoString.split('/');

        // Add collaborator
        await octokit.rest.repos.addCollaborator({
            owner,
            repo,
            username: user.login,
            permission: 'read'
        });

        // Mark as claimed
        await prisma.organization.update({
            where: { id: orgId },
            data: { githubInviteClaimed: true }
        });

        // Log audit
        await prisma.auditLog.create({
            data: {
                action: 'github.repo_claimed',
                orgId,
                userId: session.user.id,
                metadata: { githubUsername: user.login }
            }
        });

        return { success: true };
    } catch (error: any) {
        console.error('GitHub API Error:', error);
        throw new Error('Failed to send GitHub invite. Please contact support.');
    }
}

// Helper to get username by GitHub numeric ID
async function getUsernameById(octokit: Octokit, id: string): Promise<string> {
    try {
        const response = await octokit.request(`GET /user/${id}`);
        return response.data.login;
    } catch (e) {
        throw new Error('Failed to resolve GitHub username');
    }
}
