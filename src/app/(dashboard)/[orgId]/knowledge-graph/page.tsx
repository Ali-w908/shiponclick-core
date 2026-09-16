import { auth } from '@/lib/auth';
import prisma from '@/lib/db';
import { redirect } from 'next/navigation';
import { KnowledgeGraphViewer } from '@/components/dashboard/knowledge-graph-viewer';

export default async function KnowledgeGraphPage({
    params,
}: {
    params: Promise<{ orgId: string }>;
}) {
    const session = await auth();
    const { orgId } = await params;

    if (!session?.user?.id) {
        redirect('/login');
    }

    const org = await prisma.organization.findUnique({
        where: { slug: orgId },
    });

    if (!org) {
        redirect('/');
    }

    // Verify membership
    const membership = await prisma.member.findUnique({
        where: {
            userId_organizationId: {
                userId: session.user.id,
                organizationId: org.id,
            },
        },
    });

    if (!membership) {
        redirect('/');
    }

    return (
        <div className="flex-1 space-y-6 pt-2">
            <KnowledgeGraphViewer />
        </div>
    );
}
