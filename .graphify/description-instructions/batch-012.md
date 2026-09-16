# Node Description Batch 13 of 23

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

- "tests_test_data_contracts_testreasoningcontract_test_every_known_product_generates_a_traceable_landing_pattern": ".test_every_known_product_generates_a_traceable_landing_pattern()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L153 | neighbors=[TestReasoningContract, read_rows()]
- "tests_test_data_contracts_testreasoningcontract_test_generator_matches_reasoning_exactly_and_defaults_only_for_unknown": ".test_generator_matches_reasoning_exactly_and_defaults_only_for_unknown()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L133 | neighbors=[TestReasoningContract, read_rows()]
- "tests_test_data_contracts_testreasoningcontract_test_known_product_sets_match_exactly": ".test_known_product_sets_match_exactly()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L88 | neighbors=[TestReasoningContract, read_rows()]
- "tests_test_data_contracts_testreasoningcontract_test_reasoning_patterns_reference_landing_identities": ".test_reasoning_patterns_reference_landing_identities()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L142 | neighbors=[TestReasoningContract, read_rows()]
- "tests_test_data_contracts_testreasoningcontract_test_representative_new_products_generate_traceable_sources": ".test_representative_new_products_generate_traceable_sources()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L161 | neighbors=[TestReasoningContract, read_rows()]
- "tests_test_data_contracts_teststyleidentitycontract_setup": ".setUp()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L42 | neighbors=[TestStyleIdentityContract, read_rows()]
- "tests_test_data_contracts_teststyleidentitycontract_test_ids_aliases_status_and_parents_are_unambiguous": ".test_ids_aliases_status_and_parents_are_unambiguous()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L45 | neighbors=[TestStyleIdentityContract, split_values()]
- "tests_test_design_system_mode_rationale_139": "The exact reproduction from issue #428." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L139 | neighbors=[DesignSystemGenerator, TestEndToEndCoherence]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_deprecated_symbols_are_not_recommended_by_current_rows": ".test_deprecated_symbols_are_not_recommended_by_current_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L150 | neighbors=[TestNativeDesktopStackFreshness, _rows()]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_high_impact_rows_use_official_sources": ".test_high_impact_rows_use_official_sources()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L42 | neighbors=[TestNativeDesktopStackFreshness, _rows()]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_rows_have_final_freshness_metadata": ".test_rows_have_final_freshness_metadata()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L31 | neighbors=[TestNativeDesktopStackFreshness, _rows()]
- "tests_test_relevance_evaluator_testfixturevalidation_test_rejects_bad_count_duplicate_id_and_grade": ".test_rejects_bad_count_duplicate_id_and_grade()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L66 | neighbors=[TestFixtureValidation, .valid_fixture()]
- "tests_test_relevance_evaluator_testfixturevalidation_test_valid_schema": ".test_valid_schema()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L63 | neighbors=[TestFixtureValidation, .valid_fixture()]
- "tests_test_style_taxonomy_read_rows": "read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L19 | neighbors=[test_style_taxonomy.py, .setUpClass()]
- "tests_test_style_taxonomy_teststyletaxonomy_setupclass": ".setUpClass()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L26 | neighbors=[TestStyleTaxonomy, read_rows()]
- "tests_test_text_layout_resilience_read_rows": "read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L16 | neighbors=[test_text_layout_resilience.py, .setUpClass()]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts_setupclass": ".setUpClass()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L70 | neighbors=[TestTextLayoutDataContracts, read_rows()]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_active_rows_use_the_verified_current_applicability": ".test_active_rows_use_the_verified_current_applicability()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L60 | neighbors=[TestWebStackFreshness, _rows()]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_high_impact_rows_use_official_sources": ".test_high_impact_rows_use_official_sources()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L50 | neighbors=[TestWebStackFreshness, _rows()]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_stale_apis_are_not_recommended_by_active_rows": ".test_stale_apis_are_not_recommended_by_active_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L145 | neighbors=[TestWebStackFreshness, _rows()]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_web_rows_have_explicit_freshness_metadata": ".test_web_rows_have_explicit_freshness_metadata()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L38 | neighbors=[TestWebStackFreshness, _rows()]
- "ui_card_card": "Card" | kind=code-symbol | source=src/components/ui/card.tsx:L5 | neighbors=[overview.tsx, card.tsx]
- "ui_card_cardcontent": "CardContent" | kind=code-symbol | source=src/components/ui/card.tsx:L59 | neighbors=[overview.tsx, card.tsx]
- "ui_card_cardheader": "CardHeader" | kind=code-symbol | source=src/components/ui/card.tsx:L20 | neighbors=[overview.tsx, card.tsx]
- "ui_card_cardtitle": "CardTitle" | kind=code-symbol | source=src/components/ui/card.tsx:L32 | neighbors=[overview.tsx, card.tsx]
- "ui_feedback_widget_feedbackwidget": "FeedbackWidget()" | kind=code-symbol | source=src/components/ui/feedback-widget.tsx:L6 | neighbors=[layout.tsx, feedback-widget.tsx]
- "vitest_config": "vitest.config.ts" | kind=code-symbol | source=vitest.config.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …]
- "actions_auth_actions_ensureuniqueslug": "ensureUniqueSlug()" | kind=code-symbol | source=src/actions/auth-actions.ts:L32 | neighbors=[auth-actions.ts]
- "actions_auth_actions_generateslug": "generateSlug()" | kind=code-symbol | source=src/actions/auth-actions.ts:L21 | neighbors=[auth-actions.ts]
- "actions_auth_actions_registerschema": "RegisterSchema" | kind=code-symbol | source=src/actions/auth-actions.ts:L12 | neighbors=[auth-actions.ts]
- "actions_auth_test_constructor": "constructor()" | kind=code-symbol | source=tests/integration/actions/auth.test.ts:L32 | neighbors=[auth.test.ts]
- "actions_feedback_actions_feedbackschema": "feedbackSchema" | kind=code-symbol | source=src/actions/feedback-actions.ts:L6 | neighbors=[feedback-actions.ts]
- "app_global_error_globalerror": "GlobalError()" | kind=code-symbol | source=src/app/global-error.tsx:L7 | neighbors=[global-error.tsx]
- "app_layout_ibmplexsans": "ibmPlexSans" | kind=code-symbol | source=src/app/layout.tsx:L6 | neighbors=[layout.tsx]
- "app_layout_jetbrainsmono": "jetbrainsMono" | kind=code-symbol | source=src/app/layout.tsx:L13 | neighbors=[layout.tsx]
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=src/app/layout.tsx:L26 | neighbors=[layout.tsx]
- "app_robots_robots": "robots()" | kind=code-symbol | source=src/app/robots.ts:L3 | neighbors=[robots.ts]
- "app_sitemap_sitemap": "sitemap()" | kind=code-symbol | source=src/app/sitemap.ts:L3 | neighbors=[sitemap.ts]
- "auth_validation_test_credentialsschema": "CredentialsSchema" | kind=code-symbol | source=tests/unit/auth/validation.test.ts:L17 | neighbors=[validation.test.ts]
- "auth_validation_test_registerschema": "RegisterSchema" | kind=code-symbol | source=tests/unit/auth/validation.test.ts:L11 | neighbors=[validation.test.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-012.json

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
