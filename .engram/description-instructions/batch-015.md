# Node Description Batch 16 of 24

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

- "dashboard_page_rocketicon": "RocketIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L267 | neighbors=[page.tsx]
- "dashboard_page_sparklesicon": "SparklesIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L247 | neighbors=[page.tsx]
- "dashboard_page_usersicon": "UsersIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L255 | neighbors=[page.tsx]
- "dashboard_sidebar_arrowupicon": "ArrowUpIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L46 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_bookicon": "BookIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L26 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_cogicon": "CogIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L22 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_creditcardicon": "CreditCardIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L18 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_foldericon": "FolderIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L10 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_graphicon": "GraphIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L34 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_homeicon": "HomeIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L67 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_logouticon": "LogOutIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L38 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_menuicon": "MenuIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L50 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_navitem": "NavItem" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L60 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_rocketicon": "RocketIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L30 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_sparklesicon": "SparklesIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L42 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_usersicon": "UsersIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L14 | neighbors=[sidebar.tsx]
- "dashboard_sidebar_xicon": "XIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L54 | neighbors=[sidebar.tsx]
- "dashboard_stack_explorer_aiicon": "AIIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L240 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_authicon": "AuthIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L184 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_databaseicon": "DatabaseIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L193 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_deployicon": "DeployIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L252 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_emailicon": "EmailIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L222 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_frameworkicon": "FrameworkIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L174 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_icon_map": "ICON_MAP" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L276 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_multitenanticon": "MultiTenantIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L262 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_paymenticon": "PaymentIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L203 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_stack_items": "STACK_ITEMS" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L17 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_stackitem": "StackItem" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L7 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_testicon": "TestIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L231 | neighbors=[stack-explorer.tsx]
- "dashboard_stack_explorer_uiicon": "UIIcon()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L212 | neighbors=[stack-explorer.tsx]
- "docs_page_docspage": "DocsPage()" | kind=code-symbol | source=src/app/(marketing)/docs/page.tsx:L32 | neighbors=[page.tsx]
- "docs_page_getmarkdowncontent": "getMarkdownContent()" | kind=code-symbol | source=src/app/(marketing)/docs/page.tsx:L13 | neighbors=[page.tsx]
- "docs_page_metadata": "metadata" | kind=code-symbol | source=src/app/(marketing)/docs/page.tsx:L7 | neighbors=[page.tsx]
- "e2e_auth_setup_authfile": "authFile" | kind=code-symbol | source=tests/e2e/auth.setup.ts:L11 | neighbors=[auth.setup.ts]
- "e2e_feedback_loop_spec": "feedback-loop.spec.ts" | kind=code-symbol | source=tests/e2e/feedback-loop.spec.ts:L1 | neighbors=[f03e200 fix: add untracked files]
- "e2e_github_invite_spec_prisma": "prisma" | kind=code-symbol | source=tests/e2e/github-invite.spec.ts:L4 | neighbors=[github-invite.spec.ts]
- "e2e_github_invite_spec_rationale_62": "NOTE: This test uses Playwright's auth state or relies on API mocking" | kind=entity | source=tests/e2e/github-invite.spec.ts:L62 | neighbors=[github-invite.spec.ts]
- "eslint_config_eslintconfig": "eslintConfig" | kind=code-symbol | source=eslint.config.mjs:L6 | neighbors=[eslint.config.mjs]
- "factories_index_mockauditlog": "MockAuditLog" | kind=code-symbol | source=tests/factories/index.ts:L185 | neighbors=[index.ts]
- "factories_index_mockinvite": "MockInvite" | kind=code-symbol | source=tests/factories/index.ts:L150 | neighbors=[index.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-015.json

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
