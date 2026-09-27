# Node Description Batch 9 of 24

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

- "tests_test_native_desktop_stack_freshness_rows": "_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_native_desktop_stack_freshness.py:L24 | neighbors=[test_native_desktop_stack_freshness.py, .test_deprecated_symbols_are_not_recomm…, .test_high_impact_rows_use_official_sou…, .test_rows_have_final_freshness_metadat…]
- "tests_test_relevance_evaluator": "test_relevance_evaluator.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, TestFixtureValidation, TestMetricMath, TestThresholdGate]
- "tests_test_relevance_evaluator_testfixturevalidation": "TestFixtureValidation" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L46 | neighbors=[test_relevance_evaluator.py, .test_rejects_bad_count_duplicate_id_an…, .test_valid_schema(), .valid_fixture()]
- "tests_test_text_layout_resilience": "test_text_layout_resilience.py" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L1 | neighbors=[f6172b0 feat: UI/UX overhaul, modern de…, read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval]
- "ui_logo_logo": "Logo()" | kind=code-symbol | source=src/components/ui/logo.tsx:L3 | neighbors=[plasmic.ts, page.tsx, footer.tsx, logo.tsx]
- "user_github_service_githubservice": "GithubService" | kind=code-symbol | source=src/domain/user/github-service.ts:L5 | neighbors=[github-actions.ts, github-service.ts, .requestGithubAccess(), .updateGithubUsername()]
- "webhooks_helpers_test": "helpers.test.ts" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, getCustomerId(), getSubscriptionId(), mapStripeStatus()]
- "writing_skills_render_graphs_main": "main()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/writing-skills/render-graphs.js:L84 | neighbors=[render-graphs.js, combineGraphs(), extractDotBlocks(), renderToSvg()]
- "actions_auth_actions_authenticate": "authenticate()" | kind=code-symbol | source=src/actions/auth-actions.ts:L48 | neighbors=[auth-actions.ts, auth.test.ts, login-form.tsx]
- "actions_auth_actions_loginwithgithub": "loginWithGithub()" | kind=code-symbol | source=src/actions/auth-actions.ts:L194 | neighbors=[auth-actions.ts, login-form.tsx, register-form.tsx]
- "actions_auth_actions_loginwithgoogle": "loginWithGoogle()" | kind=code-symbol | source=src/actions/auth-actions.ts:L190 | neighbors=[auth-actions.ts, login-form.tsx, register-form.tsx]
- "actions_org_actions_acceptinvite": "acceptInvite()" | kind=code-symbol | source=src/actions/org-actions.ts:L68 | neighbors=[org-actions.ts, org.test.ts, page.tsx]
- "actions_org_actions_revokeinvite": "revokeInvite()" | kind=code-symbol | source=src/actions/org-actions.ts:L52 | neighbors=[org-actions.ts, org.test.ts, members-table.tsx]
- "actions_user_actions_updateuserprofile": "updateUserProfile()" | kind=code-symbol | source=src/actions/user-actions.ts:L7 | neighbors=[user-actions.ts, profile-form.tsx, input-validation.test.ts]
- "auth_validation_test": "validation.test.ts" | kind=code-symbol | source=tests/unit/auth/validation.test.ts:L1 | neighbors=[CredentialsSchema, RegisterSchema, 93038a6 docs: update DEVELOPMENT.md and…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@cd64b705798e130015196a27bc00cb0cb439ec74": "cd64b70 fix: remove slash from terminal output inside SkillTerminal" | kind=Commit | source=git | neighbors=[09673f9 fix: remove slash prefix from n…, main, interactive-skills.tsx]
- "components_providers_providers": "Providers()" | kind=code-symbol | source=src/components/providers.tsx:L5 | neighbors=[layout.tsx, providers.tsx, plasmic.ts]
- "dashboard_cli_instructions_cliinstructions": "CliInstructions()" | kind=code-symbol | source=src/components/dashboard/cli-instructions.tsx:L8 | neighbors=[cli-instructions.tsx, page.tsx, plasmic.ts]
- "dashboard_delete_account_button_deleteaccountbutton": "DeleteAccountButton()" | kind=code-symbol | source=src/components/dashboard/delete-account-button.tsx:L6 | neighbors=[delete-account-button.tsx, plasmic.ts, page.tsx]
- "dashboard_invite_form_inviteform": "InviteForm()" | kind=code-symbol | source=src/components/dashboard/invite-form.tsx:L7 | neighbors=[invite-form.tsx, plasmic.ts, page.tsx]
- "dashboard_knowledge_graph_viewer_knowledgegraphviewer": "KnowledgeGraphViewer()" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L51 | neighbors=[knowledge-graph-viewer.tsx, getCommunityColor(), page.tsx]
- "dashboard_members_table_memberstable": "MembersTable()" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L26 | neighbors=[members-table.tsx, plasmic.ts, page.tsx]
- "dashboard_profile_form_profileform": "ProfileForm()" | kind=code-symbol | source=src/components/dashboard/profile-form.tsx:L6 | neighbors=[profile-form.tsx, plasmic.ts, page.tsx]
- "dashboard_sidebar_dashboardsidebar": "DashboardSidebar()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L190 | neighbors=[sidebar.tsx, plasmic.ts, layout.tsx]
- "dashboard_sidebar_mobilesidebar": "MobileSidebar()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L194 | neighbors=[sidebar.tsx, plasmic.ts, layout.tsx]
- "dashboard_stack_explorer_stackexplorer": "StackExplorer()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L291 | neighbors=[stack-explorer.tsx, plasmic.ts, page.tsx]
- "e2e_capture_screenshots_spec": "capture-screenshots.spec.ts" | kind=code-symbol | source=tests/e2e/capture-screenshots.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, bdf0787 docs: replace readme placeholde…, f957e38 docs: remove license section an…]
- "e2e_mobile_spec": "mobile.spec.ts" | kind=code-symbol | source=tests/e2e/mobile.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…, cb6a41d fix: remove duplicate test.use …]
- "eslint_config": "eslint.config.mjs" | kind=code-symbol | source=eslint.config.mjs:L1 | neighbors=[4384d32 docs: complete documentation su…, 9f800ea Initial commit from Create Next…, eslintConfig]
- "factories_index_createexpiredinvite": "createExpiredInvite()" | kind=code-symbol | source=tests/factories/index.ts:L174 | neighbors=[org.test.ts, index.ts, createMockInvite()]
- "factories_index_createmockauditlog": "createMockAuditLog()" | kind=code-symbol | source=tests/factories/index.ts:L197 | neighbors=[index.ts, generateId(), stripe.test.ts]
- "factories_index_createmockbillingmember": "createMockBillingMember()" | kind=code-symbol | source=tests/factories/index.ts:L142 | neighbors=[index.ts, createMockMember(), authorization.test.ts]
- "github_route": "route.ts" | kind=code-symbol | source=src/app/api/webhooks/github/route.ts:L1 | neighbors=[f03e200 fix: add untracked files, POST(), db.ts]
- "lemonsqueezy_route_handlesubscriptioncreated": "handleSubscriptionCreated()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L147 | neighbors=[route.ts, updateOrgFromSubscription(), POST()]
- "lemonsqueezy_route_handlesubscriptionupdated": "handleSubscriptionUpdated()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L174 | neighbors=[route.ts, updateOrgFromSubscription(), POST()]
- "lib_auth_types": "auth-types.ts" | kind=code-symbol | source=src/lib/auth-types.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, ActionState, AuthActionError]
- "lib_github_inviteusertorepo": "inviteUserToRepo()" | kind=code-symbol | source=src/lib/github.ts:L14 | neighbors=[github.ts, getOctokit(), github-service.ts]
- "lib_lemonsqueezy_createcheckoutsession": "createCheckoutSession()" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L31 | neighbors=[billing-actions.ts, lemonsqueezy.ts, ensureInitialized()]
- "lib_lemonsqueezy_ensureinitialized": "ensureInitialized()" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L17 | neighbors=[lemonsqueezy.ts, createCheckoutSession(), getSubscription()]
- "lib_subscription_hassubscriptionplan": "hasSubscriptionPlan()" | kind=code-symbol | source=src/lib/subscription.ts:L68 | neighbors=[subscription.ts, getSubscriptionStatus(), subscription.test.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-008.json

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
