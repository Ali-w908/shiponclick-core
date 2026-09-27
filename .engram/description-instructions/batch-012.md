# Node Description Batch 13 of 24

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

- "mocks_auth_mocksignout": "mockSignOut" | kind=code-symbol | source=tests/mocks/auth.ts:L32 | neighbors=[auth.test.ts, auth.ts]
- "mocks_auth_setmockrole": "setMockRole()" | kind=code-symbol | source=tests/mocks/auth.ts:L95 | neighbors=[auth.ts, createAuthenticatedUser()]
- "mocks_stripe_createmockwebhookevent": "createMockWebhookEvent()" | kind=code-symbol | source=tests/mocks/stripe.ts:L136 | neighbors=[stripe.ts, stripe.test.ts]
- "mocks_stripe_generatemockstripesignature": "generateMockStripeSignature()" | kind=code-symbol | source=tests/mocks/stripe.ts:L155 | neighbors=[stripe.ts, stripe.test.ts]
- "mocks_stripe_mockstripe": "mockStripe" | kind=code-symbol | source=tests/mocks/stripe.ts:L86 | neighbors=[stripe.ts, stripe.test.ts]
- "mocks_stripe_mockstripesubscription": "mockStripeSubscription" | kind=code-symbol | source=tests/mocks/stripe.ts:L32 | neighbors=[stripe.ts, stripe.test.ts]
- "mocks_stripe_resetstripemocks": "resetStripeMocks()" | kind=code-symbol | source=tests/mocks/stripe.ts:L183 | neighbors=[stripe.ts, stripe.test.ts]
- "nextauth_route": "route.ts" | kind=code-symbol | source=src/app/api/auth/[...nextauth]/route.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, auth.ts]
- "playwright_config": "playwright.config.ts" | kind=code-symbol | source=playwright.config.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…]
- "postcss_config": "postcss.config.mjs" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[9f800ea Initial commit from Create Next…, config]
- "scripts_design_system_designsystemgenerator_build_style_lookup": "._build_style_lookup()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L297 | neighbors=[DesignSystemGenerator, .__init__()]
- "scripts_design_system_designsystemgenerator_load_landing_patterns": "._load_landing_patterns()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L282 | neighbors=[DesignSystemGenerator, .__init__()]
- "scripts_design_system_designsystemgenerator_load_styles": "._load_styles()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L275 | neighbors=[DesignSystemGenerator, .__init__()]
- "scripts_list_variants": "list-variants.ts" | kind=code-symbol | source=scripts/list-variants.ts:L1 | neighbors=[f2af8ac checkpoint: before 3D backgroun…, listAllVariants()]
- "scripts_reasoning_contract_apply_decision_rules": "apply_decision_rules()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L101 | neighbors=[reasoning_contract.py, Return deterministic mutations and an a…]
- "scripts_reasoning_contract_validate_action": "_validate_action()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L87 | neighbors=[reasoning_contract.py, parse_decision_rules()]
- "scripts_search": "search.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/search.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, format_output()]
- "scripts_search_format_output": "format_output()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/search.py:L44 | neighbors=[search.py, Format results for Claude consumption (…]
- "scripts_test_ls_checkout": "test-ls-checkout.ts" | kind=code-symbol | source=scripts/test-ls-checkout.ts:L1 | neighbors=[f2af8ac checkpoint: before 3D backgroun…, testCheckout()]
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-012.json

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
