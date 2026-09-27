# Node Description Batch 14 of 24

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
- "ui_button_button": "Button" | kind=code-symbol | source=src/components/ui/button.tsx:L43 | neighbors=[plasmic.ts, button.tsx]
- "ui_card_carddescription": "CardDescription" | kind=code-symbol | source=src/components/ui/card.tsx:L47 | neighbors=[plasmic.ts, card.tsx]
- "ui_card_cardfooter": "CardFooter" | kind=code-symbol | source=src/components/ui/card.tsx:L67 | neighbors=[plasmic.ts, card.tsx]
- "vitest_config": "vitest.config.ts" | kind=code-symbol | source=vitest.config.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-013.json

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
