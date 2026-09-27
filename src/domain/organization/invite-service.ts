import prisma from '@/lib/db';
import { UserRole } from '@prisma/client';
import { sendInviteEmail } from '@/lib/email';
import crypto from 'crypto';

export class InviteService {
    static async inviteUser(
        inviterId: string,
        orgId: string,
        email: string,
        role: UserRole,
        appUrl: string,
        inviterName: string
    ) {
        // Verify permission (Owner or Admin)
        const membership = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: inviterId,
                    organizationId: orgId,
                },
            },
        });

        if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
            throw new Error('Insufficient permissions');
        }

        const org = await prisma.organization.findUnique({
            where: { id: orgId },
            select: { name: true, slug: true },
        });

        if (!org) throw new Error('Organization not found');

        // Enforce 5-member limit
        const memberCount = await prisma.member.count({
            where: { organizationId: orgId }
        });
        const inviteCount = await prisma.invite.count({
            where: { organizationId: orgId }
        });

        if (memberCount + inviteCount >= 2) {
            throw new Error('Team limit reached. The Builder plan supports up to 2 team members.');
        }

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
            throw new Error('User is already a member of this organization');
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
            throw new Error('An invitation is already pending for this email');
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
        const inviteUrl = `${appUrl}/invite/${token}`;
        await sendInviteEmail({
            to: email,
            inviteUrl,
            orgName: org.name,
            inviterName,
        });

        return { success: true, orgSlug: org.slug };
    }

    static async revokeInvite(inviterId: string, orgId: string, inviteId: string) {
        // Verify permission
        const membership = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: inviterId,
                    organizationId: orgId,
                },
            },
        });

        if (!membership || (membership.role !== 'OWNER' && membership.role !== 'ADMIN')) {
            throw new Error('Insufficient permissions');
        }

        await prisma.invite.delete({
            where: { id: inviteId },
        });

        return { success: true };
    }

    static async acceptInvite(userId: string, token: string) {
        const invite = await prisma.invite.findUnique({
            where: { token },
            include: { organization: true },
        });

        if (!invite) {
            throw new Error('Invalid invitation');
        }

        if (invite.expires < new Date()) {
            throw new Error('Invitation expired');
        }

        // Verify if user is already a member
        const existingMember = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId,
                    organizationId: invite.organizationId,
                },
            },
        });

        if (existingMember) {
            // Already a member, just delete invite and return success
            await prisma.invite.delete({ where: { id: invite.id } });
            return { success: true, orgSlug: invite.organization.slug };
        }

        // Add Member
        await prisma.member.create({
            data: {
                userId,
                organizationId: invite.organizationId,
                role: invite.role,
            },
        });

        // Delete Invite
        await prisma.invite.delete({
            where: { id: invite.id },
        });

        return { success: true, orgSlug: invite.organization.slug };
    }
}
