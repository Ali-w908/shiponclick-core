# Node Description Batch 15 of 23

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

- "dashboard_sidebar_bookicon": "BookIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L26 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_cogicon": "CogIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L22 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_creditcardicon": "CreditCardIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L18 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_foldericon": "FolderIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L10 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_graphicon": "GraphIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L34 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_logouticon": "LogOutIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L38 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_menuicon": "MenuIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L50 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_navitem": "NavItem" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L60 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_rocketicon": "RocketIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L30 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_sparklesicon": "SparklesIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L42 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_usersicon": "UsersIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L14 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_xicon": "XIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L54 | neighbors=[sidebar.tsx]
- "dashboard_stack_explorer_category_colors": "CATEGORY_COLORS" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L202 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_category_labels": "CATEGORY_LABELS" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L213 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_stack_nodes": "STACK_NODES" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L19 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_stacknode": "StackNode" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L8 | neighbors=[stack-explorer.tsx]
- "e2e_auth_setup_authfile": "authFile" | kind=code-symbol | source=tests/e2e/auth.setup.ts:L11 | neighbors=[auth.setup.ts]
- "e2e_feedback_loop_spec": "feedback-loop.spec.ts" | kind=code-symbol | source=tests/e2e/feedback-loop.spec.ts:L1 | neighbors=[f03e200 fix: add untracked files]
- "e2e_github_invite_spec_prisma": "prisma" | kind=code-symbol | source=tests/e2e/github-invite.spec.ts:L4 | neighbors=[github-invite.spec.ts]
- "eslint_config_eslintconfig": "eslintConfig" | kind=code-symbol | source=eslint.config.mjs:L6 | neighbors=[eslint.config.mjs]
- "factories_index_mockauditlog": "MockAuditLog" | kind=code-symbol | source=tests/factories/index.ts:L185 | neighbors=[index.ts]
- "factories_index_mockinvite": "MockInvite" | kind=code-symbol | source=tests/factories/index.ts:L150 | neighbors=[index.ts]
- "factories_index_mockmember": "MockMember" | kind=code-symbol | source=tests/factories/index.ts:L115 | neighbors=[index.ts]
- "factories_index_mockorganization": "MockOrganization" | kind=code-symbol | source=tests/factories/index.ts:L60 | neighbors=[index.ts]
- "factories_index_mockuser": "MockUser" | kind=code-symbol | source=tests/factories/index.ts:L28 | neighbors=[index.ts]
- "factories_index_resetidcounter": "resetIdCounter()" | kind=code-symbol | source=tests/factories/index.ts:L20 | neighbors=[index.ts]
- "fixtures_index_multiorgscenarios": "multiOrgScenarios" | kind=code-symbol | source=tests/fixtures/index.ts:L113 | neighbors=[index.ts]
- "fixtures_index_subscriptionstates": "subscriptionStates" | kind=code-symbol | source=tests/fixtures/index.ts:L13 | neighbors=[index.ts]
- "fixtures_index_teamroles": "teamRoles" | kind=code-symbol | source=tests/fixtures/index.ts:L83 | neighbors=[index.ts]
- "github_route_post": "POST()" | kind=code-symbol | source=src/app/api/webhooks/github/route.ts:L5 | neighbors=[route.ts]
- "knowledge_graph_page_knowledgegraphpage": "KnowledgeGraphPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/knowledge-graph/page.tsx:L6 | neighbors=[page.tsx]
- "lib_auth_handlers_auth_signin_signout": "{ handlers, auth, signIn, signOut }" | kind=code-symbol | source=src/lib/auth.ts:L12 | neighbors=[auth.ts]
- "lib_auth_types_actionstate": "ActionState" | kind=code-symbol | source=src/lib/auth-types.ts:L3 | neighbors=[auth-types.ts]
- "lib_auth_types_authactionerror_constructor": ".constructor()" | kind=code-symbol | source=src/lib/auth-types.ts:L12 | neighbors=[AuthActionError]
- "lib_db_globalforprisma": "globalForPrisma" | kind=code-symbol | source=src/lib/db.ts:L9 | neighbors=[db.ts]
- "lib_email_sendinviteparams": "SendInviteParams" | kind=code-symbol | source=src/lib/email.ts:L12 | neighbors=[email.ts]
- "lib_email_test_mockemailssend": "{ mockEmailsSend }" | kind=code-symbol | source=tests/unit/lib/email.test.ts:L10 | neighbors=[email.test.ts]
- "lib_stripe_stripe": "stripe" | kind=code-symbol | source=src/lib/stripe.ts:L23 | neighbors=[stripe.ts]
- "login_page_loginpage": "LoginPage()" | kind=code-symbol | source=src/app/(auth)/login/page.tsx:L21 | neighbors=[page.tsx]
- "login_page_registeredmessage": "RegisteredMessage()" | kind=code-symbol | source=src/app/(auth)/login/page.tsx:L6 | neighbors=[page.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-014.json

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
