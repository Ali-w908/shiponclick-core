'use client';

import { useEffect, useRef } from 'react';

const agentFeatures = [
    {
        title: "AGENTS.md Built-in",
        desc: "A massive 424-node, 654-edge knowledge graph embedded right in the repo. Your AI agent understands the entire architecture without you having to explain it.",
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        )
    },
    {
        title: "Zero Token Burn",
        desc: "Stop paying for your AI to read Next.js documentation and generic boilerplate. ShipOnClick's localized knowledge prevents useless context bloat.",
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        )
    },
    {
        title: "Curated AI Skills",
        desc: "Includes pre-configured skills like 'ui-ux-pro-max' to ensure your AI assistant outputs premium, accessible, and conversion-optimized designs.",
        icon: (
            <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        )
    }
];

export function AgentsShowcase() {
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
        <section className="py-24 bg-background-deep border-y border-border-muted relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-2xl text-center scroll-reveal mb-16">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">AI Native</span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Built for you AND your AI agent.
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        The starter kit engineered from day one to be perfectly understood by coding assistants like Cursor, Copilot, and Gemini.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-stagger">
                    {agentFeatures.map((feat, i) => (
                        <div key={i} className="glass-card p-8 group">
                            <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feat.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading">{feat.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
