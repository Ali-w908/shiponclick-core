'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { requestGithubAccess } from '@/actions/github-actions';

function XIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
}

function CopyIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
            <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
    );
}

function CheckIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
    );
}

function LockIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
    );
}

interface Project {
    id: string;
    name: string;
    path: string;
    description?: string;
    targetAudience?: string;
    keyFeatures?: string;
    createdAt: string;
}

interface NewProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onProjectCreated: (project: Project) => void;
    canUseCliCommand: boolean;
    orgSlug: string;
    initialGithubUsername?: string | null;
    githubInviteStatus?: string | null;
    initialProject?: Project | null;
}

export function NewProjectModal({ isOpen, onClose, onProjectCreated, canUseCliCommand, orgSlug, initialGithubUsername, githubInviteStatus, initialProject }: NewProjectModalProps) {
    const [step, setStep] = useState<'form' | 'command'>('form');
    const [name, setName] = useState(initialProject?.name || '');
    const [description, setDescription] = useState(initialProject?.description || '');
    const [targetAudience, setTargetAudience] = useState(initialProject?.targetAudience || '');
    const [keyFeatures, setKeyFeatures] = useState(initialProject?.keyFeatures || '');
    const [isInviting, setIsInviting] = useState(false);
    const [inviteError, setInviteError] = useState('');
    const [copied, setCopied] = useState(false);
    
    // Default to Mac/Linux/CMD since it supports &&. PowerShell needs ; 
    const [terminal, setTerminal] = useState<'unix' | 'powershell'>('unix');

    // Sync when modal opens with initialProject
    useEffect(() => {
        if (isOpen) {
            if (initialProject) {
                setStep('form');
                setName(initialProject.name);
                setDescription(initialProject.description || '');
                setTargetAudience(initialProject.targetAudience || '');
                setKeyFeatures(initialProject.keyFeatures || '');
            } else {
                setStep('form');
                setName('');
                setDescription('');
                setTargetAudience('');
                setKeyFeatures('');
            }
        }
    }, [isOpen, initialProject]);

    if (!isOpen) return null;

    const projectSlug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

    // Formatted as a sleek one-liner so it pastes seamlessly.
    const joiner = terminal === 'powershell' ? ' ; ' : ' && ';
    const setupCommand = canUseCliCommand
        ? `git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git ${projectSlug}${joiner}cd ${projectSlug}${joiner}npm install${joiner}node scripts/setup.js "${name.trim()}"${description ? ` --description "${description}"` : ''}`
        : '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return;

        if (canUseCliCommand && githubInviteStatus !== 'SENT') {
            setIsInviting(true);
            setInviteError('');
            
            const result = await requestGithubAccess();
            
            setIsInviting(false);
            
            if (!result.success) {
                setInviteError(result.error || 'Failed to request access.');
                return;
            }
        }

        const project: Project = {
            id: initialProject ? initialProject.id : crypto.randomUUID(),
            name: name.trim(),
            path: initialProject ? initialProject.path : projectSlug,
            description: description.trim() || undefined,
            targetAudience: targetAudience.trim() || undefined,
            keyFeatures: keyFeatures.trim() || undefined,
            createdAt: initialProject ? initialProject.createdAt : new Date().toISOString(),
        };

        onProjectCreated(project);
        setStep('command');
    };

    const handleCopy = async () => {
        await navigator.clipboard.writeText(setupCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleClose = () => {
        setInviteError('');
        setCopied(false);
        setTerminal('unix');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

            <div className="relative w-full max-w-lg mx-4 glass-card p-0 overflow-hidden animate-fade-in-up" style={{ animationDuration: '0.3s' }}>
                <div className="flex items-center justify-between p-6 border-b border-zinc-800/50">
                    <h2 className="text-lg font-semibold text-zinc-100">
                        {step === 'form' ? 'New Project' : 'Setup Command'}
                    </h2>
                    <button onClick={handleClose} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                        <XIcon className="h-5 w-5" />
                    </button>
                </div>

                {step === 'form' ? (
                    <form onSubmit={handleSubmit} className="p-6 space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-zinc-300 mb-1.5">
                                Project Name <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="my-saas-app"
                                className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                required
                            />
                            {name && (
                                <p className="mt-1 text-xs text-zinc-600">
                                    Folder Name: <span className="text-zinc-500 font-mono">{projectSlug}</span>
                                </p>
                            )}
                        </div>

                        <details className="group">
                            <summary className="flex items-center gap-2 cursor-pointer text-sm font-medium text-zinc-400 hover:text-zinc-300 transition-colors select-none list-none outline-none">
                                <span className="text-zinc-600 group-open:rotate-90 transition-transform">
                                    ▶
                                </span>
                                Advanced Metadata (Optional AI Context)
                            </summary>
                            
                            <div className="pt-4 space-y-4 animate-fade-in pl-5 border-l border-zinc-800/50 mt-2 ml-1">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                                        Project Description
                                    </label>
                                    <textarea
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        placeholder="An AI-powered project management tool for remote teams..."
                                        rows={2}
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30 resize-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                                        Target Audience
                                    </label>
                                    <input
                                        type="text"
                                        value={targetAudience}
                                        onChange={(e) => setTargetAudience(e.target.value)}
                                        placeholder="Small dev teams, freelancers..."
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-400 mb-1.5">
                                        Key Features
                                    </label>
                                    <input
                                        type="text"
                                        value={keyFeatures}
                                        onChange={(e) => setKeyFeatures(e.target.value)}
                                        placeholder="Real-time collaboration, AI summaries, task automation"
                                        className="w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:border-indigo-500/50 focus:outline-none focus:ring-1 focus:ring-indigo-500/30"
                                    />
                                </div>
                            </div>
                        </details>

                        <button
                            type="submit"
                            disabled={isInviting}
                            className="w-full btn-glow text-sm py-3 mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isInviting 
                                ? 'Sending Invite...' 
                                : initialProject ? 'Save Changes & View Command' : canUseCliCommand ? 'Generate Setup Command' : 'Create Preview Project'
                            }
                        </button>
                    </form>
                ) : canUseCliCommand ? (
                    <div className="p-6 space-y-4">
                        {githubInviteStatus !== 'SENT' && (
                            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 mb-4">
                                <h4 className="text-sm font-semibold text-emerald-400 mb-1">GitHub Invitation Sent!</h4>
                                <p className="text-xs text-emerald-500/80">
                                    Check your email or GitHub notifications to accept the repository invitation before running the command below.
                                </p>
                            </div>
                        )}

                        <div className="flex items-center justify-between mb-2">
                            <p className="text-sm text-zinc-400">
                                Select your terminal:
                            </p>
                            <div className="flex bg-zinc-900/50 rounded-lg p-1 border border-zinc-800">
                                <button 
                                    onClick={() => setTerminal('unix')}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${terminal === 'unix' ? 'bg-zinc-800 text-zinc-200 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                                >
                                    Mac / Linux / CMD
                                </button>
                                <button 
                                    onClick={() => setTerminal('powershell')}
                                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${terminal === 'powershell' ? 'bg-zinc-800 text-zinc-200 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                                >
                                    PowerShell
                                </button>
                            </div>
                        </div>

                        {/* Command display */}
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <span className="ml-auto">
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                                    >
                                        {copied ? (
                                            <>
                                                <CheckIcon className="h-3.5 w-3.5 text-emerald-400" />
                                                <span className="text-emerald-400">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <CopyIcon className="h-3.5 w-3.5" />
                                                Copy
                                            </>
                                        )}
                                    </button>
                                </span>
                            </div>
                            <div className="terminal-body">
                                <pre className="whitespace-pre-wrap text-sm">
                                    <span className="text-green-400">$</span>{' '}
                                    <span className="text-zinc-200">{setupCommand}</span>
                                </pre>
                            </div>
                        </div>

                        <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-4">
                            <p className="text-xs text-zinc-500 leading-relaxed">
                                <strong className="text-zinc-400">What this does:</strong> Clones the private ShipOnClick repository, removes the git history, installs dependencies,
                                configures your database, generates AGENTS.md with your project metadata, and indexes the knowledge graph.
                            </p>
                        </div>

                        <button
                            onClick={handleClose}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-700/50 transition-colors"
                        >
                            Done
                        </button>
                        
                        {initialProject && (
                            <button
                                onClick={() => setStep('form')}
                                className="w-full text-center text-sm text-zinc-500 hover:text-zinc-300 mt-2 transition-colors"
                            >
                                ← Back to edit details
                            </button>
                        )}
                    </div>
                ) : (
                    /* Free tier — show upgrade CTA instead of CLI command */
                    <div className="p-6 space-y-4">
                        <div className="flex flex-col items-center text-center py-6">
                            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4">
                                <LockIcon className="h-6 w-6 text-amber-400" />
                            </div>
                            <h3 className="text-lg font-semibold text-zinc-200 mb-2">Preview Project Created</h3>
                            <p className="text-sm text-zinc-500 max-w-xs mb-6">
                                Your project has been saved as a preview. Upgrade to the <strong className="text-zinc-300">Builder</strong> or <strong className="text-zinc-300">Scale</strong> plan to unlock the full codebase download and CLI access.
                            </p>
                            <Link
                                href={`/${orgSlug}/settings/billing`}
                                className="btn-glow inline-flex items-center gap-2 text-sm px-6 py-3"
                                onClick={handleClose}
                            >
                                Upgrade to Unlock
                            </Link>
                        </div>

                        <button
                            onClick={handleClose}
                            className="w-full rounded-xl border border-zinc-700 bg-zinc-800/50 px-4 py-3 text-sm font-semibold text-zinc-200 hover:bg-zinc-700/50 transition-colors"
                        >
                            Close
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
