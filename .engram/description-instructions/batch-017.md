# Node Description Batch 18 of 24

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
- "organization_invite_service_inviteservice_acceptinvite": ".acceptInvite()" | kind=code-symbol | source=src/domain/organization/invite-service.ts:L124 | neighbors=[InviteService]
- "organization_invite_service_inviteservice_inviteuser": ".inviteUser()" | kind=code-symbol | source=src/domain/organization/invite-service.ts:L7 | neighbors=[InviteService]
- "organization_invite_service_inviteservice_revokeinvite": ".revokeInvite()" | kind=code-symbol | source=src/domain/organization/invite-service.ts:L102 | neighbors=[InviteService]
- "organization_member_service_memberservice_removemember": ".removeMember()" | kind=code-symbol | source=src/domain/organization/member-service.ts:L5 | neighbors=[MemberService]
- "organization_member_service_memberservice_updatememberrole": ".updateMemberRole()" | kind=code-symbol | source=src/domain/organization/member-service.ts:L40 | neighbors=[MemberService]
- "orgid_layout_orglayout": "OrgLayout()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/layout.tsx:L7 | neighbors=[layout.tsx]
- "plasmic_host_page_plasmichostpage": "PlasmicHostPage()" | kind=code-symbol | source=src/app/plasmic-host/page.tsx:L6 | neighbors=[page.tsx]
- "playground_page_playgroundpage": "PlaygroundPage()" | kind=code-symbol | source=src/app/(dashboard)/[orgId]/playground/page.tsx:L7 | neighbors=[page.tsx]
- "postcss_config_config": "config" | kind=code-symbol | source=postcss.config.mjs:L1 | neighbors=[postcss.config.mjs]
- "pricing_page_pricingpage": "PricingPage()" | kind=code-symbol | source=src/app/(marketing)/pricing/page.tsx:L5 | neighbors=[page.tsx]
- "prisma_enable_rls": "enable_rls.sql" | kind=code-symbol | source=prisma/enable_rls.sql:L1 | neighbors=[9e67322 fix: auth security, billing che…]
- "prisma_seed_main": "main()" | kind=code-symbol | source=prisma/seed.ts:L10 | neighbors=[seed.ts]
- "prisma_seed_prisma": "prisma" | kind=code-symbol | source=prisma/seed.ts:L4 | neighbors=[seed.ts]
- "privacy_page_metadata": "metadata" | kind=code-symbol | source=src/app/(marketing)/privacy/page.tsx:L3 | neighbors=[page.tsx]
- "privacy_page_privacypolicypage": "PrivacyPolicyPage()" | kind=code-symbol | source=src/app/(marketing)/privacy/page.tsx:L8 | neighbors=[page.tsx]
- "profile_page_profilepage": "ProfilePage()" | kind=code-symbol | source=src/app/(dashboard)/settings/profile/page.tsx:L6 | neighbors=[page.tsx]
- "register_page_registerpage": "RegisterPage()" | kind=code-symbol | source=src/app/(auth)/register/page.tsx:L15 | neighbors=[page.tsx]
- "register_page_rocketicon": "RocketIcon()" | kind=code-symbol | source=src/app/(auth)/register/page.tsx:L4 | neighbors=[page.tsx]
- "scratch_register_plasmic_components": "components" | kind=code-symbol | source=scratch/register-plasmic.js:L42 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_componentsdir": "componentsDir" | kind=code-symbol | source=scratch/register-plasmic.js:L4 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_currentplasmic": "currentPlasmic" | kind=code-symbol | source=scratch/register-plasmic.js:L71 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_findcomponents": "findComponents()" | kind=code-symbol | source=scratch/register-plasmic.js:L7 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_fs": "fs" | kind=code-symbol | source=scratch/register-plasmic.js:L1 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_path": "path" | kind=code-symbol | source=scratch/register-plasmic.js:L2 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_plasmicfile": "plasmicFile" | kind=code-symbol | source=scratch/register-plasmic.js:L5 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_seen": "seen" | kind=code-symbol | source=scratch/register-plasmic.js:L48 | neighbors=[register-plasmic.js]
- "scratch_register_plasmic_uniquecomponents": "uniqueComponents" | kind=code-symbol | source=scratch/register-plasmic.js:L49 | neighbors=[register-plasmic.js]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-017.json

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
