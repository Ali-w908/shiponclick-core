# Node Description Batch 1 of 23

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

- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@4384d325ff7bb8433f728c32ab10dcdf3ef7a781": "4384d32 docs: complete documentation suite" | kind=Commit | source=git | neighbors=[auth-actions.ts, billing-actions.ts, org-actions.ts, user-actions.ts, layout.tsx, robots.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f6172b06454d01710e735452b5f931d9a2527e39": "f6172b0 feat: UI/UX overhaul, modern design system, and auth callback fixes" | kind=Commit | source=git | neighbors=[2e55ef2 fix: nextjs server action build…, auth-actions.ts, layout.tsx, page.tsx, main, 8c0c607 fix: allow email account linkin…]
- "branch:repo:github.com/Ali-w908/nextjs-saas-starter-kit#main": "main" | kind=Branch | source=git | neighbors=[0999f13 fix: resolve vercel build error…, 0b2cca8 fix: seed database in CI and us…, 0df7eda fix: handle nextjs redirect in …, 14d2b75 fix: update image paths in docs…, 259b106 feat: complete LemonSqueezy int…, 28ddf7f fix: zod error issues property]
- "scripts_validate_data": "validate_data.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, _catalog_date(), _check_app_interface_contract(), _check_catalog_contract(), _check_catalog_summary(), _check_chart_contract()]
- "scripts_core": "core.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, BM25, _contains_phrase(), detect_domain(), _domain_keywords(), _exact_match_diagnostic()]
- "scripts_design_system_designsystemgenerator": "DesignSystemGenerator" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L258 | neighbors=[design_system.py, ._apply_reasoning(), ._build_style_lookup(), ._extract_results(), ._find_reasoning_rule(), .generate()]
- "dashboard_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/dashboard/page.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, 8161816 feat: pivot to open-core strate…, 89988d0 full dashboard redesign, README…, 9e67322 fix: auth security, billing che…]
- "marketing_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/page.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 6684611 features: added: legal files, f…, 71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, agents-showcase.tsx, AgentsShowcase()]
- "lib_auth": "auth.ts" | kind=code-symbol | source=src/lib/auth.ts:L1 | neighbors=[auth-actions.ts, billing-actions.ts, feedback-actions.ts, github-actions.ts, org-actions.ts, user-actions.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@93038a63259733b10d1907633d77c307a151e886": "93038a6 docs: update DEVELOPMENT.md and .gitignore" | kind=Commit | source=git | neighbors=[52bad2b chore: remove build logs and up…, auth.test.ts, org.test.ts, validation.test.ts, main, 0999f13 fix: resolve vercel build error…]
- "dashboard_sidebar": "sidebar.tsx" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L1 | neighbors=[2e55ef2 fix: nextjs server action build…, 4384d32 docs: complete documentation su…, 6199608 feat: integrate Graphify knowle…, 71ae643 feat: complete product overhaul…, 89988d0 full dashboard redesign, README…, efb9145 fix: add logout button, github …]
- "actions_org_test": "org.test.ts" | kind=code-symbol | source=tests/integration/actions/org.test.ts:L1 | neighbors=[org-actions.ts, acceptInvite(), inviteUser(), removeMember(), revokeInvite(), updateMemberRole()]
- "factories_index": "index.ts" | kind=code-symbol | source=tests/factories/index.ts:L1 | neighbors=[auth.test.ts, org.test.ts, 93038a6 docs: update DEVELOPMENT.md and…, createExpiredInvite(), createMockAdmin(), createMockAuditLog()]
- "actions_auth_actions": "auth-actions.ts" | kind=code-symbol | source=src/actions/auth-actions.ts:L1 | neighbors=[authenticate(), deleteAccount(), ensureUniqueSlug(), generateSlug(), loginWithGithub(), loginWithGoogle()]
- "scripts_design_system": "design_system.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, ansi_ljust(), _contrast_ratio(), _derive_dark_palette(), DesignSystemGenerator, _detect_page_type()]
- "security_authorization_test": "authorization.test.ts" | kind=code-symbol | source=tests/security/authorization.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, billing-actions.ts, createCheckout(), org-actions.ts, inviteUser()]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@71ae6438e64f67308424b99fce56786b69919f6b": "71ae643 feat: complete product overhaul (ShipOnClick rebranding, premium landin…" | kind=Commit | source=git | neighbors=[page.tsx, main, 259b106 feat: complete LemonSqueezy int…, metadata.ts, new-project-modal.tsx, page.tsx]
- "mocks_stripe": "stripe.ts" | kind=code-symbol | source=tests/mocks/stripe.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, index.ts, billingPortal(), checkout(), createMockSubscription(), createMockWebhookEvent()]
- "security_input_validation_test": "input-validation.test.ts" | kind=code-symbol | source=tests/security/input-validation.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, auth-actions.ts, register(), user-actions.ts, updateUserProfile()]
- "lib_db": "db.ts" | kind=code-symbol | source=src/lib/db.ts:L1 | neighbors=[auth-actions.ts, billing-actions.ts, github-actions.ts, org-actions.ts, user-actions.ts, page.tsx]
- "scripts_core_search": "search()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L755 | neighbors=[core.py, _contains_phrase(), detect_domain(), _exact_stack_identifier(), _legacy_successor_guidance(), Main search function with auto-domain d…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@259b106211658c14d7586f37522e9c03601d1aa5": "259b106 feat: complete LemonSqueezy integration and zero-token agent onboarding" | kind=Commit | source=git | neighbors=[auth-actions.ts, billing-actions.ts, page.tsx, main, 9e67322 fix: auth security, billing che…, new-project-modal.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@efb91459d5f40490952d24dcf6c3698f06833a40": "efb9145 fix: add logout button, github auto invite" | kind=Commit | source=git | neighbors=[343228b feat(auth): add account deletio…, auth.test.ts, github-actions.ts, main, 0df7eda fix: handle nextjs redirect in …, new-project-modal.tsx]
- "mocks_auth": "auth.ts" | kind=code-symbol | source=tests/mocks/auth.ts:L1 | neighbors=[auth.test.ts, org.test.ts, 93038a6 docs: update DEVELOPMENT.md and…, createAuthenticatedUser(), createMockSession(), mockAuth]
- "actions_auth_test": "auth.test.ts" | kind=code-symbol | source=tests/integration/actions/auth.test.ts:L1 | neighbors=[auth-actions.ts, authenticate(), register(), constructor(), index.ts, createMockUser()]
- "billing_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/billing/page.tsx:L1 | neighbors=[billing-actions.ts, createCheckout(), getSubscriptionDetails(), BillingPage(), StatusBadge(), auth.ts]
- "lib_subscription": "subscription.ts" | kind=code-symbol | source=src/lib/subscription.ts:L1 | neighbors=[page.tsx, 259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, 6684611 features: added: legal files, f…, 71ae643 feat: complete product overhaul…, 8161816 feat: pivot to open-core strate…]
- "scripts_build_open_core": "build-open-core.js" | kind=code-symbol | source=scripts/build-open-core.js:L1 | neighbors=[d509f85 fix: fixed GitHub username card…, copyRecursiveSync(), destDir, excludedPatterns, excludedSpecificFiles, { execSync }]
- "scripts_core_bm25": "BM25" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L282 | neighbors=[core.py, .fit(), .__init__(), .score(), .tokenize(), .vocabulary()]
- "stripe_route": "route.ts" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, db.ts, stripe.ts, getStripe(), getCustomerId(), getSubscriptionData()]
- "webhooks_stripe_test": "stripe.test.ts" | kind=code-symbol | source=tests/integration/webhooks/stripe.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, index.ts, createMockAuditLog(), createMockOrganization(), createMockOrganizationWithSubscription(), index.ts]
- "actions_org_actions": "org-actions.ts" | kind=code-symbol | source=src/actions/org-actions.ts:L1 | neighbors=[acceptInvite(), inviteUser(), removeMember(), revokeInvite(), updateMemberRole(), auth.ts]
- "dashboard_new_project_modal": "new-project-modal.tsx" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 71ae643 feat: complete product overhaul…, 8161816 feat: pivot to open-core strate…, 9e67322 fix: auth security, billing che…, efb9145 fix: add logout button, github …, github-actions.ts]
- "dashboard_projects_dashboard": "projects-dashboard.tsx" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L1 | neighbors=[71ae643 feat: complete product overhaul…, 9e67322 fix: auth security, billing che…, efb9145 fix: add logout button, github …, f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, new-project-modal.tsx]
- "tests_test_catalog_refresh_catalogrefreshtest": "CatalogRefreshTest" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L24 | neighbors=[test_catalog_refresh.py, .font_args(), .icon_args(), .run_command(), .test_catalog_cross_check_uses_explicit…, .test_catalog_rejects_bool_rank_duplica…]
- "tests_test_core_testdomaindetection": "TestDomainDetection" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L202 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_accessibility_keywords_route_to_u…, .test_ambiguous_query_returns_runner_up…, .test_empty_query_falls_back_to_style()]
- "tests_test_core_testsearchdomains": "TestSearchDomains" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L113 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_accessibility_query_hits_ux(), .test_chart_output_keeps_legacy_grade_d…, .test_every_configured_domain_file_exis…]
- "tests_test_data_contracts_read_rows": "read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L25 | neighbors=[test_data_contracts.py, .test_curated_icon_and_summary_drift_fa…, .test_font_license_and_typography_drift…, .test_font_source_revision_and_exclusio…, .test_landing_sections_use_one_delimite…, .test_provenance_rejects_bad_shapes_enu…]
- "tests_test_data_contracts_testreasoningcontract": "TestReasoningContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L87 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .test_canonical_style_priority_is_not_l…, .test_constraints_reach_domain_queries(), .test_decision_rules_use_closed_array_g…, .test_duplicate_semantic_reasoning_labe…]
- "app_layout": "layout.tsx" | kind=code-symbol | source=src/app/layout.tsx:L1 | neighbors=[ibmPlexSans, jetbrainsMono, RootLayout(), providers.tsx, Providers(), metadata.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-000.json

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
