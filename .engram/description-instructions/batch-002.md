# Node Description Batch 3 of 24

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

- "actions_github_actions": "github-actions.ts" | kind=code-symbol | source=src/actions/github-actions.ts:L1 | neighbors=[requestGithubAccess(), updateGithubUsername(), auth.ts, github-service.ts, GithubService, 373b817 feat: architectural refactor fo…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@5c2866efb05fd40b53bf1b7bb3c889ddfee3c589": "5c2866e chore: setup Sentry and clean up example pages" | kind=Commit | source=git | neighbors=[global-error.tsx, feature/auros-theme, main, d49750b feat: complete product overhaul…, next.config.ts, sentry.edge.config.ts]
- "lib_stripe": "stripe.ts" | kind=code-symbol | source=src/lib/stripe.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, cancelSubscriptionAtPeriodEnd(), createBillingPortalSession(), createCheckoutSession(), createCustomer(), getStripe()]
- "login_page": "page.tsx" | kind=code-symbol | source=src/app/(auth)/login/page.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, 8258cee fix: await searchParams in logi…, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…, LoginPage()]
- "scratch_register_plasmic": "register-plasmic.js" | kind=code-symbol | source=scratch/register-plasmic.js:L1 | neighbors=[f2af8ac checkpoint: before 3D backgroun…, components, componentsDir, currentPlasmic, findComponents(), fs]
- "settings_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/page.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 89988d0 full dashboard redesign, README…, a50344d design: apply premium UI polish…, invite-form.tsx, InviteForm(), members-table.tsx]
- "tests_test_catalog_refresh_catalogrefreshtest_font_args": ".font_args()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L35 | neighbors=[CatalogRefreshTest, .test_catalog_cross_check_uses_explicit…, .test_catalog_rejects_bool_rank_duplica…, .test_exclusion_sources_match_offline_v…, .test_explicit_license_exclusion_is_rep…, .test_font_refresh_fails_closed_on_conc…]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness": "TestNativeDesktopStackFreshness" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L30 | neighbors=[test_native_desktop_stack_freshness.py, .test_current_mobile_contracts(), .test_current_threejs_uses_supported_mo…, .test_deprecated_symbols_are_not_recomm…, .test_high_impact_rows_use_official_sou…, .test_migration_intent_returns_current_…]
- "tests_test_style_taxonomy_teststyletaxonomy": "TestStyleTaxonomy" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L24 | neighbors=[test_style_taxonomy.py, .setUpClass(), .test_claim_fields_use_controlled_non_g…, .test_curated_state_distribution_is_exp…, .test_deprecated_rows_never_appear_in_g…, .test_every_style_name_and_alias_has_a_…]
- "actions_github_test": "github.test.ts" | kind=code-symbol | source=tests/unit/actions/github.test.ts:L1 | neighbors=[github.ts, claimGithubRepository(), auth.ts, subscription.ts, requireActiveSubscription(), prisma.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@9e673222d1ea06628d8496f1802e05de463b55ca": "9e67322 fix: auth security, billing checkout, RLS, plan gating, CLI command" | kind=Commit | source=git | neighbors=[259b106 feat: complete LemonSqueezy int…, feature/auros-theme, main, b736ebb fix(billing): client side redir…, page.tsx, auth.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a50344d5eeb369a226159e4edcb900180d929f84": "a50344d design: apply premium UI polish to Stack Explorer, Knowledge Graph, and…" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, a25ec19 fix: resolve plan name mismatch…, invite-form.tsx, knowledge-graph-viewer.tsx, members-table.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@cb974c56fb1e02b5ec73b2685d55565f284e6ea5": "cb974c5 chore: revamp dashboard onboarding and fix claim error" | kind=Commit | source=git | neighbors=[be8086c feat: complete UI unslop, redes…, billing-actions.ts, github.ts, feature/auros-theme, main, 3f83b6b fix: restore missing imports in…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@edc8b8052035661bd15402a33af60083b2b9857a": "edc8b80 refactor: cleanup debug logs and sync docs with auth changes" | kind=Commit | source=git | neighbors=[b152a29 fix: update landing page and me…, auth-actions.ts, feature/auros-theme, main, bdf0787 docs: replace readme placeholde…, auth.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f849da3645d04970d0b12159e667193ea4c52b76": "f849da3 feat: stabilize github claim action with tests and polish dashboard UI" | kind=Commit | source=git | neighbors=[3f83b6b fix: restore missing imports in…, github.test.ts, feature/auros-theme, main, a50344d design: apply premium UI polish…, github-connection-card.test.tsx]
- "factories_index_createmockmember": "createMockMember()" | kind=code-symbol | source=tests/factories/index.ts:L123 | neighbors=[org.test.ts, index.ts, createMockAdmin(), createMockBillingMember(), generateId(), createMockOwner()]
- "factories_index_createmockorganization": "createMockOrganization()" | kind=code-symbol | source=tests/factories/index.ts:L76 | neighbors=[org.test.ts, index.ts, generateId(), createMockOrganizationWithSubscription(), createTestScenario(), subscription.test.ts]
- "marketing_features": "features.tsx" | kind=code-symbol | source=src/components/marketing/features.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, 78c7265 update: design updates, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…]
- "marketing_how_it_works": "how-it-works.tsx" | kind=code-symbol | source=src/components/marketing/how-it-works.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 71ae643 feat: complete product overhaul…, 78c7265 update: design updates, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts]
- "marketing_navbar": "navbar.tsx" | kind=code-symbol | source=src/components/marketing/navbar.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, layout.tsx]
- "marketing_tech_stack": "tech-stack.tsx" | kind=code-symbol | source=src/components/marketing/tech-stack.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 71ae643 feat: complete product overhaul…, 78c7265 update: design updates, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts]
- "playground_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/playground/page.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 89988d0 full dashboard redesign, README…, stack-explorer.tsx, StackExplorer(), auth.ts, db.ts]
- "profile_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/settings/profile/page.tsx:L1 | neighbors=[343228b feat(auth): add account deletio…, 4384d32 docs: complete documentation su…, 89988d0 full dashboard redesign, README…, delete-account-button.tsx, DeleteAccountButton(), profile-form.tsx]
- "scripts_core_bm25_tokenize": ".tokenize()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L296 | neighbors=[BM25, .fit(), .score(), _normalize(), _query_coverage(), Lowercase, normalize synonyms, split, r…]
- "types_index": "index.ts" | kind=code-symbol | source=src/types/index.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, ApiResponse, AuthUser, MemberWithUser, NavItem, OrganizationWithSubscription]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@50fa99dcde64dc63cc9636fd72ef6d130368787d": "50fa99d feat: streamline logged-in checkout redirect, rename overview tab, spli…" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, c759e87 feat: add open-code-review AI s…, page.tsx, auth.config.ts, pricing-card.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a25ec19d154a62d5c1c68b55e473e835c28220bd": "a25ec19 fix: resolve plan name mismatches and add DB variant migration script" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 2f7914d chore: untrack and ignore BRAND…, page.tsx, sidebar.tsx, layout.tsx]
- "dashboard_overview": "overview.tsx" | kind=code-symbol | source=src/components/dashboard/overview.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, Overview(), card.tsx, Card, CardContent, CardHeader]
- "factories_index_createmockuser": "createMockUser()" | kind=code-symbol | source=tests/factories/index.ts:L40 | neighbors=[auth.test.ts, org.test.ts, index.ts, generateId(), createSubscribedScenario(), createTestScenario()]
- "fixtures_index": "index.ts" | kind=code-symbol | source=tests/fixtures/index.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, multiOrgScenarios, subscriptionStates, teamRoles, validationCases, webhookEvents]
- "lib_lemonsqueezy": "lemonsqueezy.ts" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L1 | neighbors=[billing-actions.ts, 259b106 feat: complete LemonSqueezy int…, d49750b feat: complete product overhaul…, route.ts, createCheckoutSession(), ensureInitialized()]
- "lib_stripe_getstripe": "getStripe()" | kind=code-symbol | source=src/lib/stripe.ts:L10 | neighbors=[stripe.ts, cancelSubscriptionAtPeriodEnd(), createBillingPortalSession(), createCheckoutSession(), createCustomer(), getSubscription()]
- "marketing_value_proposition": "value-proposition.tsx" | kind=code-symbol | source=src/components/marketing/value-proposition.tsx:L1 | neighbors=[78c7265 update: design updates, be8086c feat: complete UI unslop, redes…, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, page.tsx]
- "mocks_prisma_mockprisma": "mockPrisma" | kind=code-symbol | source=tests/mocks/prisma.ts:L33 | neighbors=[auth.test.ts, github.test.ts, org.test.ts, subscription.test.ts, prisma.ts, authorization.test.ts]
- "mocks_prisma_resetprismamocks": "resetPrismaMocks()" | kind=code-symbol | source=tests/mocks/prisma.ts:L78 | neighbors=[auth.test.ts, github.test.ts, org.test.ts, subscription.test.ts, prisma.ts, authorization.test.ts]
- "pricing_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/pricing/page.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 50fa99d feat: streamline logged-in chec…, 71ae643 feat: complete product overhaul…, d49750b feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, pricing-card.tsx]
- "scripts_core_rewrite_query_for_domain": "_rewrite_query_for_domain()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L595 | neighbors=[core.py, Apply only explicit, semantic rewrites …, .tokenize(), .vocabulary(), _contains_phrase(), _domain_keywords()]
- "tests_test_core": "test_core.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, TestBm25CoreBehavior, TestDiagnosticsContracts, TestDomainDetection, TestPersistence, TestReasoningMatch]
- "tests_test_core_testtokenizer": "TestTokenizer" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L31 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_boundary_safe_nav_normalization_p…, .test_punctuation_and_uk_variants_norma…, .test_short_domain_terms_are_kept()]
- "tests_test_data_contracts": "test_data_contracts.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, read_rows(), split_values(), style_identities(), TestGeneratedCatalogContract, TestLandingAndStackContract]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-002.json

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
