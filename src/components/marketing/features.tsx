'use client';

import { useEffect, useRef } from 'react';

const features = [
    {
        title: 'Next.js 16 App Router',
        description: 'Built on the bleeding edge. Full support for Server Components, Actions, and the latest routing paradigms.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        title: 'Authentication Ready',
        description: 'NextAuth v5 integrated with Google, GitHub, and Magic Links. Secure, session-based, and fully customizable.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
        ),
    },
    {
        title: 'LemonSqueezy Payments',
        description: 'One-time purchases and subscriptions with automatic tax compliance, invoicing, and Merchant of Record built in. Start accepting payments on day one.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
        ),
    },
    {
        title: 'Database & ORM',
        description: 'Prisma 6 connected to PostgreSQL. Includes optimized schemas for multi-tenant SaaS applications.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
        ),
    },
    {
        title: 'Type-Safe Everything',
        description: 'Strict TypeScript across the entire stack. Catch errors at compile time, not in production.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'Modern UI Components',
        description: 'Tailwind CSS v4 + Radix Primitives. Accessible, beautiful, and easy to customize for your brand.',
        icon: (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
    },
];

export function Features() {
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
        <section id="features" className="py-24 bg-background border-y border-border-muted relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center scroll-reveal mb-16">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Features</span>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                        Everything you need to scale.
                    </h2>
                    <p className="mt-4 text-lg text-zinc-400">
                        We made the hard choices so you don&apos;t have to. A tech stack optimized for developer velocity and production stability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-stagger">
                    {features.map((feature, i) => (
                        <div key={i} className="glass-card p-8 group">
                            <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-border-muted flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 font-heading">{feature.title}</h3>
                            <p className="text-sm text-zinc-400 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
