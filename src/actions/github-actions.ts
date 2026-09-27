'use server';

import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { GithubService } from '@/domain/user/github-service';

export async function updateGithubUsername(username: string) {
    const session = await auth();
    if (!session?.user?.id) {
        return { success: false, error: 'Unauthorized' };
    }

    try {
        await GithubService.updateGithubUsername(session.user.id, username);
        revalidatePath('/', 'layout');
        return { success: true };
    } catch (error: any) {
        console.error('Error updating GitHub username:', error);
        return { success: false, error: error.message || 'Failed to update GitHub username.' };
    }
}

export async function requestGithubAccess() {
    const session = await auth();

    if (!session?.user?.id) {
        return { success: false, error: 'Unauthorized' };
    }

    try {
        const result = await GithubService.requestGithubAccess(session.user.id);
        revalidatePath('/', 'layout');
        return { 
            success: true, 
            message: result.message
        };
    } catch (error: any) {
        console.error('Error requesting GitHub access:', error);
        return { success: false, error: error.message || 'An unexpected error occurred. Please try again.' };
    }
}
