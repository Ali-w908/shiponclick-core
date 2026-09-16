import { Octokit } from '@octokit/rest';

const getOctokit = () => {
    if (!process.env.GITHUB_PAT) {
        console.warn('GITHUB_PAT is missing. GitHub API calls will fail or be mocked.');
    }
    return new Octokit({ auth: process.env.GITHUB_PAT });
};

/**
 * Invites a user to a GitHub repository with "read" (pull) access.
 * This allows them to clone the repository but not push changes to it.
 */
export async function inviteUserToRepo(username: string) {
    if (!process.env.GITHUB_PAT || !process.env.GITHUB_REPO_NAME) {
        console.log(`--- MOCK GITHUB INVITE ---`);
        console.log(`User: ${username}`);
        console.log(`Repo: ${process.env.GITHUB_REPO_NAME}`);
        console.log(`--------------------------`);
        return { success: true, message: 'Mock invitation sent' };
    }

    try {
        const octokit = getOctokit();
        const [owner, repo] = process.env.GITHUB_REPO_NAME.split('/');

        if (!owner || !repo) {
            throw new Error('GITHUB_REPO_NAME must be in the format "owner/repo"');
        }

        // Send repository invitation
        await octokit.rest.repos.addCollaborator({
            owner,
            repo,
            username,
            permission: 'pull', // 'pull' grants read-only access (clone/pull)
        });

        return { success: true };
    } catch (error: any) {
        console.error('Failed to invite user to GitHub repo:', error);
        
        // Handle specific Octokit errors if needed
        if (error.status === 404) {
            return { success: false, error: 'GitHub user not found or repository not accessible' };
        }
        
        return { success: false, error: error.message || 'Failed to send GitHub invitation' };
    }
}
