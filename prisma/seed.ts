import { PrismaClient, UserRole, SubscriptionStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

/**
 * Database seed script.
 * Creates sample users, organizations, and memberships for development.
 */
async function main() {
    console.log('🌱 Starting database seed...');

    // Clean existing data (in reverse order of dependencies)
    await prisma.auditLog.deleteMany();
    await prisma.invite.deleteMany();
    await prisma.member.deleteMany();
    await prisma.organization.deleteMany();
    await prisma.session.deleteMany();
    await prisma.account.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.passwordResetToken.deleteMany();
    await prisma.user.deleteMany();

    console.log('🧹 Cleaned existing data');

    // Create demo users
    const hashedPassword = await bcrypt.hash('password123', 12);

    const adminUser = await prisma.user.create({
        data: {
            name: 'Admin User',
            email: 'admin@example.com',
            password: hashedPassword,
            emailVerified: new Date(),
        },
    });

    const ownerUser = await prisma.user.create({
        data: {
            name: 'John Owner',
            email: 'owner@example.com',
            password: hashedPassword,
            emailVerified: new Date(),
        },
    });

    const memberUser = await prisma.user.create({
        data: {
            name: 'Jane Member',
            email: 'member@example.com',
            password: hashedPassword,
            emailVerified: new Date(),
        },
    });

    console.log('👥 Created demo users');

    // Create demo organization
    const acmeOrg = await prisma.organization.create({
        data: {
            name: 'Acme Inc',
            slug: 'acme',
            ownerId: ownerUser.id,
            subscriptionStatus: SubscriptionStatus.ACTIVE,
        },
    });

    const startupOrg = await prisma.organization.create({
        data: {
            name: 'Startup Labs',
            slug: 'startup-labs',
            ownerId: ownerUser.id,
            subscriptionStatus: SubscriptionStatus.TRIALING,
        },
    });

    console.log('🏢 Created demo organizations');

    // Create memberships
    await prisma.member.createMany({
        data: [
            {
                userId: ownerUser.id,
                organizationId: acmeOrg.id,
                role: UserRole.OWNER,
            },
            {
                userId: memberUser.id,
                organizationId: acmeOrg.id,
                role: UserRole.MEMBER,
            },
            {
                userId: adminUser.id,
                organizationId: acmeOrg.id,
                role: UserRole.ADMIN,
            },
            {
                userId: ownerUser.id,
                organizationId: startupOrg.id,
                role: UserRole.OWNER,
            },
        ],
    });

    console.log('🔗 Created memberships');

    // Create sample audit logs
    await prisma.auditLog.createMany({
        data: [
            {
                action: 'organization.created',
                entityId: acmeOrg.id,
                entityType: 'organization',
                userId: ownerUser.id,
                orgId: acmeOrg.id,
                metadata: { name: 'Acme Inc' },
            },
            {
                action: 'member.invited',
                entityId: memberUser.id,
                entityType: 'user',
                userId: ownerUser.id,
                orgId: acmeOrg.id,
                metadata: { email: 'member@example.com', role: 'MEMBER' },
            },
        ],
    });

    console.log('📝 Created sample audit logs');

    console.log('✅ Seed completed successfully!');
    console.warn('⚠️  WARNING: Default password "password123" is hardcoded in seed.ts. Do NOT use in production!');
    console.log('');
    console.log('Demo accounts:');
    console.log('  - admin@example.com / password123');
    console.log('  - owner@example.com / password123');
    console.log('  - member@example.com / password123');
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error('❌ Seed failed:', e);
        await prisma.$disconnect();
        process.exit(1);
    });
