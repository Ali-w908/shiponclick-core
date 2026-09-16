'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export function FinalCTA() {
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
        <section className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 text-center">
                <div className="mx-auto max-w-2xl scroll-reveal-scale">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading mb-6">
                        Your next SaaS idea deserves to ship today.
                    </h2>
                    <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto">
                        Join hundreds of developers who stopped writing boilerplate and started building businesses.
                    </p>
                    <Link
                        href="/pricing"
                        className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-3"
                    >
                        Get ShipOnClick Now
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                    <p className="mt-4 text-sm text-zinc-500 font-mono">
                        One-time payment • Lifetime updates • Own the code
                    </p>
                </div>
            </div>
        </section>
    );
}
