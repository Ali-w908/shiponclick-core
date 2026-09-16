# Node Description Batch 5 of 23

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

- "marketing_agents_showcase": "agents-showcase.tsx" | kind=code-symbol | source=src/components/marketing/agents-showcase.tsx:L1 | neighbors=[6684611 features: added: legal files, f…, f6172b0 feat: UI/UX overhaul, modern de…, agentFeatures, AgentsShowcase(), page.tsx]
- "marketing_features": "features.tsx" | kind=code-symbol | source=src/components/marketing/features.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, features, page.tsx]
- "marketing_how_it_works": "how-it-works.tsx" | kind=code-symbol | source=src/components/marketing/how-it-works.tsx:L1 | neighbors=[71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, HowItWorks(), steps, page.tsx]
- "marketing_social_proof": "social-proof.tsx" | kind=code-symbol | source=src/components/marketing/social-proof.tsx:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, SocialProof(), stats, testimonials]
- "marketing_tech_stack": "tech-stack.tsx" | kind=code-symbol | source=src/components/marketing/tech-stack.tsx:L1 | neighbors=[71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, technologies, TechStack()]
- "marketing_testing_suite": "testing-suite.tsx" | kind=code-symbol | source=src/components/marketing/testing-suite.tsx:L1 | neighbors=[6684611 features: added: legal files, f…, f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, testCategories, TestingSuite()]
- "mocks_auth_createmocksession": "createMockSession()" | kind=code-symbol | source=tests/mocks/auth.ts:L45 | neighbors=[org.test.ts, auth.ts, createAuthenticatedUser(), authorization.test.ts, input-validation.test.ts]
- "mocks_auth_resetauthmocks": "resetAuthMocks()" | kind=code-symbol | source=tests/mocks/auth.ts:L103 | neighbors=[auth.test.ts, org.test.ts, auth.ts, authorization.test.ts, input-validation.test.ts]
- "register_page": "page.tsx" | kind=code-symbol | source=src/app/(auth)/register/page.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, RegisterPage(), RocketIcon(), register-form.tsx]
- "scripts_core_bm25_score": ".score()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L323 | neighbors=[BM25, .tokenize(), _passes_threshold(), Score all documents against query, _search_csv_detailed()]
- "scripts_core_bm25_vocabulary": ".vocabulary()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L345 | neighbors=[BM25, _query_coverage(), All indexed terms, for suggestion/typo-…, _rewrite_query_for_domain(), _suggest_terms()]
- "scripts_core_domain_keywords": "_domain_keywords()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L564 | neighbors=[core.py, detect_domain(), _file_signature(), _load_product_keywords(), _rewrite_query_for_domain()]
- "scripts_core_legacy_successor_guidance": "_legacy_successor_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L938 | neighbors=[core.py, _normalize(), search(), Prefer the explicit successor row for a…, search_stack()]
- "scripts_core_load_csv": "_load_csv()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L381 | neighbors=[core.py, _load_csv_snapshot(), _load_product_keywords(), _load_rows_or_empty(), Load CSV rows from a stable, signature-…]
- "scripts_core_load_csv_snapshot": "_load_csv_snapshot()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L363 | neighbors=[core.py, _load_csv(), _file_signature(), Return rows and the verified signature …, _search_csv_detailed()]
- "scripts_core_load_rows_or_empty": "_load_rows_or_empty()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L705 | neighbors=[core.py, _load_csv(), Load rows for optional identity routing…, search(), search_stack()]
- "scripts_core_query_coverage": "_query_coverage()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L406 | neighbors=[core.py, _passes_threshold(), .tokenize(), .vocabulary(), _search_csv_detailed()]
- "scripts_core_row_identities": "_row_identities()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L525 | neighbors=[core.py, _exact_row_identity(), Return non-empty public identities from…, _style_identity(), _suggest_identities()]
- "scripts_core_stack_query_requests_legacy": "_stack_query_requests_legacy()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L848 | neighbors=[core.py, Whether a stack query explicitly target…, _normalize(), search(), _stack_row_filter()]
- "scripts_core_stack_row_filter": "_stack_row_filter()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L888 | neighbors=[core.py, Choose one coherent applicability gener…, search_stack(), _normalize(), _stack_query_requests_legacy()]
- "scripts_core_style_identity": "_style_identity()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L664 | neighbors=[core.py, Resolve an explicit style identity with…, search(), _normalize(), _row_identities()]
- "scripts_design_system_designsystemgenerator_apply_reasoning": "._apply_reasoning()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L365 | neighbors=[DesignSystemGenerator, ._find_reasoning_rule(), ._resolve_style(), .generate(), Apply reasoning rules to search results.]
- "scripts_design_system_designsystemgenerator_init": ".__init__()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L261 | neighbors=[DesignSystemGenerator, ._build_style_lookup(), ._load_landing_patterns(), ._load_reasoning(), ._load_styles()]
- "scripts_design_system_resolve_color_mode": "_resolve_color_mode()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L186 | neighbors=[design_system.py, .generate(), Resolve the mode the rest of the output…, _query_wants_dark(), _style_is_dark_primary()]
- "scripts_design_system_select_palette_for_mode": "_select_palette_for_mode()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L220 | neighbors=[design_system.py, .generate(), Pick the highest-ranked palette matchin…, _derive_dark_palette(), _palette_is_dark()]
- "scripts_reasoning_contract": "reasoning_contract.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), _validate_action()]
- "scripts_validate_data_read_rows": "_read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L163 | neighbors=[validate_data.py, _check_catalog_summary(), _check_file(), _valid_catalog_source_key(), _valid_dataset_source_key()]
- "scripts_validate_data_split": "_split()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L208 | neighbors=[validate_data.py, _check_font_catalog(), _check_icon_contract(), _check_style_contract(), validate()]
- "scripts_wait_for_port": "wait-for-port.js" | kind=code-symbol | source=scripts/wait-for-port.js:L1 | neighbors=[bdf0787 docs: replace readme placeholde…, client, net, start, tryConnect()]
- "stripe_route_handlecheckoutcompleted": "handleCheckoutCompleted()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L160 | neighbors=[route.ts, getCustomerId(), getSubscriptionData(), getSubscriptionId(), POST()]
- "tests_test_core_testdiagnosticscontracts": "TestDiagnosticsContracts" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L326 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_diagnostics_opt_in_is_additive_fo…, .test_diagnostics_opt_in_is_additive_fo…]
- "tests_test_core_testreasoningmatch": "TestReasoningMatch" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L313 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_known_category_matches_exactly(), .test_unknown_category_falls_back_grace…]
- "tests_test_data_contracts_teststyleidentitycontract": "TestStyleIdentityContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L41 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .setUp(), .test_every_product_and_reasoning_style…, .test_ids_aliases_status_and_parents_ar…]
- "tests_test_relevance_evaluator_testmetricmath": "TestMetricMath" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L17 | neighbors=[test_relevance_evaluator.py, .test_ndcg_uses_graded_gain_and_handles…, .test_precision_counts_missing_ranks_as…, .test_reciprocal_rank_stops_at_k(), .test_result_grades_match_identity_subs…]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts": "TestTextLayoutDataContracts" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L68 | neighbors=[test_text_layout_resilience.py, .setUpClass(), .test_new_tailwind_rows_are_unique_curr…, .test_new_ux_rows_are_unique_sequential…, .test_refined_rows_are_context_sensitiv…]
- "tests_test_web_stack_freshness_rows": "_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L31 | neighbors=[test_web_stack_freshness.py, .test_active_rows_use_the_verified_curr…, .test_high_impact_rows_use_official_sou…, .test_stale_apis_are_not_recommended_by…, .test_web_rows_have_explicit_freshness_…]
- "ui_feedback_widget": "feedback-widget.tsx" | kind=code-symbol | source=src/components/ui/feedback-widget.tsx:L1 | neighbors=[layout.tsx, f03e200 fix: add untracked files, feedback-actions.ts, submitFeedback(), FeedbackWidget()]
- "ui_logo": "logo.tsx" | kind=code-symbol | source=src/components/ui/logo.tsx:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, page.tsx, footer.tsx, navbar.tsx, Logo()]
- "actions_auth_actions_register": "register()" | kind=code-symbol | source=src/actions/auth-actions.ts:L96 | neighbors=[auth-actions.ts, auth.test.ts, input-validation.test.ts, register-form.tsx]
- "actions_billing_actions_createcheckout": "createCheckout()" | kind=code-symbol | source=src/actions/billing-actions.ts:L51 | neighbors=[billing-actions.ts, requireBillingPermission(), page.tsx, authorization.test.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-004.json

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
