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
                    { name: 'e2e', type: 'folder', desc: 'Playwright end-to-end user flows (32+ tests)' },
                    { name: 'unit', type: 'folder', desc: 'Vitest unit tests for core logic' },
                    { name: 'integration', type: 'folder', desc: 'Database and webhook integration tests' },
                    { name: 'security', type: 'folder', desc: 'Input validation & RBAC security checks' },
                ]
            },
            {
                name: '.agents',
                type: 'folder',
                children: [
                    { name: 'AGENTS.md', type: 'file', desc: 'Complete codebase context for AI agents' },
                    { name: 'skills', type: 'folder', desc: 'Curated workflow skills (e.g. ui-ux-pro-max)' },
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

    return (
        <section id="codebase" className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center scroll-reveal mb-12">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Transparency</span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Know exactly what you&apos;re getting.
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        No black boxes. Just clean, documented, AI-ready code.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl scroll-reveal">
                    <div className="terminal-window shadow-xl shadow-black/50 border-zinc-800">
                        <div className="terminal-header bg-surface-elevated">
                            <div className="terminal-dot terminal-dot-red" />
                            <div className="terminal-dot terminal-dot-yellow" />
                            <div className="terminal-dot terminal-dot-green" />
                            <div className="ml-4 text-xs text-zinc-500 font-sans">Explorer</div>
                        </div>
                        <div className="p-6 bg-[#0A0F1C] min-h-[400px] overflow-x-auto">
                            <TreeItem node={fileSystem[0]} defaultOpen={true} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
