'use client';

import { useState, useEffect, useRef } from 'react';

const faqs = [
    {
        question: "Is this a subscription or a one-time payment?",
        answer: "It's a one-time payment of $149 for lifetime access. You own the code forever, and you'll receive all future updates for free."
    },
    {
        question: "Can I use ShipOnClick for multiple projects?",
        answer: "Yes. The license allows you to build and deploy unlimited projects for yourself or your clients."
    },
    {
        question: "How does the AI Agent integration work?",
        answer: "We include an AGENTS.md file and a pre-built knowledge graph (424 nodes, 654 edges) that maps the entire codebase. When you use tools like Cursor, Copilot, or Gemini, they instantly understand the architecture without burning 50K+ tokens reading files."
    },
    {
        question: "What testing tools are included?",
        answer: "The kit includes Vitest for unit/integration testing and Playwright for End-to-End testing. There are 191+ passing tests out of the box covering auth, billing, webhooks, and security."
    },
    {
        question: "What support is included?",
        answer: "You get best-effort support for bugs and critical issues related to the starter kit infrastructure. Reach out anytime at support@shiponclick.tech."
    }
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const observerRef = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        const elements = document.querySelectorAll('.scroll-reveal');
        elements.forEach((el) => observerRef.current?.observe(el));

        return () => observerRef.current?.disconnect();
    }, []);

    return (
        <section id="faq" className="py-24 bg-background-deep relative border-y border-border-muted">
            <div className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="text-center scroll-reveal mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white font-heading">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4 scroll-reveal">
                    {faqs.map((faq, i) => (
                        <div 
                            key={i} 
                            className={`border border-border-muted rounded-xl bg-surface transition-colors ${openIndex === i ? 'border-primary/30' : 'hover:border-zinc-700'}`}
                        >
                            <button
                                className="w-full text-left px-6 py-5 flex items-center justify-between focus-visible"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span className="font-semibold text-zinc-200">{faq.question}</span>
                                <svg 
                                    className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : ''}`} 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            <div 
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="px-6 pb-5 pt-1 text-zinc-400 leading-relaxed border-t border-border-muted mx-6">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
