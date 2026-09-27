# Node Description Batch 17 of 24

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
- "lib_subscription_rationale_81": "IMPORTANT: After creating products in LemonSqueezy dashboard," | kind=entity | source=src/lib/subscription.ts:L81 | neighbors=[subscription.ts]
- "login_page_loginpage": "LoginPage()" | kind=code-symbol | source=src/app/(auth)/login/page.tsx:L21 | neighbors=[page.tsx]
- "login_page_registeredmessage": "RegisteredMessage()" | kind=code-symbol | source=src/app/(auth)/login/page.tsx:L6 | neighbors=[page.tsx]
- "marketing_agents_showcase_agentfeatures": "agentFeatures" | kind=code-symbol | source=src/components/marketing/agents-showcase.tsx:L5 | neighbors=[agents-showcase.tsx]
- "marketing_codebase_explorer_chevronicon": "ChevronIcon()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L62 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_fileicon": "FileIcon()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L83 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_filesystem": "fileSystem" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L12 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_foldericon": "FolderIcon()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L75 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_fsnode": "FSNode" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L5 | neighbors=[codebase-explorer.tsx]
- "marketing_codebase_explorer_treeitem": "TreeItem()" | kind=code-symbol | source=src/components/marketing/codebase-explorer.tsx:L91 | neighbors=[codebase-explorer.tsx]
- "marketing_faq_faqs": "faqs" | kind=code-symbol | source=src/components/marketing/faq.tsx:L5 | neighbors=[faq.tsx]
- "marketing_how_it_works_steps": "steps" | kind=code-symbol | source=src/components/marketing/how-it-works.tsx:L3 | neighbors=[how-it-works.tsx]
- "marketing_interactive_skills_advancedskillstyping": "AdvancedSkillsTyping()" | kind=code-symbol | source=src/components/marketing/interactive-skills.tsx:L5 | neighbors=[interactive-skills.tsx]
- "marketing_layout_marketinglayout": "MarketingLayout()" | kind=code-symbol | source=src/app/(marketing)/layout.tsx:L5 | neighbors=[layout.tsx]
- "marketing_page_marketingpage": "MarketingPage()" | kind=code-symbol | source=src/app/(marketing)/page.tsx:L17 | neighbors=[page.tsx]
- "marketing_page_metadata": "metadata" | kind=code-symbol | source=src/app/(marketing)/page.tsx:L12 | neighbors=[page.tsx]
- "marketing_tech_stack_technologies": "technologies" | kind=code-symbol | source=src/components/marketing/tech-stack.tsx:L3 | neighbors=[tech-stack.tsx]
- "marketing_testing_suite_testcategories": "testCategories" | kind=code-symbol | source=src/components/marketing/testing-suite.tsx:L5 | neighbors=[testing-suite.tsx]
- "marketing_value_proposition_capabilities": "capabilities" | kind=code-symbol | source=src/components/marketing/value-proposition.tsx:L3 | neighbors=[value-proposition.tsx]
- "middleware_config": "config" | kind=code-symbol | source=middleware.ts:L6 | neighbors=[middleware.ts]
- "mocks_auth_mocksession": "mockSession" | kind=code-symbol | source=tests/mocks/auth.ts:L20 | neighbors=[auth.ts]
- "mocks_auth_mockuser": "mockUser" | kind=code-symbol | source=tests/mocks/auth.ts:L12 | neighbors=[auth.ts]
- "mocks_prisma_createmodelmock": "createModelMock()" | kind=code-symbol | source=tests/mocks/prisma.ts:L15 | neighbors=[prisma.ts]
- "mocks_prisma_mockfunction": "MockFunction" | kind=code-symbol | source=tests/mocks/prisma.ts:L12 | neighbors=[prisma.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-016.json

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
