'use client';

import Link from 'next/link';

export function PricingCard({ showFree = false }: { showFree?: boolean }) {
    return (
        <div className={`flex flex-col md:flex-row gap-[20px] w-full ${showFree ? 'max-w-5xl' : 'max-w-md'} mx-auto items-center justify-center`}>
            
            {/* Free Open Source Plan */}
            {showFree && (
                <div className="relative w-full max-w-sm rounded-[16px] bg-background-deep border border-white/5 p-[36px] text-left transition-colors hover:bg-surface/10 opacity-80 hover:opacity-100">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h3 className="text-[24px] font-medium text-white font-heading">Open Source</h3>
                            <p className="text-[14px] text-text-secondary mt-1">Start building for free.</p>
                        </div>
                    </div>

                    <div className="mb-6">
                        <span className="text-[36px] font-medium text-white font-heading tracking-tight">$0</span>
                    </div>

                    <Link
                        href="https://github.com/Ali-w908/shiponclick-core"
                        className="flex justify-center w-full rounded-[6px] bg-[#03514b]/30 py-[16px] mb-6 text-[14px] uppercase tracking-[0.08em] font-medium text-text-secondary hover:text-white hover:bg-[#03514b]/50 transition-colors"
                        target="_blank"
                    >
                        View on GitHub
                    </Link>

                    <div className="space-y-4">
                        <p className="text-[12px] font-medium text-text-secondary uppercase tracking-[0.12em] mb-4">What&apos;s included</p>
                        {[
                            'Next.js 16 App Router codebase',
                            'Auth.js v5 Configuration',
                            'Prisma + PostgreSQL setup',
                            'Auros UI Design System'
                        ].map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="text-[14px] text-primary flex-shrink-0">↗</span>
                                <span className="text-[14px] text-text-muted">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Builder Plan */}
            <div className="relative w-full max-w-md">
                <div className="relative rounded-[16px] bg-surface p-[36px] md:p-[48px] text-left">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-[36px] font-medium text-white font-heading leading-none">Builder Plan</h3>
                            <p className="text-[16px] text-text-secondary mt-2">Everything you need to scale.</p>
                        </div>
                        <div className="inline-flex items-center rounded-[6px] bg-background-deep px-3 py-1 text-[12px] uppercase tracking-[0.12em] font-medium text-text-secondary">
                            Lifetime
                        </div>
                    </div>

                    <div className="mb-8 flex items-baseline">
                        <span className="text-[61px] font-medium text-accent font-heading tracking-[-0.04em] leading-none">$149</span>
                        <span className="text-[16px] text-text-secondary ml-2 uppercase tracking-[0.12em]">USD</span>
                    </div>

                    <Link
                        href="/register?upgrade=true"
                        className="flex justify-center w-full items-center rounded-md bg-aurora-gradient py-[20px] mb-8 text-[14px] font-heading uppercase font-bold text-[#0a1a18] transition-all hover:opacity-90 active:scale-95 shadow-[0_0_40px_rgba(203,255,252,0.15)]"
                    >
                        Get Instant Access
                    </Link>

                    <div className="space-y-4 mt-8 pt-8 border-t border-white/10">
                        <p className="text-[12px] font-medium text-text-secondary uppercase tracking-[0.12em] mb-6">What&apos;s included</p>
                        {[
                            'Full Next.js 16 App Router Codebase',
                            'Auth.js v5 + Prisma + PostgreSQL',
                            'LemonSqueezy Subscriptions & Webhooks',
                            'Agentic Features (AGENTS.md, Graph)',
                            '190+ Automated Tests (E2E/Unit)',
                            'Built-in User Feedback Loop',
                            'Dashboard & B2B Multi-tenancy',
                            'One-Click Setup CLI',
                            'Lifetime updates'
                        ].map((feature, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <span className="text-[14px] text-accent flex-shrink-0">↗</span>
                                <span className="text-[14px] text-text-muted leading-[1.4]">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
