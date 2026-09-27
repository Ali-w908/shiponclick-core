# Node Description Batch 6 of 24

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8252574fb0c53685778c286c0f83f1f339ecc45a": "8252574 fix: explicit issuer for github provider" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 8161816 feat: pivot to open-core strate…, auth.ts, bf72399 Resolve merge conflict in READM…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8258ceefe8c22a1d4e34703d9e8969b83136aca7": "8258cee fix: await searchParams in login page and provide AUTH_SECRET to playwr…" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 3e27e7e fix: update e2e auth setup to e…, page.tsx, cb6a41d fix: remove duplicate test.use …] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8920425e4953ac9ff35b17c2ebaf83ad1f2296fe": "8920425 fix: resolve terminal prompt text duplication and make setup output pre…" | kind=Commit | source=git | neighbors=[7cf3551 fix: make setup command 100% cr…, feature/auros-theme, main, 046fd8b feat: add terminal selector for…, setup.js] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a2dfaffe83f67619403ac0aee27d58478b95ed48": "a2dfaff fix: remove broken scroll-reveal from pricing section and simplify card" | kind=Commit | source=git | neighbors=[587e511 feat: simplify landing page pri…, feature/auros-theme, main, 50fa99d feat: streamline logged-in chec…, page.tsx] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a947fd8c7b9890332d2f1d8324a8789f7971fb0a": "a947fd8 docs: instruct users to open project folder directly in IDE to enable A…" | kind=Commit | source=git | neighbors=[046fd8b feat: add terminal selector for…, feature/auros-theme, main, 2f26f3c feat: add clickable IDE termina…, setup.js] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a9d42ffabc8e9ad8bff6192ba28fe6d443f856e6": "a9d42ff fix: build errors (zod issues and strict types)" | kind=Commit | source=git | neighbors=[28ddf7f fix: zod error issues property, feature/auros-theme, main, 5c2866e chore: setup Sentry and clean u…, page.tsx] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@bf72399937caf4da51edd76b4f2c710d6d0add4b": "bf72399 Resolve merge conflict in README.md" | kind=Commit | source=git | neighbors=[89988d0 full dashboard redesign, README…, feature/auros-theme, main, 8252574 fix: explicit issuer for github…, eee52de Update README.md] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@c1fa4c086c16de7acf4860b46e1d5a3d2bd038b7": "c1fa4c0 refactor: remove recent activity section to streamline dashboard UI" | kind=Commit | source=git | neighbors=[2f26f3c feat: add clickable IDE termina…, feature/auros-theme, main, 1f93fc1 fix: remove fragile cursor and …, page.tsx] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@cb6a41d4e3ecea0b67ce2dfd8115c0adcf49fdd1": "cb6a41d fix: remove duplicate test.use causing playwright error" | kind=Commit | source=git | neighbors=[7252c33 fix: resolve failing tests from…, feature/auros-theme, main, 8258cee fix: await searchParams in logi…, mobile.spec.ts] | lang=pt
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@d509f8524018e6b836f2a0d487930f7e76844fcd": "d509f85 fix: fixed GitHub username card bug" | kind=Commit | source=git | neighbors=[5871434 fix: fixed 'Get Instant Access'…, github-actions.ts, feature/auros-theme, main, 6684611 features: added: legal files, f…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@ecab82c9db5df350a7f7164df65b6184aca068ce": "ecab82c style: update hero terminal animation with real clone and setup commands" | kind=Commit | source=git | neighbors=[3194208 fix: resolve Open Code Review i…, feature/auros-theme, main, a1391e2 feat: add raw demo video sectio…, hero.tsx] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@f957e3837709e531485a8f49d0778ebb50496d12": "f957e38 docs: remove license section and force add .env.example" | kind=Commit | source=git | neighbors=[bdf0787 docs: replace readme placeholde…, feature/auros-theme, main, ba7152d chore: consolidate documentatio…, capture-screenshots.spec.ts] | lang=en
- "components_github_connection_card_test": "github-connection-card.test.tsx" | kind=code-symbol | source=tests/unit/components/github-connection-card.test.tsx:L1 | neighbors=[f849da3 feat: stabilize github claim ac…, github.ts, claimGithubRepository(), github-connection-card.tsx, GithubConnectionCard()] | lang=en
- "factories_index_createmockowner": "createMockOwner()" | kind=code-symbol | source=tests/factories/index.ts:L134 | neighbors=[org.test.ts, index.ts, createMockMember(), authorization.test.ts, input-validation.test.ts] | lang=en
- "lemonsqueezy_route_post": "POST()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L17 | neighbors=[route.ts, handleOrderCreated(), handleSubscriptionCancelled(), handleSubscriptionCreated(), handleSubscriptionUpdated()] | lang=en
- "lib_email_sendinviteemail": "sendInviteEmail()" | kind=code-symbol | source=src/lib/email.ts:L19 | neighbors=[org.test.ts, email.ts, getResend(), email.test.ts, invite-service.ts] | lang=en
- "lib_email_test": "email.test.ts" | kind=code-symbol | source=tests/unit/lib/email.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, email.ts, sendInviteEmail(), { mockEmailsSend }] | lang=en
- "lib_subscription_requireactivesubscription": "requireActiveSubscription()" | kind=code-symbol | source=src/lib/subscription.ts:L46 | neighbors=[github.ts, github.test.ts, subscription.ts, getSubscriptionStatus(), subscription.test.ts] | lang=en
- "marketing_agents_showcase": "agents-showcase.tsx" | kind=code-symbol | source=src/components/marketing/agents-showcase.tsx:L1 | neighbors=[6684611 features: added: legal files, f…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, agentFeatures, AgentsShowcase()] | lang=en
- "marketing_testing_suite": "testing-suite.tsx" | kind=code-symbol | source=src/components/marketing/testing-suite.tsx:L1 | neighbors=[6684611 features: added: legal files, f…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, testCategories, TestingSuite()] | lang=en
- "mocks_auth_createmocksession": "createMockSession()" | kind=code-symbol | source=tests/mocks/auth.ts:L45 | neighbors=[org.test.ts, auth.ts, createAuthenticatedUser(), authorization.test.ts, input-validation.test.ts] | lang=en
- "mocks_auth_resetauthmocks": "resetAuthMocks()" | kind=code-symbol | source=tests/mocks/auth.ts:L103 | neighbors=[auth.test.ts, org.test.ts, auth.ts, authorization.test.ts, input-validation.test.ts] | lang=en
- "organization_invite_service_inviteservice": "InviteService" | kind=code-symbol | source=src/domain/organization/invite-service.ts:L6 | neighbors=[org-actions.ts, invite-service.ts, .acceptInvite(), .inviteUser(), .revokeInvite()] | lang=en
- "register_page": "page.tsx" | kind=code-symbol | source=src/app/(auth)/register/page.tsx:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, RegisterPage(), RocketIcon(), register-form.tsx] | lang=en
- "scripts_core_bm25_score": ".score()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L323 | neighbors=[BM25, .tokenize(), _passes_threshold(), Score all documents against query, _search_csv_detailed()] | lang=en
- "scripts_core_bm25_vocabulary": ".vocabulary()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L345 | neighbors=[BM25, _query_coverage(), All indexed terms, for suggestion/typo-…, _rewrite_query_for_domain(), _suggest_terms()] | lang=en
- "scripts_core_domain_keywords": "_domain_keywords()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L564 | neighbors=[core.py, detect_domain(), _file_signature(), _load_product_keywords(), _rewrite_query_for_domain()] | lang=en
- "scripts_core_legacy_successor_guidance": "_legacy_successor_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L938 | neighbors=[core.py, _normalize(), search(), Prefer the explicit successor row for a…, search_stack()] | lang=en
- "scripts_core_load_csv": "_load_csv()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L381 | neighbors=[core.py, _load_csv_snapshot(), _load_product_keywords(), _load_rows_or_empty(), Load CSV rows from a stable, signature-…] | lang=en
- "scripts_core_load_csv_snapshot": "_load_csv_snapshot()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L363 | neighbors=[core.py, _load_csv(), _file_signature(), Return rows and the verified signature …, _search_csv_detailed()] | lang=en
- "scripts_core_load_rows_or_empty": "_load_rows_or_empty()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L705 | neighbors=[core.py, _load_csv(), Load rows for optional identity routing…, search(), search_stack()] | lang=en
- "scripts_core_query_coverage": "_query_coverage()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L406 | neighbors=[core.py, _passes_threshold(), .tokenize(), .vocabulary(), _search_csv_detailed()] | lang=en
- "scripts_core_row_identities": "_row_identities()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L525 | neighbors=[core.py, _exact_row_identity(), Return non-empty public identities from…, _style_identity(), _suggest_identities()] | lang=en
- "scripts_core_stack_query_requests_legacy": "_stack_query_requests_legacy()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L848 | neighbors=[core.py, Whether a stack query explicitly target…, _normalize(), search(), _stack_row_filter()] | lang=en
- "scripts_core_stack_row_filter": "_stack_row_filter()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L888 | neighbors=[core.py, Choose one coherent applicability gener…, search_stack(), _normalize(), _stack_query_requests_legacy()] | lang=en
- "scripts_core_style_identity": "_style_identity()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L664 | neighbors=[core.py, Resolve an explicit style identity with…, search(), _normalize(), _row_identities()] | lang=en
- "scripts_design_system_designsystemgenerator_apply_reasoning": "._apply_reasoning()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L365 | neighbors=[DesignSystemGenerator, ._find_reasoning_rule(), ._resolve_style(), .generate(), Apply reasoning rules to search results.] | lang=en
- "scripts_design_system_designsystemgenerator_init": ".__init__()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L261 | neighbors=[DesignSystemGenerator, ._build_style_lookup(), ._load_landing_patterns(), ._load_reasoning(), ._load_styles()] | lang=en
- "scripts_design_system_resolve_color_mode": "_resolve_color_mode()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L186 | neighbors=[design_system.py, .generate(), Resolve the mode the rest of the output…, _query_wants_dark(), _style_is_dark_primary()] | lang=en
- "scripts_design_system_select_palette_for_mode": "_select_palette_for_mode()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L220 | neighbors=[design_system.py, .generate(), Pick the highest-ranked palette matchin…, _derive_dark_palette(), _palette_is_dark()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-005.json

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
