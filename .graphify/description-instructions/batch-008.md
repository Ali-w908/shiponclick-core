# Node Description Batch 9 of 23

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "scripts_reasoning_contract_parse_decision_rules": "parse_decision_rules()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L67 | neighbors=[reasoning_contract.py, _validate_action(), Parse the canonical condition -> action…]
- "scripts_validate_data_check_color_contract": "_check_color_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L387 | neighbors=[validate_data.py, contrast_ratio(), _check_core_data_contract()]
- "scripts_validate_data_check_file": "_check_file()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L169 | neighbors=[validate_data.py, _read_rows(), validate()]
- "scripts_validate_data_check_icon_contract": "_check_icon_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L698 | neighbors=[validate_data.py, _check_core_data_contract(), _split()]
- "scripts_validate_data_check_phosphor_catalog": "_check_phosphor_catalog()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L600 | neighbors=[validate_data.py, _check_catalog_contract(), _catalog_date()]
- "scripts_validate_data_check_style_contract": "_check_style_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L231 | neighbors=[validate_data.py, _split(), validate()]
- "scripts_validate_data_font_families": "_font_families()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L436 | neighbors=[validate_data.py, _check_font_catalog(), _check_typography_contract()]
- "scripts_validate_data_imported_weights": "_imported_weights()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L449 | neighbors=[validate_data.py, _check_font_catalog(), _check_typography_contract()]
- "scripts_validate_data_valid_catalog_source_key": "_valid_catalog_source_key()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L869 | neighbors=[validate_data.py, _check_provenance(), _read_rows()]
- "scripts_validate_data_valid_dataset_source_key": "_valid_dataset_source_key()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L838 | neighbors=[validate_data.py, _check_provenance(), _read_rows()]
- "stripe_route_getsubscriptiondata": "getSubscriptionData()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L137 | neighbors=[route.ts, handleCheckoutCompleted(), handleInvoicePaymentSucceeded()]
- "stripe_route_handleinvoicepaymentfailed": "handleInvoicePaymentFailed()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L319 | neighbors=[route.ts, getSubscriptionId(), POST()]
- "stripe_route_handlesubscriptionupdated": "handleSubscriptionUpdated()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L212 | neighbors=[route.ts, updateOrgSubscription(), POST()]
- "terms_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/terms/page.tsx:L1 | neighbors=[f03e200 fix: add untracked files, metadata, TermsOfServicePage()]
- "tests_setup": "setup.ts" | kind=code-symbol | source=tests/setup.ts:L1 | neighbors=[0999f13 fix: resolve vercel build error…, 93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …]
- "tests_test_catalog_refresh_catalogrefreshtest_icon_args": ".icon_args()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L52 | neighbors=[CatalogRefreshTest, .test_icon_manifest_normalizes_and_reco…, .test_icon_refresh_rejects_invalid_sche…]
- "tests_test_catalog_refresh_catalogrefreshtest_test_catalog_cross_check_uses_explicit_schema_without_font_file_urls": ".test_catalog_cross_check_uses_explicit_schema_without_font_file_urls()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L159 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_catalog_rejects_bool_rank_duplicate_axis_and_unreviewed_addition": ".test_catalog_rejects_bool_rank_duplicate_axis_and_unreviewed_addition()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L217 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_exclusion_sources_match_offline_validator_policy": ".test_exclusion_sources_match_offline_validator_policy()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L271 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_explicit_license_exclusion_is_reported_and_not_promoted": ".test_explicit_license_exclusion_is_reported_and_not_promoted()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L250 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_font_refresh_fails_closed_on_concurrency_or_interrupted_pair": ".test_font_refresh_fails_closed_on_concurrency_or_interrupted_pair()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L145 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_font_refresh_is_deterministic_and_preserves_reviewed_fields": ".test_font_refresh_is_deterministic_and_preserves_reviewed_fields()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L77 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_font_refresh_rejects_schema_size_dates_and_licenses": ".test_font_refresh_rejects_schema_size_dates_and_licenses()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L117 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_icon_manifest_normalizes_and_records_all_import_forms": ".test_icon_manifest_normalizes_and_records_all_import_forms()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L298 | neighbors=[CatalogRefreshTest, .icon_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_icon_refresh_rejects_invalid_schema_size_and_curated_import": ".test_icon_refresh_rejects_invalid_schema_size_and_curated_import()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L316 | neighbors=[CatalogRefreshTest, .icon_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_live_font_refresh_requires_environment_key": ".test_live_font_refresh_requires_environment_key()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L65 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_catalog_refresh_catalogrefreshtest_test_official_metadata_checkout_is_strict_and_reusable": ".test_official_metadata_checkout_is_strict_and_reusable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L173 | neighbors=[CatalogRefreshTest, .font_args(), .run_command()]
- "tests_test_core_data_quality_testsemanticcolors": "TestSemanticColors" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L39 | neighbors=[test_core_data_quality.py, .test_declared_text_and_ui_pairs_meet_r…, .test_destructive_tokens_are_not_succes…]
- "tests_test_data_contracts_style_identities": "style_identities()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L34 | neighbors=[test_data_contracts.py, split_values(), .test_every_product_and_reasoning_style…]
- "tests_test_data_contracts_testgeneratedcatalogcontract_test_curated_icon_and_summary_drift_fail_closed": ".test_curated_icon_and_summary_drift_fail_closed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L399 | neighbors=[TestGeneratedCatalogContract, read_rows(), .load_json()]
- "tests_test_data_contracts_testgeneratedcatalogcontract_test_font_license_and_typography_drift_fail_closed": ".test_font_license_and_typography_drift_fail_closed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L363 | neighbors=[TestGeneratedCatalogContract, read_rows(), .load_json()]
- "tests_test_data_contracts_testgeneratedcatalogcontract_test_font_source_revision_and_exclusion_policy_fail_closed": ".test_font_source_revision_and_exclusion_policy_fail_closed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L383 | neighbors=[TestGeneratedCatalogContract, read_rows(), .load_json()]
- "tests_test_native_desktop_stack_freshness": "test_native_desktop_stack_freshness.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, _rows(), TestNativeDesktopStackFreshness]
- "tests_test_relevance_evaluator_testfixturevalidation_valid_fixture": ".valid_fixture()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L48 | neighbors=[TestFixtureValidation, .test_rejects_bad_count_duplicate_id_an…, .test_valid_schema()]
- "tests_test_style_taxonomy": "test_style_taxonomy.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, read_rows(), TestStyleTaxonomy]
- "tests_test_text_layout_resilience_testtextlayoutretrieval": "TestTextLayoutRetrieval" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L41 | neighbors=[test_text_layout_resilience.py, .test_locked_queries_return_the_canonic…, .test_tailwind_query_returns_compact_la…]
- "tests_test_web_stack_freshness": "test_web_stack_freshness.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, _rows(), TestWebStackFreshness]
- "actions_auth_actions_deleteaccount": "deleteAccount()" | kind=code-symbol | source=src/actions/auth-actions.ts:L202 | neighbors=[auth-actions.ts, delete-account-button.tsx]
- "actions_auth_actions_logout": "logOut()" | kind=code-symbol | source=src/actions/auth-actions.ts:L198 | neighbors=[auth-actions.ts, sidebar.tsx]
- "actions_billing_actions_getsubscriptiondetails": "getSubscriptionDetails()" | kind=code-symbol | source=src/actions/billing-actions.ts:L108 | neighbors=[billing-actions.ts, page.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-008.json

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
