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
    { name: 'Vitest', description: 'Unit Testing' },
    { name: 'Playwright', description: 'E2E Testing' },
    { name: 'Zod', description: 'Validation' },
];

export function TechStack() {
    const doubled = [...technologies, ...technologies];

    return (
        <section className="relative py-20 overflow-hidden border-y border-white/[0.04]">
            <div className="text-center mb-12">
                <span className="text-[12px] font-normal uppercase tracking-[0.15em] text-slate-deep">
                    Built with the modern stack
                </span>
            </div>

            {/* Marquee */}
            <div className="relative flex overflow-x-hidden group">
                {/* Fade edges */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                <div
                    className="flex animate-marquee py-2 group-hover:[animation-play-state:paused]"
                    style={{ width: 'max-content' }}
                >
                    {doubled.map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex items-center gap-3 mx-3 px-5 py-2.5 rounded-[6px] border border-white/[0.06] bg-liquid-kelp/20 whitespace-nowrap hover:border-white/[0.12] transition-colors duration-200"
                        >
                            <span className="text-[13px] font-medium text-white">{tech.name}</span>
                            <span className="text-[11px] text-slate-deep border-l border-white/[0.08] pl-3">{tech.description}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
