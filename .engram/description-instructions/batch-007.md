# Node Description Batch 8 of 24

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "lib_github": "github.ts" | kind=code-symbol | source=src/lib/github.ts:L1 | neighbors=[efb9145 fix: add logout button, github …, getOctokit(), inviteUserToRepo(), github-service.ts]
- "lib_subscription_getsubscriptionstatus": "getSubscriptionStatus()" | kind=code-symbol | source=src/lib/subscription.ts:L13 | neighbors=[subscription.ts, hasSubscriptionPlan(), requireActiveSubscription(), subscription.test.ts]
- "marketing_pricing_card_pricingcard": "PricingCard()" | kind=code-symbol | source=src/components/marketing/pricing-card.tsx:L5 | neighbors=[plasmic.ts, page.tsx, pricing-card.tsx, page.tsx]
- "mocks_auth_setmocksession": "setMockSession()" | kind=code-symbol | source=tests/mocks/auth.ts:L81 | neighbors=[org.test.ts, auth.ts, authorization.test.ts, input-validation.test.ts]
- "mocks_auth_setunauthenticated": "setUnauthenticated()" | kind=code-symbol | source=tests/mocks/auth.ts:L88 | neighbors=[auth.test.ts, org.test.ts, auth.ts, authorization.test.ts]
- "mocks_index": "index.ts" | kind=code-symbol | source=tests/mocks/index.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, auth.ts, prisma.ts, stripe.ts]
- "next_config": "next.config.ts" | kind=code-symbol | source=next.config.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, 5c2866e chore: setup Sentry and clean u…, 9f800ea Initial commit from Create Next…, nextConfig]
- "organization_member_service": "member-service.ts" | kind=code-symbol | source=src/domain/organization/member-service.ts:L1 | neighbors=[org-actions.ts, 373b817 feat: architectural refactor fo…, db.ts, MemberService]
- "organization_member_service_memberservice": "MemberService" | kind=code-symbol | source=src/domain/organization/member-service.ts:L4 | neighbors=[org-actions.ts, member-service.ts, .removeMember(), .updateMemberRole()]
- "plasmic_host_page": "page.tsx" | kind=code-symbol | source=src/app/plasmic-host/page.tsx:L1 | neighbors=[f2af8ac checkpoint: before 3D backgroun…, plasmic.ts, PLASMIC, PlasmicHostPage()]
- "privacy_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/privacy/page.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, f03e200 fix: add untracked files, metadata, PrivacyPolicyPage()]
- "scripts_core_bm25_fit": ".fit()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L302 | neighbors=[BM25, .tokenize(), _get_bm25(), Build BM25 index from documents]
- "scripts_core_contains_phrase": "_contains_phrase()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L589 | neighbors=[core.py, search(), detect_domain(), _rewrite_query_for_domain()]
- "scripts_core_exact_match_diagnostic": "_exact_match_diagnostic()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L721 | neighbors=[core.py, _normalize(), search(), search_stack()]
- "scripts_core_exact_row_identity": "_exact_row_identity()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L695 | neighbors=[core.py, _row_identities(), Return one row whose stable public iden…, search()]
- "scripts_core_exact_stack_identifier": "_exact_stack_identifier()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L925 | neighbors=[core.py, search(), Resolve a standalone API identifier eve…, search_stack()]
- "scripts_core_file_signature": "_file_signature()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L358 | neighbors=[core.py, _domain_keywords(), _get_bm25(), _load_csv_snapshot()]
- "scripts_core_load_product_keywords": "_load_product_keywords()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L538 | neighbors=[core.py, _domain_keywords(), _load_csv(), Return high-signal product labels/alias…]
- "scripts_core_passes_threshold": "_passes_threshold()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L473 | neighbors=[core.py, .score(), _query_coverage(), _suggest_terms()]
- "scripts_design_system_contrast_ratio": "_contrast_ratio()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L153 | neighbors=[design_system.py, _relative_luminance(), _derive_dark_palette(), WCAG contrast ratio for two hex colors,…]
- "scripts_design_system_derive_dark_palette": "_derive_dark_palette()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L193 | neighbors=[design_system.py, _contrast_ratio(), Keep product brand tokens while derivin…, _select_palette_for_mode()]
- "scripts_design_system_designsystemgenerator_select_best_match": "._select_best_match()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L408 | neighbors=[DesignSystemGenerator, .generate(), ._resolve_style(), Select best matching result based on pr…]
- "scripts_design_system_format_page_override_md": "format_page_override_md()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1381 | neighbors=[design_system.py, _generate_intelligent_overrides(), persist_design_system(), Format a page-specific override file wi…]
- "scripts_design_system_generate_intelligent_overrides": "_generate_intelligent_overrides()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1490 | neighbors=[design_system.py, format_page_override_md(), _detect_page_type(), Generate intelligent overrides based on…]
- "scripts_design_system_palette_is_dark": "_palette_is_dark()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L147 | neighbors=[design_system.py, _relative_luminance(), True when a colors.csv row's Background…, _select_palette_for_mode()]
- "scripts_design_system_relative_luminance": "_relative_luminance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L129 | neighbors=[design_system.py, _contrast_ratio(), _palette_is_dark(), WCAG relative luminance of a #RRGGBB st…]
- "scripts_migrate_test_variants": "migrate-test-variants.ts" | kind=code-symbol | source=scripts/migrate-test-variants.ts:L1 | neighbors=[a25ec19 fix: resolve plan name mismatch…, f2af8ac checkpoint: before 3D backgroun…, main(), prisma]
- "scripts_validate_data_catalog_date": "_catalog_date()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L504 | neighbors=[validate_data.py, _check_catalog_summary(), _check_font_catalog(), _check_phosphor_catalog()]
- "scripts_validate_data_check_catalog_summary": "_check_catalog_summary()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L635 | neighbors=[validate_data.py, _check_catalog_contract(), _catalog_date(), _read_rows()]
- "scripts_validate_data_check_stack_freshness_contract": "_check_stack_freshness_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L801 | neighbors=[validate_data.py, _valid_date(), Validate curated-stack applicability an…, validate()]
- "scripts_validate_data_contrast_ratio": "contrast_ratio()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L157 | neighbors=[validate_data.py, _check_color_contract(), _relative_luminance(), Return WCAG contrast for two opaque six…]
- "scripts_validate_data_valid_date": "_valid_date()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L212 | neighbors=[validate_data.py, _check_provenance(), _check_stack_freshness_contract(), validate()]
- "stripe_route_getsubscriptionid": "getSubscriptionId()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L119 | neighbors=[route.ts, handleCheckoutCompleted(), handleInvoicePaymentFailed(), handleInvoicePaymentSucceeded()]
- "stripe_route_handleinvoicepaymentsucceeded": "handleInvoicePaymentSucceeded()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L276 | neighbors=[route.ts, getSubscriptionData(), getSubscriptionId(), POST()]
- "systematic_debugging_condition_based_waiting_example": "condition-based-waiting-example.ts" | kind=code-symbol | source=.agents/plugins/superpowers/skills/systematic-debugging/condition-based-waiting-example.ts:L1 | neighbors=[373b817 feat: architectural refactor fo…, waitForEvent(), waitForEventCount(), waitForEventMatch()]
- "terms_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/terms/page.tsx:L1 | neighbors=[d49750b feat: complete product overhaul…, f03e200 fix: add untracked files, metadata, TermsOfServicePage()]
- "tests_test_core_data_quality_testaccessibilityguidance": "TestAccessibilityGuidance" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L57 | neighbors=[test_core_data_quality.py, .test_motion_recipes_offer_reduced_moti…, .test_native_and_web_target_sizes_remai…, .test_wcag_22_topics_have_explicit_rows…]
- "tests_test_data_contracts_split_values": "split_values()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L30 | neighbors=[test_data_contracts.py, style_identities(), .test_every_product_and_reasoning_style…, .test_ids_aliases_status_and_parents_ar…]
- "tests_test_data_contracts_testgeneratedcatalogcontract_load_json": ".load_json()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L356 | neighbors=[TestGeneratedCatalogContract, .test_curated_icon_and_summary_drift_fa…, .test_font_license_and_typography_drift…, .test_font_source_revision_and_exclusio…]
- "tests_test_data_contracts_teststyleidentitycontract_test_every_product_and_reasoning_style_reference_resolves": ".test_every_product_and_reasoning_style_reference_resolves()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L66 | neighbors=[TestStyleIdentityContract, read_rows(), split_values(), style_identities()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-007.json

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
