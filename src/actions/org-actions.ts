'use server';

import { auth } from '@/lib/auth';
import { revalidatePath } from 'next/cache';
import { UserRole } from '@prisma/client';
import { InviteService } from '@/domain/organization/invite-service';
import { MemberService } from '@/domain/organization/member-service';

/**
 * Invites a user to an organization.
 */
export async function inviteUser(prevState: any, formData: FormData) {
    const session = await auth();
    if (!session?.user?.id) {
        return { error: 'Unauthorized' };
    }

    const email = formData.get('email') as string;
    const role = formData.get('role') as UserRole;
    const orgId = formData.get('orgId') as string;

    if (!email || !orgId) {
        return { error: 'Missing required fields' };
    }

    try {
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || '';
        const inviterName = session.user.name || session.user.email || 'A team member';
        
        const result = await InviteService.inviteUser(
            session.user.id,
            orgId,
            email,
            role,
            appUrl,
            inviterName
        );

        if (result.success && result.orgSlug) {
            revalidatePath(`/${result.orgSlug}/settings`);
        }
        return { success: 'Invitation sent successfully' };
    } catch (error: any) {
        console.error('Invite error:', error);
        return { error: error.message || 'Failed to send invitation' };
    }
}

/**
 * Revokes an invitation.
 */
export async function revokeInvite(inviteId: string, orgId: string) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Unauthorized' };

    try {
        await InviteService.revokeInvite(session.user.id, orgId, inviteId);
        revalidatePath(`/${orgId}/settings`);
        return { success: 'Invitation revoked' };
    } catch (error: any) {
        return { error: error.message || 'Failed to revoke invitation' };
    }
}

/**
 * Accepts an invitation.
 */
export async function acceptInvite(token: string) {
    const session = await auth();
    if (!session?.user?.id) {
        return { error: 'Unauthorized' };
    }

    try {
        const result = await InviteService.acceptInvite(session.user.id, token);
        return { success: true, orgSlug: result.orgSlug };
    } catch (error: any) {
        console.error('Accept invite error:', error);
        return { error: error.message || 'Failed to accept invitation' };
    }
}

/**
 * Removes a member from the organization.
 */
export async function removeMember(memberId: string, orgId: string) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Unauthorized' };

    try {
        await MemberService.removeMember(session.user.id, orgId, memberId);
        revalidatePath('layout');
        return { success: 'Member removed' };
    } catch (error: any) {
        console.error('Remove member error:', error);
        return { error: error.message || 'Failed to remove member' };
    }
}

/**
 * Updates a member's role.
 */
export async function updateMemberRole(memberId: string, orgId: string, newRole: UserRole) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Unauthorized' };

    try {
        await MemberService.updateMemberRole(session.user.id, orgId, memberId, newRole);
        revalidatePath('layout');
        return { success: 'Role updated' };
    } catch (error: any) {
        return { error: error.message || 'Failed to update role' };
    }
}
