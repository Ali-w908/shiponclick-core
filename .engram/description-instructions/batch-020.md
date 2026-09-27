# Node Description Batch 21 of 24

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

- "sentry_edge_config": "sentry.edge.config.ts" | kind=code-symbol | source=sentry.edge.config.ts:L1 | neighbors=[5c2866e chore: setup Sentry and clean u…]
- "sentry_server_config": "sentry.server.config.ts" | kind=code-symbol | source=sentry.server.config.ts:L1 | neighbors=[5c2866e chore: setup Sentry and clean u…]
- "settings_page_settingspage": "SettingsPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/page.tsx:L7 | neighbors=[page.tsx]
- "src_instrumentation_client": "instrumentation-client.ts" | kind=code-symbol | source=src/instrumentation-client.ts:L1 | neighbors=[5c2866e chore: setup Sentry and clean u…]
- "src_instrumentation_register": "register()" | kind=code-symbol | source=src/instrumentation.ts:L3 | neighbors=[instrumentation.ts]
- "stripe_route_mapstripestatus": "mapStripeStatus()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L401 | neighbors=[route.ts]
- "stripe_route_rationale_349": "TODO: Trigger email notification to org owner" | kind=entity | source=src/app/api/webhooks/stripe/route.ts:L349 | neighbors=[route.ts]
- "stripe_route_subscriptiondata": "SubscriptionData" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L11 | neighbors=[route.ts]
- "systematic_debugging_condition_based_waiting_example_waitforevent": "waitForEvent()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/systematic-debugging/condition-based-waiting-example.ts:L20 | neighbors=[condition-based-waiting-example.ts]
- "systematic_debugging_condition_based_waiting_example_waitforeventcount": "waitForEventCount()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/systematic-debugging/condition-based-waiting-example.ts:L60 | neighbors=[condition-based-waiting-example.ts]
- "systematic_debugging_condition_based_waiting_example_waitforeventmatch": "waitForEventMatch()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/systematic-debugging/condition-based-waiting-example.ts:L111 | neighbors=[condition-based-waiting-example.ts]
- "terms_page_metadata": "metadata" | kind=code-symbol | source=src/app/(marketing)/terms/page.tsx:L3 | neighbors=[page.tsx]
- "terms_page_termsofservicepage": "TermsOfServicePage()" | kind=code-symbol | source=src/app/(marketing)/terms/page.tsx:L8 | neighbors=[page.tsx]
- "tests_test_core_data_quality_testchartstypographyandicons_test_natural_accessibility_queries_are_retrievable": ".test_natural_accessibility_queries_are_retrievable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L168 | neighbors=[TestChartsTypographyAndIcons]
- "tests_test_core_testbm25corebehavior_test_bm25_cache_rebuilds_after_file_mtime_changes": ".test_bm25_cache_rebuilds_after_file_mtime_changes()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L72 | neighbors=[TestBm25CoreBehavior]
- "tests_test_core_testbm25corebehavior_test_empty_documents_produce_no_scores_or_vocab": ".test_empty_documents_produce_no_scores_or_vocab()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L66 | neighbors=[TestBm25CoreBehavior]
- "tests_test_core_testbm25corebehavior_test_search_uses_one_verified_rows_and_index_snapshot": ".test_search_uses_one_verified_rows_and_index_snapshot()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L87 | neighbors=[TestBm25CoreBehavior]
- "tests_test_core_testdiagnosticscontracts_test_diagnostics_opt_in_is_additive_for_domain_search": ".test_diagnostics_opt_in_is_additive_for_domain_search()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L327 | neighbors=[TestDiagnosticsContracts]
- "tests_test_core_testdiagnosticscontracts_test_diagnostics_opt_in_is_additive_for_stack_search": ".test_diagnostics_opt_in_is_additive_for_stack_search()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L335 | neighbors=[TestDiagnosticsContracts]
- "tests_test_core_testdomaindetection_test_accessibility_keywords_route_to_ux": ".test_accessibility_keywords_route_to_ux()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L206 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_ambiguous_query_returns_runner_up": ".test_ambiguous_query_returns_runner_up()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L209 | neighbors=[TestDomainDetection]
- "tests_test_core_testdomaindetection_test_empty_query_falls_back_to_style": ".test_empty_query_falls_back_to_style()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L213 | neighbors=[TestDomainDetection]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-020.json

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
