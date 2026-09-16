'use client';

import { useEffect, useRef } from 'react';

const steps = [
    {
        title: "Clone & Configure",
        desc: "Run the npx command, enter your project name, and let the CLI scaffold your entire Next.js structure.",
        number: "01"
    },
    {
        title: "Set Environment Vars",
        desc: "Add your LemonSqueezy keys, Google/GitHub OAuth credentials, and database URL to the .env file.",
        number: "02"
    },
    {
        title: "Deploy & Scale",
        desc: "Push to Vercel. Your database migrations run automatically, and your SaaS is live to the world.",
        number: "03"
    }
];

export function HowItWorks() {
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
        <section id="how-it-works" className="py-24 bg-background-deep relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center scroll-reveal mb-20">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Workflow</span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        From idea to production in 3 steps.
                    </h2>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden md:block absolute top-12 left-12 right-12 h-px bg-zinc-800" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 scroll-stagger relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="relative">
                                <div className="h-24 w-24 rounded-2xl bg-surface border border-border-muted flex items-center justify-center text-3xl font-bold font-mono text-zinc-600 mb-6 shadow-xl mx-auto md:mx-0 group hover:border-primary/50 transition-colors">
                                    {step.number}
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-xl font-bold text-white mb-3 font-heading">{step.title}</h3>
                                    <p className="text-sm text-zinc-400 leading-relaxed">
                                        {step.desc}
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
