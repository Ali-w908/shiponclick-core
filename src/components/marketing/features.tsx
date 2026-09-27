'use client';

const features = [
    {
        title: '190+ Automated Tests',
        description: 'Vitest unit tests, Playwright E2E tests, and security validation suites. Ship with absolute confidence.',
    },
    {
        title: 'Multi-Tenancy & RBAC',
        description: 'Organizations, team invites, and role-based access control. Owner, Admin, and Member roles enforced at the database level.',
    },
    {
        title: 'Modern UI Components',
        description: 'Tailwind CSS v4 and Radix Primitives. Accessible, dark-first, and fully customizable via design tokens.',
    },
    {
        title: 'CI/CD Pipeline',
        description: 'Pre-configured GitHub Actions for linting, testing, and deployment. Your agent can run the pipeline to verify its own output.',
    },
    {
        title: 'Built-in Feedback Loop',
        description: 'Anonymous or authenticated user feedback widget. Collect insights from your users from day one without any third-party tools.',
    },
    {
        title: 'Sentry Error Tracking',
        description: 'Pre-configured Sentry integration for real-time error monitoring and performance tracing in production.',
    },
];

export function Features() {
    return (
        <section id="features" className="py-32 relative">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-10">

                {/* Section Header */}
                <div className="max-w-2xl mb-20">
                    <span className="text-[12px] font-normal uppercase tracking-[0.15em] text-silver-mist mb-5 block">
                        Included
                    </span>
                    <h2 className="text-[36px] font-medium tracking-normal text-white leading-[1.1]">
                        Everything you need to ship.
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, i) => (
                        <div
                            key={i}
                            className="rounded-[16px] p-8 border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-300"
                        >
                            <h3 className="text-[16px] font-medium text-white mb-2 tracking-[-0.01em]">
                                {feature.title}
                            </h3>
                            <p className="text-[14px] text-silver-mist leading-[1.6]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
