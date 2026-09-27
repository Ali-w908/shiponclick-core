import { NextResponse } from 'next/server';
import { verifyGithubSignature } from '@/lib/github';
import { GithubService } from '@/domain/user/github-service';

export async function POST(req: Request) {
    try {
        const body = await req.text();
        const signature = req.headers.get('x-hub-signature-256');
        
        if (!verifyGithubSignature(body, signature)) {
            return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
        }

        const event = req.headers.get('x-github-event');
        const payload = JSON.parse(body);

        let username = null;
        if (event === 'member' && payload.action === 'added') {
            username = payload.member?.login;
        } else if (event === 'organization' && payload.action === 'member_added') {
            username = payload.membership?.user?.login;
        }

        if (username) {
            await GithubService.handleGithubMemberAdded(username);
        }

        return NextResponse.json({ received: true });
    } catch (error) {
        console.error('[GitHub Webhook] Error processing request:', error);
        return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
    }
}
