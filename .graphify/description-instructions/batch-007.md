# Node Description Batch 8 of 23

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

- "factories_index_createmockauditlog": "createMockAuditLog()" | kind=code-symbol | source=tests/factories/index.ts:L197 | neighbors=[index.ts, generateId(), stripe.test.ts]
- "factories_index_createmockbillingmember": "createMockBillingMember()" | kind=code-symbol | source=tests/factories/index.ts:L142 | neighbors=[index.ts, createMockMember(), authorization.test.ts]
- "github_route": "route.ts" | kind=code-symbol | source=src/app/api/webhooks/github/route.ts:L1 | neighbors=[f03e200 fix: add untracked files, POST(), db.ts]
- "lemonsqueezy_route_handlesubscriptioncreated": "handleSubscriptionCreated()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L147 | neighbors=[route.ts, updateOrgFromSubscription(), POST()]
- "lemonsqueezy_route_handlesubscriptionupdated": "handleSubscriptionUpdated()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L174 | neighbors=[route.ts, updateOrgFromSubscription(), POST()]
- "lib_auth_types": "auth-types.ts" | kind=code-symbol | source=src/lib/auth-types.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, ActionState, AuthActionError]
- "lib_github_inviteusertorepo": "inviteUserToRepo()" | kind=code-symbol | source=src/lib/github.ts:L14 | neighbors=[github-actions.ts, github.ts, getOctokit()]
- "lib_lemonsqueezy_createcheckoutsession": "createCheckoutSession()" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L31 | neighbors=[billing-actions.ts, lemonsqueezy.ts, ensureInitialized()]
- "lib_lemonsqueezy_ensureinitialized": "ensureInitialized()" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L17 | neighbors=[lemonsqueezy.ts, createCheckoutSession(), getSubscription()]
- "lib_subscription_hassubscriptionplan": "hasSubscriptionPlan()" | kind=code-symbol | source=src/lib/subscription.ts:L68 | neighbors=[subscription.ts, getSubscriptionStatus(), subscription.test.ts]
- "lib_subscription_requireactivesubscription": "requireActiveSubscription()" | kind=code-symbol | source=src/lib/subscription.ts:L46 | neighbors=[subscription.ts, getSubscriptionStatus(), subscription.test.ts]
- "marketing_final_cta": "final-cta.tsx" | kind=code-symbol | source=src/components/marketing/final-cta.tsx:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, FinalCTA(), page.tsx]
- "marketing_pricing_card_pricingcard": "PricingCard()" | kind=code-symbol | source=src/components/marketing/pricing-card.tsx:L6 | neighbors=[page.tsx, pricing-card.tsx, page.tsx]
- "mocks_auth_createauthenticateduser": "createAuthenticatedUser()" | kind=code-symbol | source=tests/mocks/auth.ts:L58 | neighbors=[auth.ts, createMockSession(), setMockRole()]
- "mocks_auth_mockauth": "mockAuth" | kind=code-symbol | source=tests/mocks/auth.ts:L26 | neighbors=[org.test.ts, auth.ts, authorization.test.ts]
- "prisma_seed": "seed.ts" | kind=code-symbol | source=prisma/seed.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, main(), prisma]
- "privacy_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/privacy/page.tsx:L1 | neighbors=[f03e200 fix: add untracked files, metadata, PrivacyPolicyPage()]
- "scripts_check_users": "check-users.ts" | kind=code-symbol | source=scripts/check-users.ts:L1 | neighbors=[bdf0787 docs: replace readme placeholde…, main(), prisma]
- "scripts_core_project_row": "_project_row()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L713 | neighbors=[core.py, search(), search_stack()]
- "scripts_core_search_csv": "_search_csv()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L466 | neighbors=[core.py, Backward-compatible internal search tup…, _search_csv_detailed()]
- "scripts_core_style_search_destination": "_style_search_destination()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L736 | neighbors=[core.py, Resolve a deprecated in-domain alias, o…, search()]
- "scripts_core_valid_max_results": "_valid_max_results()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L717 | neighbors=[core.py, search(), search_stack()]
- "scripts_debug_registration": "debug-registration.ts" | kind=code-symbol | source=scripts/debug-registration.ts:L1 | neighbors=[bdf0787 docs: replace readme placeholde…, main(), prisma]
- "scripts_design_system_ansi_ljust": "ansi_ljust()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L625 | neighbors=[design_system.py, format_ascii_box(), Like str.ljust but accounts for zero-wi…]
- "scripts_design_system_designsystemgenerator_extract_results": "._extract_results()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L445 | neighbors=[DesignSystemGenerator, .generate(), Extract results list from search result…]
- "scripts_design_system_designsystemgenerator_find_reasoning_rule": "._find_reasoning_rule()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L357 | neighbors=[DesignSystemGenerator, ._apply_reasoning(), Find matching reasoning rule for a cate…]
- "scripts_design_system_designsystemgenerator_load_reasoning": "._load_reasoning()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L267 | neighbors=[DesignSystemGenerator, .__init__(), Load reasoning rules from CSV.]
- "scripts_design_system_designsystemgenerator_multi_domain_search": "._multi_domain_search()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L319 | neighbors=[DesignSystemGenerator, .generate(), Execute searches across multiple domain…]
- "scripts_design_system_designsystemgenerator_resolve_style": "._resolve_style()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L307 | neighbors=[DesignSystemGenerator, ._apply_reasoning(), ._select_best_match()]
- "scripts_design_system_detect_page_type": "_detect_page_type()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1596 | neighbors=[design_system.py, _generate_intelligent_overrides(), Detect page type from context and searc…]
- "scripts_design_system_filter_anti_patterns_for_mode": "_filter_anti_patterns_for_mode()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L246 | neighbors=[design_system.py, .generate(), Drop "avoid dark mode" advice once dark…]
- "scripts_design_system_format_markdown": "format_markdown()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L791 | neighbors=[design_system.py, generate_design_system(), Format design system as markdown.]
- "scripts_design_system_format_master_md": "format_master_md()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1076 | neighbors=[design_system.py, persist_design_system(), Format design system as MASTER.md with …]
- "scripts_design_system_hex_to_ansi": "hex_to_ansi()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L611 | neighbors=[design_system.py, format_ascii_box(), Convert hex color to ANSI True Color sw…]
- "scripts_design_system_query_wants_dark": "_query_wants_dark()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L180 | neighbors=[design_system.py, True when the query explicitly asks for…, _resolve_color_mode()]
- "scripts_design_system_resolve_dial": "_resolve_dial()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L90 | neighbors=[design_system.py, .generate(), Bucket a 1-10 dial value into its tier …]
- "scripts_design_system_safe_slug": "safe_slug()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L961 | neighbors=[design_system.py, persist_design_system(), Slugify a name into a single safe path …]
- "scripts_design_system_section_header": "section_header()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L633 | neighbors=[design_system.py, format_ascii_box(), Create a Unicode section separator: ├──…]
- "scripts_design_system_style_is_dark_primary": "_style_is_dark_primary()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L164 | neighbors=[design_system.py, True when a styles.csv row describes it…, _resolve_color_mode()]
- "scripts_design_system_write_persisted_file": "_write_persisted_file()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L972 | neighbors=[design_system.py, persist_design_system(), Write fully to a temp file, then publis…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-007.json

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
