
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
    console.log('Testing User Creation...');
    const email = `test-debug-${Date.now()}@example.com`;
    const password = 'password12345678';
    const name = 'Debug User';

    try {
        console.log(`Attempting to create user with email: ${email}`);
        const hashedPassword = await bcrypt.hash(password, 12);
        console.log('Password hashed successfully.');

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            }
        });
        console.log('✅ User created successfully:', user.id);
    } catch (e) {
        console.error('❌ Error creating user:', e);
    } finally {
        await prisma.$disconnect();
    }
}

main();
