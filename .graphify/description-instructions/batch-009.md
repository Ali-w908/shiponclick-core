# Node Description Batch 10 of 23

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

- "actions_billing_actions_requirebillingpermission": "requireBillingPermission()" | kind=code-symbol | source=src/actions/billing-actions.ts:L20 | neighbors=[billing-actions.ts, createCheckout()]
- "actions_feedback_actions_submitfeedback": "submitFeedback()" | kind=code-symbol | source=src/actions/feedback-actions.ts:L12 | neighbors=[feedback-actions.ts, feedback-widget.tsx]
- "actions_github_actions_requestgithubaccess": "requestGithubAccess()" | kind=code-symbol | source=src/actions/github-actions.ts:L43 | neighbors=[github-actions.ts, new-project-modal.tsx]
- "actions_github_actions_updategithubusername": "updateGithubUsername()" | kind=code-symbol | source=src/actions/github-actions.ts:L10 | neighbors=[github-actions.ts, github-connection-card.tsx]
- "app_global_error": "global-error.tsx" | kind=code-symbol | source=src/app/global-error.tsx:L1 | neighbors=[GlobalError(), 5c2866e chore: setup Sentry and clean u…]
- "app_robots": "robots.ts" | kind=code-symbol | source=src/app/robots.ts:L1 | neighbors=[robots(), 4384d32 docs: complete documentation su…]
- "app_sitemap": "sitemap.ts" | kind=code-symbol | source=src/app/sitemap.ts:L1 | neighbors=[sitemap(), 4384d32 docs: complete documentation su…]
- "components_providers_providers": "Providers()" | kind=code-symbol | source=src/components/providers.tsx:L5 | neighbors=[layout.tsx, providers.tsx]
- "config_metadata_metadata": "metadata" | kind=code-symbol | source=src/config/metadata.ts:L3 | neighbors=[layout.tsx, metadata.ts]
- "dashboard_delete_account_button_deleteaccountbutton": "DeleteAccountButton()" | kind=code-symbol | source=src/components/dashboard/delete-account-button.tsx:L6 | neighbors=[delete-account-button.tsx, page.tsx]
- "dashboard_github_connection_card_githubconnectioncard": "GithubConnectionCard()" | kind=code-symbol | source=src/components/dashboard/github-connection-card.tsx:L19 | neighbors=[github-connection-card.tsx, page.tsx]
- "dashboard_invite_form_inviteform": "InviteForm()" | kind=code-symbol | source=src/components/dashboard/invite-form.tsx:L7 | neighbors=[invite-form.tsx, page.tsx]
- "dashboard_knowledge_graph_viewer_getcommunitycolor": "getCommunityColor()" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L46 | neighbors=[knowledge-graph-viewer.tsx, KnowledgeGraphViewer()]
- "dashboard_members_table_memberstable": "MembersTable()" | kind=code-symbol | source=src/components/dashboard/members-table.tsx:L26 | neighbors=[members-table.tsx, page.tsx]
- "dashboard_new_project_modal_newprojectmodal": "NewProjectModal()" | kind=code-symbol | source=src/components/dashboard/new-project-modal.tsx:L60 | neighbors=[new-project-modal.tsx, projects-dashboard.tsx]
- "dashboard_profile_form_profileform": "ProfileForm()" | kind=code-symbol | source=src/components/dashboard/profile-form.tsx:L6 | neighbors=[profile-form.tsx, page.tsx]
- "dashboard_projects_dashboard_projectsdashboard": "ProjectsDashboard()" | kind=code-symbol | source=src/components/dashboard/projects-dashboard.tsx:L69 | neighbors=[page.tsx, projects-dashboard.tsx]
- "dashboard_sidebar_dashboardsidebar": "DashboardSidebar()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L187 | neighbors=[sidebar.tsx, layout.tsx]
- "dashboard_sidebar_getnavigation": "getNavigation()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L67 | neighbors=[sidebar.tsx, SidebarContent()]
- "dashboard_sidebar_mobilesidebar": "MobileSidebar()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L191 | neighbors=[sidebar.tsx, layout.tsx]
- "dashboard_sidebar_sidebarcontent": "SidebarContent()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L79 | neighbors=[sidebar.tsx, getNavigation()]
- "dashboard_stack_explorer_stackexplorer": "StackExplorer()" | kind=code-symbol | source=src/components/dashboard/stack-explorer.tsx:L226 | neighbors=[stack-explorer.tsx, page.tsx]
- "e2e_auth_spec": "auth.spec.ts" | kind=code-symbol | source=tests/e2e/auth.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…]
- "e2e_billing_spec": "billing.spec.ts" | kind=code-symbol | source=tests/e2e/billing.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…]
- "e2e_dashboard_spec": "dashboard.spec.ts" | kind=code-symbol | source=tests/e2e/dashboard.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…]
- "e2e_github_invite_spec": "github-invite.spec.ts" | kind=code-symbol | source=tests/e2e/github-invite.spec.ts:L1 | neighbors=[f03e200 fix: add untracked files, prisma]
- "fixtures_index_validationcases": "validationCases" | kind=code-symbol | source=tests/fixtures/index.ts:L210 | neighbors=[index.ts, input-validation.test.ts]
- "fixtures_index_webhookevents": "webhookEvents" | kind=code-symbol | source=tests/fixtures/index.ts:L139 | neighbors=[index.ts, stripe.test.ts]
- "lemonsqueezy_route_handleordercreated": "handleOrderCreated()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L98 | neighbors=[route.ts, POST()]
- "lemonsqueezy_route_handlesubscriptioncancelled": "handleSubscriptionCancelled()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L199 | neighbors=[route.ts, POST()]
- "lemonsqueezy_route_maplsstatus": "mapLSStatus()" | kind=code-symbol | source=src/app/api/webhooks/lemonsqueezy/route.ts:L292 | neighbors=[route.ts, updateOrgFromSubscription()]
- "lib_auth_types_authactionerror": "AuthActionError" | kind=code-symbol | source=src/lib/auth-types.ts:L11 | neighbors=[auth-types.ts, .constructor()]
- "lib_email_getresend": "getResend()" | kind=code-symbol | source=src/lib/email.ts:L4 | neighbors=[email.ts, sendInviteEmail()]
- "lib_github_getoctokit": "getOctokit()" | kind=code-symbol | source=src/lib/github.ts:L3 | neighbors=[github.ts, inviteUserToRepo()]
- "lib_lemonsqueezy_getsubscription": "getSubscription()" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L73 | neighbors=[lemonsqueezy.ts, ensureInitialized()]
- "lib_lemonsqueezy_verifywebhooksignature": "verifyWebhookSignature()" | kind=code-symbol | source=src/lib/lemonsqueezy.ts:L83 | neighbors=[route.ts, lemonsqueezy.ts]
- "lib_stripe_cancelsubscriptionatperiodend": "cancelSubscriptionAtPeriodEnd()" | kind=code-symbol | source=src/lib/stripe.ts:L126 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_createbillingportalsession": "createBillingPortalSession()" | kind=code-symbol | source=src/lib/stripe.ts:L82 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_createcheckoutsession": "createCheckoutSession()" | kind=code-symbol | source=src/lib/stripe.ts:L39 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_createcustomer": "createCustomer()" | kind=code-symbol | source=src/lib/stripe.ts:L108 | neighbors=[stripe.ts, getStripe()]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-009.json

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
