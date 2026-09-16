# Node Description Batch 2 of 23

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@6684611bc0ffe63f0fac38bae24f33dab1d85ae3": "6684611 features: added: legal files, footer buttons functionality, github user…" | kind=Commit | source=git | neighbors=[github-actions.ts, layout.tsx, page.tsx, main, f03e200 fix: add untracked files, stack-explorer.tsx]
- "lib_subscription_test": "subscription.test.ts" | kind=code-symbol | source=tests/unit/lib/subscription.test.ts:L1 | neighbors=[7252c33 fix: resolve failing tests from…, 93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, index.ts, createMockOrganization(), createMockOrganizationWithSubscription()]
- "mocks_prisma": "prisma.ts" | kind=code-symbol | source=tests/mocks/prisma.ts:L1 | neighbors=[auth.test.ts, org.test.ts, 93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, subscription.test.ts, index.ts]
- "tests_test_web_stack_freshness_testwebstackfreshness": "TestWebStackFreshness" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L37 | neighbors=[test_web_stack_freshness.py, .test_active_rows_use_the_verified_curr…, .test_common_old_major_syntaxes_select_…, .test_current_high_drift_queries_return…, .test_current_major_migration_query_sta…, .test_explicit_old_major_uses_only_cura…]
- "ui_login_form": "login-form.tsx" | kind=code-symbol | source=src/components/ui/login-form.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, edc8b80 refactor: cleanup debug logs an…, f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, auth-actions.ts]
- "ui_register_form": "register-form.tsx" | kind=code-symbol | source=src/components/ui/register-form.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, edc8b80 refactor: cleanup debug logs an…, f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, auth-actions.ts]
- "actions_billing_actions": "billing-actions.ts" | kind=code-symbol | source=src/actions/billing-actions.ts:L1 | neighbors=[createCheckout(), getSubscriptionDetails(), requireBillingPermission(), auth.ts, db.ts, lemonsqueezy.ts]
- "actions_github_actions": "github-actions.ts" | kind=code-symbol | source=src/actions/github-actions.ts:L1 | neighbors=[requestGithubAccess(), updateGithubUsername(), auth.ts, db.ts, github.ts, inviteUserToRepo()]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@89988d025673502cee70431c76b9a92d73810740": "89988d0 full dashboard redesign, README update, free plan update and builder pl…" | kind=Commit | source=git | neighbors=[page.tsx, main, bf72399 Resolve merge conflict in READM…, page.tsx, sidebar.tsx, stack-explorer.tsx]
- "scripts_core_normalize": "_normalize()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L273 | neighbors=[core.py, .tokenize(), detect_domain(), _exact_match_diagnostic(), _legacy_successor_guidance(), Apply longest-first synonym substitutio…]
- "scripts_validate_data_validate": "validate()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L999 | neighbors=[validate_data.py, main(), Return every semantic data problem with…, _check_catalog_contract(), _check_core_data_contract(), _check_file()]
- "tests_test_catalog_refresh_catalogrefreshtest_run_command": ".run_command()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L25 | neighbors=[CatalogRefreshTest, .test_catalog_cross_check_uses_explicit…, .test_catalog_rejects_bool_rank_duplica…, .test_exclusion_sources_match_offline_v…, .test_explicit_license_exclusion_is_rep…, .test_font_refresh_fails_closed_on_conc…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@58714344fd467a6c0fe260ca7a1e3192e14664ba": "5871434 fix: fixed 'Get Instant Access' button, and migrated the test suites to…" | kind=Commit | source=git | neighbors=[main, d509f85 fix: fixed GitHub username card…, auth.setup.ts, auth.spec.ts, billing.spec.ts, capture-screenshots.spec.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8161816a69e6f7e22789b1d4640480a57d147b0f": "8161816 feat: pivot to open-core strategy, dashboard github connection flow, an…" | kind=Commit | source=git | neighbors=[github-actions.ts, page.tsx, main, 7252c33 fix: resolve failing tests from…, github-connection-card.tsx, new-project-modal.tsx]
- "lemonsqueezy_route": "route.ts" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, handleOrderCreated(), handleSubscriptionCancelled(), handleSubscriptionCreated(), handleSubscriptionUpdated(), mapLSStatus()]
- "marketing_pricing_card": "pricing-card.tsx" | kind=code-symbol | source=src/components/marketing/pricing-card.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 5871434 fix: fixed 'Get Instant Access'…, 6684611 features: added: legal files, f…, 71ae643 feat: complete product overhaul…, 8161816 feat: pivot to open-core strate…, 9e67322 fix: auth security, billing che…]
- "scripts_core_search_csv_detailed": "_search_csv_detailed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L414 | neighbors=[core.py, Calibrated search returning results, in…, search(), _search_csv(), .score(), _get_bm25()]
- "scripts_core_search_stack": "search_stack()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L951 | neighbors=[core.py, Search stack-specific guidelines, _exact_match_diagnostic(), _exact_stack_identifier(), _legacy_successor_guidance(), _load_rows_or_empty()]
- "scripts_design_system_designsystemgenerator_generate": ".generate()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L449 | neighbors=[DesignSystemGenerator, ._apply_reasoning(), ._extract_results(), ._multi_domain_search(), ._select_best_match(), _filter_anti_patterns_for_mode()]
- "scripts_validate_data_check_core_data_contract": "_check_core_data_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L765 | neighbors=[validate_data.py, _check_app_interface_contract(), _check_chart_contract(), _check_color_contract(), _check_icon_contract(), _check_landing_claims()]
- "tests_test_core_data_quality_read_rows": "read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L34 | neighbors=[test_core_data_quality.py, .test_motion_recipes_offer_reduced_moti…, .test_native_and_web_target_sizes_remai…, .test_wcag_22_topics_have_explicit_rows…, .test_chart_risk_is_not_a_conformance_g…, .test_icon_semantics_are_explicit_and_i…]
- "ui_card": "card.tsx" | kind=code-symbol | source=src/components/ui/card.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, f6172b0 feat: UI/UX overhaul, modern de…, overview.tsx, utils.ts, cn(), Card]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@9e673222d1ea06628d8496f1802e05de463b55ca": "9e67322 fix: auth security, billing checkout, RLS, plan gating, CLI command" | kind=Commit | source=git | neighbors=[259b106 feat: complete LemonSqueezy int…, main, b736ebb fix(billing): client side redir…, new-project-modal.tsx, page.tsx, projects-dashboard.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f03e200ff69c3ae103a1e627a67cceb61ecc7f00": "f03e200 fix: add untracked files" | kind=Commit | source=git | neighbors=[6684611 features: added: legal files, f…, feedback-actions.ts, main, 28ddf7f fix: zod error issues property, feedback-loop.spec.ts, github-invite.spec.ts]
- "dashboard_members_table": "members-table.tsx" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, org-actions.ts, removeMember(), revokeInvite(), updateMemberRole(), Invite]
- "lib_stripe": "stripe.ts" | kind=code-symbol | source=src/lib/stripe.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, cancelSubscriptionAtPeriodEnd(), createBillingPortalSession(), createCheckoutSession(), createCustomer(), getStripe()]
- "lib_utils": "utils.ts" | kind=code-symbol | source=src/lib/utils.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, absoluteUrl(), cn(), formatCurrency(), formatDate(), slugify()]
- "marketing_codebase_explorer": "codebase-explorer.tsx" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L1 | neighbors=[6684611 features: added: legal files, f…, f6172b0 feat: UI/UX overhaul, modern de…, ChevronIcon(), CodebaseExplorer(), FileIcon(), fileSystem]
- "orgid_layout": "layout.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/layout.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 89988d0 full dashboard redesign, README…, sidebar.tsx, DashboardSidebar(), MobileSidebar(), auth.ts]
- "tests_test_catalog_refresh_catalogrefreshtest_font_args": ".font_args()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L35 | neighbors=[CatalogRefreshTest, .test_catalog_cross_check_uses_explicit…, .test_catalog_rejects_bool_rank_duplica…, .test_exclusion_sources_match_offline_v…, .test_explicit_license_exclusion_is_rep…, .test_font_refresh_fails_closed_on_conc…]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness": "TestNativeDesktopStackFreshness" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L30 | neighbors=[test_native_desktop_stack_freshness.py, .test_current_mobile_contracts(), .test_current_threejs_uses_supported_mo…, .test_deprecated_symbols_are_not_recomm…, .test_high_impact_rows_use_official_sou…, .test_migration_intent_returns_current_…]
- "tests_test_style_taxonomy_teststyletaxonomy": "TestStyleTaxonomy" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L24 | neighbors=[test_style_taxonomy.py, .setUpClass(), .test_claim_fields_use_controlled_non_g…, .test_curated_state_distribution_is_exp…, .test_deprecated_rows_never_appear_in_g…, .test_every_style_name_and_alias_has_a_…]
- "factories_index_createmockmember": "createMockMember()" | kind=code-symbol | source=tests/factories/index.ts:L123 | neighbors=[org.test.ts, index.ts, createMockAdmin(), createMockBillingMember(), generateId(), createMockOwner()]
- "factories_index_createmockorganization": "createMockOrganization()" | kind=code-symbol | source=tests/factories/index.ts:L76 | neighbors=[org.test.ts, index.ts, generateId(), createMockOrganizationWithSubscription(), createTestScenario(), subscription.test.ts]
- "login_page": "page.tsx" | kind=code-symbol | source=src/app/(auth)/login/page.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, 8258cee fix: await searchParams in logi…, f6172b0 feat: UI/UX overhaul, modern de…, LoginPage(), RegisteredMessage()]
- "marketing_navbar": "navbar.tsx" | kind=code-symbol | source=src/components/marketing/navbar.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, layout.tsx, utils.ts, cn()]
- "profile_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/settings/profile/page.tsx:L1 | neighbors=[343228b feat(auth): add account deletio…, 4384d32 docs: complete documentation su…, 89988d0 full dashboard redesign, README…, delete-account-button.tsx, DeleteAccountButton(), profile-form.tsx]
- "scripts_core_bm25_tokenize": ".tokenize()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L296 | neighbors=[BM25, .fit(), .score(), _normalize(), _query_coverage(), Lowercase, normalize synonyms, split, r…]
- "scripts_setup": "setup.js" | kind=code-symbol | source=scripts/setup.js:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 71ae643 feat: complete product overhaul…, { execSync }, fs, main(), path]
- "settings_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/page.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 89988d0 full dashboard redesign, README…, invite-form.tsx, InviteForm(), members-table.tsx, MembersTable()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-001.json

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
