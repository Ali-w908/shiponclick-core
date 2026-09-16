# Changelog

All notable changes to ShipOnClick are documented here.

## [1.1.0] - September 2026

### Added
- **Sentry Integration**: Full error monitoring with Session Replay, performance tracing, and source map uploads via `@sentry/nextjs`.
- **GitHub Auto-Invite System**: Automated private repo invitations after purchase with webhook-based status tracking and username lock to prevent exploit.
- **Discord Feedback Widget**: In-dashboard feedback form that posts to Discord via webhook.
- **Legal Pages**: Terms of Service and Privacy Policy pages with ShipOnClick-specific content.
- **AI Agent Documentation**: AGENTS.md, architecture docs, onboarding skill (`/onboard`), and pre-built knowledge graph for zero-token codebase understanding.
- **Design System Skill**: Comprehensive design tokens, color palette, and animation patterns for AI agents.
- **LemonSqueezy Integration**: Merchant-of-Record payment processing as primary billing provider.

### Changed
- **Pricing**: Simplified to single "Builder" plan ($149 one-time).
- **Stack Explorer**: Restricted advanced features (Knowledge Graph, Playground) to Builder plan subscribers.
- **Next.js Config**: Updated to import `withSentryConfig` from `@sentry/nextjs/config`.

### Fixed
- Vercel build errors from untracked files and strict TypeScript checks.
- ZodError type mismatch in error handling.

## [1.0.0] - August 2026

### Added
- Initial release of ShipOnClick (formerly Next.js SaaS Starter Kit).
- Authentication with NextAuth v5 (Google, GitHub, Email/Password).
- Stripe integration (Subscriptions, Webhooks, Customer Portal).
- Multi-tenant organization system with RBAC (Owner, Admin, Member, Billing).
- Dashboard with sidebar navigation, team management, and billing settings.
- Landing page with Hero, Features, Pricing, and FAQ sections.
- Prisma ORM with PostgreSQL and full type-safety.
- Transactional emails via Resend.
- 191+ test suite (Vitest + Playwright).
- SEO optimization with sitemap.ts and robots.ts.
