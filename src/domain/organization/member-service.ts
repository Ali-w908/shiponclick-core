import prisma from '@/lib/db';
import { UserRole } from '@prisma/client';

export class MemberService {
    static async removeMember(requesterId: string, orgId: string, targetMemberId: string) {
        const requester = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: requesterId,
                    organizationId: orgId,
                },
            },
        });

        if (!requester || (requester.role !== 'OWNER' && requester.role !== 'ADMIN')) {
            throw new Error('Insufficient permissions');
        }

        const targetMember = await prisma.member.findUnique({
            where: { id: targetMemberId },
        });

        if (!targetMember) throw new Error('Member not found');

        if (targetMember.role === 'OWNER') {
            throw new Error('Cannot remove the organization owner');
        }

        if (requester.role === 'ADMIN' && targetMember.role === 'ADMIN') {
            throw new Error('Admins cannot remove other admins');
        }

        await prisma.member.delete({
            where: { id: targetMemberId },
        });

        return { success: true };
    }

    static async updateMemberRole(requesterId: string, orgId: string, targetMemberId: string, newRole: UserRole) {
        const requester = await prisma.member.findUnique({
            where: {
                userId_organizationId: {
                    userId: requesterId,
                    organizationId: orgId,
                },
            },
        });

        if (!requester || requester.role !== 'OWNER') {
            if (requester?.role !== 'ADMIN') {
                throw new Error('Only Owners can update roles');
            }
        }

        if (requester.role === 'ADMIN') {
            const target = await prisma.member.findUnique({ where: { id: targetMemberId } });
            if (target?.role === 'OWNER' || target?.role === 'ADMIN') {
                throw new Error('Admins cannot modify Owner or other Admins');
            }
            if (newRole === 'OWNER') {
                throw new Error('Admins cannot transfer ownership');
            }
        }

        await prisma.member.update({
            where: { id: targetMemberId },
            data: { role: newRole },
        });

        return { success: true };
    }
}
