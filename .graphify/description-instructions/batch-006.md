# Node Description Batch 7 of 23

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

- "scripts_design_system_designsystemgenerator_select_best_match": "._select_best_match()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L408 | neighbors=[DesignSystemGenerator, .generate(), ._resolve_style(), Select best matching result based on pr…] | lang=en
- "scripts_design_system_format_page_override_md": "format_page_override_md()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1381 | neighbors=[design_system.py, _generate_intelligent_overrides(), persist_design_system(), Format a page-specific override file wi…] | lang=en
- "scripts_design_system_generate_intelligent_overrides": "_generate_intelligent_overrides()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1490 | neighbors=[design_system.py, format_page_override_md(), _detect_page_type(), Generate intelligent overrides based on…] | lang=en
- "scripts_design_system_palette_is_dark": "_palette_is_dark()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L147 | neighbors=[design_system.py, _relative_luminance(), True when a colors.csv row's Background…, _select_palette_for_mode()] | lang=en
- "scripts_design_system_relative_luminance": "_relative_luminance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L129 | neighbors=[design_system.py, _contrast_ratio(), _palette_is_dark(), WCAG relative luminance of a #RRGGBB st…] | lang=en
- "scripts_validate_data_catalog_date": "_catalog_date()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L504 | neighbors=[validate_data.py, _check_catalog_summary(), _check_font_catalog(), _check_phosphor_catalog()] | lang=en
- "scripts_validate_data_check_catalog_summary": "_check_catalog_summary()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L635 | neighbors=[validate_data.py, _check_catalog_contract(), _catalog_date(), _read_rows()] | lang=en
- "scripts_validate_data_check_stack_freshness_contract": "_check_stack_freshness_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L801 | neighbors=[validate_data.py, _valid_date(), Validate curated-stack applicability an…, validate()] | lang=en
- "scripts_validate_data_contrast_ratio": "contrast_ratio()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L157 | neighbors=[validate_data.py, _check_color_contract(), _relative_luminance(), Return WCAG contrast for two opaque six…] | lang=en
- "scripts_validate_data_valid_date": "_valid_date()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L212 | neighbors=[validate_data.py, _check_provenance(), _check_stack_freshness_contract(), validate()] | lang=en
- "stripe_route_getsubscriptionid": "getSubscriptionId()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L119 | neighbors=[route.ts, handleCheckoutCompleted(), handleInvoicePaymentFailed(), handleInvoicePaymentSucceeded()] | lang=en
- "stripe_route_handleinvoicepaymentsucceeded": "handleInvoicePaymentSucceeded()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L276 | neighbors=[route.ts, getSubscriptionData(), getSubscriptionId(), POST()] | lang=en
- "tests_test_core_data_quality_testaccessibilityguidance": "TestAccessibilityGuidance" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L57 | neighbors=[test_core_data_quality.py, .test_motion_recipes_offer_reduced_moti…, .test_native_and_web_target_sizes_remai…, .test_wcag_22_topics_have_explicit_rows…] | lang=en
- "tests_test_data_contracts_split_values": "split_values()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L30 | neighbors=[test_data_contracts.py, style_identities(), .test_every_product_and_reasoning_style…, .test_ids_aliases_status_and_parents_ar…] | lang=en
- "tests_test_data_contracts_testgeneratedcatalogcontract_load_json": ".load_json()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L356 | neighbors=[TestGeneratedCatalogContract, .test_curated_icon_and_summary_drift_fa…, .test_font_license_and_typography_drift…, .test_font_source_revision_and_exclusio…] | lang=en
- "tests_test_data_contracts_teststyleidentitycontract_test_every_product_and_reasoning_style_reference_resolves": ".test_every_product_and_reasoning_style_reference_resolves()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L66 | neighbors=[TestStyleIdentityContract, read_rows(), split_values(), style_identities()] | lang=en
- "tests_test_native_desktop_stack_freshness_rows": "_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L24 | neighbors=[test_native_desktop_stack_freshness.py, .test_deprecated_symbols_are_not_recomm…, .test_high_impact_rows_use_official_sou…, .test_rows_have_final_freshness_metadat…] | lang=en
- "tests_test_relevance_evaluator": "test_relevance_evaluator.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, TestFixtureValidation, TestMetricMath, TestThresholdGate] | lang=en
- "tests_test_relevance_evaluator_testfixturevalidation": "TestFixtureValidation" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L46 | neighbors=[test_relevance_evaluator.py, .test_rejects_bad_count_duplicate_id_an…, .test_valid_schema(), .valid_fixture()] | lang=en
- "tests_test_text_layout_resilience": "test_text_layout_resilience.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval] | lang=en
- "ui_logo_logo": "Logo()" | kind=code-symbol | source=src/components/ui/logo.tsx:L3 | neighbors=[page.tsx, footer.tsx, navbar.tsx, logo.tsx] | lang=en
- "webhooks_helpers_test": "helpers.test.ts" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, getCustomerId(), getSubscriptionId(), mapStripeStatus()] | lang=en
- "actions_auth_actions_authenticate": "authenticate()" | kind=code-symbol | source=src/actions/auth-actions.ts:L48 | neighbors=[auth-actions.ts, auth.test.ts, login-form.tsx] | lang=en
- "actions_auth_actions_loginwithgithub": "loginWithGithub()" | kind=code-symbol | source=src/actions/auth-actions.ts:L194 | neighbors=[auth-actions.ts, login-form.tsx, register-form.tsx] | lang=en
- "actions_auth_actions_loginwithgoogle": "loginWithGoogle()" | kind=code-symbol | source=src/actions/auth-actions.ts:L190 | neighbors=[auth-actions.ts, login-form.tsx, register-form.tsx] | lang=en
- "actions_org_actions_acceptinvite": "acceptInvite()" | kind=code-symbol | source=src/actions/org-actions.ts:L144 | neighbors=[org-actions.ts, org.test.ts, page.tsx] | lang=en
- "actions_org_actions_revokeinvite": "revokeInvite()" | kind=code-symbol | source=src/actions/org-actions.ts:L111 | neighbors=[org-actions.ts, org.test.ts, members-table.tsx] | lang=en
- "actions_user_actions_updateuserprofile": "updateUserProfile()" | kind=code-symbol | source=src/actions/user-actions.ts:L7 | neighbors=[user-actions.ts, profile-form.tsx, input-validation.test.ts] | lang=en
- "auth_validation_test": "validation.test.ts" | kind=code-symbol | source=tests/unit/auth/validation.test.ts:L1 | neighbors=[CredentialsSchema, RegisterSchema, 93038a6 docs: update DEVELOPMENT.md and…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@14d2b759d7602e0ed8ba3ba8b4a98568fde9f1ca": "14d2b75 fix: update image paths in docs/INTRODUCTION.md" | kind=Commit | source=git | neighbors=[main, 6199608 feat: integrate Graphify knowle…, ba7152d chore: consolidate documentatio…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@52bad2b47677e57af9128b27f0e418831b8aeac0": "52bad2b chore: remove build logs and update gitignore" | kind=Commit | source=git | neighbors=[4384d32 docs: complete documentation su…, main, 93038a6 docs: update DEVELOPMENT.md and…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a1f6395338e97cf397bff0021732c31bd01ece6f": "a1f6395 fix: add postgres service and prisma db push to github actions workflow" | kind=Commit | source=git | neighbors=[3e27e7e fix: update e2e auth setup to e…, main, 0b2cca8 fix: seed database in CI and us…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@ba7152dc18fd1191c0e45157524fa9d8d2782939": "ba7152d chore: consolidate documentation into docs/ folder" | kind=Commit | source=git | neighbors=[main, 14d2b75 fix: update image paths in docs…, f957e38 docs: remove license section an…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@eee52de6ff609864649bd05a80a80903137b7ffd": "eee52de Update README.md" | kind=Commit | source=git | neighbors=[8c0c607 fix: allow email account linkin…, main, bf72399 Resolve merge conflict in READM…] | lang=nl
- "components_providers": "providers.tsx" | kind=code-symbol | source=src/components/providers.tsx:L1 | neighbors=[layout.tsx, 4384d32 docs: complete documentation su…, Providers()] | lang=en
- "dashboard_knowledge_graph_viewer_knowledgegraphviewer": "KnowledgeGraphViewer()" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L51 | neighbors=[knowledge-graph-viewer.tsx, getCommunityColor(), page.tsx] | lang=en
- "e2e_capture_screenshots_spec": "capture-screenshots.spec.ts" | kind=code-symbol | source=tests/e2e/capture-screenshots.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, bdf0787 docs: replace readme placeholde…, f957e38 docs: remove license section an…] | lang=en
- "e2e_mobile_spec": "mobile.spec.ts" | kind=code-symbol | source=tests/e2e/mobile.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…, cb6a41d fix: remove duplicate test.use …] | lang=en
- "eslint_config": "eslint.config.mjs" | kind=code-symbol | source=eslint.config.mjs:L1 | neighbors=[4384d32 docs: complete documentation su…, 9f800ea Initial commit from Create Next…, eslintConfig] | lang=en
- "factories_index_createexpiredinvite": "createExpiredInvite()" | kind=code-symbol | source=tests/factories/index.ts:L174 | neighbors=[org.test.ts, index.ts, createMockInvite()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-006.json

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
