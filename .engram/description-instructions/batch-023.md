# Node Description Batch 24 of 24

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

- "tests_test_web_stack_freshness_testwebstackfreshness_test_stack_without_curated_legacy_rows_keeps_nonlegacy_fallback": ".test_stack_without_curated_legacy_rows_keeps_nonlegacy_fallback()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L138 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_svelte_current_and_legacy_queries_do_not_mix_generations": ".test_svelte_current_and_legacy_queries_do_not_mix_generations()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L68 | neighbors=[TestWebStackFreshness]
- "token_page_invitepage": "InvitePage()" | kind=code-symbol | source=src/app/invite/[token]/page.tsx:L7 | neighbors=[page.tsx]
- "types_index_apiresponse": "ApiResponse" | kind=code-symbol | source=src/types/index.ts:L48 | neighbors=[index.ts]
- "types_index_authuser": "AuthUser" | kind=code-symbol | source=src/types/index.ts:L13 | neighbors=[index.ts]
- "types_index_memberwithuser": "MemberWithUser" | kind=code-symbol | source=src/types/index.ts:L37 | neighbors=[index.ts]
- "types_index_navitem": "NavItem" | kind=code-symbol | source=src/types/index.ts:L76 | neighbors=[index.ts]
- "types_index_organizationwithsubscription": "OrganizationWithSubscription" | kind=code-symbol | source=src/types/index.ts:L23 | neighbors=[index.ts]
- "types_index_paginatedresponse": "PaginatedResponse" | kind=code-symbol | source=src/types/index.ts:L65 | neighbors=[index.ts]
- "types_index_paginationparams": "PaginationParams" | kind=code-symbol | source=src/types/index.ts:L57 | neighbors=[index.ts]
- "types_index_plantier": "PlanTier" | kind=code-symbol | source=src/types/index.ts:L8 | neighbors=[index.ts]
- "ui_button_buttonprops": "ButtonProps" | kind=code-symbol | source=src/components/ui/button.tsx:L37 | neighbors=[button.tsx]
- "ui_button_buttonvariants": "buttonVariants" | kind=code-symbol | source=src/components/ui/button.tsx:L8 | neighbors=[button.tsx]
- "ui_login_form_githubicon": "GitHubIcon()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L18 | neighbors=[login-form.tsx]
- "ui_login_form_googleicon": "GoogleIcon()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L7 | neighbors=[login-form.tsx]
- "ui_login_form_loginbutton": "LoginButton()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L124 | neighbors=[login-form.tsx]
- "ui_login_form_loginform": "LoginForm()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L26 | neighbors=[login-form.tsx]
- "ui_register_form_githubicon": "GitHubIcon()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L19 | neighbors=[register-form.tsx]
- "ui_register_form_googleicon": "GoogleIcon()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L8 | neighbors=[register-form.tsx]
- "ui_register_form_registerbutton": "RegisterButton()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L129 | neighbors=[register-form.tsx]
- "ui_register_form_registerform": "RegisterForm()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L27 | neighbors=[register-form.tsx]
- "user_github_service_githubservice_requestgithubaccess": ".requestGithubAccess()" | kind=code-symbol | source=src/domain/user/github-service.ts:L26 | neighbors=[GithubService]
- "user_github_service_githubservice_updategithubusername": ".updateGithubUsername()" | kind=code-symbol | source=src/domain/user/github-service.ts:L6 | neighbors=[GithubService]
- "webhooks_helpers_test_getcustomerid": "getCustomerId()" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L18 | neighbors=[helpers.test.ts]
- "webhooks_helpers_test_getsubscriptionid": "getSubscriptionId()" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L12 | neighbors=[helpers.test.ts]
- "webhooks_helpers_test_mapstripestatus": "mapStripeStatus()" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L24 | neighbors=[helpers.test.ts]
- "writing_skills_render_graphs_extractgraphbody": "extractGraphBody()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/writing-skills/render-graphs.js:L38 | neighbors=[render-graphs.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-023.json

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
