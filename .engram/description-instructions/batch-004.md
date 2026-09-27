# Node Description Batch 5 of 24

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

- "e2e_auth_setup": "auth.setup.ts" | kind=code-symbol | source=tests/e2e/auth.setup.ts:L1 | neighbors=[0b2cca8 fix: seed database in CI and us…, 3e27e7e fix: update e2e auth setup to e…, 5871434 fix: fixed 'Get Instant Access'…, 7e6565e fix: look for Stack Explorer te…, 93038a6 docs: update DEVELOPMENT.md and…, authFile]
- "knowledge_graph_page": "page.tsx" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/knowledge-graph/page.tsx:L1 | neighbors=[6199608 feat: integrate Graphify knowle…, knowledge-graph-viewer.tsx, KnowledgeGraphViewer(), KnowledgeGraphPage(), auth.ts, db.ts]
- "lib_subscription_pricing_plans": "PRICING_PLANS" | kind=code-symbol | source=src/lib/subscription.ts:L85 | neighbors=[page.tsx, page.tsx, subscription.ts, subscription.test.ts, layout.tsx, page.tsx]
- "lib_utils_cn": "cn()" | kind=code-symbol | source=src/lib/utils.ts:L9 | neighbors=[page.tsx, utils.ts, utils.test.ts, navbar.tsx, button.tsx, card.tsx]
- "marketing_final_cta": "final-cta.tsx" | kind=code-symbol | source=src/components/marketing/final-cta.tsx:L1 | neighbors=[78c7265 update: design updates, f2af8ac checkpoint: before 3D backgroun…, f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, FinalCTA(), page.tsx]
- "organization_invite_service": "invite-service.ts" | kind=code-symbol | source=src/domain/organization/invite-service.ts:L1 | neighbors=[org-actions.ts, 373b817 feat: architectural refactor fo…, db.ts, email.ts, sendInviteEmail(), InviteService]
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
- "user_github_service": "github-service.ts" | kind=code-symbol | source=src/domain/user/github-service.ts:L1 | neighbors=[github-actions.ts, 373b817 feat: architectural refactor fo…, db.ts, github.ts, inviteUserToRepo(), GithubService]
- "writing_skills_render_graphs": "render-graphs.js" | kind=code-symbol | source=.agents/plugins/superpowers/skills/writing-skills/render-graphs.js:L1 | neighbors=[373b817 feat: architectural refactor fo…, combineGraphs(), extractDotBlocks(), extractGraphBody(), main(), renderToSvg()]
- "actions_github_claimgithubrepository": "claimGithubRepository()" | kind=code-symbol | source=src/app/actions/github.ts:L8 | neighbors=[github.ts, getUsernameById(), github.test.ts, github-connection-card.test.tsx, github-connection-card.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@0999f136f1544deda1dbf726dc539d4f2c82b38b": "0999f13 fix: resolve vercel build error by excluding tests and fixing setup" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, b152a29 fix: update landing page and me…, setup.ts, 93038a6 docs: update DEVELOPMENT.md and…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@0b2cca850f288a03d003e6e3aada27060bb9e12c": "0b2cca8 fix: seed database in CI and use valid credentials in playwright setup" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 7e6565e fix: look for Stack Explorer te…, auth.setup.ts, a1f6395 fix: add postgres service and p…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@0df7eda036844f8995d196bf2002a72d7d5faa5a": "0df7eda fix: handle nextjs redirect in delete button" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 2e55ef2 fix: nextjs server action build…, delete-account-button.tsx, efb9145 fix: add logout button, github …]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@1f93fc1d27d0b0423ccb09ffec4668bb04f116df": "1f93fc1 fix: remove fragile cursor and agy URI links and rely on robust CLI com…" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 16fab98 feat: product evolution sprint …, setup.js, c1fa4c0 refactor: remove recent activit…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@28ddf7f70eac460d01e3f313fd2b888d7fba25d4": "28ddf7f fix: zod error issues property" | kind=Commit | source=git | neighbors=[feedback-actions.ts, feature/auros-theme, main, a9d42ff fix: build errors (zod issues a…, f03e200 fix: add untracked files]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@2b228902385cd1b39242a4211aa49a096d728e6b": "2b22890 feat: add vercel analytics" | kind=Commit | source=git | neighbors=[layout.tsx, feature/auros-theme, main, a95c6d0 feat: introduce AI semantic 3-w…, 2fc46b9 docs: update marketing demo vid…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@2e55ef2f12d56cd1c34f1ba0ebb0921b3a4181a5": "2e55ef2 fix: nextjs server action build error in sidebar" | kind=Commit | source=git | neighbors=[0df7eda fix: handle nextjs redirect in …, feature/auros-theme, main, f6172b0 feat: UI/UX overhaul, modern de…, sidebar.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@2f26f3cad2624566e97d64820a5c8cc4f25a9401": "2f26f3c feat: add clickable IDE terminal hyperlinks and CLI tips to setup output" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, c1fa4c0 refactor: remove recent activit…, setup.js, a947fd8 docs: instruct users to open pr…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@2fc46b9e6a593310b614695c298e7df182f1e4ce": "2fc46b9 docs: update marketing demo video link and duration" | kind=Commit | source=git | neighbors=[2f7914d chore: untrack and ignore BRAND…, feature/auros-theme, main, 2b22890 feat: add vercel analytics, demo-video.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@3194208b3412bae8662d3913c0be4b41b7761229": "3194208 fix: resolve Open Code Review issues on landing page" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, ecab82c style: update hero terminal ani…, page.tsx, c759e87 feat: add open-code-review AI s…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@3e27e7ee25ebfffd0350599186e0fbcfdea92689": "3e27e7e fix: update e2e auth setup to expect correct login heading" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, a1f6395 fix: add postgres service and p…, auth.setup.ts, 8258cee fix: await searchParams in logi…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@3f83b6b7c443b85c8877cf1bc358933ea9acf93e": "3f83b6b fix: restore missing imports in dashboard page" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, f849da3 feat: stabilize github claim ac…, page.tsx, cb974c5 chore: revamp dashboard onboard…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@4c271fb030e04f5f8a7e25e5c8718d6e915e8124": "4c271fb fix: ensure Prisma generates on Vercel build and add robust error handl…" | kind=Commit | source=git | neighbors=[auth-actions.ts, feature/auros-theme, main, d869b58 fix: provide explicit secret fa…, d214810 fix: add explicit trustHost and…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@587e5110806188b21dd39a2c151f04d8bf57657b": "587e511 feat: simplify landing page pricing to single builder card" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, a2dfaff fix: remove broken scroll-revea…, pricing-card.tsx, a2dff2c fix: restore full detailed favi…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@7cf35513bdbaf92826b66017c9f42309e2b5633c": "7cf3551 fix: make setup command 100% cross-platform compatible" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 8920425 fix: resolve terminal prompt te…, setup.js, d49750b feat: complete product overhaul…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@7e6565ef8c5c8d0d81630ea2158a2a64fc123311": "7e6565e fix: look for Stack Explorer text on dashboard instead of dashboard text" | kind=Commit | source=git | neighbors=[0b2cca8 fix: seed database in CI and us…, feature/auros-theme, main, 5871434 fix: fixed 'Get Instant Access'…, auth.setup.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-004.json

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
