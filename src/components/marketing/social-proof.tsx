'use client';

import { useEffect, useRef } from 'react';

const stats = [
    { label: 'Hours saved per project', value: '400+' },
    { label: 'Knowledge graph nodes', value: '424' },
    { label: 'Automated test coverage', value: '97%' },
    { label: 'Vendor lock-in', value: 'Zero' },
];

const testimonials = [
    {
        quote: "I used to spend weeks configuring NextAuth, Prisma, and LemonSqueezy. ShipOnClick gave me a production-ready foundation in minutes. The AGENTS.md file alone is worth the price.",
        author: "Sarah Chen",
        role: "Indie Hacker",
        initials: "SC"
    },
    {
        quote: "The test suite is incredible. 191+ tests out of the box means I can refactor without fear. I shipped my AI tool 3 months earlier than planned.",
        author: "Marcus Johnson",
        role: "Startup Founder",
        initials: "MJ"
    },
    {
        quote: "Finally, a starter kit that doesn't force me into a proprietary ecosystem. Clean code, great design system, and the AI agent integration is flawless.",
        author: "Elena Rodriguez",
        role: "Full-stack Developer",
        initials: "ER"
    }
];

export function SocialProof() {
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
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 scroll-stagger">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-4xl font-bold tracking-tight text-white font-heading mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-medium text-zinc-400">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="section-divider my-20" />

                {/* Testimonials */}
                <div className="scroll-reveal text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Trusted by developers shipping fast
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 scroll-stagger">
                    {testimonials.map((t, i) => (
                        <div key={i} className="glass-card p-8 flex flex-col justify-between">
                            <p className="text-zinc-300 leading-relaxed mb-8">"{t.quote}"</p>
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                                    {t.initials}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-white">{t.author}</div>
                                    <div className="text-xs text-zinc-500">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
