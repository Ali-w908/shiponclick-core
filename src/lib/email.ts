import { Resend } from 'resend';

// Helper to prevent initializing Resend in build environment or if key is missing
const getResend = () => {
    if (!process.env.RESEND_API_KEY) {
        console.warn('RESEND_API_KEY is missing. Email sending will be mocked.');
        return null;
    }
    return new Resend(process.env.RESEND_API_KEY);
};

interface SendInviteParams {
    to: string;
    inviteUrl: string;
    orgName: string;
    inviterName?: string;
}

export async function sendInviteEmail({
    to,
    inviteUrl,
    orgName,
    inviterName,
}: SendInviteParams) {
    const resend = getResend();
    const from = process.env.EMAIL_FROM || 'onboarding@resend.dev';

    if (!resend) {
        console.log('--- MOCK EMAIL SEND ---');
        console.log(`To: ${to}`);
        console.log(`Subject: Invite to join ${orgName}`);
        console.log(`Link: ${inviteUrl}`);
        console.log('-----------------------');
        return { success: true, id: 'mock-id' };
    }

    try {
        const { data, error } = await resend.emails.send({
            from,
            to,
            subject: `Join ${orgName} on Next.js SaaS Starter`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>You've been invited!</h2>
          <p>Hello,</p>
          <p><strong>${inviterName || 'Someone'}</strong> has invited you to join the organization <strong>${orgName}</strong> on the Next.js SaaS Starter platform.</p>
          <p>Click the button below to accept your invitation:</p>
          <a href="${inviteUrl}" style="display: inline-block; background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Accept Invitation
          </a>
          <p style="margin-top: 24px; font-size: 14px; color: #666;">
            Or copy and paste this link into your browser:<br>
            <a href="${inviteUrl}">${inviteUrl}</a>
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            throw new Error(error.message);
        }

        return { success: true, id: data?.id };
    } catch (error) {
        console.error('Failed to send invite email:', error);
        // Don't crash the app, just return failure
        return { success: false, error };
    }
}
