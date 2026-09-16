'use server';

import { auth } from '@/lib/auth';
import { z } from 'zod';

const feedbackSchema = z.object({
  type: z.enum(['BUG', 'FEATURE', 'GENERAL']),
  message: z.string().min(5, 'Message must be at least 5 characters.'),
  email: z.string().email('Invalid email').optional().or(z.literal('')),
});

export async function submitFeedback(formData: FormData) {
  try {
    const rawData = {
      type: formData.get('type') as string,
      message: formData.get('message') as string,
      email: (formData.get('email') as string) || '',
    };

    const validatedData = feedbackSchema.parse(rawData);
    
    // Check if user is logged in
    const session = await auth();
    const userId = session?.user?.id || 'Anonymous';
    const userEmail = session?.user?.email || validatedData.email || 'No email provided';

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.warn('DISCORD_WEBHOOK_URL is not set. Feedback was not sent to Discord.');
      return { success: true }; 
    }

    // Colors: BUG=Red(16711680), FEATURE=Green(5763719), GENERAL=Gray(9807270)
    const color = validatedData.type === 'BUG' ? 16711680 :
                  validatedData.type === 'FEATURE' ? 5763719 : 9807270;

    const embed = {
      title: `New ${validatedData.type} Report`,
      color,
      fields: [
        { name: 'User ID', value: userId, inline: true },
        { name: 'Email', value: userEmail, inline: true },
        { name: 'Message', value: validatedData.message },
      ],
      timestamp: new Date().toISOString(),
    };

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ embeds: [embed] }),
    });

    if (!res.ok) {
      throw new Error(`Discord webhook failed with status ${res.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting feedback:', error);
    if (error instanceof z.ZodError) {
      return { success: false, error: error.issues[0]?.message || 'Invalid input' };
    }
    return { success: false, error: 'Failed to submit feedback. Please try again later.' };
  }
}
