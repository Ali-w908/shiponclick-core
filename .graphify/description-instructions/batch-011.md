# Node Description Batch 12 of 23

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

- "scripts_search_format_output": "format_output()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/search.py:L44 | neighbors=[search.py, Format results for Claude consumption (…]
- "scripts_setup_main": "main()" | kind=code-symbol | source=scripts/setup.js:L13 | neighbors=[setup.js, question()]
- "scripts_setup_question": "question()" | kind=code-symbol | source=scripts/setup.js:L11 | neighbors=[setup.js, main()]
- "scripts_test_ls": "test_ls.ts" | kind=code-symbol | source=scripts/test_ls.ts:L1 | neighbors=[343228b feat(auth): add account deletio…, testCheckout()]
- "scripts_validate_data_check_app_interface_contract": "_check_app_interface_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L736 | neighbors=[validate_data.py, _check_core_data_contract()]
- "scripts_validate_data_check_chart_contract": "_check_chart_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L417 | neighbors=[validate_data.py, _check_core_data_contract()]
- "scripts_validate_data_check_landing_claims": "_check_landing_claims()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L754 | neighbors=[validate_data.py, _check_core_data_contract()]
- "scripts_validate_data_check_motion_contract": "_check_motion_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L729 | neighbors=[validate_data.py, _check_core_data_contract()]
- "scripts_validate_data_check_react_contract": "_check_react_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L743 | neighbors=[validate_data.py, _check_core_data_contract()]
- "scripts_validate_data_check_reasoning_contract": "_check_reasoning_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L331 | neighbors=[validate_data.py, validate()]
- "scripts_validate_data_check_ux_contract": "_check_ux_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L718 | neighbors=[validate_data.py, _check_core_data_contract()]
- "scripts_validate_data_configured_font_names": "_configured_font_names()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L445 | neighbors=[validate_data.py, _check_typography_contract()]
- "scripts_validate_data_declared_weights": "_declared_weights()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L461 | neighbors=[validate_data.py, _check_typography_contract()]
- "scripts_validate_data_font_names": "_font_names()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L440 | neighbors=[validate_data.py, _check_typography_contract()]
- "scripts_validate_data_load_catalog_json": "_load_catalog_json()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L492 | neighbors=[validate_data.py, _check_catalog_contract()]
- "scripts_validate_data_main": "main()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L1077 | neighbors=[validate_data.py, validate()]
- "scripts_validate_data_relative_luminance": "_relative_luminance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L148 | neighbors=[validate_data.py, contrast_ratio()]
- "scripts_validate_data_valid_confidence": "_valid_confidence()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L219 | neighbors=[validate_data.py, _check_provenance()]
- "scripts_validate_data_valid_google_fonts_exclusion_source": "_valid_google_fonts_exclusion_source()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L512 | neighbors=[validate_data.py, _check_font_catalog()]
- "scripts_validate_data_valid_provenance_source": "_valid_provenance_source()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L777 | neighbors=[validate_data.py, _check_provenance()]
- "src_instrumentation": "instrumentation.ts" | kind=code-symbol | source=src/instrumentation.ts:L1 | neighbors=[5c2866e chore: setup Sentry and clean u…, register()]
- "stripe_route_getcustomerid": "getCustomerId()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L128 | neighbors=[route.ts, handleCheckoutCompleted()]
- "stripe_route_handlesubscriptiondeleted": "handleSubscriptionDeleted()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L235 | neighbors=[route.ts, POST()]
- "stripe_route_updateorgsubscription": "updateOrgSubscription()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L359 | neighbors=[route.ts, handleSubscriptionUpdated()]
- "tests_test_catalog_refresh": "test_catalog_refresh.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_catalog_refresh.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, CatalogRefreshTest]
- "tests_test_core_data_quality_testaccessibilityguidance_test_motion_recipes_offer_reduced_motion_or_user_control": ".test_motion_recipes_offer_reduced_motion_or_user_control()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L93 | neighbors=[TestAccessibilityGuidance, read_rows()]
- "tests_test_core_data_quality_testaccessibilityguidance_test_native_and_web_target_sizes_remain_distinct": ".test_native_and_web_target_sizes_remain_distinct()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L82 | neighbors=[TestAccessibilityGuidance, read_rows()]
- "tests_test_core_data_quality_testaccessibilityguidance_test_wcag_22_topics_have_explicit_rows_and_are_retrievable": ".test_wcag_22_topics_have_explicit_rows_and_are_retrievable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L58 | neighbors=[TestAccessibilityGuidance, read_rows()]
- "tests_test_core_data_quality_testchartstypographyandicons_test_chart_risk_is_not_a_conformance_grade": ".test_chart_risk_is_not_a_conformance_grade()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L126 | neighbors=[TestChartsTypographyAndIcons, read_rows()]
- "tests_test_core_data_quality_testchartstypographyandicons_test_icon_semantics_are_explicit_and_imports_are_concrete": ".test_icon_semantics_are_explicit_and_imports_are_concrete()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L158 | neighbors=[TestChartsTypographyAndIcons, read_rows()]
- "tests_test_core_data_quality_testchartstypographyandicons_test_mutated_accessibility_and_import_contracts_fail": ".test_mutated_accessibility_and_import_contracts_fail()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L104 | neighbors=[TestChartsTypographyAndIcons, read_rows()]
- "tests_test_core_data_quality_testchartstypographyandicons_test_named_fonts_match_google_import_css_import_and_tailwind_config": ".test_named_fonts_match_google_import_css_import_and_tailwind_config()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L142 | neighbors=[TestChartsTypographyAndIcons, read_rows()]
- "tests_test_core_data_quality_testcurrentreactguidance": "TestCurrentReactGuidance" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L186 | neighbors=[test_core_data_quality.py, .test_effect_event_is_scoped_and_commun…]
- "tests_test_core_data_quality_testcurrentreactguidance_test_effect_event_is_scoped_and_community_use_latest_is_removed": ".test_effect_event_is_scoped_and_community_use_latest_is_removed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L187 | neighbors=[TestCurrentReactGuidance, read_rows()]
- "tests_test_core_data_quality_testsemanticcolors_test_declared_text_and_ui_pairs_meet_role_thresholds": ".test_declared_text_and_ui_pairs_meet_role_thresholds()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L40 | neighbors=[TestSemanticColors, read_rows()]
- "tests_test_core_data_quality_testsemanticcolors_test_destructive_tokens_are_not_success_green": ".test_destructive_tokens_are_not_success_green()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L48 | neighbors=[TestSemanticColors, read_rows()]
- "tests_test_data_contracts_testlandingandstackcontract_test_landing_sections_use_one_delimiter": ".test_landing_sections_use_one_delimiter()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L262 | neighbors=[TestLandingAndStackContract, read_rows()]
- "tests_test_data_contracts_testlandingandstackcontract_test_provenance_rejects_bad_shapes_enums_and_hosts_without_crashing": ".test_provenance_rejects_bad_shapes_enums_and_hosts_without_crashing()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L290 | neighbors=[TestLandingAndStackContract, read_rows()]
- "tests_test_data_contracts_testreasoningcontract_test_decision_rules_use_closed_array_grammar": ".test_decision_rules_use_closed_array_grammar()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L101 | neighbors=[TestReasoningContract, read_rows()]
- "tests_test_data_contracts_testreasoningcontract_test_every_exact_product_label_resolves_to_itself": ".test_every_exact_product_label_resolves_to_itself()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L231 | neighbors=[TestReasoningContract, read_rows()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-011.json

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
