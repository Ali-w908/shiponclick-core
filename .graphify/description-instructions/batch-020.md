# Node Description Batch 21 of 23

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

- "tests_test_data_contracts_testreasoningcontract_test_style_aliases_have_one_exact_owner": ".test_style_aliases_have_one_exact_owner()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L248 | neighbors=[TestReasoningContract]
- "tests_test_design_system_mode_testantipatterngating_test_dark_clause_dropped_others_kept": ".test_dark_clause_dropped_others_kept()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L121 | neighbors=[TestAntiPatternGating]
- "tests_test_design_system_mode_testantipatterngating_test_empty_input": ".test_empty_input()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L134 | neighbors=[TestAntiPatternGating]
- "tests_test_design_system_mode_testantipatterngating_test_light_mode_is_a_no_op": ".test_light_mode_is_a_no_op()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L126 | neighbors=[TestAntiPatternGating]
- "tests_test_design_system_mode_testantipatterngating_test_unrelated_anti_patterns_survive_dark_mode": ".test_unrelated_anti_patterns_survive_dark_mode()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L130 | neighbors=[TestAntiPatternGating]
- "tests_test_design_system_mode_testendtoendcoherence_test_dark_query_does_not_advise_against_dark_mode": ".test_dark_query_does_not_advise_against_dark_mode()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L179 | neighbors=[TestEndToEndCoherence]
- "tests_test_design_system_mode_testendtoendcoherence_test_dark_query_foreground_is_lighter_than_background": ".test_dark_query_foreground_is_lighter_than_background()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L171 | neighbors=[TestEndToEndCoherence]
- "tests_test_design_system_mode_testendtoendcoherence_test_dark_query_gets_a_dark_background": ".test_dark_query_gets_a_dark_background()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L143 | neighbors=[TestEndToEndCoherence]
- "tests_test_design_system_mode_testendtoendcoherence_test_generator_exports_every_semantic_foreground_pair": ".test_generator_exports_every_semantic_foreground_pair()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L151 | neighbors=[TestEndToEndCoherence]
- "tests_test_design_system_mode_testendtoendcoherence_test_light_query_keeps_a_light_background": ".test_light_query_keeps_a_light_background()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L183 | neighbors=[TestEndToEndCoherence]
- "tests_test_design_system_mode_testluminance_test_classifies_backgrounds_from_the_shipped_data": ".test_classifies_backgrounds_from_the_shipped_data()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L64 | neighbors=[TestLuminance]
- "tests_test_design_system_mode_testluminance_test_missing_background_is_not_dark": ".test_missing_background_is_not_dark()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L69 | neighbors=[TestLuminance]
- "tests_test_design_system_mode_testluminance_test_parses_six_and_three_digit_hex": ".test_parses_six_and_three_digit_hex()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L55 | neighbors=[TestLuminance]
- "tests_test_design_system_mode_testluminance_test_returns_none_for_unparseable": ".test_returns_none_for_unparseable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L60 | neighbors=[TestLuminance]
- "tests_test_design_system_mode_testmoderesolution_test_dark_primary_style_detected": ".test_dark_primary_style_detected()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L75 | neighbors=[TestModeResolution]
- "tests_test_design_system_mode_testmoderesolution_test_dual_mode_style_is_not_dark_primary": ".test_dual_mode_style_is_not_dark_primary()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L78 | neighbors=[TestModeResolution]
- "tests_test_design_system_mode_testmoderesolution_test_either_signal_resolves_dark": ".test_either_signal_resolves_dark()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L88 | neighbors=[TestModeResolution]
- "tests_test_design_system_mode_testmoderesolution_test_query_keywords": ".test_query_keywords()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L82 | neighbors=[TestModeResolution]
- "tests_test_design_system_mode_testpaletteselection_test_category_identity_wins_over_unrelated_dark_palette": ".test_category_identity_wins_over_unrelated_dark_palette()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L110 | neighbors=[TestPaletteSelection]
- "tests_test_design_system_mode_testpaletteselection_test_dark_mode_falls_back_to_top_hit_when_no_dark_ramp_exists": ".test_dark_mode_falls_back_to_top_hit_when_no_dark_ramp_exists()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L99 | neighbors=[TestPaletteSelection]
- "tests_test_design_system_mode_testpaletteselection_test_dark_mode_skips_light_palettes": ".test_dark_mode_skips_light_palettes()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L95 | neighbors=[TestPaletteSelection]
- "tests_test_design_system_mode_testpaletteselection_test_empty_results": ".test_empty_results()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L107 | neighbors=[TestPaletteSelection]
- "tests_test_design_system_mode_testpaletteselection_test_light_mode_keeps_the_existing_top_hit_behaviour": ".test_light_mode_keeps_the_existing_top_hit_behaviour()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L103 | neighbors=[TestPaletteSelection]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_current_mobile_contracts": ".test_current_mobile_contracts()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L52 | neighbors=[TestNativeDesktopStackFreshness]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_current_threejs_uses_supported_module_and_color_apis": ".test_current_threejs_uses_supported_module_and_color_apis()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L135 | neighbors=[TestNativeDesktopStackFreshness]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_migration_intent_returns_current_replacements": ".test_migration_intent_returns_current_replacements()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L99 | neighbors=[TestNativeDesktopStackFreshness]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_old_version_without_curated_rows_abstains": ".test_old_version_without_curated_rows_abstains()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L84 | neighbors=[TestNativeDesktopStackFreshness]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_standalone_current_and_deprecated_identifiers_resolve_replacement": ".test_standalone_current_and_deprecated_identifiers_resolve_replacement()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L122 | neighbors=[TestNativeDesktopStackFreshness]
- "tests_test_native_desktop_stack_freshness_testnativedesktopstackfreshness_test_windows_current_and_maintenance_lanes_are_visible": ".test_windows_current_and_maintenance_lanes_are_visible()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L69 | neighbors=[TestNativeDesktopStackFreshness]
- "tests_test_relevance_evaluator_testmetricmath_test_ndcg_uses_graded_gain_and_handles_empty_ideal": ".test_ndcg_uses_graded_gain_and_handles_empty_ideal()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L29 | neighbors=[TestMetricMath]
- "tests_test_relevance_evaluator_testmetricmath_test_precision_counts_missing_ranks_as_non_relevant": ".test_precision_counts_missing_ranks_as_non_relevant()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L18 | neighbors=[TestMetricMath]
- "tests_test_relevance_evaluator_testmetricmath_test_reciprocal_rank_stops_at_k": ".test_reciprocal_rank_stops_at_k()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L24 | neighbors=[TestMetricMath]
- "tests_test_relevance_evaluator_testmetricmath_test_result_grades_match_identity_subsets": ".test_result_grades_match_identity_subsets()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L34 | neighbors=[TestMetricMath]
- "tests_test_relevance_evaluator_testthresholdgate_test_manifest_binds_oracle_and_validates_baseline_revision": ".test_manifest_binds_oracle_and_validates_baseline_revision()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L156 | neighbors=[TestThresholdGate]
- "tests_test_relevance_evaluator_testthresholdgate_test_manifest_rejects_missing_contract_sections": ".test_manifest_rejects_missing_contract_sections()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L127 | neighbors=[TestThresholdGate]
- "tests_test_relevance_evaluator_testthresholdgate_test_manifest_rejects_non_finite_and_invalid_sample_values": ".test_manifest_rejects_non_finite_and_invalid_sample_values()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L132 | neighbors=[TestThresholdGate]
- "tests_test_relevance_evaluator_testthresholdgate_test_metric_sample_and_locked_case_failures_are_actionable": ".test_metric_sample_and_locked_case_failures_are_actionable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L108 | neighbors=[TestThresholdGate]
- "tests_test_relevance_evaluator_testthresholdgate_test_oracle_fingerprint_hashes_the_selected_cases_file": ".test_oracle_fingerprint_hashes_the_selected_cases_file()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L97 | neighbors=[TestThresholdGate]
- "tests_test_relevance_evaluator_testthresholdgate_test_runtime_fingerprint_binds_reasoning_contract": ".test_runtime_fingerprint_binds_reasoning_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L78 | neighbors=[TestThresholdGate]
- "tests_test_style_taxonomy_teststyletaxonomy_test_claim_fields_use_controlled_non_guarantee_language": ".test_claim_fields_use_controlled_non_guarantee_language()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L120 | neighbors=[TestStyleTaxonomy]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-020.json

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
