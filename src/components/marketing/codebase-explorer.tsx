'use client';

import { useState, useEffect, useRef } from 'react';

type FSNode = {
    name: string;
    type: 'file' | 'folder';
    desc?: string;
    children?: FSNode[];
};

const fileSystem: FSNode[] = [
    {
        name: 'my-saas-app',
        type: 'folder',
        children: [
            {
                name: 'src',
                type: 'folder',
                children: [
                    { name: 'app', type: 'folder', desc: 'Next.js App Router: Auth, Dashboard, Marketing routes' },
                    { name: 'components', type: 'folder', desc: '40+ Reusable UI components (Tailwind + Radix)' },
                    { name: 'actions', type: 'folder', desc: 'Type-safe Server Actions (Auth, Billing, Org)' },
                    { name: 'lib', type: 'folder', desc: 'Core utils: Auth Config, DB Client, Email, Payments' },
                ]
            },
            {
                name: 'prisma',
                type: 'folder',
                children: [
                    { name: 'schema.prisma', type: 'file', desc: 'Optimized PostgreSQL schema with multi-tenant RBAC' },
                    { name: 'seed.ts', type: 'file', desc: 'Database seeding for local dev' },
                ]
            },
            {
                name: 'tests',
                type: 'folder',
                children: [
                    { name: 'e2e', type: 'folder', desc: 'Playwright end-to-end user flows (190+ tests)' },
                    { name: 'unit', type: 'folder', desc: 'Vitest unit tests for core logic' },
                ]
            },
            {
                name: '.agents',
                type: 'folder',
                children: [
                    { name: 'AGENTS.md', type: 'file', desc: 'Complete codebase context for AI agents' },
                    { name: 'skills', type: 'folder', desc: 'Curated workflow skills (Open Code Review)' },
                ]
            },
            {
                name: '.github',
                type: 'folder',
                children: [
                    { name: 'workflows', type: 'folder', desc: 'CI/CD pipelines for testing and deployment' },
                ]
            }
        ]
    }
];

function ChevronIcon({ open }: { open: boolean }) {
    return (
        <svg 
            className={`w-3.5 h-3.5 text-zinc-500 transition-transform ${open ? 'rotate-90' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
        >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
    );
}

function FolderIcon() {
    return (
        <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20 5h-9.586L8.707 3.293A.996.996 0 008 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2z" />
        </svg>
    );
}

function FileIcon() {
    return (
        <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zm-1 1.5L18.5 9H13V3.5zM18 20H6V4h5v7h7v9z" />
        </svg>
    );
}

function TreeItem({ node, defaultOpen = false }: { node: FSNode, defaultOpen?: boolean }) {
    const [isOpen, setIsOpen] = useState(defaultOpen);
    
    return (
        <div className="fs-tree">
            <div 
                className="flex items-center justify-between group py-1 px-2 -mx-2 cursor-pointer hover:bg-zinc-800/50 rounded-md transition-colors" 
                onClick={() => node.type === 'folder' && setIsOpen(!isOpen)}
            >
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-5">
                        {node.type === 'folder' ? <ChevronIcon open={isOpen} /> : <span className="w-3.5" />}
                    </div>
                    {node.type === 'folder' ? <FolderIcon /> : <FileIcon />}
                    <span className={`text-sm ${node.type === 'folder' ? 'text-zinc-200' : 'text-zinc-400'}`}>
                        {node.name}
                    </span>
                </div>
                {node.desc && (
                    <span className="hidden md:flex items-center text-xs text-zinc-600 group-hover:text-primary/70 transition-colors whitespace-nowrap pl-4">
                        // {node.desc}
                    </span>
                )}
            </div>
            
            {isOpen && node.children && (
                <div className="fs-tree-indent border-l border-zinc-800 ml-4 pl-2">
                    {node.children.map((child, idx) => (
                        <TreeItem key={idx} node={child} defaultOpen={defaultOpen} />
                    ))}
                </div>
            )}
        </div>
    );
}

export function CodebaseExplorer() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    const premiumFeatures = [
        {
            title: 'Agentic Features & Skills',
            desc: 'Built-in AGENTS.md and curated skills to streamline production—empowering your agent to handle rigorous code reviews, automated testing, and UI design.',
            icon: (
                <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                </svg>
            )
        },
        {
            title: '190+ Automated Tests',
            desc: 'Comprehensive E2E (Playwright) and Unit (Vitest) test suites covering all core auth and billing flows.',
            icon: (
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: 'Built-in User Feedback Loop',
            desc: 'Integrated feedback widget and dashboard to capture bugs and feature requests directly from your users in real-time.',
            icon: (
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            )
        },
        {
            title: 'CI/CD Pipeline',
            desc: 'Pre-configured GitHub Actions for automated testing, linting, and Vercel deployments.',
            icon: (
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
            )
        },
        {
            title: 'Sentry Error Tracking',
            desc: 'Production-ready Sentry integration with source maps to catch bugs before your users do.',
            icon: (
                <svg className="w-5 h-5 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )
        }
    ];

    return (
        <section id="codebase" className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center scroll-reveal mb-16">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Transparency</span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Know exactly what you&apos;re getting.
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        No black boxes. Just clean, documented, AI-ready code built for production.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start scroll-reveal">
                    {/* File Explorer Side */}
                    <div className="lg:col-span-7">
                        <div className="terminal-window shadow-xl shadow-black/50 border-zinc-800">
                            <div className="terminal-header bg-surface-elevated">
                                <div className="terminal-dot terminal-dot-red" />
                                <div className="terminal-dot terminal-dot-yellow" />
                                <div className="terminal-dot terminal-dot-green" />
                                <div className="ml-4 text-xs text-zinc-500 font-sans">Explorer</div>
                            </div>
                            <div className="p-6 bg-black/40 backdrop-blur-xl min-h-[420px] overflow-x-auto">
                                <TreeItem node={fileSystem[0]} defaultOpen={true} />
                            </div>
                        </div>
                    </div>

                    {/* Features Side */}
                    <div className="lg:col-span-5 flex flex-col justify-center h-full space-y-4">
                        {premiumFeatures.map((feature, i) => (
                            <div key={i} className="glass-card p-4 border border-zinc-800/50 bg-zinc-900/40 rounded-xl flex items-start gap-4 transition-all hover:bg-zinc-800/60 hover:border-zinc-700">
                                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-surface rounded-full border border-border">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-sm font-semibold text-zinc-100 font-heading">
                                        {feature.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
