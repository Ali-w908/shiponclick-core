import { Hero } from '@/components/marketing/hero';
import { SocialProof } from '@/components/marketing/social-proof';
import { ValueProposition } from '@/components/marketing/value-proposition';
import { CodebaseExplorer } from '@/components/marketing/codebase-explorer';
import { TestingSuite } from '@/components/marketing/testing-suite';
import { AgentsShowcase } from '@/components/marketing/agents-showcase';
import { Features } from '@/components/marketing/features';
import { HowItWorks } from '@/components/marketing/how-it-works';
import { TechStack } from '@/components/marketing/tech-stack';
import { PricingCard } from '@/components/marketing/pricing-card';
import { FAQ } from '@/components/marketing/faq';
import { FinalCTA } from '@/components/marketing/final-cta';

export default function MarketingPage() {
    return (
        <div className="flex flex-col w-full">
            <Hero />
            <ValueProposition />
            <CodebaseExplorer />
            <TestingSuite />
            <AgentsShowcase />
            <Features />
            <HowItWorks />
            <TechStack />
            
            {/* Pricing Section Wrapper */}
            <section className="py-24 bg-background relative overflow-hidden" id="pricing">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <span className="text-primary font-mono text-sm tracking-wider uppercase mb-2 block">Pricing</span>
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading">
                            One price. Infinite value.
                        </h2>
                        <p className="mt-4 text-lg text-zinc-400">
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
