# Architecture Overview

> This document is the **primary onboarding resource for AI agents**. It describes how the major systems in ShipOnClick connect and where to find each module in the source code.

## Data Model (Prisma Schema)

**File**: `prisma/schema.prisma`

```
User ──< Member >── Organization ──< Invite
  │                    │
  └── Account          ├── LemonSqueezy fields (lsCustomerId, lsSubscriptionId, ...)
  └── Session          ├── Legacy Stripe fields (stripeCustomerId, ...)
                       └── subscriptionStatus (enum)
```

### Core Entities
- **User**: Auth identity. Has `email`, `password` (hashed), `githubUsername`, `githubInviteStatus`. Soft-deletable.
- **Organization**: Multi-tenant container. Owns subscription state, members, and invites.
- **Member**: Join table linking User→Organization with a `role` (OWNER | ADMIN | MEMBER | BILLING).
- **Invite**: Pending org invitation with `token`, `email`, `role`, and `expires`.
- **AuditLog**: Append-only event log for admin visibility.

---

## Authentication Flow

**Files**: `src/lib/auth.ts`, `src/lib/auth.config.ts`, `src/lib/auth-types.ts`

1. NextAuth v5 (Auth.js) with **JWT strategy** + Prisma adapter.
2. Providers: **Google OAuth**, **GitHub OAuth**, **Credentials** (email/password with bcrypt).
3. Session enrichment: JWT callback injects `user.id` into the token; session callback exposes it to the client.
4. Auth helpers exported: `auth()` (get session), `signIn()`, `signOut()`, `handlers` (GET/POST for `/api/auth/[...nextauth]`).
5. Middleware (`middleware.ts`) protects `/dashboard` and `/invite` routes.

### Server Actions for Auth
**File**: `src/actions/auth-actions.ts`
- `authenticate()` — credentials login
- `register()` — new user signup with Zod validation
- `loginWithGoogle()` / `loginWithGithub()` — social login triggers
- `logout()` — session destruction

---

## Organization & Multi-Tenancy

**Files**: `src/actions/org-actions.ts`, `src/app/(dashboard)/[orgId]/`

- URL pattern: `/{orgId}/dashboard`, `/{orgId}/settings`, `/{orgId}/settings/billing`
- Dashboard layout (`src/app/(dashboard)/[orgId]/layout.tsx`) validates the user's membership in the org.
- On first login, the system auto-creates an Organization and a OWNER membership.

### RBAC
- Roles: `OWNER` > `ADMIN` > `BILLING` > `MEMBER`
- Billing actions require `OWNER` or `BILLING` role.
- Member management requires `OWNER` or `ADMIN`.

### Team Management
**File**: `src/actions/org-actions.ts`
- `inviteUser()` — creates an Invite record + sends email
- `acceptInvite()` — validates token, creates Member record
- `removeMember()`, `revokeInvite()`, `updateMemberRole()`

---

## Billing & Payments

### Primary: LemonSqueezy (Merchant of Record)
**Files**: `src/lib/lemonsqueezy.ts`, `src/app/api/webhooks/lemonsqueezy/route.ts`

- LemonSqueezy handles tax, compliance, and payment processing globally.
- Webhook events sync subscription state to the `Organization` model.
- Fields: `lsCustomerId`, `lsSubscriptionId`, `lsOrderId`, `lsVariantId`, `lsCurrentPeriodEnd`, `subscriptionStatus`.

### Legacy: Stripe
**Files**: `src/lib/stripe.ts`, `src/app/api/webhooks/stripe/route.ts`, `src/actions/billing-actions.ts`

- Stripe integration kept for flexibility. Handles checkout, portal, subscription lifecycle.
- Webhook route processes: `checkout.session.completed`, `invoice.payment_succeeded/failed`, `customer.subscription.updated/deleted`.

### Subscription Logic
**File**: `src/lib/subscription.ts`
- `getSubscriptionStatus()` — returns current plan state for an org
- `hasSubscriptionPlan()` — boolean check
- `requireActiveSubscription()` — guard function for premium features
- `PRICING_PLANS` — centralized plan definitions (Builder plan)

---

## GitHub Auto-Invite System

**Files**: `src/actions/github-actions.ts`, `src/app/api/webhooks/github/route.ts`, `src/lib/github.ts`

After purchase, users connect their GitHub account. The system:
1. Stores `githubUsername` on the User model.
2. Sends an invite to the private repo via GitHub API.
3. Webhook at `/api/webhooks/github` listens for `member` events to track accept/decline status.
4. Username is **locked after first invite** to prevent exploit (changing username to grant access to someone else).

---

## Email System

**File**: `src/lib/email.ts`

- Uses **Resend** for transactional emails.
- `sendInviteEmail()` — org invitation email with accept link.
- Configured via `RESEND_API_KEY` and `EMAIL_FROM` env vars.

---

## Discord Feedback Widget

**File**: `src/actions/feedback-actions.ts`

- Server action that posts user feedback to a Discord channel via webhook.
- Accessible from the dashboard sidebar.

---

## Frontend Architecture

### Route Groups
```
src/app/
├── (auth)/          → Login, Register (public, minimal layout)
├── (marketing)/     → Landing page, Pricing, Terms, Privacy, Docs (public, marketing layout)
├── (dashboard)/     → Authenticated dashboard pages
│   ├── [orgId]/     → Org-scoped: dashboard, settings, billing, knowledge-graph, playground
│   └── settings/    → User-level: profile settings
├── api/             → API routes (NextAuth, webhooks)
└── invite/[token]/  → Invite acceptance page
```

### Component Organization
```
src/components/
├── dashboard/       → Sidebar, overview, members-table, profile-form, stack-explorer, etc.
├── marketing/       → Hero, features, FAQ, pricing-card, footer, navbar
├── shared/          → Cross-cutting (e.g., feedback widget)
└── ui/              → Primitives (button, card, login-form, register-form, logo)
```

### Design System
- **Dark-first** with zinc-950 backgrounds and indigo/violet accents.
- Glassmorphism cards with `backdrop-filter: blur(12px)`.
- CSS-only animations (no framer-motion or GSAP).
- Font: Inter (Google Fonts).
- All styles in `src/app/globals.css` using CSS custom properties.
- See `.agents/skills/design-system/SKILL.md` for full token reference.

---

## Error Monitoring (Sentry)

**Files**: `sentry.server.config.ts`, `sentry.edge.config.ts`, `src/instrumentation.ts`, `src/instrumentation-client.ts`, `src/app/global-error.tsx`

- Sentry Next.js SDK configured for client, server, and edge runtimes.
- Session Replay enabled on errors only (`replaysOnErrorSampleRate: 1.0`, `replaysSessionSampleRate: 0`).
- Source maps uploaded automatically via `SENTRY_AUTH_TOKEN` on Vercel builds.
- `next.config.ts` wraps config with `withSentryConfig()` from `@sentry/nextjs/config`.

---

## Key File Reference

| Module | Primary File | Purpose |
|--------|-------------|---------|
| Auth config | `src/lib/auth.ts` | NextAuth setup, session enrichment |
| Auth actions | `src/actions/auth-actions.ts` | Login, register, social auth |
| DB client | `src/lib/db.ts` | Prisma singleton |
| Org actions | `src/actions/org-actions.ts` | Invite, remove, role management |
| Billing actions | `src/actions/billing-actions.ts` | Checkout, portal, cancel, resume |
| Stripe lib | `src/lib/stripe.ts` | Stripe API wrapper functions |
| LemonSqueezy | `src/lib/lemonsqueezy.ts` | LemonSqueezy API + checkout |
| Subscription | `src/lib/subscription.ts` | Plan logic, guards, pricing data |
| Email | `src/lib/email.ts` | Resend transactional emails |
| GitHub | `src/lib/github.ts` | GitHub API invite helpers |
| Utils | `src/lib/utils.ts` | `cn()`, `formatDate()`, `slugify()` |
| Design tokens | `src/app/globals.css` | CSS custom properties, animations |
| Middleware | `middleware.ts` | Route protection |
