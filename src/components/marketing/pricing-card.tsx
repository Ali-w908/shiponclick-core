'use client';

import Link from 'next/link';
import { useState } from 'react';

export function PricingCard() {
    return (
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl mx-auto items-center justify-center">
            
            {/* Free Open Source Plan */}
            <div className="relative w-full max-w-sm glass-card p-8 text-left border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white font-heading">Open Source</h3>
                        <p className="text-zinc-400 text-sm mt-1">Start building for free.</p>
                    </div>
                </div>

                <div className="mb-8">
                    <span className="text-5xl font-bold text-white font-heading tracking-tight">$0</span>
                    <span className="text-zinc-500 ml-2">Forever</span>
                </div>

                <Link
                    href="https://github.com/Ali-w908/shiponclick-core"
                    className="flex justify-center w-full btn-secondary text-base py-4 mb-8"
                    target="_blank"
                >
                    View on GitHub
                </Link>

                <div className="space-y-4">
                    <p className="text-sm font-semibold text-zinc-300 font-mono uppercase tracking-wider mb-4">What's included</p>
                    {[
                        'Next.js 16 App Router codebase',
                        'Auth.js v5 Configuration',
                        'Prisma + PostgreSQL setup',
                        'Beautiful Tailwind CSS v4 UI',
                        'Community Support'
                    ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <svg className="h-5 w-5 text-zinc-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-zinc-400">{feature}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Builder Plan */}
            <div className="relative w-full max-w-sm">
                {/* Glow effect behind the card */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-primary/30 to-transparent blur-xl opacity-50 pointer-events-none" />
                
                <div className="relative glass-card p-8 md:p-10 text-left border-t-2 border-t-primary/50">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-2xl font-bold text-white font-heading">Builder</h3>
                            <p className="text-zinc-400 text-sm mt-1">Everything you need to scale.</p>
                        </div>
                        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                            Lifetime Access
                        </div>
                    </div>

                    <div className="mb-8">
                        <span className="text-5xl font-bold text-white font-heading tracking-tight">$149</span>
                        <span className="text-zinc-500 ml-2">USD</span>
                    </div>

                    <Link
                        href="/register"
                        className="flex justify-center w-full btn-primary text-base py-4 mb-8"
                    >
                        Get Instant Access
                    </Link>

                    <div className="space-y-4">
                        <p className="text-sm font-semibold text-zinc-300 font-mono uppercase tracking-wider mb-4">What's included</p>
                        {[
                            'Everything in Open Source, plus:',
                            'LemonSqueezy Subscriptions & Webhooks',
                            'Agentic Features (AGENTS.md, Graph)',
                            '131+ Automated Tests (E2E/Unit)',
                            'Built-in User Feedback Loop',
                            'Dashboard & B2B Multi-tenancy',
                            'One-Click Setup CLI',
                            'Lifetime updates'
                        ].map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <svg className={`h-5 w-5 flex-shrink-0 mt-0.5 ${i === 0 ? 'text-zinc-500' : 'text-primary'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className={`text-sm ${i === 0 ? 'text-zinc-400 font-medium italic' : 'text-zinc-300'}`}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}
