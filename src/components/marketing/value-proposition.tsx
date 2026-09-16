'use client';

import { useEffect, useRef } from 'react';

const comparisons = [
    {
        category: "Time to First Customer",
        without: "2-3 months building boilerplate",
        with: "Under 5 minutes to local dev",
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        category: "AI Codebase Onboarding",
        without: "Burn 50K+ tokens exploring files",
        with: "Zero waste. Pre-built AGENTS.md graph",
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        )
    },
    {
        category: "Ecosystem & Lock-in",
        without: "Proprietary SDKs, per-MAU hidden fees",
        with: "Own the code. Standard Next.js + Prisma",
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
        )
    }
];

export function ValueProposition() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.scroll-reveal, .scroll-stagger');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center scroll-reveal mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Why ShipOnClick?
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        Stop rebuilding authentication, billing, and dashboards for every project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-stagger">
                    {comparisons.map((item, i) => (
                        <div key={i} className="glass-card p-8 relative overflow-hidden group">
                            {/* Subtle hover gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="h-12 w-12 rounded-xl bg-surface-elevated border border-border-muted flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            
                            <h3 className="text-xl font-bold text-white mb-6 font-heading">{item.category}</h3>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 text-destructive">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <p className="text-sm text-zinc-500">{item.without}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 flex-shrink-0 text-primary">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium text-zinc-200">{item.with}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
