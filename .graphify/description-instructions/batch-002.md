# Node Description Batch 3 of 23

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

- "types_index": "index.ts" | kind=code-symbol | source=src/types/index.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, ApiResponse, AuthUser, MemberWithUser, NavItem, OrganizationWithSubscription]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@5c2866efb05fd40b53bf1b7bb3c889ddfee3c589": "5c2866e chore: setup Sentry and clean up example pages" | kind=Commit | source=git | neighbors=[global-error.tsx, main, next.config.ts, sentry.edge.config.ts, sentry.server.config.ts, instrumentation.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@bdf078793ce68cefe8a8b4c49d4e559c0e8e5d00": "bdf0787 docs: replace readme placeholders with real screenshots" | kind=Commit | source=git | neighbors=[main, f957e38 docs: remove license section an…, capture-screenshots.spec.ts, capture-screenshots.ts, check-users.ts, debug-registration.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@edc8b8052035661bd15402a33af60083b2b9857a": "edc8b80 refactor: cleanup debug logs and sync docs with auth changes" | kind=Commit | source=git | neighbors=[b152a29 fix: update landing page and me…, auth-actions.ts, main, bdf0787 docs: replace readme placeholde…, auth.ts, auth.config.ts]
- "dashboard_knowledge_graph_viewer": "knowledge-graph-viewer.tsx" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L1 | neighbors=[6199608 feat: integrate Graphify knowle…, COMMUNITY_COLORS, Edge, getCommunityColor(), GraphData, KnowledgeGraphViewer()]
- "dashboard_stack_explorer": "stack-explorer.tsx" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L1 | neighbors=[6684611 features: added: legal files, f…, 89988d0 full dashboard redesign, README…, CATEGORY_COLORS, CATEGORY_LABELS, STACK_NODES, StackExplorer()]
- "factories_index_createmockuser": "createMockUser()" | kind=code-symbol | source=tests/factories/index.ts:L40 | neighbors=[auth.test.ts, org.test.ts, index.ts, generateId(), createSubscribedScenario(), createTestScenario()]
- "fixtures_index": "index.ts" | kind=code-symbol | source=tests/fixtures/index.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, multiOrgScenarios, subscriptionStates, teamRoles, validationCases, webhookEvents]
- "lib_stripe_getstripe": "getStripe()" | kind=code-symbol | source=src/lib/stripe.ts:L10 | neighbors=[stripe.ts, cancelSubscriptionAtPeriodEnd(), createBillingPortalSession(), createCheckoutSession(), createCustomer(), getSubscription()]
- "marketing_footer": "footer.tsx" | kind=code-symbol | source=src/components/marketing/footer.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 6684611 features: added: legal files, f…, 71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, Footer(), logo.tsx]
- "playground_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/playground/page.tsx:L1 | neighbors=[89988d0 full dashboard redesign, README…, stack-explorer.tsx, StackExplorer(), auth.ts, db.ts, subscription.ts]
- "scripts_core_rewrite_query_for_domain": "_rewrite_query_for_domain()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L595 | neighbors=[core.py, Apply only explicit, semantic rewrites …, .tokenize(), .vocabulary(), _contains_phrase(), _domain_keywords()]
- "tests_test_core": "test_core.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, TestBm25CoreBehavior, TestDiagnosticsContracts, TestDomainDetection, TestPersistence, TestReasoningMatch]
- "tests_test_core_testtokenizer": "TestTokenizer" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L31 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_boundary_safe_nav_normalization_p…, .test_punctuation_and_uk_variants_norma…, .test_short_domain_terms_are_kept()]
- "tests_test_data_contracts": "test_data_contracts.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, read_rows(), split_values(), style_identities(), TestGeneratedCatalogContract, TestLandingAndStackContract]
- "tests_test_design_system_mode_testendtoendcoherence": "TestEndToEndCoherence" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L138 | neighbors=[test_design_system_mode.py, The exact reproduction from issue #428., DesignSystemGenerator, .test_dark_query_does_not_advise_agains…, .test_dark_query_foreground_is_lighter_…, .test_dark_query_gets_a_dark_background…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@343228ba2668d9e13e08fea3d84c48321e3aa4e3": "343228b feat(auth): add account deletion functionality with cascade deletes" | kind=Commit | source=git | neighbors=[auth-actions.ts, main, efb9145 fix: add logout button, github …, delete-account-button.tsx, page.tsx, test_ls.ts]
- "dashboard_github_connection_card": "github-connection-card.tsx" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L1 | neighbors=[8161816 feat: pivot to open-core strate…, github-actions.ts, updateGithubUsername(), GithubConnectionCard(), GithubConnectionCardProps, GithubIcon()]
- "dashboard_overview": "overview.tsx" | kind=code-symbol | source=src/components/dashboard/overview.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, Overview(), card.tsx, Card, CardContent, CardHeader]
- "factories_index_createmockorganizationwithsubscription": "createMockOrganizationWithSubscription()" | kind=code-symbol | source=tests/factories/index.ts:L97 | neighbors=[index.ts, createMockOrganization(), generateId(), createSubscribedScenario(), subscription.test.ts, authorization.test.ts]
- "factories_index_generateid": "generateId()" | kind=code-symbol | source=tests/factories/index.ts:L16 | neighbors=[index.ts, createMockAuditLog(), createMockInvite(), createMockMember(), createMockOrganization(), createMockOrganizationWithSubscription()]
- "lib_email": "email.ts" | kind=code-symbol | source=src/lib/email.ts:L1 | neighbors=[org-actions.ts, org.test.ts, 4384d32 docs: complete documentation su…, getResend(), sendInviteEmail(), SendInviteParams]
- "lib_lemonsqueezy": "lemonsqueezy.ts" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L1 | neighbors=[billing-actions.ts, 259b106 feat: complete LemonSqueezy int…, route.ts, createCheckoutSession(), ensureInitialized(), getSubscription()]
- "lib_utils_test": "utils.test.ts" | kind=code-symbol | source=tests/unit/lib/utils.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, utils.ts, absoluteUrl(), cn(), formatCurrency(), formatDate()]
- "marketing_hero": "hero.tsx" | kind=code-symbol | source=src/components/marketing/hero.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, b152a29 fix: update landing page and me…, f6172b0 feat: UI/UX overhaul, modern de…, commands, Hero()]
- "marketing_layout": "layout.tsx" | kind=code-symbol | source=src/app/(marketing)/layout.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, footer.tsx, Footer(), MarketingLayout(), navbar.tsx]
- "mocks_prisma_mockprisma": "mockPrisma" | kind=code-symbol | source=tests/mocks/prisma.ts:L33 | neighbors=[auth.test.ts, org.test.ts, subscription.test.ts, prisma.ts, authorization.test.ts, input-validation.test.ts]
- "mocks_prisma_resetprismamocks": "resetPrismaMocks()" | kind=code-symbol | source=tests/mocks/prisma.ts:L78 | neighbors=[auth.test.ts, org.test.ts, subscription.test.ts, prisma.ts, authorization.test.ts, input-validation.test.ts]
- "scripts_core_suggest_terms": "_suggest_terms()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L483 | neighbors=[core.py, Nearest known vocabulary terms for a qu…, search(), search_stack(), .tokenize(), .vocabulary()]
- "scripts_design_system_generate_design_system": "generate_design_system()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L919 | neighbors=[design_system.py, DesignSystemGenerator, .generate(), format_ascii_box(), format_markdown(), persist_design_system()]
- "scripts_design_system_persist_design_system": "persist_design_system()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L995 | neighbors=[design_system.py, generate_design_system(), format_master_md(), format_page_override_md(), safe_slug(), _write_persisted_file()]
- "scripts_validate_data_check_font_catalog": "_check_font_catalog()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L529 | neighbors=[validate_data.py, _check_catalog_contract(), _catalog_date(), _font_families(), _imported_weights(), _split()]
- "scripts_validate_data_check_provenance": "_check_provenance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L896 | neighbors=[validate_data.py, _valid_catalog_source_key(), _valid_confidence(), _valid_dataset_source_key(), _valid_date(), _valid_provenance_source()]
- "scripts_validate_data_check_typography_contract": "_check_typography_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L468 | neighbors=[validate_data.py, _check_core_data_contract(), _configured_font_names(), _declared_weights(), _font_families(), _font_names()]
- "tests_test_data_contracts_testgeneratedcatalogcontract": "TestGeneratedCatalogContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L355 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .load_json(), .test_canonical_catalogs_and_provenance…, .test_curated_icon_and_summary_drift_fa…, .test_font_license_and_typography_drift…]
- "tests_test_data_contracts_testlandingandstackcontract": "TestLandingAndStackContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L261 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .test_dataset_provenance_scope_binds_re…, .test_landing_sections_use_one_delimite…, .test_provenance_rejects_bad_shapes_enu…, .test_provenance_sidecar_has_stable_sha…]
- "tests_test_design_system_mode_testpaletteselection": "TestPaletteSelection" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L94 | neighbors=[test_design_system_mode.py, DesignSystemGenerator, .test_category_identity_wins_over_unrel…, .test_dark_mode_falls_back_to_top_hit_w…, .test_dark_mode_skips_light_palettes(), .test_empty_results()]
- "tests_test_relevance_evaluator_testthresholdgate": "TestThresholdGate" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L77 | neighbors=[test_relevance_evaluator.py, .test_manifest_binds_oracle_and_validat…, .test_manifest_rejects_missing_contract…, .test_manifest_rejects_non_finite_and_i…, .test_metric_sample_and_locked_case_fai…, .test_oracle_fingerprint_hashes_the_sel…]
- "actions_feedback_actions": "feedback-actions.ts" | kind=code-symbol | source=src/actions/feedback-actions.ts:L1 | neighbors=[feedbackSchema, submitFeedback(), auth.ts, 28ddf7f fix: zod error issues property, f03e200 fix: add untracked files, feedback-widget.tsx]
- "actions_user_actions": "user-actions.ts" | kind=code-symbol | source=src/actions/user-actions.ts:L1 | neighbors=[updateUserProfile(), auth.ts, db.ts, 4384d32 docs: complete documentation su…, profile-form.tsx, input-validation.test.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-002.json

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
