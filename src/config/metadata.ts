import { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        default: 'ShipOnClick — From Idea to SaaS in One Click',
        template: '%s | ShipOnClick',
    },
    description: 'The AI-ready SaaS starter kit. One-click setup, zero vendor lock-in, production-grade stack. Ship your SaaS before you know it.',
    metadataBase: new URL('https://shiponclick.tech'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://shiponclick.tech',
        siteName: 'ShipOnClick',
        title: 'ShipOnClick — From Idea to SaaS in One Click',
        description: 'The AI-ready SaaS starter kit with one-click setup. Auth, Payments, Dashboard, Multi-Tenancy — all wired up.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'ShipOnClick — SaaS Starter Kit',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'ShipOnClick — From Idea to SaaS in One Click',
        description: 'Ship your SaaS in a weekend. AI-ready starter kit with one-click setup.',
    },
};
