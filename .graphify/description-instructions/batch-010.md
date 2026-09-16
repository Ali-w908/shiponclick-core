# Node Description Batch 11 of 23

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

- "lib_stripe_getsubscription": "getSubscription()" | kind=code-symbol | source=src/lib/stripe.ts:L98 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_resumesubscription": "resumeSubscription()" | kind=code-symbol | source=src/lib/stripe.ts:L136 | neighbors=[stripe.ts, getStripe()]
- "lib_utils_absoluteurl": "absoluteUrl()" | kind=code-symbol | source=src/lib/utils.ts:L61 | neighbors=[utils.ts, utils.test.ts]
- "lib_utils_formatcurrency": "formatCurrency()" | kind=code-symbol | source=src/lib/utils.ts:L36 | neighbors=[utils.ts, utils.test.ts]
- "lib_utils_formatdate": "formatDate()" | kind=code-symbol | source=src/lib/utils.ts:L19 | neighbors=[utils.ts, utils.test.ts]
- "lib_utils_slugify": "slugify()" | kind=code-symbol | source=src/lib/utils.ts:L48 | neighbors=[utils.ts, utils.test.ts]
- "marketing_agents_showcase_agentsshowcase": "AgentsShowcase()" | kind=code-symbol | source=src/components/marketing/agents-showcase.tsx:L35 | neighbors=[agents-showcase.tsx, page.tsx]
- "marketing_codebase_explorer_codebaseexplorer": "CodebaseExplorer()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L122 | neighbors=[codebase-explorer.tsx, page.tsx]
- "marketing_faq_faq": "FAQ()" | kind=code-symbol | source=src/components/marketing/faq.tsx:L28 | neighbors=[faq.tsx, page.tsx]
- "marketing_features_features": "features" | kind=code-symbol | source=src/components/marketing/features.tsx:L5 | neighbors=[features.tsx, page.tsx]
- "marketing_final_cta_finalcta": "FinalCTA()" | kind=code-symbol | source=src/components/marketing/final-cta.tsx:L6 | neighbors=[final-cta.tsx, page.tsx]
- "marketing_footer_footer": "Footer()" | kind=code-symbol | source=src/components/marketing/footer.tsx:L5 | neighbors=[footer.tsx, layout.tsx]
- "marketing_hero_hero": "Hero()" | kind=code-symbol | source=src/components/marketing/hero.tsx:L16 | neighbors=[hero.tsx, page.tsx]
- "marketing_how_it_works_howitworks": "HowItWorks()" | kind=code-symbol | source=src/components/marketing/how-it-works.tsx:L23 | neighbors=[how-it-works.tsx, page.tsx]
- "marketing_navbar_navbar": "Navbar()" | kind=code-symbol | source=src/components/marketing/navbar.tsx:L11 | neighbors=[layout.tsx, navbar.tsx]
- "marketing_social_proof_socialproof": "SocialProof()" | kind=code-symbol | source=src/components/marketing/social-proof.tsx:L33 | neighbors=[page.tsx, social-proof.tsx]
- "marketing_tech_stack_techstack": "TechStack()" | kind=code-symbol | source=src/components/marketing/tech-stack.tsx:L18 | neighbors=[page.tsx, tech-stack.tsx]
- "marketing_testing_suite_testingsuite": "TestingSuite()" | kind=code-symbol | source=src/components/marketing/testing-suite.tsx:L11 | neighbors=[page.tsx, testing-suite.tsx]
- "marketing_value_proposition_valueproposition": "ValueProposition()" | kind=code-symbol | source=src/components/marketing/value-proposition.tsx:L38 | neighbors=[page.tsx, value-proposition.tsx]
- "middleware": "middleware.ts" | kind=code-symbol | source=middleware.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, config]
- "mocks_auth_mocksignin": "mockSignIn" | kind=code-symbol | source=tests/mocks/auth.ts:L29 | neighbors=[auth.test.ts, auth.ts]
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
- "scripts_build_open_core_copyrecursivesync": "copyRecursiveSync()" | kind=code-symbol | source=scripts/build-open-core.js:L54 | neighbors=[build-open-core.js, shouldExclude()]
- "scripts_build_open_core_shouldexclude": "shouldExclude()" | kind=code-symbol | source=scripts/build-open-core.js:L42 | neighbors=[build-open-core.js, copyRecursiveSync()]
- "scripts_capture_screenshots": "capture-screenshots.ts" | kind=code-symbol | source=scripts/capture-screenshots.ts:L1 | neighbors=[bdf0787 docs: replace readme placeholde…, capture()]
- "scripts_design_system_designsystemgenerator_build_style_lookup": "._build_style_lookup()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L297 | neighbors=[DesignSystemGenerator, .__init__()]
- "scripts_design_system_designsystemgenerator_load_landing_patterns": "._load_landing_patterns()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L282 | neighbors=[DesignSystemGenerator, .__init__()]
- "scripts_design_system_designsystemgenerator_load_styles": "._load_styles()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L275 | neighbors=[DesignSystemGenerator, .__init__()]
- "scripts_reasoning_contract_apply_decision_rules": "apply_decision_rules()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L101 | neighbors=[reasoning_contract.py, Return deterministic mutations and an a…]
- "scripts_reasoning_contract_validate_action": "_validate_action()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L87 | neighbors=[reasoning_contract.py, parse_decision_rules()]
- "scripts_search": "search.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/search.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, format_output()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-010.json

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
