import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Migrating Test Mode Variant IDs to Live Mode Variant IDs...');
    const testVariantId = '1375376'; // The bad ID we accidentally migrated to earlier
    const liveVariantId = '2148782'; // The actual correct live ID

    const result = await prisma.organization.updateMany({
        where: {
            lsVariantId: testVariantId,
        },
        data: {
            lsVariantId: liveVariantId,
        },
    });

    console.log(`Updated ${result.count} organizations from test variant to live variant.`);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
