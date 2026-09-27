'use client';

import Link from 'next/link';
import { InteractiveSkills } from './interactive-skills';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(0, 130, 124, 0.12) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 lg:px-10 w-full">
                <div className="mx-auto max-w-4xl text-center flex flex-col items-center pt-24">

                    <div className="animate-fade-in-up mb-10">
                        <span className="text-[12px] font-normal uppercase tracking-[0.15em] text-silver-mist">
                            The AI-Agent Optimized SaaS Starter Kit
                        </span>
                    </div>

                    <h1 className="animate-fade-in-up delay-100 text-[48px] md:text-[72px] lg:text-[86px] font-medium tracking-[-0.04em] text-white leading-[1] mb-8">
                        Ship accurately,{' '}
                        <br className="hidden md:block" />
                        on a click.
                    </h1>

                    <p className="animate-fade-in-up delay-200 text-[16px] leading-[1.5] text-silver-mist max-w-[540px] mx-auto mb-10">
                        The SaaS Starter Kit that makes your AI Agent self-reliant, so you can
                        ship the actual vision you have for your SaaS accurately — without
                        drifting away.
                    </p>

                    <div className="animate-fade-in-up delay-200 w-full mb-16">
                        <InteractiveSkills />
                    </div>

                    {/* CTA */}
                    <div className="animate-fade-in-up delay-300 flex flex-col items-center gap-6 relative z-10">
                        <Link
                            href="/pricing"
                            className="inline-flex items-center justify-center rounded-[6px] px-7 py-3.5 text-[14px] font-medium text-[#0a1a18] transition-all duration-200 hover:opacity-90 active:scale-95 bg-aurora-gradient"
                        >
                            Get ShipOnClick — $149
                        </Link>

                        <Link
                            href="https://github.com/Ali-w908/shiponclick-core"
                            className="text-[12px] font-normal uppercase tracking-[0.12em] text-silver-mist hover:text-white transition-colors duration-200"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Explore the codebase
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
