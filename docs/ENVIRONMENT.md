# Environment Variables Reference

All environment variables for ShipOnClick. Copy `.env.example` to `.env` and fill in values.

## App Configuration

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | Yes | Base URL of your app. Local: `http://localhost:3000`. Production: `https://your-domain.com` |
| `NEXT_PUBLIC_APP_NAME` | No | App name for metadata and emails. Default: `nextjs-saas-starter-kit` |

## Database (Prisma + PostgreSQL)

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string. Format: `postgresql://user:password@host:port/database?schema=public`. Append `?pgbouncer=true` for connection poolers (Supabase, Neon). |

## Authentication (NextAuth v5)

| Variable | Required | Description |
|----------|----------|-------------|
| `AUTH_SECRET` | Yes | Random 32+ char string for token hashing. Generate: `openssl rand -base64 32` |
| `AUTH_TRUST_HOST` | No | Set `true` for proxied hosts (Vercel). Default: `true` |
| `AUTH_GOOGLE_ID` | Yes | Google OAuth Client ID. Get from [Google Cloud Console](https://console.cloud.google.com/apis/credentials) |
| `AUTH_GOOGLE_SECRET` | Yes | Google OAuth Client Secret |
| `AUTH_GITHUB_ID` | Yes | GitHub OAuth App Client ID. Get from [GitHub Developer Settings](https://github.com/settings/developers) |
| `AUTH_GITHUB_SECRET` | Yes | GitHub OAuth App Client Secret |

## Payments — LemonSqueezy (Primary)

| Variable | Required | Description |
|----------|----------|-------------|
| `LEMONSQUEEZY_API_KEY` | Yes | API key from [LemonSqueezy Settings](https://app.lemonsqueezy.com/settings/api) |
| `LEMONSQUEEZY_STORE_ID` | Yes | Store ID from LemonSqueezy |
| `LEMONSQUEEZY_WEBHOOK_SECRET` | Yes | Signing secret for webhook verification. Set when creating webhook at `/api/webhooks/lemonsqueezy` |
| `LEMONSQUEEZY_BUILDER_VARIANT_ID` | Yes | Product variant ID for the Builder plan |
| `LEMONSQUEEZY_SCALE_VARIANT_ID` | No | Product variant ID for Scale plan (if applicable) |

## Payments — Stripe (Legacy, Optional)

| Variable | Required | Description |
|----------|----------|-------------|
| `STRIPE_API_KEY` | No | Stripe Secret Key (starts with `sk_`) |
| `STRIPE_WEBHOOK_SECRET` | No | Webhook signing secret (starts with `whsec_`) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | No | Stripe Publishable Key (starts with `pk_`) |
| `STRIPE_PRO_MONTHLY_PRICE_ID` | No | Stripe Price ID for monthly plan |
| `STRIPE_PRO_YEARLY_PRICE_ID` | No | Stripe Price ID for yearly plan |

## Email (Resend)

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from [Resend](https://resend.com/api-keys) |
| `EMAIL_FROM` | Yes | Verified sender address. Must match Resend domain. |

## GitHub Auto-Invite

| Variable | Required | Description |
|----------|----------|-------------|
| `GITHUB_TOKEN` | Yes | Personal Access Token with `admin:org` scope for repo invites |
| `GITHUB_REPO_OWNER` | Yes | GitHub username or org that owns the private repo |
| `GITHUB_REPO_NAME` | Yes | Name of the private repository to invite users to |
| `GITHUB_WEBHOOK_SECRET` | Yes | Secret for verifying GitHub webhook payloads |

## Discord Integration

| Variable | Required | Description |
|----------|----------|-------------|
| `DISCORD_WEBHOOK_URL` | No | Discord channel webhook URL for feedback notifications |

## Error Monitoring (Sentry)

| Variable | Required | Description |
|----------|----------|-------------|
| `SENTRY_AUTH_TOKEN` | Yes (build) | Auth token for source map uploads. Stored in `.env.sentry-build-plugin`. Add to Vercel env vars. |

> Note: The Sentry DSN is hardcoded in the instrumentation files (not a secret — it's safe to be public).
