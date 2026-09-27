'use client';

const steps = [
    {
        number: '01',
        title: 'Clone & Configure',
        desc: 'Run the setup command, enter your project name, and let the CLI scaffold your entire Next.js structure.',
    },
    {
        number: '02',
        title: 'Set Environment Vars',
        desc: 'Add your LemonSqueezy keys, OAuth credentials, and database URL to the .env file.',
    },
    {
        number: '03',
        title: 'Deploy & Scale',
        desc: 'Push to Vercel. Database migrations run automatically and your SaaS is live to the world.',
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-40 md:py-48 relative flex flex-col justify-center min-h-[80vh]">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-10 w-full">

                {/* Section Header */}
                <div className="max-w-2xl mx-auto text-center mb-24 md:mb-32">
                    <span className="text-[12px] font-normal uppercase tracking-[0.15em] text-silver-mist mb-5 block">
                        How it works
                    </span>
                    <h2 className="text-[36px] md:text-[48px] font-medium tracking-[-0.02em] text-white leading-[1.1]">
                        From idea to production in 3 steps.
                    </h2>
                </div>

                {/* Steps */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-px bg-white/[0.06]" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="text-center flex flex-col items-center">
                                <div className="text-[64px] font-light text-white/10 font-heading leading-none mb-8 tracking-tighter">
                                    {step.number}
                                </div>
                                <h3 className="text-[20px] font-medium text-white mb-4">
                                    {step.title}
                                </h3>
                                <p className="text-[15px] text-silver-mist leading-[1.6] max-w-[280px]">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
