# Node Description Batch 2 of 24

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

- "lib_subscription_test": "subscription.test.ts" | kind=code-symbol | source=tests/unit/lib/subscription.test.ts:L1 | neighbors=[373b817 feat: architectural refactor fo…, 7252c33 fix: resolve failing tests from…, 93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, index.ts, createMockOrganization()]
- "scripts_setup": "setup.js" | kind=code-symbol | source=scripts/setup.js:L1 | neighbors=[16fab98 feat: product evolution sprint …, 1f93fc1 fix: remove fragile cursor and …, 259b106 feat: complete LemonSqueezy int…, 2f26f3c feat: add clickable IDE termina…, 71ae643 feat: complete product overhaul…, 7cf3551 fix: make setup command 100% cr…]
- "tests_test_catalog_refresh_catalogrefreshtest": "CatalogRefreshTest" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L24 | neighbors=[test_catalog_refresh.py, .font_args(), .icon_args(), .run_command(), .test_catalog_cross_check_uses_explicit…, .test_catalog_rejects_bool_rank_duplica…]
- "tests_test_core_testdomaindetection": "TestDomainDetection" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L202 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_accessibility_keywords_route_to_u…, .test_ambiguous_query_returns_runner_up…, .test_empty_query_falls_back_to_style()]
- "tests_test_core_testsearchdomains": "TestSearchDomains" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L113 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_accessibility_query_hits_ux(), .test_chart_output_keeps_legacy_grade_d…, .test_every_configured_domain_file_exis…]
- "tests_test_data_contracts_read_rows": "read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L25 | neighbors=[test_data_contracts.py, .test_curated_icon_and_summary_drift_fa…, .test_font_license_and_typography_drift…, .test_font_source_revision_and_exclusio…, .test_landing_sections_use_one_delimite…, .test_provenance_rejects_bad_shapes_enu…]
- "tests_test_data_contracts_testreasoningcontract": "TestReasoningContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L87 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .test_canonical_style_priority_is_not_l…, .test_constraints_reach_domain_queries(), .test_decision_rules_use_closed_array_g…, .test_duplicate_semantic_reasoning_labe…]
- "ui_login_form": "login-form.tsx" | kind=code-symbol | source=src/components/ui/login-form.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, edc8b80 refactor: cleanup debug logs an…, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@be8086c9fd88d2d053b3eef52070b317774ab7e4": "be8086c feat: complete UI unslop, redesign landing page, and integrate github O…" | kind=Commit | source=git | neighbors=[github.ts, org-actions.ts, feature/auros-theme, main, cb974c5 chore: revamp dashboard onboard…, github-connection-card.tsx]
- "mocks_prisma": "prisma.ts" | kind=code-symbol | source=tests/mocks/prisma.ts:L1 | neighbors=[auth.test.ts, github.test.ts, org.test.ts, 93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, subscription.test.ts]
- "ui_register_form": "register-form.tsx" | kind=code-symbol | source=src/components/ui/register-form.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, edc8b80 refactor: cleanup debug logs an…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, page.tsx]
- "actions_billing_actions": "billing-actions.ts" | kind=code-symbol | source=src/actions/billing-actions.ts:L1 | neighbors=[createCheckout(), getSubscriptionDetails(), requireBillingPermission(), auth.ts, db.ts, lemonsqueezy.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@373b817fc0ab1bdc01027323c76290efbbdf2fa2": "373b817 feat: architectural refactor for deep modules, plugins, and interactive…" | kind=Commit | source=git | neighbors=[github-actions.ts, org-actions.ts, feature/auros-theme, main, 3a0cfe8 fix: restore knowledge-graph-vi…, subscription.test.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@89988d025673502cee70431c76b9a92d73810740": "89988d0 full dashboard redesign, README update, free plan update and builder pl…" | kind=Commit | source=git | neighbors=[page.tsx, feature/auros-theme, main, bf72399 Resolve merge conflict in READM…, page.tsx, sidebar.tsx]
- "marketing_hero": "hero.tsx" | kind=code-symbol | source=src/components/marketing/hero.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, 78c7265 update: design updates, b152a29 fix: update landing page and me…, be8086c feat: complete UI unslop, redes…]
- "tests_test_web_stack_freshness_testwebstackfreshness": "TestWebStackFreshness" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L37 | neighbors=[test_web_stack_freshness.py, .test_active_rows_use_the_verified_curr…, .test_common_old_major_syntaxes_select_…, .test_current_high_drift_queries_return…, .test_current_major_migration_query_sta…, .test_explicit_old_major_uses_only_cura…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@58714344fd467a6c0fe260ca7a1e3192e14664ba": "5871434 fix: fixed 'Get Instant Access' button, and migrated the test suites to…" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, d509f85 fix: fixed GitHub username card…, auth.setup.ts, auth.spec.ts, billing.spec.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@d49750b730aa99f8f83b21eab6e769eb06ce6adf": "d49750b feat: complete product overhaul (ShipOnClick rebranding, premium docs p…" | kind=Commit | source=git | neighbors=[5c2866e chore: setup Sentry and clean u…, page.tsx, feature/auros-theme, main, 7cf3551 fix: make setup command 100% cr…, page.tsx]
- "dashboard_members_table": "members-table.tsx" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, a50344d design: apply premium UI polish…, org-actions.ts, removeMember(), revokeInvite(), updateMemberRole()]
- "marketing_footer": "footer.tsx" | kind=code-symbol | source=src/components/marketing/footer.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, 4384d32 docs: complete documentation su…, 6684611 features: added: legal files, f…, 71ae643 feat: complete product overhaul…, d49750b feat: complete product overhaul…, f2af8ac checkpoint: before 3D backgroun…]
- "scripts_core_normalize": "_normalize()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L273 | neighbors=[core.py, .tokenize(), detect_domain(), _exact_match_diagnostic(), _legacy_successor_guidance(), Apply longest-first synonym substitutio…]
- "scripts_validate_data_validate": "validate()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L999 | neighbors=[validate_data.py, main(), Return every semantic data problem with…, _check_catalog_contract(), _check_core_data_contract(), _check_file()]
- "tests_test_catalog_refresh_catalogrefreshtest_run_command": ".run_command()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L25 | neighbors=[CatalogRefreshTest, .test_catalog_cross_check_uses_explicit…, .test_catalog_rejects_bool_rank_duplica…, .test_exclusion_sources_match_offline_v…, .test_explicit_license_exclusion_is_rep…, .test_font_refresh_fails_closed_on_conc…]
- "ui_card": "card.tsx" | kind=code-symbol | source=src/components/ui/card.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, f6172b0 feat: UI/UX overhaul, modern de…, overview.tsx, plasmic.ts, utils.ts, cn()]
- "actions_github": "github.ts" | kind=code-symbol | source=src/app/actions/github.ts:L1 | neighbors=[claimGithubRepository(), getUsernameById(), auth.ts, db.ts, subscription.ts, requireActiveSubscription()]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8161816a69e6f7e22789b1d4640480a57d147b0f": "8161816 feat: pivot to open-core strategy, dashboard github connection flow, an…" | kind=Commit | source=git | neighbors=[github-actions.ts, page.tsx, feature/auros-theme, main, 7252c33 fix: resolve failing tests from…, github-connection-card.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f03e200ff69c3ae103a1e627a67cceb61ecc7f00": "f03e200 fix: add untracked files" | kind=Commit | source=git | neighbors=[6684611 features: added: legal files, f…, feedback-actions.ts, feature/auros-theme, main, 28ddf7f fix: zod error issues property, feedback-loop.spec.ts]
- "dashboard_github_connection_card": "github-connection-card.tsx" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L1 | neighbors=[8161816 feat: pivot to open-core strate…, be8086c feat: complete UI unslop, redes…, cb974c5 chore: revamp dashboard onboard…, github-connection-card.test.tsx, github.ts, claimGithubRepository()]
- "dashboard_knowledge_graph_viewer": "knowledge-graph-viewer.tsx" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L1 | neighbors=[3a0cfe8 fix: restore knowledge-graph-vi…, 6199608 feat: integrate Graphify knowle…, a50344d design: apply premium UI polish…, f2af8ac checkpoint: before 3D backgroun…, COMMUNITY_COLORS, Edge]
- "lemonsqueezy_route": "route.ts" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, handleOrderCreated(), handleSubscriptionCancelled(), handleSubscriptionCreated(), handleSubscriptionUpdated(), mapLSStatus()]
- "lib_utils": "utils.ts" | kind=code-symbol | source=src/lib/utils.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, page.tsx, absoluteUrl(), cn(), formatCurrency(), formatDate()]
- "marketing_codebase_explorer": "codebase-explorer.tsx" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L1 | neighbors=[6684611 features: added: legal files, f…, be8086c feat: complete UI unslop, redes…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, ChevronIcon(), CodebaseExplorer()]
- "marketing_faq": "faq.tsx" | kind=code-symbol | source=src/components/marketing/faq.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, 78c7265 update: design updates, be8086c feat: complete UI unslop, redes…, d49750b feat: complete product overhaul…, f2af8ac checkpoint: before 3D backgroun…]
- "marketing_layout": "layout.tsx" | kind=code-symbol | source=src/app/(marketing)/layout.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, 78c7265 update: design updates, f2af8ac checkpoint: before 3D backgroun…, aurora-background.tsx, AuroraBackground()]
- "orgid_layout": "layout.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/layout.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 89988d0 full dashboard redesign, README…, a25ec19 fix: resolve plan name mismatch…, sidebar.tsx, DashboardSidebar(), MobileSidebar()]
- "scripts_core_search_csv_detailed": "_search_csv_detailed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L414 | neighbors=[core.py, Calibrated search returning results, in…, search(), _search_csv(), .score(), _get_bm25()]
- "scripts_core_search_stack": "search_stack()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L951 | neighbors=[core.py, Search stack-specific guidelines, _exact_match_diagnostic(), _exact_stack_identifier(), _legacy_successor_guidance(), _load_rows_or_empty()]
- "scripts_design_system_designsystemgenerator_generate": ".generate()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L449 | neighbors=[DesignSystemGenerator, ._apply_reasoning(), ._extract_results(), ._multi_domain_search(), ._select_best_match(), _filter_anti_patterns_for_mode()]
- "scripts_validate_data_check_core_data_contract": "_check_core_data_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L765 | neighbors=[validate_data.py, _check_app_interface_contract(), _check_chart_contract(), _check_color_contract(), _check_icon_contract(), _check_landing_claims()]
- "tests_test_core_data_quality_read_rows": "read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L34 | neighbors=[test_core_data_quality.py, .test_motion_recipes_offer_reduced_moti…, .test_native_and_web_target_sizes_remai…, .test_wcag_22_topics_have_explicit_rows…, .test_chart_risk_is_not_a_conformance_g…, .test_icon_semantics_are_explicit_and_i…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-001.json

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
