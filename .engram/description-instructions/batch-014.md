# Node Description Batch 15 of 24

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

- "writing_skills_render_graphs_combinegraphs": "combineGraphs()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/writing-skills/render-graphs.js:L51 | neighbors=[render-graphs.js, main()]
- "writing_skills_render_graphs_extractdotblocks": "extractDotBlocks()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/writing-skills/render-graphs.js:L20 | neighbors=[render-graphs.js, main()]
- "writing_skills_render_graphs_rendertosvg": "renderToSvg()" | kind=code-symbol | source=.agents/plugins/superpowers/skills/writing-skills/render-graphs.js:L70 | neighbors=[render-graphs.js, main()]
- "actions_auth_actions_ensureuniqueslug": "ensureUniqueSlug()" | kind=code-symbol | source=src/actions/auth-actions.ts:L32 | neighbors=[auth-actions.ts]
- "actions_auth_actions_generateslug": "generateSlug()" | kind=code-symbol | source=src/actions/auth-actions.ts:L21 | neighbors=[auth-actions.ts]
- "actions_auth_actions_registerschema": "RegisterSchema" | kind=code-symbol | source=src/actions/auth-actions.ts:L12 | neighbors=[auth-actions.ts]
- "actions_auth_test_constructor": "constructor()" | kind=code-symbol | source=tests/integration/actions/auth.test.ts:L32 | neighbors=[auth.test.ts]
- "actions_feedback_actions_feedbackschema": "feedbackSchema" | kind=code-symbol | source=src/actions/feedback-actions.ts:L6 | neighbors=[feedback-actions.ts]
- "actions_github_actions_requestgithubaccess": "requestGithubAccess()" | kind=code-symbol | source=src/actions/github-actions.ts:L23 | neighbors=[github-actions.ts]
- "actions_github_actions_updategithubusername": "updateGithubUsername()" | kind=code-symbol | source=src/actions/github-actions.ts:L7 | neighbors=[github-actions.ts]
- "app_global_error_globalerror": "GlobalError()" | kind=code-symbol | source=src/app/global-error.tsx:L7 | neighbors=[global-error.tsx]
- "app_layout_jakarta": "jakarta" | kind=code-symbol | source=src/app/layout.tsx:L7 | neighbors=[layout.tsx]
- "app_layout_jetbrainsmono": "jetbrainsMono" | kind=code-symbol | source=src/app/layout.tsx:L19 | neighbors=[layout.tsx]
- "app_layout_outfit": "outfit" | kind=code-symbol | source=src/app/layout.tsx:L13 | neighbors=[layout.tsx]
- "app_layout_rootlayout": "RootLayout()" | kind=code-symbol | source=src/app/layout.tsx:L32 | neighbors=[layout.tsx]
- "app_robots_robots": "robots()" | kind=code-symbol | source=src/app/robots.ts:L3 | neighbors=[robots.ts]
- "app_sitemap_sitemap": "sitemap()" | kind=code-symbol | source=src/app/sitemap.ts:L3 | neighbors=[sitemap.ts]
- "auth_validation_test_credentialsschema": "CredentialsSchema" | kind=code-symbol | source=tests/unit/auth/validation.test.ts:L17 | neighbors=[validation.test.ts]
- "auth_validation_test_registerschema": "RegisterSchema" | kind=code-symbol | source=tests/unit/auth/validation.test.ts:L11 | neighbors=[validation.test.ts]
- "billing_page_billingpage": "BillingPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/billing/page.tsx:L9 | neighbors=[page.tsx]
- "billing_page_statusbadge": "StatusBadge()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/billing/page.tsx:L185 | neighbors=[page.tsx]
- "dashboard_cli_instructions_formattype": "FormatType" | kind=code-symbol | source=src/components/dashboard/cli-instructions.tsx:L6 | neighbors=[cli-instructions.tsx]
- "dashboard_cli_instructions_ostype": "OSType" | kind=code-symbol | source=src/components/dashboard/cli-instructions.tsx:L5 | neighbors=[cli-instructions.tsx]
- "dashboard_github_connection_card_githubconnectioncardprops": "GithubConnectionCardProps" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L16 | neighbors=[github-connection-card.tsx]
- "dashboard_github_connection_card_githubicon": "GithubIcon()" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L8 | neighbors=[github-connection-card.tsx]
- "dashboard_knowledge_graph_viewer_community_colors": "COMMUNITY_COLORS" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L33 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_knowledge_graph_viewer_edge": "Edge" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L20 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_knowledge_graph_viewer_graphdata": "GraphData" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L28 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_knowledge_graph_viewer_node": "Node" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L5 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_layout_dashboardrootlayout": "DashboardRootLayout()" | kind=code-symbol | source=src/app/(dashboard)/layout.tsx:L4 | neighbors=[layout.tsx]
- "dashboard_members_table_invite": "Invite" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L18 | neighbors=[members-table.tsx]
- "dashboard_members_table_member": "Member" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L7 | neighbors=[members-table.tsx]
- "dashboard_members_table_userrole": "UserRole" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L5 | neighbors=[members-table.tsx]
- "dashboard_page_arrowupicon": "ArrowUpIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L263 | neighbors=[page.tsx]
- "dashboard_page_bookicon": "BookIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L259 | neighbors=[page.tsx]
- "dashboard_page_dashboardpage": "DashboardPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L9 | neighbors=[page.tsx]
- "dashboard_page_dashboardrouter": "DashboardRouter()" | kind=code-symbol | source=src/app/(dashboard)/dashboard/page.tsx:L11 | neighbors=[page.tsx]
- "dashboard_page_folderplusicon": "FolderPlusIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L243 | neighbors=[page.tsx]
- "dashboard_page_graphicon": "GraphIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L251 | neighbors=[page.tsx]
- "dashboard_page_quickaction": "QuickAction()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L212 | neighbors=[page.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-014.json

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
