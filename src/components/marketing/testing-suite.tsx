'use client';

import { useEffect, useRef } from 'react';

const testCategories = [
    { label: "End-to-End (Playwright)", value: 34, total: 34, color: "bg-blue-500" },
    { label: "Unit & Integration (Vitest)", value: 159, total: 159, color: "bg-primary" },
    { label: "Security & Validation", value: 100, total: 100, color: "bg-purple-500" },
];

export function TestingSuite() {
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Add fill-width variable to progress bars dynamically
                    const bars = entry.target.querySelectorAll('.progress-bar-fill');
                    bars.forEach((bar) => {
                        const targetWidth = bar.getAttribute('data-width');
                        (bar as HTMLElement).style.setProperty('--fill-width', `${targetWidth}%`);
                    });
                }
            });
        }, { threshold: 0.2 });

        const elements = document.querySelectorAll('.scroll-reveal, .scroll-stagger, .progress-container');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section className="py-24 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    <div className="scroll-reveal">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Battle-Tested</span>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading mb-6">
                            Ship with absolute confidence.
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8">
                            Most starter kits give you the happy path. We give you 193+ automated tests covering edge cases, webhooks, RBAC, and security vulnerabilities.
                        </p>
                        
                        <ul className="space-y-4 text-zinc-300">
                            <li className="flex gap-3 items-center">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Complete LemonSqueezy Webhook mocking & verification</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Multi-tenant Role-Based Access Control limits</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <svg className="w-5 h-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>Playwright E2E covering auth, onboarding, billing</span>
                            </li>
                        </ul>
                    </div>

                    {/* Dashboard Visual */}
                    <div className="glass-card p-8 progress-container scroll-reveal-scale relative">
                        {/* decorative background blur */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-800">
                                <div>
                                    <h4 className="text-white font-semibold font-heading">Test Coverage</h4>
                                    <p className="text-xs text-zinc-500">CI/CD Pipeline Status</p>
                                </div>
                                <div className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-mono rounded-full flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    PASSING
                                </div>
                            </div>

                            <div className="space-y-6">
                                {testCategories.map((cat, i) => (
                                    <div key={i}>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span className="text-zinc-300 font-medium">{cat.label}</span>
                                            <span className="text-zinc-500 font-mono">{cat.value}/{cat.total} Passing</span>
                                        </div>
                                        <div className="progress-bar bg-zinc-800">
                                            <div 
                                                className={`progress-bar-fill ${cat.color}`} 
                                                data-width={(cat.value / cat.total) * 100} 
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
