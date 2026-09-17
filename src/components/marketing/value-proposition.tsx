'use client';

import { useEffect, useRef } from 'react';

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
        <section className="py-32 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-2xl scroll-reveal mb-20">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading">
                        Why ShipOnClick?
                    </h2>
                    <p className="mt-6 text-xl text-zinc-400 leading-relaxed">
                        We didn't just build another boilerplate. We engineered a robust, agent-ready ecosystem designed for the AI era.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 scroll-stagger">
                    
                    {/* Feature 1: Wide Card (Asymmetric Layout) */}
                    <div className="glass-card p-10 md:col-span-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group">
                        {/* Elegant hover sheen instead of bounce */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                        
                        <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-surface-elevated border border-white/10 flex items-center justify-center relative z-10 mb-8">
                            <svg className="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">AI-Native Architecture</h3>
                            <p className="text-lg text-zinc-400 max-w-xl">
                                Built explicitly for AI coding agents. Includes a highly structured AGENTS.md knowledge graph and curated Alibaba Open Code Review skills. Your agent can immediately add features without hallucinating.
                            </p>
                        </div>
                    </div>

                    {/* Feature 2: Square Card */}
                    <div className="glass-card p-10 md:col-span-4 flex flex-col justify-between min-h-[320px]">
                        <div className="flex-shrink-0 h-14 w-14 rounded-2xl bg-surface-elevated border border-white/10 flex items-center justify-center mb-8">
                            <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Bulletproof Reliability</h3>
                            <p className="text-base text-zinc-400">
                                190+ automated E2E and Unit tests built-in, plus pre-configured Sentry error tracking. Real enterprise stability on day one.
                            </p>
                        </div>
                    </div>

                    {/* Feature 3: Full Width Banner-style Card */}
                    <div className="glass-card p-10 md:col-span-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
                        <div className="max-w-2xl">
                            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">Frictionless "One-Click" Delivery</h3>
                            <p className="text-lg text-zinc-400">
                                The only boilerplate utilizing an automated, OAuth-secured GitHub fulfillment pipeline. Buyers get immediate, typo-free repository access right from their dashboard.
                            </p>
                        </div>
                        <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-surface-elevated border border-white/10 flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
