# Node Description Batch 16 of 23

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

- "marketing_agents_showcase_agentfeatures": "agentFeatures" | kind=code-symbol | source=src/components/marketing/agents-showcase.tsx:L5 | neighbors=[agents-showcase.tsx]
- "marketing_codebase_explorer_chevronicon": "ChevronIcon()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L57 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_fileicon": "FileIcon()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L78 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_filesystem": "fileSystem" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L12 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_foldericon": "FolderIcon()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L70 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_fsnode": "FSNode" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L5 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_treeitem": "TreeItem()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L86 | neighbors=[codebase-explorer.tsx]
- "marketing_faq_faqs": "faqs" | kind=code-symbol | source=src/components/marketing/faq.tsx:L5 | neighbors=[faq.tsx]
- "marketing_hero_commands": "commands" | kind=code-symbol | source=src/components/marketing/hero.tsx:L6 | neighbors=[hero.tsx]
- "marketing_how_it_works_steps": "steps" | kind=code-symbol | source=src/components/marketing/how-it-works.tsx:L5 | neighbors=[how-it-works.tsx]
- "marketing_layout_marketinglayout": "MarketingLayout()" | kind=code-symbol | source=src/app/(marketing)/layout.tsx:L4 | neighbors=[layout.tsx]
- "marketing_page_marketingpage": "MarketingPage()" | kind=code-symbol | source=src/app/(marketing)/page.tsx:L14 | neighbors=[page.tsx]
- "marketing_social_proof_stats": "stats" | kind=code-symbol | source=src/components/marketing/social-proof.tsx:L5 | neighbors=[social-proof.tsx]
- "marketing_social_proof_testimonials": "testimonials" | kind=code-symbol | source=src/components/marketing/social-proof.tsx:L12 | neighbors=[social-proof.tsx]
- "marketing_tech_stack_technologies": "technologies" | kind=code-symbol | source=src/components/marketing/tech-stack.tsx:L3 | neighbors=[tech-stack.tsx]
- "marketing_testing_suite_testcategories": "testCategories" | kind=code-symbol | source=src/components/marketing/testing-suite.tsx:L5 | neighbors=[testing-suite.tsx]
- "marketing_value_proposition_comparisons": "comparisons" | kind=code-symbol | source=src/components/marketing/value-proposition.tsx:L5 | neighbors=[value-proposition.tsx]
- "middleware_config": "config" | kind=code-symbol | source=middleware.ts:L6 | neighbors=[middleware.ts]
- "mocks_auth_mocksession": "mockSession" | kind=code-symbol | source=tests/mocks/auth.ts:L20 | neighbors=[auth.ts]
- "mocks_auth_mockuser": "mockUser" | kind=code-symbol | source=tests/mocks/auth.ts:L12 | neighbors=[auth.ts]
- "mocks_prisma_createmodelmock": "createModelMock()" | kind=code-symbol | source=tests/mocks/prisma.ts:L15 | neighbors=[prisma.ts]
- "mocks_prisma_mockfunction": "MockFunction" | kind=code-symbol | source=tests/mocks/prisma.ts:L12 | neighbors=[prisma.ts]
- "mocks_stripe_billingportal": "billingPortal()" | kind=code-symbol | source=tests/mocks/stripe.ts:L125 | neighbors=[stripe.ts]
- "mocks_stripe_checkout": "checkout()" | kind=code-symbol | source=tests/mocks/stripe.ts:L124 | neighbors=[stripe.ts]
- "mocks_stripe_createmocksubscription": "createMockSubscription()" | kind=code-symbol | source=tests/mocks/stripe.ts:L171 | neighbors=[stripe.ts]
- "mocks_stripe_customers": "customers()" | kind=code-symbol | source=tests/mocks/stripe.ts:L127 | neighbors=[stripe.ts]
- "mocks_stripe_mockbillingportalsession": "mockBillingPortalSession" | kind=code-symbol | source=tests/mocks/stripe.ts:L66 | neighbors=[stripe.ts]
- "mocks_stripe_mockcheckoutsession": "mockCheckoutSession" | kind=code-symbol | source=tests/mocks/stripe.ts:L55 | neighbors=[stripe.ts]
- "mocks_stripe_mockgetstripe": "mockGetStripe" | kind=code-symbol | source=tests/mocks/stripe.ts:L115 | neighbors=[stripe.ts]
- "mocks_stripe_mockinvoice": "mockInvoice" | kind=code-symbol | source=tests/mocks/stripe.ts:L72 | neighbors=[stripe.ts]
- "mocks_stripe_mockstripecustomer": "mockStripeCustomer" | kind=code-symbol | source=tests/mocks/stripe.ts:L22 | neighbors=[stripe.ts]
- "mocks_stripe_mocksubscriptionstatus": "MockSubscriptionStatus" | kind=code-symbol | source=tests/mocks/stripe.ts:L11 | neighbors=[stripe.ts]
- "mocks_stripe_subscriptions": "subscriptions()" | kind=code-symbol | source=tests/mocks/stripe.ts:L126 | neighbors=[stripe.ts]
- "mocks_stripe_webhooks": "webhooks()" | kind=code-symbol | source=tests/mocks/stripe.ts:L128 | neighbors=[stripe.ts]
- "next_config_nextconfig": "nextConfig" | kind=code-symbol | source=next.config.ts:L3 | neighbors=[next.config.ts]
- "orgid_layout_orglayout": "OrgLayout()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/layout.tsx:L7 | neighbors=[layout.tsx]
- "playground_page_playgroundpage": "PlaygroundPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/playground/page.tsx:L7 | neighbors=[page.tsx]
- "postcss_config_config": "config" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[postcss.config.mjs]
- "pricing_page_pricingpage": "PricingPage()" | kind=code-symbol | source=src/app/(marketing)/pricing/page.tsx:L5 | neighbors=[page.tsx]
- "prisma_enable_rls": "enable_rls.sql" | kind=code-symbol | source=prisma/enable_rls.sql:L1 | neighbors=[9e67322 fix: auth security, billing che…]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-015.json

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
