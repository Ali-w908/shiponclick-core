'use client';

const technologies = [
    { name: 'Next.js 16', description: 'React Framework' },
    { name: 'React 19', description: 'UI Library' },
    { name: 'TypeScript 5', description: 'Type Safety' },
    { name: 'Tailwind CSS v4', description: 'Styling' },
    { name: 'Prisma 6', description: 'Database ORM' },
    { name: 'PostgreSQL', description: 'Database' },
    { name: 'NextAuth v5', description: 'Authentication' },
    { name: 'LemonSqueezy', description: 'Payments' },
    { name: 'Resend', description: 'Email' },
    { name: 'Vitest', description: 'Testing' },
    { name: 'Playwright', description: 'E2E Tests' },
    { name: 'Zod', description: 'Validation' },
];

export function TechStack() {
    // Double the array for seamless loop
    const doubled = [...technologies, ...technologies];

    return (
        <section className="relative py-16 overflow-hidden bg-background border-y border-border-muted">
            <div className="text-center mb-10">
                <p className="text-sm font-medium text-zinc-500 font-mono tracking-wider uppercase">
                    Built with the modern stack
                </p>
            </div>

            {/* Marquee container */}
            <div className="relative flex overflow-x-hidden group">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Scrolling row */}
                <div className="flex animate-marquee py-2 group-hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
                    {doubled.map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex items-center gap-3 mx-4 px-5 py-2.5 rounded-lg border border-border-muted bg-surface-elevated/50 whitespace-nowrap transition-colors hover:border-primary/50"
                        >
                            <span className="text-sm font-semibold text-zinc-200">{tech.name}</span>
                            <span className="text-xs text-zinc-500 font-mono border-l border-zinc-700 pl-3">{tech.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
