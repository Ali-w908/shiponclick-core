'use client';

import Link from 'next/link';

export function FinalCTA() {
    return (
        <section className="relative py-40 overflow-hidden">
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 50% 40% at 50% 60%, rgba(0, 130, 124, 0.08) 0%, transparent 70%)',
                }}
            />

            <div className="mx-auto max-w-[1440px] px-6 lg:px-10 relative z-10 text-center">
                <div className="mx-auto max-w-2xl">
                    <h2 className="text-[36px] md:text-[48px] font-medium tracking-[-0.02em] text-white leading-[1.1] mb-6">
                        Your next SaaS idea deserves to ship today.
                    </h2>
                    <p className="text-[16px] text-silver-mist mb-12 max-w-md mx-auto leading-[1.5]">
                        Stop writing boilerplate. Start building your business.
                    </p>
                    <Link
                        href="/pricing"
                        className="inline-flex items-center justify-center rounded-[6px] px-7 py-3.5 text-[14px] font-medium text-[#0a1a18] transition-all duration-200 hover:opacity-90 active:scale-95 bg-aurora-gradient"
                    >
                        Get ShipOnClick — $149
                    </Link>
                    <p className="mt-5 text-[12px] text-slate-deep tracking-[0.05em]">
                        One-time payment · Lifetime updates · Own the code
                    </p>
                </div>
            </div>
        </section>
    );
}
