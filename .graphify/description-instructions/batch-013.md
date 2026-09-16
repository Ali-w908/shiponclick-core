# Node Description Batch 14 of 23

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

- "billing_page_billingpage": "BillingPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/billing/page.tsx:L9 | neighbors=[page.tsx]
- "billing_page_statusbadge": "StatusBadge()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/settings/billing/page.tsx:L185 | neighbors=[page.tsx]
- "dashboard_github_connection_card_githubconnectioncardprops": "GithubConnectionCardProps" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L14 | neighbors=[github-connection-card.tsx]
- "dashboard_github_connection_card_githubicon": "GithubIcon()" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L6 | neighbors=[github-connection-card.tsx]
- "dashboard_knowledge_graph_viewer_community_colors": "COMMUNITY_COLORS" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L33 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_knowledge_graph_viewer_edge": "Edge" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L20 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_knowledge_graph_viewer_graphdata": "GraphData" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L28 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_knowledge_graph_viewer_node": "Node" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L5 | neighbors=[knowledge-graph-viewer.tsx]
- "dashboard_layout_dashboardrootlayout": "DashboardRootLayout()" | kind=code-symbol | source=src/app/(dashboard)/layout.tsx:L4 | neighbors=[layout.tsx]
- "dashboard_members_table_invite": "Invite" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L18 | neighbors=[members-table.tsx]
- "dashboard_members_table_member": "Member" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L7 | neighbors=[members-table.tsx]
- "dashboard_members_table_userrole": "UserRole" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L5 | neighbors=[members-table.tsx]
- "dashboard_new_project_modal_checkicon": "CheckIcon()" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L24 | neighbors=[new-project-modal.tsx]
- "dashboard_new_project_modal_copyicon": "CopyIcon()" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L15 | neighbors=[new-project-modal.tsx]
- "dashboard_new_project_modal_lockicon": "LockIcon()" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L32 | neighbors=[new-project-modal.tsx]
- "dashboard_new_project_modal_newprojectmodalprops": "NewProjectModalProps" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L50 | neighbors=[new-project-modal.tsx]
- "dashboard_new_project_modal_project": "Project" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L40 | neighbors=[new-project-modal.tsx]
- "dashboard_new_project_modal_xicon": "XIcon()" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L7 | neighbors=[new-project-modal.tsx]
- "dashboard_overview_overview": "Overview()" | kind=code-symbol | source=src/components/dashboard/overview.tsx:L3 | neighbors=[overview.tsx]
- "dashboard_page_activityicon": "ActivityIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L312 | neighbors=[page.tsx]
- "dashboard_page_arrowupicon": "ArrowUpIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L304 | neighbors=[page.tsx]
- "dashboard_page_bookicon": "BookIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L300 | neighbors=[page.tsx]
- "dashboard_page_dashboardpage": "DashboardPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L9 | neighbors=[page.tsx]
- "dashboard_page_dashboardrouter": "DashboardRouter()" | kind=code-symbol | source=src/app/(dashboard)/dashboard/page.tsx:L11 | neighbors=[page.tsx]
- "dashboard_page_folderplusicon": "FolderPlusIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L284 | neighbors=[page.tsx]
- "dashboard_page_formataction": "formatAction()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L318 | neighbors=[page.tsx]
- "dashboard_page_formatdate": "formatDate()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L325 | neighbors=[page.tsx]
- "dashboard_page_graphicon": "GraphIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L292 | neighbors=[page.tsx]
- "dashboard_page_quickaction": "QuickAction()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L253 | neighbors=[page.tsx]
- "dashboard_page_rocketicon": "RocketIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L308 | neighbors=[page.tsx]
- "dashboard_page_sparklesicon": "SparklesIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L288 | neighbors=[page.tsx]
- "dashboard_page_usersicon": "UsersIcon()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/dashboard/page.tsx:L296 | neighbors=[page.tsx]
- "dashboard_projects_dashboard_foldericon": "FolderIcon()" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L15 | neighbors=[projects-dashboard.tsx]
- "dashboard_projects_dashboard_lockicon": "LockIcon()" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L40 | neighbors=[projects-dashboard.tsx]
- "dashboard_projects_dashboard_plusicon": "PlusIcon()" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L7 | neighbors=[projects-dashboard.tsx]
- "dashboard_projects_dashboard_project": "Project" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L48 | neighbors=[projects-dashboard.tsx]
- "dashboard_projects_dashboard_projectsdashboardprops": "ProjectsDashboardProps" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L58 | neighbors=[projects-dashboard.tsx]
- "dashboard_projects_dashboard_rocketicon": "RocketIcon()" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L23 | neighbors=[projects-dashboard.tsx]
- "dashboard_projects_dashboard_trashicon": "TrashIcon()" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L32 | neighbors=[projects-dashboard.tsx]
- "dashboard_sidebar_arrowupicon": "ArrowUpIcon()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L46 | neighbors=[sidebar.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-013.json

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
