# Node Description Batch 4 of 23

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
Write every description in English (en). Do not switch languages.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@6199608b0a4aaefb7b4ec41f0bad7b99c2c0b9e2": "6199608 feat: integrate Graphify knowledge graph explorer into dashboard" | kind=Commit | source=git | neighbors=[14d2b75 fix: update image paths in docs…, main, d214810 fix: add explicit trustHost and…, knowledge-graph-viewer.tsx, sidebar.tsx, page.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@9f800eaff2cb76f6ec3ae7ecccf120c9fd5d9123": "9f800ea Initial commit from Create Next App" | kind=Commit | source=git | neighbors=[layout.tsx, main, 4384d32 docs: complete documentation su…, eslint.config.mjs, next.config.ts, postcss.config.mjs]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@b152a29cb797df13b19c63fc0461711cddee985e": "b152a29 fix: update landing page and metadata to Next.js 16" | kind=Commit | source=git | neighbors=[0999f13 fix: resolve vercel build error…, auth-actions.ts, main, edc8b80 refactor: cleanup debug logs an…, metadata.ts, hero.tsx]
- "dashboard_delete_account_button": "delete-account-button.tsx" | kind=code-symbol | source=src/components/dashboard/delete-account-button.tsx:L1 | neighbors=[0df7eda fix: handle nextjs redirect in …, 343228b feat(auth): add account deletio…, auth-actions.ts, deleteAccount(), DeleteAccountButton(), page.tsx]
- "e2e_auth_setup": "auth.setup.ts" | kind=code-symbol | source=tests/e2e/auth.setup.ts:L1 | neighbors=[0b2cca8 fix: seed database in CI and us…, 3e27e7e fix: update e2e auth setup to e…, 5871434 fix: fixed 'Get Instant Access'…, 7e6565e fix: look for Stack Explorer te…, 93038a6 docs: update DEVELOPMENT.md and…, authFile]
- "knowledge_graph_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/knowledge-graph/page.tsx:L1 | neighbors=[6199608 feat: integrate Graphify knowle…, knowledge-graph-viewer.tsx, KnowledgeGraphViewer(), KnowledgeGraphPage(), auth.ts, db.ts]
- "lib_auth_config": "auth.config.ts" | kind=code-symbol | source=src/lib/auth.config.ts:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, 9e67322 fix: auth security, billing che…, d214810 fix: add explicit trustHost and…, d869b58 fix: provide explicit secret fa…, edc8b80 refactor: cleanup debug logs an…]
- "lib_subscription_pricing_plans": "PRICING_PLANS" | kind=code-symbol | source=src/lib/subscription.ts:L85 | neighbors=[page.tsx, page.tsx, subscription.ts, subscription.test.ts, layout.tsx, page.tsx]
- "marketing_faq": "faq.tsx" | kind=code-symbol | source=src/components/marketing/faq.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, FAQ(), faqs, page.tsx]
- "pricing_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/pricing/page.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, f6172b0 feat: UI/UX overhaul, modern de…, pricing-card.tsx, PricingCard(), PricingPage()]
- "scripts_core_detect_domain": "detect_domain()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L628 | neighbors=[core.py, _contains_phrase(), _domain_keywords(), _normalize(), search(), Auto-detect the most relevant domain fr…]
- "scripts_core_get_bm25": "_get_bm25()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L386 | neighbors=[core.py, BM25, .fit(), _file_signature(), Fitted index with cache identity coveri…, _search_csv_detailed()]
- "scripts_core_suggest_identities": "_suggest_identities()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L504 | neighbors=[core.py, Suggest complete public identities so a…, search(), BM25, .tokenize(), _row_identities()]
- "scripts_design_system_format_ascii_box": "format_ascii_box()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L640 | neighbors=[design_system.py, ansi_ljust(), hex_to_ansi(), section_header(), generate_design_system(), Format design system as Unicode box wit…]
- "scripts_validate_data_check_catalog_contract": "_check_catalog_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L683 | neighbors=[validate_data.py, _check_catalog_summary(), _check_font_catalog(), _check_phosphor_catalog(), _load_catalog_json(), validate()]
- "stripe_route_post": "POST()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L28 | neighbors=[route.ts, handleCheckoutCompleted(), handleInvoicePaymentFailed(), handleInvoicePaymentSucceeded(), handleSubscriptionDeleted(), handleSubscriptionUpdated()]
- "tests_test_core_data_quality": "test_core_data_quality.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors]
- "tests_test_core_data_quality_testchartstypographyandicons": "TestChartsTypographyAndIcons" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core_data_quality.py:L103 | neighbors=[test_core_data_quality.py, .test_chart_risk_is_not_a_conformance_g…, .test_icon_semantics_are_explicit_and_i…, .test_mutated_accessibility_and_import_…, .test_named_fonts_match_google_import_c…, .test_natural_accessibility_queries_are…]
- "tests_test_core_testbm25corebehavior": "TestBm25CoreBehavior" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L65 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_bm25_cache_rebuilds_after_file_mt…, .test_empty_documents_produce_no_scores…, .test_search_uses_one_verified_rows_and…]
- "tests_test_core_testpersistence": "TestPersistence" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L252 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_concurrent_non_force_persist_has_…, .test_persist_then_skip_then_force(), .test_persist_writes_only_under_output_…]
- "tests_test_design_system_mode": "test_design_system_mode.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, TestAntiPatternGating, TestEndToEndCoherence, TestLuminance, TestModeResolution, TestPaletteSelection]
- "tests_test_design_system_mode_testantipatterngating": "TestAntiPatternGating" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L120 | neighbors=[test_design_system_mode.py, DesignSystemGenerator, .test_dark_clause_dropped_others_kept(), .test_empty_input(), .test_light_mode_is_a_no_op(), .test_unrelated_anti_patterns_survive_d…]
- "tests_test_design_system_mode_testluminance": "TestLuminance" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L54 | neighbors=[test_design_system_mode.py, DesignSystemGenerator, .test_classifies_backgrounds_from_the_s…, .test_missing_background_is_not_dark(), .test_parses_six_and_three_digit_hex(), .test_returns_none_for_unparseable()]
- "tests_test_design_system_mode_testmoderesolution": "TestModeResolution" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L74 | neighbors=[test_design_system_mode.py, DesignSystemGenerator, .test_dark_primary_style_detected(), .test_dual_mode_style_is_not_dark_prima…, .test_either_signal_resolves_dark(), .test_query_keywords()]
- "token_page": "page.tsx" | kind=code-symbol | source=src/app/invite/[token]/page.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, org-actions.ts, acceptInvite(), auth.ts, db.ts, InvitePage()]
- "ui_button": "button.tsx" | kind=code-symbol | source=src/components/ui/button.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, utils.ts, cn(), Button, ButtonProps, buttonVariants]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@7252c33274acff0852dd77987b86ab1e963c2257": "7252c33 fix: resolve failing tests from open-core pivot" | kind=Commit | source=git | neighbors=[auth-actions.ts, main, cb6a41d fix: remove duplicate test.use …, subscription.test.ts, 8161816 feat: pivot to open-core strate…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8c0c607180a8a5edfe321bce521dc6929626b865": "8c0c607 fix: allow email account linking for OAuth providers" | kind=Commit | source=git | neighbors=[main, 89988d0 full dashboard redesign, README…, eee52de Update README.md, auth.ts, f6172b0 feat: UI/UX overhaul, modern de…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@b736ebb13e8ce64aaa48a060cbe0af822060f0b5": "b736ebb fix(billing): client side redirect for lemonsqueezy checkout" | kind=Commit | source=git | neighbors=[9e67322 fix: auth security, billing che…, billing-actions.ts, main, 343228b feat(auth): add account deletio…, pricing-card.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@d214810cc5e6f11294746e2c8b184b0060998e74": "d214810 fix: add explicit trustHost and secret to NextAuth config for Vercel de…" | kind=Commit | source=git | neighbors=[6199608 feat: integrate Graphify knowle…, main, 4c271fb fix: ensure Prisma generates on…, auth.ts, auth.config.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@d509f8524018e6b836f2a0d487930f7e76844fcd": "d509f85 fix: fixed GitHub username card bug" | kind=Commit | source=git | neighbors=[5871434 fix: fixed 'Get Instant Access'…, github-actions.ts, main, 6684611 features: added: legal files, f…, build-open-core.js]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@d869b58a3a81d9ebe05e8f2e48a0006293a64600": "d869b58 fix: provide explicit secret fallback in NextAuth config to eliminate M…" | kind=Commit | source=git | neighbors=[4c271fb fix: ensure Prisma generates on…, main, 71ae643 feat: complete product overhaul…, auth.ts, auth.config.ts]
- "config_metadata": "metadata.ts" | kind=code-symbol | source=src/config/metadata.ts:L1 | neighbors=[layout.tsx, 4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, b152a29 fix: update landing page and me…, metadata]
- "dashboard_invite_form": "invite-form.tsx" | kind=code-symbol | source=src/components/dashboard/invite-form.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, org-actions.ts, inviteUser(), InviteForm(), page.tsx]
- "dashboard_profile_form": "profile-form.tsx" | kind=code-symbol | source=src/components/dashboard/profile-form.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, user-actions.ts, updateUserProfile(), ProfileForm(), page.tsx]
- "factories_index_createmockowner": "createMockOwner()" | kind=code-symbol | source=tests/factories/index.ts:L134 | neighbors=[org.test.ts, index.ts, createMockMember(), authorization.test.ts, input-validation.test.ts]
- "lemonsqueezy_route_post": "POST()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L17 | neighbors=[route.ts, handleOrderCreated(), handleSubscriptionCancelled(), handleSubscriptionCreated(), handleSubscriptionUpdated()]
- "lib_email_sendinviteemail": "sendInviteEmail()" | kind=code-symbol | source=src/lib/email.ts:L19 | neighbors=[org-actions.ts, org.test.ts, email.ts, getResend(), email.test.ts]
- "lib_email_test": "email.test.ts" | kind=code-symbol | source=tests/unit/lib/email.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, efb9145 fix: add logout button, github …, email.ts, sendInviteEmail(), { mockEmailsSend }]
- "lib_utils_cn": "cn()" | kind=code-symbol | source=src/lib/utils.ts:L9 | neighbors=[utils.ts, utils.test.ts, navbar.tsx, button.tsx, card.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-003.json

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
