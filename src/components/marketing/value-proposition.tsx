'use client';

const capabilities = [
    {
        title: 'Zero token waste to onboard your AI Agent',
        skill: '/onboard',
        description:
            'Agent reads the AST Knowledge Graph and /onboard skill to instantly understand your entire architecture without parsing the full codebase. No wasted tokens, no hallucinated assumptions.',
    },
    {
        title: 'Sync updates safely',
        skill: '/sync-updates',
        description:
            'Applies upstream boilerplate updates via a Semantic 3-Way Merge. Your heavy customizations stay intact — no line-by-line merge conflict nightmares.',
    },
    {
        title: 'Add features accurately',
        skill: '/add-feature',
        description:
            'Scaffolds new features end-to-end with matching E2E tests, so the agent can verify its own work and catch drift on attempt five rather than breaking production.',
    },
    {
        title: 'Premium design without design debt',
        skill: '/ui-ux-pro-max',
        description:
            '79 searchable styles, 192 product palettes, 74 font pairings, 119 UX guidelines, and 17 GSAP animation presets. Building this design intelligence database from scratch would take weeks of research. Your agent gets it in one prompt.',
    },
];

export function Differentiator() {
    return (
        <section id="differentiator" className="py-32 relative">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-10">

                {/* Section Header */}
                <div className="max-w-2xl mb-20">
                    <span className="text-[12px] font-normal uppercase tracking-[0.15em] text-silver-mist mb-5 block">
                        What makes this different
                    </span>
                    <h2 className="text-[36px] font-medium tracking-normal text-white leading-[1.1] mb-6">
                        Your AI Agent becomes a true co-pilot, not just a code completer.
                    </h2>
                    <p className="text-[16px] text-silver-mist leading-[1.5] max-w-xl">
                        Most SaaS Starter Kits help you get an initial working boilerplate.
                        None helps you streamline and automate the development lifecycle
                        building upon it. We engineered the Starter Kit to integrate
                        perfectly with your AI Agent.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {capabilities.map((cap, i) => (
                        <div
                            key={i}
                            className="rounded-[16px] p-8 md:p-10 border border-white/[0.06] bg-liquid-kelp/20 hover:bg-liquid-kelp/30 transition-colors duration-300"
                        >
                            <code className="text-[12px] text-bioluminescent-gradient font-normal tracking-[0.08em] uppercase mb-4 block">
                                {cap.skill}
                            </code>
                            <h3 className="text-[20px] font-medium text-white mb-3 leading-[1.3] tracking-[-0.01em]">
                                {cap.title}
                            </h3>
                            <p className="text-[14px] text-silver-mist leading-[1.6]">
                                {cap.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
