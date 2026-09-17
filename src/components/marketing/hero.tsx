'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const commands = [
    { text: 'git clone https://github.com/Ali-w908/nextjs-saas-starter-kit.git my-saas', type: 'cmd' },
    { text: 'cd my-saas && npm install', type: 'cmd', delay: 800 },
    { text: '✔ Dependencies installed...', type: 'output', delay: 2000 },
    { text: 'npm run setup', type: 'cmd', delay: 2800 },
    { text: '✔ Environment variables configured...', type: 'output', delay: 3500 },
    { text: '✔ Database schema generated...', type: 'output', delay: 4000 },
    { text: 'Success! Your SaaS is ready.', type: 'success', delay: 4800 },
    { text: 'npm run dev', type: 'cmd', delay: 5500 },
];

export function Hero() {
    const [lines, setLines] = useState<typeof commands>([]);
    
    useEffect(() => {
        let isMounted = true;
        
        const runTerminal = async () => {
            if (!isMounted) return;
            setLines([]);
            
            for (const cmd of commands) {
                await new Promise(r => setTimeout(r, cmd.delay || 0));
                if (!isMounted) return;
                setLines(prev => [...prev, cmd]);
            }
        };

        // Delay start slightly
        setTimeout(runTerminal, 500);

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 dot-grid-bg opacity-40" />
            
            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <div className="animate-fade-in-up">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 mb-8">
                            ShipOnClick 2.0 is live
                        </span>
                    </div>
                    <h1 className="animate-fade-in-up delay-100 text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading leading-tight max-w-4xl mx-auto">
                        Ship your SaaS before your <br className="hidden md:block" />
                        AI's <span className="gradient-text-emerald">daily rate limit.</span>
                    </h1>
                    <p className="animate-fade-in-up delay-200 mt-6 text-lg leading-8 text-zinc-400 max-w-2xl mx-auto">
                        Cut 400+ hours of setup. Your AI agent understands the entire codebase from prompt one, 
                        with token-efficient onboarding, AI-powered brand design, and automated launch planning. 
                        Zero vendor lock-in, infinite scalability.
                    </p>
                    <div className="animate-fade-in-up delay-300 mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/pricing"
                            className="btn-primary text-base px-8 py-3.5"
                        >
                            Get ShipOnClick — $149
                        </Link>
                        <Link
                            href="#codebase"
                            className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors flex items-center gap-2"
                        >
                            Explore the codebase <span aria-hidden="true">↓</span>
                        </Link>
                    </div>
                </div>

                {/* Terminal Window */}
                <div className="animate-fade-in-up delay-500 mx-auto mt-20 max-w-3xl">
                    <div className="terminal-window shadow-2xl shadow-primary/10">
                        <div className="terminal-header">
                            <div className="terminal-dot terminal-dot-red" />
                            <div className="terminal-dot terminal-dot-yellow" />
                            <div className="terminal-dot terminal-dot-green" />
                            <div className="ml-4 text-xs text-zinc-500 font-sans">bash — ship-on-click</div>
                        </div>
                        <div className="terminal-body min-h-[220px]">
                            {lines.map((line, i) => (
                                <div key={i} className="mb-1.5 flex gap-3">
                                    {line.type === 'cmd' && <span className="text-primary opacity-80">➜</span>}
                                    <span className={
                                        line.type === 'cmd' ? 'text-zinc-200' :
                                        line.type === 'success' ? 'text-primary font-medium' :
                                        'text-zinc-500'
                                    }>
                                        {line.text}
                                    </span>
                                </div>
                            ))}
                            <div className="flex gap-3 mt-1.5">
                                <span className="text-primary opacity-80">➜</span>
                                <span className="w-2 h-4 bg-zinc-400 animate-terminal-blink mt-1" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
