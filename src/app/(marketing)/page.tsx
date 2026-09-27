import { Hero } from '@/components/marketing/hero';
import { DemoVideo } from '@/components/marketing/demo-video';
import { Differentiator } from '@/components/marketing/value-proposition';
import { Features } from '@/components/marketing/features';
import { TechStack } from '@/components/marketing/tech-stack';
import { HowItWorks } from '@/components/marketing/how-it-works';
import { PricingCard } from '@/components/marketing/pricing-card';
import { FAQ } from '@/components/marketing/faq';
import { FinalCTA } from '@/components/marketing/final-cta';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'ShipOnClick | The AI-Agent Optimized SaaS Starter Kit',
    description: 'Ship accurately, on a click. The Next.js SaaS Starter Kit that makes your AI Agent self-reliant.',
};

export default function MarketingPage() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <DemoVideo />
            <Differentiator />
            <Features />
            <TechStack />
            <HowItWorks />

            {/* Pricing Section */}
            <section className="py-32 relative" id="pricing">
                <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
                    <div className="max-w-2xl mx-auto text-center mb-20">
                        <span className="text-[12px] font-normal uppercase tracking-[0.15em] text-silver-mist mb-5 block">
                            Pricing
                        </span>
                        <h2 className="text-[36px] font-medium tracking-normal text-white leading-[1.1]">
                            One price. Infinite value.
                        </h2>
                        <p className="mt-5 text-[16px] text-silver-mist leading-[1.5]">
                            Stop paying monthly subscriptions for boilerplate. Own the code forever.
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <PricingCard />
                    </div>
                </div>
            </section>

            <FAQ />
            <FinalCTA />
        </div>
    );
}
