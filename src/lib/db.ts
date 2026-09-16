import { PrismaClient } from '@prisma/client';

/**
 * Global Prisma client instance.
 * In development, we store the client on the global object to prevent
 * creating multiple instances during hot reloading.
 */

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

/**
 * Prisma client singleton.
 * Uses a global variable in development to survive hot reloads.
 */
export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({
        log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    });

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma;
}

export default prisma;
