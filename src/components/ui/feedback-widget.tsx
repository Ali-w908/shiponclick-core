'use client';

import { useState } from 'react';
import { submitFeedback } from '@/actions/feedback-actions';

export function FeedbackWidget({ userEmail }: { userEmail?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        const formData = new FormData(e.currentTarget);
        
        const res = await submitFeedback(formData);
        
        if (res.success) {
            setStatus('success');
            setTimeout(() => {
                setIsOpen(false);
                setStatus('idle');
            }, 2000);
        } else {
            setStatus('error');
            setErrorMsg(res.error || 'Something went wrong');
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-80 bg-surface border border-border-muted rounded-xl shadow-2xl p-5 mb-2 animate-in fade-in slide-in-from-bottom-4">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-foreground">Send Feedback</h3>
                        <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-foreground">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>

                    {status === 'success' ? (
                        <div className="text-center py-6 text-primary">
                            <svg className="w-12 h-12 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <p className="font-medium">Thanks for your feedback!</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {!userEmail && (
                                <div>
                                    <label className="block text-xs font-medium text-text-muted mb-1">Email (optional)</label>
                                    <input type="email" name="email" className="w-full bg-background border border-border-muted rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="your@email.com" />
                                </div>
                            )}
                            
                            <div>
                                <label className="block text-xs font-medium text-text-muted mb-1">Type</label>
                                <select name="type" className="w-full bg-background border border-border-muted rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary" required>
                                    <option value="GENERAL">General Feedback</option>
                                    <option value="BUG">Bug Report</option>
                                    <option value="FEATURE">Feature Request</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-medium text-text-muted mb-1">Message</label>
                                <textarea name="message" required minLength={5} rows={3} className="w-full bg-background border border-border-muted rounded-md px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none" placeholder="What's on your mind?"></textarea>
                            </div>

                            {status === 'error' && <p className="text-xs text-warning">{errorMsg}</p>}

                            <button type="submit" disabled={status === 'loading'} className="w-full btn-primary py-2 text-sm">
                                {status === 'loading' ? 'Sending...' : 'Send Feedback'}
                            </button>
                        </form>
                    )}
                </div>
            )}

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-primary/25 transition-all hover:scale-105"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
                )}
            </button>
        </div>
    );
}
