# Node Description Batch 19 of 23

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "scripts_design_system_rationale_923": "Main entry point for design system generation.      Args:         query: Search" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L923 | neighbors=[generate_design_system()] | lang=en
- "scripts_design_system_rationale_962": "Slugify a name into a single safe path segment.      Only [a-z0-9_-] survives; e" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L962 | neighbors=[safe_slug()] | lang=pt
- "scripts_design_system_rationale_973": "Write fully to a temp file, then publish atomically." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L973 | neighbors=[_write_persisted_file()] | lang=en
- "scripts_design_system_rationale_997": "Persist design system to design-system/<project>/ folder using Master + Override" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L997 | neighbors=[persist_design_system()] | lang=en
- "scripts_reasoning_contract_object_without_duplicates": "_object_without_duplicates()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L58 | neighbors=[reasoning_contract.py] | lang=en
- "scripts_reasoning_contract_rationale_102": "Return deterministic mutations and an audit trail; never execute data." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L102 | neighbors=[apply_decision_rules()] | lang=en
- "scripts_reasoning_contract_rationale_68": "Parse the canonical condition -> action-array representation." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L68 | neighbors=[parse_decision_rules()] | lang=en
- "scripts_search_rationale_45": "Format results for Claude consumption (token-optimized)" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/search.py:L45 | neighbors=[format_output()] | lang=en
- "scripts_setup_execsync": "{ execSync }" | kind=code-symbol | source=scripts/setup.js:L4 | neighbors=[setup.js] | lang=en
- "scripts_setup_fs": "fs" | kind=code-symbol | source=scripts/setup.js:L1 | neighbors=[setup.js] | lang=en
- "scripts_setup_path": "path" | kind=code-symbol | source=scripts/setup.js:L2 | neighbors=[setup.js] | lang=en
- "scripts_setup_readline": "readline" | kind=code-symbol | source=scripts/setup.js:L3 | neighbors=[setup.js] | lang=en
- "scripts_setup_rl": "rl" | kind=code-symbol | source=scripts/setup.js:L6 | neighbors=[setup.js] | lang=en
- "scripts_test_ls_testcheckout": "testCheckout()" | kind=code-symbol | source=scripts/test_ls.ts:L4 | neighbors=[test_ls.ts] | lang=en
- "scripts_validate_data_rationale_1000": "Return every semantic data problem without terminating the process." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L1000 | neighbors=[validate()] | lang=en
- "scripts_validate_data_rationale_158": "Return WCAG contrast for two opaque six-digit sRGB colors." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L158 | neighbors=[contrast_ratio()] | lang=en
- "scripts_validate_data_rationale_802": "Validate curated-stack applicability and official high-impact sources." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L802 | neighbors=[_check_stack_freshness_contract()] | lang=en
- "scripts_wait_for_port_client": "client" | kind=code-symbol | source=scripts/wait-for-port.js:L4 | neighbors=[wait-for-port.js] | lang=en
- "scripts_wait_for_port_net": "net" | kind=code-symbol | source=scripts/wait-for-port.js:L3 | neighbors=[wait-for-port.js] | lang=en
- "scripts_wait_for_port_start": "start" | kind=code-symbol | source=scripts/wait-for-port.js:L5 | neighbors=[wait-for-port.js] | lang=en
- "scripts_wait_for_port_tryconnect": "tryConnect()" | kind=code-symbol | source=scripts/wait-for-port.js:L7 | neighbors=[wait-for-port.js] | lang=en
- "security_input_validation_test_constructor": "constructor()" | kind=code-symbol | source=tests/security/input-validation.test.ts:L35 | neighbors=[input-validation.test.ts] | lang=en
- "sentry_edge_config": "sentry.edge.config.ts" | kind=code-symbol | source=sentry.edge.config.ts:L1 | neighbors=[5c2866e chore: setup Sentry and clean u…] | lang=en
- "sentry_server_config": "sentry.server.config.ts" | kind=code-symbol | source=sentry.server.config.ts:L1 | neighbors=[5c2866e chore: setup Sentry and clean u…] | lang=en
- "settings_page_settingspage": "SettingsPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/page.tsx:L7 | neighbors=[page.tsx] | lang=en
- "src_instrumentation_client": "instrumentation-client.ts" | kind=code-symbol | source=src/instrumentation-client.ts:L1 | neighbors=[5c2866e chore: setup Sentry and clean u…] | lang=en
- "src_instrumentation_register": "register()" | kind=code-symbol | source=src/instrumentation.ts:L3 | neighbors=[instrumentation.ts] | lang=en
- "stripe_route_mapstripestatus": "mapStripeStatus()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L401 | neighbors=[route.ts] | lang=en
- "stripe_route_subscriptiondata": "SubscriptionData" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L11 | neighbors=[route.ts] | lang=en
- "terms_page_metadata": "metadata" | kind=code-symbol | source=src/app/(marketing)/terms/page.tsx:L3 | neighbors=[page.tsx] | lang=en
- "terms_page_termsofservicepage": "TermsOfServicePage()" | kind=code-symbol | source=src/app/(marketing)/terms/page.tsx:L8 | neighbors=[page.tsx] | lang=en
- "tests_test_core_data_quality_testchartstypographyandicons_test_natural_accessibility_queries_are_retrievable": ".test_natural_accessibility_queries_are_retrievable()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L168 | neighbors=[TestChartsTypographyAndIcons] | lang=en
- "tests_test_core_testbm25corebehavior_test_bm25_cache_rebuilds_after_file_mtime_changes": ".test_bm25_cache_rebuilds_after_file_mtime_changes()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L72 | neighbors=[TestBm25CoreBehavior] | lang=en
- "tests_test_core_testbm25corebehavior_test_empty_documents_produce_no_scores_or_vocab": ".test_empty_documents_produce_no_scores_or_vocab()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L66 | neighbors=[TestBm25CoreBehavior] | lang=en
- "tests_test_core_testbm25corebehavior_test_search_uses_one_verified_rows_and_index_snapshot": ".test_search_uses_one_verified_rows_and_index_snapshot()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L87 | neighbors=[TestBm25CoreBehavior] | lang=en
- "tests_test_core_testdiagnosticscontracts_test_diagnostics_opt_in_is_additive_for_domain_search": ".test_diagnostics_opt_in_is_additive_for_domain_search()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L327 | neighbors=[TestDiagnosticsContracts] | lang=en
- "tests_test_core_testdiagnosticscontracts_test_diagnostics_opt_in_is_additive_for_stack_search": ".test_diagnostics_opt_in_is_additive_for_stack_search()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L335 | neighbors=[TestDiagnosticsContracts] | lang=en
- "tests_test_core_testdomaindetection_test_accessibility_keywords_route_to_ux": ".test_accessibility_keywords_route_to_ux()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L206 | neighbors=[TestDomainDetection] | lang=en
- "tests_test_core_testdomaindetection_test_ambiguous_query_returns_runner_up": ".test_ambiguous_query_returns_runner_up()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L209 | neighbors=[TestDomainDetection] | lang=en
- "tests_test_core_testdomaindetection_test_empty_query_falls_back_to_style": ".test_empty_query_falls_back_to_style()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L213 | neighbors=[TestDomainDetection] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-018.json

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
