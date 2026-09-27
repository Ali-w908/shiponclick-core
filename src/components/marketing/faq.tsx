'use client';

import { useState } from 'react';

const faqs = [
    {
        question: 'Is this a subscription or a one-time payment?',
        answer: "It's a one-time payment of $149 for lifetime access. You own the code forever, and you'll receive all future updates for free.",
    },
    {
        question: 'Can I use ShipOnClick for multiple projects?',
        answer: 'Yes. The license allows you to build and deploy unlimited projects for yourself or your clients.',
    },
    {
        question: 'How does the AI Agent integration work?',
        answer: "We include an AGENTS.md file and a pre-built AST Knowledge Graph that maps the entire codebase. When you use tools like Cursor, Copilot, or Gemini, they instantly understand the architecture without burning tokens reading every file. Built-in skills like /onboard, /sync-updates, and /add-feature guide the agent through common workflows.",
    },
    {
        question: 'What testing tools are included?',
        answer: 'The kit includes Vitest for unit and integration testing and Playwright for end-to-end testing. There are 190+ passing tests out of the box covering auth, billing, webhooks, RBAC, and security.',
    },
    {
        question: 'What support is included?',
        answer: 'You get best-effort support for bugs and critical issues related to the starter kit infrastructure. Reach out anytime at support@shiponclick.tech, or use the feedback widget at the bottom right of the screen to submit bug reports or feature requests directly.',
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 relative">
            <div className="mx-auto max-w-3xl px-6 lg:px-10">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-[12px] font-normal uppercase tracking-[0.15em] text-silver-mist mb-5 block">
                        FAQ
                    </span>
                    <h2 className="text-[36px] font-medium tracking-normal text-white leading-[1.1]">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* Accordion */}
                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`rounded-[12px] border transition-colors duration-200 ${
                                openIndex === i
                                    ? 'border-white/[0.12] bg-liquid-kelp/20'
                                    : 'border-white/[0.06] hover:border-white/[0.10]'
                            }`}
                        >
                            <button
                                className="w-full text-left px-6 py-5 flex items-center justify-between"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span className="text-[15px] font-medium text-white pr-4">
                                    {faq.question}
                                </span>
                                <svg
                                    className={`w-4 h-4 text-slate-deep flex-shrink-0 transition-transform duration-300 ${
                                        openIndex === i ? 'rotate-180 text-bioluminescent-gradient' : ''
                                    }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                            >
                                <div className="px-6 pb-5 pt-1 text-[14px] text-silver-mist leading-[1.6]">
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
