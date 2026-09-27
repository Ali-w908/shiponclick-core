# Node Description Batch 1 of 24

Engram is running in assistant/skill mode (no API key). You are the host
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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "branch:repo:github.com/Ali-w908/nextjs-saas-starter-kit#main": "main" | kind=Branch | source=git | neighbors=[046fd8b feat: add terminal selector for…, 09673f9 fix: remove slash prefix from n…, 0999f13 fix: resolve vercel build error…, 0afec64 fix: replace JSX.Element with R…, 0b2cca8 fix: seed database in CI and us…, 0df7eda fix: handle nextjs redirect in …]
- "branch:repo:github.com/Ali-w908/nextjs-saas-starter-kit#feature/auros-theme": "feature/auros-theme" | kind=Branch | source=git | neighbors=[046fd8b feat: add terminal selector for…, 0999f13 fix: resolve vercel build error…, 0b2cca8 fix: seed database in CI and us…, 0df7eda fix: handle nextjs redirect in …, 14d2b75 fix: update image paths in docs…, 16fab98 feat: product evolution sprint …]
- "lib_plasmic": "plasmic.ts" | kind=code-symbol | source=src/lib/plasmic.ts:L1 | neighbors=[f2af8ac checkpoint: before 3D backgroun…, providers.tsx, Providers(), cli-instructions.tsx, CliInstructions(), delete-account-button.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@4384d325ff7bb8433f728c32ab10dcdf3ef7a781": "4384d32 docs: complete documentation suite" | kind=Commit | source=git | neighbors=[auth-actions.ts, billing-actions.ts, org-actions.ts, user-actions.ts, layout.tsx, robots.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f6172b06454d01710e735452b5f931d9a2527e39": "f6172b0 feat: UI/UX overhaul, modern design system, and auth callback fixes" | kind=Commit | source=git | neighbors=[2e55ef2 fix: nextjs server action build…, auth-actions.ts, layout.tsx, page.tsx, feature/auros-theme, main]
- "scripts_validate_data": "validate_data.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, _catalog_date(), _check_app_interface_contract(), _check_catalog_contract(), _check_catalog_summary(), _check_chart_contract()]
- "dashboard_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/dashboard/page.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 259b106 feat: complete LemonSqueezy int…, 3f83b6b fix: restore missing imports in…, 4384d32 docs: complete documentation su…, 50fa99d feat: streamline logged-in chec…, 71ae643 feat: complete product overhaul…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f2af8ac566e026f64e92d0f5e4b041fcb0d31491": "f2af8ac checkpoint: before 3D background experiment" | kind=Commit | source=git | neighbors=[a95c6d0 feat: introduce AI semantic 3-w…, org-actions.ts, layout.tsx, feature/auros-theme, main, 78c7265 update: design updates]
- "dashboard_sidebar": "sidebar.tsx" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 2e55ef2 fix: nextjs server action build…, 4384d32 docs: complete documentation su…, 6199608 feat: integrate Graphify knowle…, 71ae643 feat: complete product overhaul…, 89988d0 full dashboard redesign, README…]
- "scripts_core": "core.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, BM25, _contains_phrase(), detect_domain(), _domain_keywords(), _exact_match_diagnostic()]
- "scripts_design_system_designsystemgenerator": "DesignSystemGenerator" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L258 | neighbors=[design_system.py, ._apply_reasoning(), ._build_style_lookup(), ._extract_results(), ._find_reasoning_rule(), .generate()]
- "lib_auth": "auth.ts" | kind=code-symbol | source=src/lib/auth.ts:L1 | neighbors=[auth-actions.ts, billing-actions.ts, feedback-actions.ts, github.ts, github-actions.ts, github.test.ts]
- "marketing_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/page.tsx:L1 | neighbors=[3194208 fix: resolve Open Code Review i…, 4384d32 docs: complete documentation su…, 6684611 features: added: legal files, f…, 71ae643 feat: complete product overhaul…, 78c7265 update: design updates, a2dfaff fix: remove broken scroll-revea…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@93038a63259733b10d1907633d77c307a151e886": "93038a6 docs: update DEVELOPMENT.md and .gitignore" | kind=Commit | source=git | neighbors=[52bad2b chore: remove build logs and up…, auth.test.ts, org.test.ts, validation.test.ts, feature/auros-theme, main]
- "actions_org_test": "org.test.ts" | kind=code-symbol | source=tests/integration/actions/org.test.ts:L1 | neighbors=[org-actions.ts, acceptInvite(), inviteUser(), removeMember(), revokeInvite(), updateMemberRole()]
- "factories_index": "index.ts" | kind=code-symbol | source=tests/factories/index.ts:L1 | neighbors=[auth.test.ts, org.test.ts, 93038a6 docs: update DEVELOPMENT.md and…, createExpiredInvite(), createMockAdmin(), createMockAuditLog()]
- "actions_auth_actions": "auth-actions.ts" | kind=code-symbol | source=src/actions/auth-actions.ts:L1 | neighbors=[authenticate(), deleteAccount(), ensureUniqueSlug(), generateSlug(), loginWithGithub(), loginWithGoogle()]
- "scripts_design_system": "design_system.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, ansi_ljust(), _contrast_ratio(), _derive_dark_palette(), DesignSystemGenerator, _detect_page_type()]
- "security_authorization_test": "authorization.test.ts" | kind=code-symbol | source=tests/security/authorization.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, billing-actions.ts, createCheckout(), org-actions.ts, inviteUser()]
- "dashboard_stack_explorer": "stack-explorer.tsx" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L1 | neighbors=[0afec64 fix: replace JSX.Element with R…, 16fab98 feat: product evolution sprint …, 6684611 features: added: legal files, f…, 89988d0 full dashboard redesign, README…, a50344d design: apply premium UI polish…, f2af8ac checkpoint: before 3D backgroun…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@71ae6438e64f67308424b99fce56786b69919f6b": "71ae643 feat: complete product overhaul (ShipOnClick rebranding, premium landin…" | kind=Commit | source=git | neighbors=[page.tsx, feature/auros-theme, main, 259b106 feat: complete LemonSqueezy int…, metadata.ts, page.tsx]
- "lib_db": "db.ts" | kind=code-symbol | source=src/lib/db.ts:L1 | neighbors=[auth-actions.ts, billing-actions.ts, github.ts, user-actions.ts, page.tsx, 4384d32 docs: complete documentation su…]
- "lib_subscription": "subscription.ts" | kind=code-symbol | source=src/lib/subscription.ts:L1 | neighbors=[github.ts, github.test.ts, page.tsx, 259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, 6684611 features: added: legal files, f…]
- "mocks_stripe": "stripe.ts" | kind=code-symbol | source=tests/mocks/stripe.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, index.ts, billingPortal(), checkout(), createMockSubscription(), createMockWebhookEvent()]
- "security_input_validation_test": "input-validation.test.ts" | kind=code-symbol | source=tests/security/input-validation.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, auth-actions.ts, register(), user-actions.ts, updateUserProfile()]
- "actions_org_actions": "org-actions.ts" | kind=code-symbol | source=src/actions/org-actions.ts:L1 | neighbors=[acceptInvite(), inviteUser(), removeMember(), revokeInvite(), updateMemberRole(), auth.ts]
- "scripts_core_search": "search()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L755 | neighbors=[core.py, _contains_phrase(), detect_domain(), _exact_stack_identifier(), _legacy_successor_guidance(), Main search function with auto-domain d…]
- "app_layout": "layout.tsx" | kind=code-symbol | source=src/app/layout.tsx:L1 | neighbors=[jakarta, jetbrainsMono, outfit, RootLayout(), providers.tsx, Providers()]
- "billing_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/billing/page.tsx:L1 | neighbors=[billing-actions.ts, createCheckout(), getSubscriptionDetails(), BillingPage(), StatusBadge(), auth.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@16fab9817deaa87c09ed909571b3ad320ba8badc": "16fab98 feat: product evolution sprint - ui upgrades, AI skills, and unified do…" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 6623cca chore: remove internal utility …, metadata.ts, page.tsx, sidebar.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@259b106211658c14d7586f37522e9c03601d1aa5": "259b106 feat: complete LemonSqueezy integration and zero-token agent onboarding" | kind=Commit | source=git | neighbors=[auth-actions.ts, billing-actions.ts, page.tsx, feature/auros-theme, main, 9e67322 fix: auth security, billing che…]
- "mocks_auth": "auth.ts" | kind=code-symbol | source=tests/mocks/auth.ts:L1 | neighbors=[auth.test.ts, org.test.ts, 93038a6 docs: update DEVELOPMENT.md and…, createAuthenticatedUser(), createMockSession(), mockAuth]
- "stripe_route": "route.ts" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, db.ts, stripe.ts, getStripe(), getCustomerId(), getSubscriptionData()]
- "actions_auth_test": "auth.test.ts" | kind=code-symbol | source=tests/integration/actions/auth.test.ts:L1 | neighbors=[auth-actions.ts, authenticate(), register(), constructor(), index.ts, createMockUser()]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@efb91459d5f40490952d24dcf6c3698f06833a40": "efb9145 fix: add logout button, github auto invite" | kind=Commit | source=git | neighbors=[343228b feat(auth): add account deletio…, auth.test.ts, github-actions.ts, feature/auros-theme, main, 0df7eda fix: handle nextjs redirect in …]
- "marketing_pricing_card": "pricing-card.tsx" | kind=code-symbol | source=src/components/marketing/pricing-card.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 50fa99d feat: streamline logged-in chec…, 5871434 fix: fixed 'Get Instant Access'…, 587e511 feat: simplify landing page pri…, 6684611 features: added: legal files, f…, 71ae643 feat: complete product overhaul…]
- "scripts_core_bm25": "BM25" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L282 | neighbors=[core.py, .fit(), .__init__(), .score(), .tokenize(), .vocabulary()]
- "webhooks_stripe_test": "stripe.test.ts" | kind=code-symbol | source=tests/integration/webhooks/stripe.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, index.ts, createMockAuditLog(), createMockOrganization(), createMockOrganizationWithSubscription(), index.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@6684611bc0ffe63f0fac38bae24f33dab1d85ae3": "6684611 features: added: legal files, footer buttons functionality, github user…" | kind=Commit | source=git | neighbors=[github-actions.ts, layout.tsx, page.tsx, feature/auros-theme, main, f03e200 fix: add untracked files]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@78c7265833027a4a5bd5a7de64f6f11aac903574": "78c7265 update: design updates" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 373b817 feat: architectural refactor fo…, aurora-background.tsx, demo-video.tsx, faq.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-000.json

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
