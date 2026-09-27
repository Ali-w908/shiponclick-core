# Node Description Batch 23 of 24

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
- "tests_test_style_taxonomy_teststyletaxonomy_test_curated_state_distribution_is_explicit": ".test_curated_state_distribution_is_explicit()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L30 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_deprecated_rows_never_appear_in_generic_results": ".test_deprecated_rows_never_appear_in_generic_results()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L64 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_every_style_name_and_alias_has_a_deterministic_destination": ".test_every_style_name_and_alias_has_a_deterministic_destination()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L39 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_family_variants_and_mobile_intent_remain_distinct": ".test_family_variants_and_mobile_intent_remain_distinct()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L76 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_new_rows_have_first_party_provenance": ".test_new_rows_have_first_party_provenance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L154 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_searchable_prompt_lengths_are_balanced": ".test_searchable_prompt_lengths_are_balanced()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L144 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_style_arbitration_does_not_steal_product_intent": ".test_style_arbitration_does_not_steal_product_intent()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L72 | neighbors=[TestStyleTaxonomy]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts_test_new_tailwind_rows_are_unique_current_and_keep_required_utilities": ".test_new_tailwind_rows_are_unique_current_and_keep_required_utilities()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L86 | neighbors=[TestTextLayoutDataContracts]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts_test_new_ux_rows_are_unique_sequential_and_keep_critical_guidance": ".test_new_ux_rows_are_unique_sequential_and_keep_critical_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L74 | neighbors=[TestTextLayoutDataContracts]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts_test_refined_rows_are_context_sensitive_not_universal_recipes": ".test_refined_rows_are_context_sensitive_not_universal_recipes()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L100 | neighbors=[TestTextLayoutDataContracts]
- "tests_test_text_layout_resilience_testtextlayoutretrieval_test_locked_queries_return_the_canonical_identity_first": ".test_locked_queries_return_the_canonical_identity_first()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L42 | neighbors=[TestTextLayoutRetrieval]
- "tests_test_text_layout_resilience_testtextlayoutretrieval_test_tailwind_query_returns_compact_label_layout_first": ".test_tailwind_query_returns_compact_label_layout_first()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L58 | neighbors=[TestTextLayoutRetrieval]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_common_old_major_syntaxes_select_legacy_guidance": ".test_common_old_major_syntaxes_select_legacy_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L104 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_current_high_drift_queries_return_current_contracts": ".test_current_high_drift_queries_return_current_contracts()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L124 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_current_major_migration_query_stays_on_current_guidance": ".test_current_major_migration_query_stays_on_current_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L91 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_explicit_old_major_uses_only_curated_legacy_rows": ".test_explicit_old_major_uses_only_curated_legacy_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L77 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_old_major_without_curated_legacy_guidance_abstains": ".test_old_major_without_curated_legacy_guidance_abstains()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L119 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_shadcn_named_base_excludes_incompatible_composition_apis": ".test_shadcn_named_base_excludes_incompatible_composition_apis()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L96 | neighbors=[TestWebStackFreshness]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-022.json

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
