import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import crypto from 'crypto';

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = req.headers.get('x-hub-signature-256');
        
        const secret = process.env.GITHUB_WEBHOOK_SECRET;
        if (secret && signature) {
            const hmac = crypto.createHmac('sha256', secret);
            const digest = 'sha256=' + hmac.update(body).digest('hex');
            if (signature !== digest) {
                return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
            }
        }

        const event = req.headers.get('x-github-event');
        const payload = JSON.parse(body);

        // When a user accepts a repository invite, GitHub sends a 'member' event with action 'added'
        // If it's an organization invite, it might send 'organization' with action 'member_added'
        
        let username = null;

        if (event === 'member' && payload.action === 'added') {
            username = payload.member?.login;
        } else if (event === 'organization' && payload.action === 'member_added') {
            username = payload.membership?.user?.login;
        } else if (event === 'repository_vulnerability_alert') {
            // ignore
        } else {
            // Log other events if needed for debugging
            // console.log(`Unhandled GitHub event: ${event}`, payload.action);
        }

        if (username) {
            // Mark the invite as accepted for any user with this github username
            await prisma.user.updateMany({
                where: { 
                    githubUsername: username,
                    // Only update if they currently have an invite pending or sent
                    githubInviteStatus: { in: ['PENDING', 'SENT'] }
                },
                data: { githubInviteStatus: 'ACCEPTED' }
            });
            console.log(`[GitHub Webhook] Marked invite as ACCEPTED for user: ${username}`);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('[GitHub Webhook] Error processing request:', error);
        return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
    }
}
