# Node Description Batch 6 of 23

Graphify is running in assistant/skill mode (no API key). You are the host
assistant (Claude Code / Codex / Gemini CLI). Read the prompt below and write
your JSON answer to the answer file.

## Prompt

You are documenting nodes in a knowledge graph.
For each entry below, write ONE concise factual plain-language sentence
describing what it is or does. Use only the provided context.
For a code symbol (kind=code-symbol — a function, class, or constant),
describe what the function/symbol does based on its name, source location
and neighbors — e.g. "Resolves the configured ontology profile from graphify.yaml.".
For an entity node (any other kind — e.g. a person, place, event, object),
describe what the entity is and its role, grounded in its type, its
relations (neighbors) and the provided citations/evidence — e.g.
"Lady Carfax, a wealthy heiress who disappears en route to Lausanne.".
Ground entity descriptions in the citations/evidence when present; do not
speculate beyond the context, so a node with no supporting context may be
left out of the reply.
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "actions_org_actions_inviteuser": "inviteUser()" | kind=code-symbol | source=src/actions/org-actions.ts:L13 | neighbors=[org-actions.ts, org.test.ts, invite-form.tsx, authorization.test.ts] | lang=en
- "actions_org_actions_removemember": "removeMember()" | kind=code-symbol | source=src/actions/org-actions.ts:L204 | neighbors=[org-actions.ts, org.test.ts, members-table.tsx, authorization.test.ts] | lang=en
- "actions_org_actions_updatememberrole": "updateMemberRole()" | kind=code-symbol | source=src/actions/org-actions.ts:L251 | neighbors=[org-actions.ts, org.test.ts, members-table.tsx, authorization.test.ts] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@0999f136f1544deda1dbf726dc539d4f2c82b38b": "0999f13 fix: resolve vercel build error by excluding tests and fixing setup" | kind=Commit | source=git | neighbors=[main, b152a29 fix: update landing page and me…, setup.ts, 93038a6 docs: update DEVELOPMENT.md and…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@0b2cca850f288a03d003e6e3aada27060bb9e12c": "0b2cca8 fix: seed database in CI and use valid credentials in playwright setup" | kind=Commit | source=git | neighbors=[main, 7e6565e fix: look for Stack Explorer te…, auth.setup.ts, a1f6395 fix: add postgres service and p…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@0df7eda036844f8995d196bf2002a72d7d5faa5a": "0df7eda fix: handle nextjs redirect in delete button" | kind=Commit | source=git | neighbors=[main, 2e55ef2 fix: nextjs server action build…, delete-account-button.tsx, efb9145 fix: add logout button, github …] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@28ddf7f70eac460d01e3f313fd2b888d7fba25d4": "28ddf7f fix: zod error issues property" | kind=Commit | source=git | neighbors=[feedback-actions.ts, main, a9d42ff fix: build errors (zod issues a…, f03e200 fix: add untracked files] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@2e55ef2f12d56cd1c34f1ba0ebb0921b3a4181a5": "2e55ef2 fix: nextjs server action build error in sidebar" | kind=Commit | source=git | neighbors=[0df7eda fix: handle nextjs redirect in …, main, f6172b0 feat: UI/UX overhaul, modern de…, sidebar.tsx] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@3e27e7ee25ebfffd0350599186e0fbcfdea92689": "3e27e7e fix: update e2e auth setup to expect correct login heading" | kind=Commit | source=git | neighbors=[main, a1f6395 fix: add postgres service and p…, auth.setup.ts, 8258cee fix: await searchParams in logi…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@4c271fb030e04f5f8a7e25e5c8718d6e915e8124": "4c271fb fix: ensure Prisma generates on Vercel build and add robust error handl…" | kind=Commit | source=git | neighbors=[auth-actions.ts, main, d869b58 fix: provide explicit secret fa…, d214810 fix: add explicit trustHost and…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@7e6565ef8c5c8d0d81630ea2158a2a64fc123311": "7e6565e fix: look for Stack Explorer text on dashboard instead of dashboard text" | kind=Commit | source=git | neighbors=[0b2cca8 fix: seed database in CI and us…, main, 5871434 fix: fixed 'Get Instant Access'…, auth.setup.ts] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8252574fb0c53685778c286c0f83f1f339ecc45a": "8252574 fix: explicit issuer for github provider" | kind=Commit | source=git | neighbors=[main, 8161816 feat: pivot to open-core strate…, auth.ts, bf72399 Resolve merge conflict in READM…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8258ceefe8c22a1d4e34703d9e8969b83136aca7": "8258cee fix: await searchParams in login page and provide AUTH_SECRET to playwr…" | kind=Commit | source=git | neighbors=[main, 3e27e7e fix: update e2e auth setup to e…, page.tsx, cb6a41d fix: remove duplicate test.use …] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a9d42ffabc8e9ad8bff6192ba28fe6d443f856e6": "a9d42ff fix: build errors (zod issues and strict types)" | kind=Commit | source=git | neighbors=[28ddf7f fix: zod error issues property, main, 5c2866e chore: setup Sentry and clean u…, page.tsx] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@bf72399937caf4da51edd76b4f2c710d6d0add4b": "bf72399 Resolve merge conflict in README.md" | kind=Commit | source=git | neighbors=[89988d0 full dashboard redesign, README…, main, 8252574 fix: explicit issuer for github…, eee52de Update README.md] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@cb6a41d4e3ecea0b67ce2dfd8115c0adcf49fdd1": "cb6a41d fix: remove duplicate test.use causing playwright error" | kind=Commit | source=git | neighbors=[7252c33 fix: resolve failing tests from…, main, 8258cee fix: await searchParams in logi…, mobile.spec.ts] | lang=pt
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f957e3837709e531485a8f49d0778ebb50496d12": "f957e38 docs: remove license section and force add .env.example" | kind=Commit | source=git | neighbors=[bdf0787 docs: replace readme placeholde…, main, ba7152d chore: consolidate documentatio…, capture-screenshots.spec.ts] | lang=en
- "dashboard_layout": "layout.tsx" | kind=code-symbol | source=src/app/(dashboard)/layout.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, f6172b0 feat: UI/UX overhaul, modern de…, DashboardRootLayout(), auth.ts] | lang=en
- "factories_index_createmockadmin": "createMockAdmin()" | kind=code-symbol | source=tests/factories/index.ts:L138 | neighbors=[org.test.ts, index.ts, createMockMember(), authorization.test.ts] | lang=en
- "factories_index_createmockinvite": "createMockInvite()" | kind=code-symbol | source=tests/factories/index.ts:L160 | neighbors=[org.test.ts, index.ts, createExpiredInvite(), generateId()] | lang=en
- "factories_index_createsubscribedscenario": "createSubscribedScenario()" | kind=code-symbol | source=tests/factories/index.ts:L234 | neighbors=[index.ts, createMockMember(), createMockOrganizationWithSubscription(), createMockUser()] | lang=en
- "factories_index_createtestscenario": "createTestScenario()" | kind=code-symbol | source=tests/factories/index.ts:L219 | neighbors=[index.ts, createMockMember(), createMockOrganization(), createMockUser()] | lang=en
- "lemonsqueezy_route_updateorgfromsubscription": "updateOrgFromSubscription()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L248 | neighbors=[route.ts, handleSubscriptionCreated(), handleSubscriptionUpdated(), mapLSStatus()] | lang=en
- "lib_github": "github.ts" | kind=code-symbol | source=src/lib/github.ts:L1 | neighbors=[github-actions.ts, efb9145 fix: add logout button, github …, getOctokit(), inviteUserToRepo()] | lang=en
- "lib_subscription_getsubscriptionstatus": "getSubscriptionStatus()" | kind=code-symbol | source=src/lib/subscription.ts:L13 | neighbors=[subscription.ts, hasSubscriptionPlan(), requireActiveSubscription(), subscription.test.ts] | lang=en
- "marketing_value_proposition": "value-proposition.tsx" | kind=code-symbol | source=src/components/marketing/value-proposition.tsx:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, comparisons, ValueProposition()] | lang=en
- "mocks_auth_setmocksession": "setMockSession()" | kind=code-symbol | source=tests/mocks/auth.ts:L81 | neighbors=[org.test.ts, auth.ts, authorization.test.ts, input-validation.test.ts] | lang=en
- "mocks_auth_setunauthenticated": "setUnauthenticated()" | kind=code-symbol | source=tests/mocks/auth.ts:L88 | neighbors=[auth.test.ts, org.test.ts, auth.ts, authorization.test.ts] | lang=en
- "mocks_index": "index.ts" | kind=code-symbol | source=tests/mocks/index.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, auth.ts, prisma.ts, stripe.ts] | lang=en
- "next_config": "next.config.ts" | kind=code-symbol | source=next.config.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, 5c2866e chore: setup Sentry and clean u…, 9f800ea Initial commit from Create Next…, nextConfig] | lang=en
- "scripts_core_bm25_fit": ".fit()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L302 | neighbors=[BM25, .tokenize(), _get_bm25(), Build BM25 index from documents] | lang=en
- "scripts_core_contains_phrase": "_contains_phrase()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L589 | neighbors=[core.py, search(), detect_domain(), _rewrite_query_for_domain()] | lang=en
- "scripts_core_exact_match_diagnostic": "_exact_match_diagnostic()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L721 | neighbors=[core.py, _normalize(), search(), search_stack()] | lang=en
- "scripts_core_exact_row_identity": "_exact_row_identity()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L695 | neighbors=[core.py, _row_identities(), Return one row whose stable public iden…, search()] | lang=en
- "scripts_core_exact_stack_identifier": "_exact_stack_identifier()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L925 | neighbors=[core.py, search(), Resolve a standalone API identifier eve…, search_stack()] | lang=en
- "scripts_core_file_signature": "_file_signature()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L358 | neighbors=[core.py, _domain_keywords(), _get_bm25(), _load_csv_snapshot()] | lang=en
- "scripts_core_load_product_keywords": "_load_product_keywords()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L538 | neighbors=[core.py, _domain_keywords(), _load_csv(), Return high-signal product labels/alias…] | lang=en
- "scripts_core_passes_threshold": "_passes_threshold()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L473 | neighbors=[core.py, .score(), _query_coverage(), _suggest_terms()] | lang=en
- "scripts_design_system_contrast_ratio": "_contrast_ratio()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L153 | neighbors=[design_system.py, _relative_luminance(), _derive_dark_palette(), WCAG contrast ratio for two hex colors,…] | lang=en
- "scripts_design_system_derive_dark_palette": "_derive_dark_palette()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L193 | neighbors=[design_system.py, _contrast_ratio(), Keep product brand tokens while derivin…, _select_palette_for_mode()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-005.json

Keep each description factual and concise (one sentence). No markdown, no prose
outside the JSON object. It is acceptable to omit a node if context is
insufficient — but include every node you can ground confidently.

Example answer format:
```json
{
  "node_id_1": "Resolves the configured ontology profile from graphify.yaml.",
  "node_id_2": "Colonel James Barclay, an antagonist in The Crooked Man."
}
```
