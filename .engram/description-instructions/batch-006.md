# Node Description Batch 7 of 24

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

- "scripts_reasoning_contract": "reasoning_contract.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, apply_decision_rules(), _object_without_duplicates(), parse_decision_rules(), _validate_action()] | lang=en
- "scripts_validate_data_read_rows": "_read_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L163 | neighbors=[validate_data.py, _check_catalog_summary(), _check_file(), _valid_catalog_source_key(), _valid_dataset_source_key()] | lang=en
- "scripts_validate_data_split": "_split()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L208 | neighbors=[validate_data.py, _check_font_catalog(), _check_icon_contract(), _check_style_contract(), validate()] | lang=en
- "scripts_wait_for_port": "wait-for-port.js" | kind=code-symbol | source=scripts/wait-for-port.js:L1 | neighbors=[bdf0787 docs: replace readme placeholde…, client, net, start, tryConnect()] | lang=en
- "stripe_route_handlecheckoutcompleted": "handleCheckoutCompleted()" | kind=code-symbol | source=src/app/api/webhooks/stripe/route.ts:L160 | neighbors=[route.ts, getCustomerId(), getSubscriptionData(), getSubscriptionId(), POST()] | lang=en
- "tests_test_core_testdiagnosticscontracts": "TestDiagnosticsContracts" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L326 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_diagnostics_opt_in_is_additive_fo…, .test_diagnostics_opt_in_is_additive_fo…] | lang=en
- "tests_test_core_testreasoningmatch": "TestReasoningMatch" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_core.py:L313 | neighbors=[test_core.py, BM25, DesignSystemGenerator, .test_known_category_matches_exactly(), .test_unknown_category_falls_back_grace…] | lang=en
- "tests_test_data_contracts_teststyleidentitycontract": "TestStyleIdentityContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L41 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .setUp(), .test_every_product_and_reasoning_style…, .test_ids_aliases_status_and_parents_ar…] | lang=en
- "tests_test_relevance_evaluator_testmetricmath": "TestMetricMath" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L17 | neighbors=[test_relevance_evaluator.py, .test_ndcg_uses_graded_gain_and_handles…, .test_precision_counts_missing_ranks_as…, .test_reciprocal_rank_stops_at_k(), .test_result_grades_match_identity_subs…] | lang=en
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts": "TestTextLayoutDataContracts" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L68 | neighbors=[test_text_layout_resilience.py, .setUpClass(), .test_new_tailwind_rows_are_unique_curr…, .test_new_ux_rows_are_unique_sequential…, .test_refined_rows_are_context_sensitiv…] | lang=en
- "tests_test_web_stack_freshness_rows": "_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L31 | neighbors=[test_web_stack_freshness.py, .test_active_rows_use_the_verified_curr…, .test_high_impact_rows_use_official_sou…, .test_stale_apis_are_not_recommended_by…, .test_web_rows_have_explicit_freshness_…] | lang=en
- "ui_logo": "logo.tsx" | kind=code-symbol | source=src/components/ui/logo.tsx:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, plasmic.ts, page.tsx, footer.tsx, Logo()] | lang=en
- "actions_auth_actions_register": "register()" | kind=code-symbol | source=src/actions/auth-actions.ts:L96 | neighbors=[auth-actions.ts, auth.test.ts, input-validation.test.ts, register-form.tsx] | lang=en
- "actions_billing_actions_createcheckout": "createCheckout()" | kind=code-symbol | source=src/actions/billing-actions.ts:L51 | neighbors=[billing-actions.ts, requireBillingPermission(), page.tsx, authorization.test.ts] | lang=en
- "actions_org_actions_inviteuser": "inviteUser()" | kind=code-symbol | source=src/actions/org-actions.ts:L12 | neighbors=[org-actions.ts, org.test.ts, invite-form.tsx, authorization.test.ts] | lang=en
- "actions_org_actions_removemember": "removeMember()" | kind=code-symbol | source=src/actions/org-actions.ts:L86 | neighbors=[org-actions.ts, org.test.ts, members-table.tsx, authorization.test.ts] | lang=en
- "actions_org_actions_updatememberrole": "updateMemberRole()" | kind=code-symbol | source=src/actions/org-actions.ts:L103 | neighbors=[org-actions.ts, org.test.ts, members-table.tsx, authorization.test.ts] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@046fd8b4053f8e7436108204864ef0a30be22484": "046fd8b feat: add terminal selector for setup command and create add-tests AI s…" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, a947fd8 docs: instruct users to open pr…, 8920425 fix: resolve terminal prompt te…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@09673f93670e022d267e14ef54fb3d57fe8ce119": "09673f9 fix: remove slash prefix from non-skill hover words" | kind=Commit | source=git | neighbors=[main, cd64b70 fix: remove slash from terminal…, interactive-skills.tsx, 0afec64 fix: replace JSX.Element with R…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@0afec6487189a897e960e93d04e94019a33f8d67": "0afec64 fix: replace JSX.Element with ReactNode to fix TS build error" | kind=Commit | source=git | neighbors=[main, 09673f9 fix: remove slash prefix from n…, stack-explorer.tsx, 3a0cfe8 fix: restore knowledge-graph-vi…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@14d2b759d7602e0ed8ba3ba8b4a98568fde9f1ca": "14d2b75 fix: update image paths in docs/INTRODUCTION.md" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 6199608 feat: integrate Graphify knowle…, ba7152d chore: consolidate documentatio…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@2f7914dd7547cab3f732a4ff054838cf4391523e": "2f7914d chore: untrack and ignore BRAND_BOOK.md" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 2fc46b9 docs: update marketing demo vid…, a25ec19 fix: resolve plan name mismatch…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@3a0cfe8a00854559d92b84312338cc911d1686b8": "3a0cfe8 fix: restore knowledge-graph-viewer.tsx to fix build" | kind=Commit | source=git | neighbors=[373b817 feat: architectural refactor fo…, main, 0afec64 fix: replace JSX.Element with R…, knowledge-graph-viewer.tsx] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@52bad2b47677e57af9128b27f0e418831b8aeac0": "52bad2b chore: remove build logs and update gitignore" | kind=Commit | source=git | neighbors=[4384d32 docs: complete documentation su…, feature/auros-theme, main, 93038a6 docs: update DEVELOPMENT.md and…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@6623cca68f94aae266a623d12da1d37265b87493": "6623cca chore: remove internal utility scripts from version control" | kind=Commit | source=git | neighbors=[16fab98 feat: product evolution sprint …, feature/auros-theme, main, a2dff2c fix: restore full detailed favi…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a1391e267f31efd426704027e3d7afe77cc751e8": "a1391e2 feat: add raw demo video section and remove fake social proof" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, fb15d37 feat: add raw demo video sectio…, ecab82c style: update hero terminal ani…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a1f6395338e97cf397bff0021732c31bd01ece6f": "a1f6395 fix: add postgres service and prisma db push to github actions workflow" | kind=Commit | source=git | neighbors=[3e27e7e fix: update e2e auth setup to e…, feature/auros-theme, main, 0b2cca8 fix: seed database in CI and us…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a2dff2cb12411f15dd712b83ec7f8f652974da24": "a2dff2c fix: restore full detailed favicon SVG" | kind=Commit | source=git | neighbors=[6623cca chore: remove internal utility …, feature/auros-theme, main, 587e511 feat: simplify landing page pri…] | lang=pt
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@ba7152dc18fd1191c0e45157524fa9d8d2782939": "ba7152d chore: consolidate documentation into docs/ folder" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 14d2b75 fix: update image paths in docs…, f957e38 docs: remove license section an…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@c759e87da03e02f58add0b696599ffd7df1b7008": "c759e87 feat: add open-code-review AI skill using delegation mode" | kind=Commit | source=git | neighbors=[50fa99d feat: streamline logged-in chec…, feature/auros-theme, main, 3194208 fix: resolve Open Code Review i…] | lang=en
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@eee52de6ff609864649bd05a80a80903137b7ffd": "eee52de Update README.md" | kind=Commit | source=git | neighbors=[8c0c607 fix: allow email account linkin…, feature/auros-theme, main, bf72399 Resolve merge conflict in READM…] | lang=nl
- "components_providers": "providers.tsx" | kind=code-symbol | source=src/components/providers.tsx:L1 | neighbors=[layout.tsx, 4384d32 docs: complete documentation su…, Providers(), plasmic.ts] | lang=en
- "dashboard_github_connection_card_githubconnectioncard": "GithubConnectionCard()" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L22 | neighbors=[github-connection-card.test.tsx, github-connection-card.tsx, page.tsx, plasmic.ts] | lang=en
- "dashboard_layout": "layout.tsx" | kind=code-symbol | source=src/app/(dashboard)/layout.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, f6172b0 feat: UI/UX overhaul, modern de…, DashboardRootLayout(), auth.ts] | lang=en
- "e2e_github_invite_spec": "github-invite.spec.ts" | kind=code-symbol | source=tests/e2e/github-invite.spec.ts:L1 | neighbors=[f03e200 fix: add untracked files, f849da3 feat: stabilize github claim ac…, prisma, NOTE: This test uses Playwright's auth …] | lang=en
- "factories_index_createmockadmin": "createMockAdmin()" | kind=code-symbol | source=tests/factories/index.ts:L138 | neighbors=[org.test.ts, index.ts, createMockMember(), authorization.test.ts] | lang=en
- "factories_index_createmockinvite": "createMockInvite()" | kind=code-symbol | source=tests/factories/index.ts:L160 | neighbors=[org.test.ts, index.ts, createExpiredInvite(), generateId()] | lang=en
- "factories_index_createsubscribedscenario": "createSubscribedScenario()" | kind=code-symbol | source=tests/factories/index.ts:L234 | neighbors=[index.ts, createMockMember(), createMockOrganizationWithSubscription(), createMockUser()] | lang=en
- "factories_index_createtestscenario": "createTestScenario()" | kind=code-symbol | source=tests/factories/index.ts:L219 | neighbors=[index.ts, createMockMember(), createMockOrganization(), createMockUser()] | lang=en
- "lemonsqueezy_route_updateorgfromsubscription": "updateOrgFromSubscription()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L248 | neighbors=[route.ts, handleSubscriptionCreated(), handleSubscriptionUpdated(), mapLSStatus()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-006.json

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
