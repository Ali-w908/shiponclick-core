import { PricingCard } from '@/components/marketing/pricing-card';



export default function PricingPage() {
    return (
        <div className="min-h-screen">
            <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
                        Simple,{' '}
                        <span className="gradient-text">one-time</span>{' '}
                        pricing
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-xl text-zinc-400">
                        Pay once, ship forever. No subscriptions, no per-seat fees, no surprises.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-16 flex justify-center">
                    <PricingCard showFree={true} />
                </div>

                {/* Bottom FAQ */}
                <div className="mt-24 text-center">
                    <h2 className="text-2xl font-bold text-zinc-100">
                        Still have questions?
                    </h2>
                    <div className="mt-8 grid gap-4 text-left md:grid-cols-2 max-w-4xl mx-auto">
                        <div className="glass-card p-6">
                            <h3 className="font-semibold text-zinc-100">
                                What support is included?
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                                You get best-effort support for bugs and infrastructure issues. We also include AI-ready documentation so your coding assistant understands the entire codebase instantly.
                            </p>
                        </div>
                        <div className="glass-card p-6">
                            <h3 className="font-semibold text-zinc-100">
                                Do I own the code?
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                                100%. You own every line of generated code. Use it for personal projects, client work, or your next unicorn startup. No attribution required.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
