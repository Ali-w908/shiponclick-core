'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';

export async function updateUserProfile(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        return { error: 'Unauthorized' };
    }

    const name = formData.get('name') as string;
    // Image handling usually requires upload handling (S3/UploadThing). 
    // For now we might just allow updating name.

    if (!name || name.trim().length < 2) {
        return { error: 'Name must be at least 2 characters' };
    }

    try {
        await prisma.user.update({
            where: { id: session.user.id },
            data: { name },
        });

        revalidatePath('/settings/profile');
        return { success: 'Profile updated' };
    } catch (error) {
        return { error: 'Failed to update profile' };
    }
}
