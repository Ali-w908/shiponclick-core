'use client';

import { useState } from 'react';
import { updateGithubUsername } from '@/actions/github-actions';

function GithubIcon({ className }: { className?: string }) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    );
}

interface GithubConnectionCardProps {
    initialUsername: string | null;
    inviteStatus: string | null;
}

export function GithubConnectionCard({ initialUsername, inviteStatus }: GithubConnectionCardProps) {
    const [isEditing, setIsEditing] = useState(!initialUsername);
    const [username, setUsername] = useState(initialUsername || '');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSave = async () => {
        if (!username.trim()) {
            setError('Please enter a GitHub username.');
            return;
        }

        setIsLoading(true);
        setError('');
        setSuccess('');

        const result = await updateGithubUsername(username.trim());
        
        setIsLoading(false);

        if (result.success) {
            setSuccess('GitHub account linked successfully!');
            setIsEditing(false);
            // Hide success message after 3 seconds
            setTimeout(() => setSuccess(''), 3000);
        } else {
            setError(result.error || 'Failed to update username.');
        }
    };

    return (
        <div className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border border-zinc-800/50 bg-zinc-900/40 rounded-2xl relative overflow-hidden mb-8">
            {/* Background Glow */}
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-zinc-700/20 blur-[50px] rounded-full pointer-events-none" />

            <div className="flex items-start md:items-center gap-4 z-10">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 shadow-inner">
                    <GithubIcon className="w-6 h-6 text-zinc-100" />
                </div>
                
                <div>
                    <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                        GitHub Connection
                        {initialUsername && !isEditing && (
                            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400 border border-emerald-500/20">
                                Connected
                            </span>
                        )}
                        {!initialUsername && (
                            <span className="inline-flex items-center rounded-full bg-amber-500/10 px-2 py-0.5 text-xs font-medium text-amber-400 border border-amber-500/20">
                                Not Connected
                            </span>
                        )}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-1">
                        Link your GitHub account to access the private codebase.
                    </p>
                </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto z-10">
                {isEditing ? (
                    <div className="flex items-center gap-2 w-full md:w-auto">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="torvalds"
                            className="w-full md:w-48 rounded-lg border border-zinc-700 bg-zinc-800/50 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                        <button
                            onClick={handleSave}
                            disabled={isLoading}
                            className="btn-glow text-sm px-4 py-2 whitespace-nowrap disabled:opacity-50"
                        >
                            {isLoading ? 'Saving...' : 'Save'}
                        </button>
                        {initialUsername && (
                            <button
                                onClick={() => {
                                    setUsername(initialUsername);
                                    setIsEditing(false);
                                    setError('');
                                }}
                                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
                            >
                                Cancel
                            </button>
                        )}
                    </div>
                ) : (
                    <div className="flex items-center gap-4">
                        <div className="text-sm text-zinc-300 font-mono bg-zinc-800/50 px-3 py-1.5 rounded-lg border border-zinc-700/50">
                            @{initialUsername}
                        </div>
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                        >
                            Change
                        </button>
                    </div>
                )}
            </div>

            {/* Error / Success Toast Messages */}
            {(error || success) && (
                <div className={`absolute bottom-0 left-0 right-0 py-2 px-6 text-xs font-medium text-center border-t ${
                    error ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                }`}>
                    {error || success}
                </div>
            )}
        </div>
    );
}
