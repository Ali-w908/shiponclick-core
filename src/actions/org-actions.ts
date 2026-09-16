'use server';

import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { UserRole } from '@prisma/client';
import { sendInviteEmail } from '@/lib/email';
import crypto from 'crypto';

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
        // Verify permission (Owner or Admin)
        const membership = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: session.user.id,
                    organizationId: orgId,
                },
            },
        });

        if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
            return { error: 'Insufficient permissions' };
        }

        const org = await prisma.organization.findUnique({
            where: { id: orgId },
            select: { name: true, slug: true },
        });

        if (!org) return { error: 'Organization not found' };

        // Check if user is already a member
        const existingUser = await prisma.user.findUnique({
            where: { email },
            include: {
                memberships: {
                    where: { organizationId: orgId },
                },
            },
        });

        if (existingUser && existingUser.memberships.length > 0) {
            return { error: 'User is already a member of this organization' };
        }

        // Check for existing pending invite
        const existingInvite = await prisma.invite.findUnique({
            where: {
                email_organizationId: {
                    email,
                    organizationId: orgId,
                },
            },
        });

        if (existingInvite) {
            return { error: 'An invitation is already pending for this email' };
        }

        // Create Invite
        const token = crypto.randomBytes(32).toString('hex');
        const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

        await prisma.invite.create({
            data: {
                email,
                role: role || 'MEMBER',
                token,
                expires,
                organizationId: orgId,
            },
        });

        // Send Email
        const inviteUrl = `${process.env.NEXT_PUBLIC_APP_URL}/invite/${token}`;
        await sendInviteEmail({
            to: email,
            inviteUrl,
            orgName: org.name,
            inviterName: session.user.name || session.user.email || 'A team member',
        });

        revalidatePath(`/${org.slug}/settings`);
        return { success: 'Invitation sent successfully' };
    } catch (error) {
        console.error('Invite error:', error);
        return { error: 'Failed to send invitation' };
    }
}

/**
 * Revokes an invitation.
 */
export async function revokeInvite(inviteId: string, orgId: string) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Unauthorized' };

    // Verify permission
    const membership = await prisma.member.findUnique({
        where: {
            userId_organizationId: {
                userId: session.user.id,
                organizationId: orgId,
            },
        },
    });

    if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
        return { error: 'Insufficient permissions' };
    }

    try {
        await prisma.invite.delete({
            where: { id: inviteId },
        });

        revalidatePath(`/${orgId}/settings`);
        return { success: 'Invitation revoked' };
    } catch (error) {
        return { error: 'Failed to revoke invitation' };
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
        const invite = await prisma.invite.findUnique({
            where: { token },
            include: { organization: true },
        });

        if (!invite) {
            return { error: 'Invalid invitation' };
        }

        if (invite.expires < new Date()) {
            return { error: 'Invitation expired' };
        }

        // Verify if user is already a member
        const existingMember = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: session.user.id,
                    organizationId: invite.organizationId,
                },
            },
        });

        if (existingMember) {
            // Already a member, just delete invite and redirect
            await prisma.invite.delete({ where: { id: invite.id } });
            return { success: true, orgSlug: invite.organization.slug };
        }

        // Add Member
        await prisma.member.create({
            data: {
                userId: session.user.id,
                organizationId: invite.organizationId,
                role: invite.role,
            },
        });

        // Delete Invite
        await prisma.invite.delete({
            where: { id: invite.id },
        });

        return { success: true, orgSlug: invite.organization.slug };
    } catch (error) {
        console.error('Accept invite error:', error);
        return { error: 'Failed to accept invitation' };
    }
}

/**
 * Removes a member from the organization.
 */
export async function removeMember(memberId: string, orgId: string) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Unauthorized' };

    try {
        const requester = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: session.user.id,
                    organizationId: orgId,
                },
            },
        });

        if (!requester || (requester.role !== 'OWNER' && requester.role !== 'ADMIN')) {
            return { error: 'Insufficient permissions' };
        }

        const targetMember = await prisma.member.findUnique({
            where: { id: memberId },
        });

        if (!targetMember) return { error: 'Member not found' };

        if (targetMember.role === 'OWNER') {
            return { error: 'Cannot remove the organization owner' };
        }

        if (requester.role === 'ADMIN' && targetMember.role === 'ADMIN') {
            return { error: 'Admins cannot remove other admins' };
        }

        await prisma.member.delete({
            where: { id: memberId },
        });

        revalidatePath('layout');
        return { success: 'Member removed' };
    } catch (error) {
        console.error('Remove member error:', error);
        return { error: 'Failed to remove member' };
    }
}

/**
 * Updates a member's role.
 */
export async function updateMemberRole(memberId: string, orgId: string, newRole: UserRole) {
    const session = await auth();
    if (!session?.user?.id) return { error: 'Unauthorized' };

    try {
        const requester = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: session.user.id,
                    organizationId: orgId,
                },
            },
        });

        if (!requester || requester.role !== 'OWNER') {
            if (requester?.role !== 'ADMIN') {
                return { error: 'Only Owners can update roles' };
            }
        }

        if (requester.role === 'ADMIN') {
            const target = await prisma.member.findUnique({ where: { id: memberId } });
            if (target?.role === 'OWNER' || target?.role === 'ADMIN') {
                return { error: 'Admins cannot modify Owner or other Admins' };
            }
            if (newRole === 'OWNER') return { error: 'Admins cannot transfer ownership' };
        }

        await prisma.member.update({
            where: { id: memberId },
            data: { role: newRole },
        });

        revalidatePath('layout');
        return { success: 'Role updated' };
    } catch (error) {
        return { error: 'Failed to update role' };
    }
}
