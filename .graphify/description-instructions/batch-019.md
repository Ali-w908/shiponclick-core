# Node Description Batch 20 of 23

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

- "tests_test_core_testdomaindetection_test_every_router_term_is_searchable_or_has_a_corpus_rewrite": ".test_every_router_term_is_searchable_or_has_a_corpus_rewrite()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L239 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_hash_only_routes_color_for_a_valid_hex_literal": ".test_hash_only_routes_color_for_a_valid_hex_literal()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L228 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_native_drag_intent_beats_generic_react_token": ".test_native_drag_intent_beats_generic_react_token()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L236 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_product_router_keeps_high_signal_service_aliases": ".test_product_router_keeps_high_signal_service_aliases()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L232 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_router_prioritizes_chart_queries_over_generic_product_keywords": ".test_router_prioritizes_chart_queries_over_generic_product_keywords()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L225 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_router_prioritizes_color_intent_over_generic_product_terms": ".test_router_prioritizes_color_intent_over_generic_product_terms()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L216 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_router_prioritizes_icons_when_icon_library_and_icon_intent_present": ".test_router_prioritizes_icons_when_icon_library_and_icon_intent_present()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L219 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_router_prioritizes_typography_for_font_pairing_queries": ".test_router_prioritizes_typography_for_font_pairing_queries()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L222 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_style_keywords_route_to_style": ".test_style_keywords_route_to_style()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L203 | neighbors=[TestDomainDetection]
- "tests_test_core_testpersistence_test_concurrent_non_force_persist_has_one_writer": ".test_concurrent_non_force_persist_has_one_writer()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L253 | neighbors=[TestPersistence]
- "tests_test_core_testpersistence_test_persist_then_skip_then_force": ".test_persist_then_skip_then_force()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L271 | neighbors=[TestPersistence]
- "tests_test_core_testpersistence_test_persist_writes_only_under_output_dir": ".test_persist_writes_only_under_output_dir()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L306 | neighbors=[TestPersistence]
- "tests_test_core_testreasoningmatch_test_known_category_matches_exactly": ".test_known_category_matches_exactly()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L314 | neighbors=[TestReasoningMatch]
- "tests_test_core_testreasoningmatch_test_unknown_category_falls_back_gracefully": ".test_unknown_category_falls_back_gracefully()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L319 | neighbors=[TestReasoningMatch]
- "tests_test_core_testsearchdomains_test_accessibility_query_hits_ux": ".test_accessibility_query_hits_ux()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L129 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_chart_output_keeps_legacy_grade_during_risk_migration": ".test_chart_output_keeps_legacy_grade_during_risk_migration()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L186 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_every_configured_domain_file_exists_and_is_searchable": ".test_every_configured_domain_file_exists_and_is_searchable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L180 | neighbors=[TestSearchDomains]
- "tests_test_core_testsearchdomains_test_every_stack_file_exists_and_is_searchable": ".test_every_stack_file_exists_and_is_searchable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L195 | neighbors=[TestSearchDomains]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-019.json

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
