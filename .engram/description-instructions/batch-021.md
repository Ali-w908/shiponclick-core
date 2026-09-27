# Node Description Batch 22 of 24

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

- "tests_test_core_testsearchdomains_test_hard_negative_query_abstains_across_registered_domains_and_stacks": ".test_hard_negative_query_abstains_across_registered_domains_and_stacks()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L139 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_read_failure_is_not_reported_as_a_search_result": ".test_read_failure_is_not_reported_as_a_search_result()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L114 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_suggestions_never_repeat_the_input_or_offer_a_dead_first_retry": ".test_suggestions_never_repeat_the_input_or_offer_a_dead_first_retry()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L158 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_typo_suggestions_are_deterministic_and_retryable": ".test_typo_suggestions_are_deterministic_and_retryable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L148 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_ui_is_searchable_in_style_domain": ".test_ui_is_searchable_in_style_domain()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L125 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_unknown_programmatic_domain_keeps_legacy_style_fallback": ".test_unknown_programmatic_domain_keeps_legacy_style_fallback()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L168 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_unsupported_icon_library_abstains_instead_of_returning_other_library": ".test_unsupported_icon_library_abstains_instead_of_returning_other_library()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L174 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_zero_result_query_reports_suggestions_not_error": ".test_zero_result_query_reports_suggestions_not_error()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L133 | neighbors=[TestSearchDomains]
- "tests_test_core_testtokenizer_test_boundary_safe_nav_normalization_preserves_existing_words": ".test_boundary_safe_nav_normalization_preserves_existing_words()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L50 | neighbors=[TestTokenizer]
- "tests_test_core_testtokenizer_test_punctuation_and_uk_variants_normalize_to_canonical_tokens": ".test_punctuation_and_uk_variants_normalize_to_canonical_tokens()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L58 | neighbors=[TestTokenizer]
- "tests_test_core_testtokenizer_test_short_domain_terms_are_kept": ".test_short_domain_terms_are_kept()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L32 | neighbors=[TestTokenizer]
- "tests_test_core_testtokenizer_test_stopwords_removed": ".test_stopwords_removed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L39 | neighbors=[TestTokenizer]
- "tests_test_core_testtokenizer_test_synonym_normalization": ".test_synonym_normalization()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L45 | neighbors=[TestTokenizer]
- "tests_test_data_contracts_testgeneratedcatalogcontract_test_canonical_catalogs_and_provenance_are_release_ready": ".test_canonical_catalogs_and_provenance_are_release_ready()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L359 | neighbors=[TestGeneratedCatalogContract]
- "tests_test_data_contracts_testlandingandstackcontract_test_dataset_provenance_scope_binds_real_rows_and_fields": ".test_dataset_provenance_scope_binds_real_rows_and_fields()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L328 | neighbors=[TestLandingAndStackContract]
- "tests_test_data_contracts_testlandingandstackcontract_test_provenance_sidecar_has_stable_shape": ".test_provenance_sidecar_has_stable_shape()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L279 | neighbors=[TestLandingAndStackContract]
- "tests_test_data_contracts_testlandingandstackcontract_test_stack_schema_is_additive_and_uniform": ".test_stack_schema_is_additive_and_uniform()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L270 | neighbors=[TestLandingAndStackContract]
- "tests_test_data_contracts_testreasoningcontract_test_canonical_style_priority_is_not_limited_to_bm25_top_three": ".test_canonical_style_priority_is_not_limited_to_bm25_top_three()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L209 | neighbors=[TestReasoningContract]
- "tests_test_data_contracts_testreasoningcontract_test_constraints_reach_domain_queries": ".test_constraints_reach_domain_queries()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L187 | neighbors=[TestReasoningContract]
- "tests_test_data_contracts_testreasoningcontract_test_duplicate_semantic_reasoning_labels_fail_validation": ".test_duplicate_semantic_reasoning_labels_fail_validation()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L218 | neighbors=[TestReasoningContract]
- "tests_test_data_contracts_testreasoningcontract_test_duplicate_unknown_keys_and_unknown_actions_fail_closed": ".test_duplicate_unknown_keys_and_unknown_actions_fail_closed()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L107 | neighbors=[TestReasoningContract]
- "tests_test_data_contracts_testreasoningcontract_test_must_have_and_explicit_signals_are_applied_and_reported": ".test_must_have_and_explicit_signals_are_applied_and_reported()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L119 | neighbors=[TestReasoningContract]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-021.json

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
