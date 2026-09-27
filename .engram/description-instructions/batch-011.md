# Node Description Batch 12 of 24

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

- "actions_feedback_actions_submitfeedback": "submitFeedback()" | kind=code-symbol | source=src/actions/feedback-actions.ts:L12 | neighbors=[feedback-actions.ts, feedback-widget.tsx]
- "actions_github_getusernamebyid": "getUsernameById()" | kind=code-symbol | source=src/app/actions/github.ts:L108 | neighbors=[github.ts, claimGithubRepository()]
- "app_global_error": "global-error.tsx" | kind=code-symbol | source=src/app/global-error.tsx:L1 | neighbors=[GlobalError(), 5c2866e chore: setup Sentry and clean u…]
- "app_robots": "robots.ts" | kind=code-symbol | source=src/app/robots.ts:L1 | neighbors=[robots(), 4384d32 docs: complete documentation su…]
- "app_sitemap": "sitemap.ts" | kind=code-symbol | source=src/app/sitemap.ts:L1 | neighbors=[sitemap(), 4384d32 docs: complete documentation su…]
- "config_metadata_metadata": "metadata" | kind=code-symbol | source=src/config/metadata.ts:L3 | neighbors=[layout.tsx, metadata.ts]
- "dashboard_knowledge_graph_viewer_getcommunitycolor": "getCommunityColor()" | kind=code-symbol | source=src/components/dashboard/knowledge-graph-viewer.tsx:L46 | neighbors=[knowledge-graph-viewer.tsx, KnowledgeGraphViewer()]
- "dashboard_overview_overview": "Overview()" | kind=code-symbol | source=src/components/dashboard/overview.tsx:L3 | neighbors=[overview.tsx, plasmic.ts]
- "dashboard_sidebar_getnavigation": "getNavigation()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L71 | neighbors=[sidebar.tsx, SidebarContent()]
- "dashboard_sidebar_sidebarcontent": "SidebarContent()" | kind=code-symbol | source=src/components/dashboard/sidebar.tsx:L82 | neighbors=[sidebar.tsx, getNavigation()]
- "e2e_auth_spec": "auth.spec.ts" | kind=code-symbol | source=tests/e2e/auth.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…]
- "e2e_billing_spec": "billing.spec.ts" | kind=code-symbol | source=tests/e2e/billing.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…]
- "e2e_dashboard_spec": "dashboard.spec.ts" | kind=code-symbol | source=tests/e2e/dashboard.spec.ts:L1 | neighbors=[5871434 fix: fixed 'Get Instant Access'…, 93038a6 docs: update DEVELOPMENT.md and…]
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
- "lib_plasmic_plasmic": "PLASMIC" | kind=code-symbol | source=src/lib/plasmic.ts:L3 | neighbors=[plasmic.ts, page.tsx]
- "lib_stripe_cancelsubscriptionatperiodend": "cancelSubscriptionAtPeriodEnd()" | kind=code-symbol | source=src/lib/stripe.ts:L126 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_createbillingportalsession": "createBillingPortalSession()" | kind=code-symbol | source=src/lib/stripe.ts:L82 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_createcheckoutsession": "createCheckoutSession()" | kind=code-symbol | source=src/lib/stripe.ts:L39 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_createcustomer": "createCustomer()" | kind=code-symbol | source=src/lib/stripe.ts:L108 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_getsubscription": "getSubscription()" | kind=code-symbol | source=src/lib/stripe.ts:L98 | neighbors=[stripe.ts, getStripe()]
- "lib_stripe_resumesubscription": "resumeSubscription()" | kind=code-symbol | source=src/lib/stripe.ts:L136 | neighbors=[stripe.ts, getStripe()]
- "lib_utils_absoluteurl": "absoluteUrl()" | kind=code-symbol | source=src/lib/utils.ts:L61 | neighbors=[utils.ts, utils.test.ts]
- "lib_utils_formatcurrency": "formatCurrency()" | kind=code-symbol | source=src/lib/utils.ts:L36 | neighbors=[utils.ts, utils.test.ts]
- "lib_utils_formatdate": "formatDate()" | kind=code-symbol | source=src/lib/utils.ts:L19 | neighbors=[utils.ts, utils.test.ts]
- "lib_utils_slugify": "slugify()" | kind=code-symbol | source=src/lib/utils.ts:L48 | neighbors=[utils.ts, utils.test.ts]
- "marketing_agents_showcase_agentsshowcase": "AgentsShowcase()" | kind=code-symbol | source=src/components/marketing/agents-showcase.tsx:L35 | neighbors=[plasmic.ts, agents-showcase.tsx]
- "marketing_aurora_background_aurorabackground": "AuroraBackground()" | kind=code-symbol | source=src/components/marketing/aurora-background.tsx:L1 | neighbors=[aurora-background.tsx, layout.tsx]
- "marketing_codebase_explorer_codebaseexplorer": "CodebaseExplorer()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L127 | neighbors=[plasmic.ts, codebase-explorer.tsx]
- "marketing_testing_suite_testingsuite": "TestingSuite()" | kind=code-symbol | source=src/components/marketing/testing-suite.tsx:L11 | neighbors=[plasmic.ts, testing-suite.tsx]
- "middleware": "middleware.ts" | kind=code-symbol | source=middleware.ts:L1 | neighbors=[4384d32 docs: complete documentation su…, config]
- "mocks_auth_mocksignin": "mockSignIn" | kind=code-symbol | source=tests/mocks/auth.ts:L29 | neighbors=[auth.test.ts, auth.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-011.json

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
