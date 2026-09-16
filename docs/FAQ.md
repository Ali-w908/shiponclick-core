# FAQ

## General

**Q: Is this a subscription or a one-time payment?**
A: One-time payment for lifetime access. You own the code forever with all future updates included.

**Q: Can I use ShipOnClick for multiple projects?**
A: Yes. The license allows unlimited personal and commercial projects.

**Q: What support is included?**
A: Best-effort support for bugs and critical issues related to the starter kit infrastructure via email at support@shiponclick.tech.

## Technical

**Q: How does the AI Agent integration work?**
A: ShipOnClick includes an AGENTS.md, architecture docs, and a pre-built knowledge graph that maps the entire codebase. AI tools instantly understand the architecture without burning tokens reading every file. Run `/onboard` as your first prompt.

**Q: What testing tools are included?**
A: Vitest for unit/integration testing and Playwright for E2E testing. 191+ passing tests covering auth, billing, webhooks, and security.

**Q: Can I switch from PostgreSQL to another database?**
A: Yes. Prisma supports MySQL, SQLite, and SQL Server. Change the `provider` in `prisma/schema.prisma`.

## Deployment

**Q: How much does hosting cost?**
A:
- **Vercel**: Free tier handles hundreds of daily users
- **Database**: Free tiers on Supabase/Neon
- **LemonSqueezy**: Transaction fees only
- **Total**: $0 to start
