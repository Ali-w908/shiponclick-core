# Getting Started with ShipOnClick

## Prerequisites

- **Node.js** v18.17+ (`node -v`)
- **npm** v9+
- **Git**
- **PostgreSQL** (Supabase, Neon, Vercel Postgres, or local Docker)

## Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/Ali-w908/shiponclick-core.git
cd <project-name>/app
npm install
```

> The project root is the `app/` folder. All commands run from there.

### 2. Configure Environment

```bash
cp .env.example .env
```

Open `.env` and fill in the required values. See [ENVIRONMENT.md](ENVIRONMENT.md) for a full reference.

**Minimum for local dev:**
- `DATABASE_URL` — your PostgreSQL connection string
- `AUTH_SECRET` — generate with `openssl rand -base64 32`
- `AUTH_GOOGLE_ID` / `AUTH_GOOGLE_SECRET` — from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)

### 3. Setup Database

```bash
npm run db:push    # Push schema to database
npm run db:seed    # (Optional) Seed with sample data
```

### 4. Run

```bash
npm run dev
```

Visit `http://localhost:3000`. You should see the landing page.

## Verifying Everything Works

1. **Landing page** loads at `http://localhost:3000`
2. **Sign up** via Google or email/password
3. **Dashboard** appears at `/{orgId}/dashboard`
4. **LemonSqueezy** checkout: test with a $0 product variant in test mode

## Common Issues

| Problem | Fix |
|---------|-----|
| `P1001: Can't reach database` | Check DATABASE_URL and that PostgreSQL is running |
| Social login fails | Verify redirect URIs match `NEXT_PUBLIC_APP_URL` |
| Missing LemonSqueezy key | Set `LEMONSQUEEZY_API_KEY` in `.env` |

---

> **Next:** Read [ARCHITECTURE.md](ARCHITECTURE.md) to understand the full system design.
