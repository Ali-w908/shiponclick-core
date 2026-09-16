# Graph Report - .  (2026-09-13)

## Corpus Check
- 156 files · ~108,414 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 885 nodes · 1637 edges · 47 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output
- Edge kinds: contains: 463 · calls: 275 · MODIFIES: 269 · method: 179 · imports: 150 · imports_from: 124 · rationale_for: 65 · ON_BRANCH: 44 · PARENT_OF: 44 · uses: 24


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 156 · Candidates: 239
- Excluded: 9 untracked · 55410 ignored · 0 sensitive · 17 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `5c2866e`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `DesignSystemGenerator` - 32 edges
2. `search()` - 18 edges
3. `BM25` - 16 edges
4. `CatalogRefreshTest` - 15 edges
5. `TestSearchDomains` - 15 edges
6. `TestDomainDetection` - 15 edges
7. `read_rows()` - 15 edges
8. `TestReasoningContract` - 15 edges
9. `TestWebStackFreshness` - 13 edges
10. `_normalize()` - 12 edges

## Surprising Connections (you probably didn't know these)
- `The exact reproduction from issue #428.` --uses--> `DesignSystemGenerator`  [INFERRED]
  .agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py → .agents/skills/ui-ux-pro-max/scripts/design_system.py
- `TestBm25CoreBehavior` --uses--> `BM25`  [INFERRED]
  .agents/skills/ui-ux-pro-max/scripts/tests/test_core.py → .agents/skills/ui-ux-pro-max/scripts/core.py
- `TestBm25CoreBehavior` --uses--> `DesignSystemGenerator`  [INFERRED]
  .agents/skills/ui-ux-pro-max/scripts/tests/test_core.py → .agents/skills/ui-ux-pro-max/scripts/design_system.py
- `TestDiagnosticsContracts` --uses--> `BM25`  [INFERRED]
  .agents/skills/ui-ux-pro-max/scripts/tests/test_core.py → .agents/skills/ui-ux-pro-max/scripts/core.py
- `TestDiagnosticsContracts` --uses--> `DesignSystemGenerator`  [INFERRED]
  .agents/skills/ui-ux-pro-max/scripts/tests/test_core.py → .agents/skills/ui-ux-pro-max/scripts/design_system.py

## Communities

### Community 0 - "Community 0"
Cohesion: 0.07
Nodes (58): BM25, _contains_phrase(), detect_domain(), _domain_keywords(), _exact_match_diagnostic(), _exact_row_identity(), _exact_stack_identifier(), _file_signature() (+50 more)

### Community 1 - "Community 1"
Cohesion: 0.08
Nodes (27): 6684611 features: added: legal files, footer buttons functionality, github username invite status logic, feedback functionality, UI updates, 71ae643 feat: complete product overhaul (ShipOnClick rebranding, premium landing page, one-time pricing, projects dashboard, setup scripts), d509f85 fix: fixed GitHub username card bug, f6172b0 feat: UI/UX overhaul, modern design system, and auth callback fixes, agentFeatures, AgentsShowcase(), FAQ(), faqs (+19 more)

### Community 2 - "Community 2"
Cohesion: 0.04
Nodes (7): TestBm25CoreBehavior, TestDiagnosticsContracts, TestDomainDetection, TestPersistence, TestReasoningMatch, TestSearchDomains, TestTokenizer

### Community 3 - "Community 3"
Cohesion: 0.06
Nodes (18): feedbackSchema, submitFeedback(), ibmPlexSans, jetbrainsMono, 28ddf7f fix: zod error issues property, 5c2866e chore: setup Sentry and clean up example pages, 9f800ea Initial commit from Create Next App, a9d42ff fix: build errors (zod issues and strict types) (+10 more)

### Community 4 - "Community 4"
Cohesion: 0.06
Nodes (13): requestGithubAccess(), updateGithubUsername(), efb9145 fix: add logout button, github auto invite, GithubConnectionCard(), GithubConnectionCardProps, NewProjectModal(), NewProjectModalProps, Project (+5 more)

### Community 5 - "Community 5"
Cohesion: 0.10
Nodes (41): _catalog_date(), _check_app_interface_contract(), _check_catalog_contract(), _check_catalog_summary(), _check_chart_contract(), _check_color_contract(), _check_core_data_contract(), _check_file() (+33 more)

### Community 6 - "Community 6"
Cohesion: 0.10
Nodes (7): read_rows(), split_values(), style_identities(), TestGeneratedCatalogContract, TestLandingAndStackContract, TestReasoningContract, TestStyleIdentityContract

### Community 7 - "Community 7"
Cohesion: 0.11
Nodes (26): ansi_ljust(), _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides() (+18 more)

### Community 8 - "Community 8"
Cohesion: 0.10
Nodes (16): multiOrgScenarios, subscriptionStates, teamRoles, validationCases, webhookEvents, createMockWebhookEvent(), generateMockStripeSignature(), mockBillingPortalSession (+8 more)

### Community 9 - "Community 9"
Cohesion: 0.12
Nodes (7): authenticate(), loginWithGithub(), loginWithGoogle(), register(), RegisterSchema, b152a29 fix: update landing page and metadata to Next.js 16, edc8b80 refactor: cleanup debug logs and sync docs with auth changes

### Community 10 - "Community 10"
Cohesion: 0.15
Nodes (12): createCheckout(), getSubscriptionDetails(), requireBillingPermission(), 259b106 feat: complete LemonSqueezy integration and zero-token agent onboarding, 89988d0 full dashboard redesign, README update, free plan update and builder plan unlimited projects update, CATEGORY_COLORS, CATEGORY_LABELS, STACK_NODES (+4 more)

### Community 11 - "Community 11"
Cohesion: 0.16
Nodes (14): acceptInvite(), inviteUser(), removeMember(), revokeInvite(), updateMemberRole(), InviteForm(), Invite, Member (+6 more)

### Community 12 - "Community 12"
Cohesion: 0.19
Nodes (19): createExpiredInvite(), createMockAdmin(), createMockAuditLog(), createMockBillingMember(), createMockInvite(), createMockMember(), createMockOrganization(), createMockOrganizationWithSubscription() (+11 more)

### Community 13 - "Community 13"
Cohesion: 0.17
Nodes (19): cancelSubscriptionAtPeriodEnd(), createBillingPortalSession(), createCheckoutSession(), createCustomer(), getStripe(), getSubscription(), resumeSubscription(), stripe (+11 more)

### Community 14 - "Community 14"
Cohesion: 0.13
Nodes (8): deleteAccount(), updateUserProfile(), 343228b feat(auth): add account deletion functionality with cascade deletes, 4384d32 docs: complete documentation suite, 52bad2b chore: remove build logs and update gitignore, DeleteAccountButton(), ProfileForm(), config

### Community 15 - "Community 15"
Cohesion: 0.16
Nodes (14): absoluteUrl(), cn(), formatCurrency(), formatDate(), slugify(), Button, ButtonProps, buttonVariants (+6 more)

### Community 16 - "Community 16"
Cohesion: 0.11
Nodes (6): logOut(), DashboardSidebar(), getNavigation(), MobileSidebar(), NavItem, SidebarContent()

### Community 17 - "Community 17"
Cohesion: 0.19
Nodes (18): main, 0b2cca8 fix: seed database in CI and use valid credentials in playwright setup, 0df7eda fix: handle nextjs redirect in delete button, 14d2b75 fix: update image paths in docs/INTRODUCTION.md, 2e55ef2 fix: nextjs server action build error in sidebar, 3e27e7e fix: update e2e auth setup to expect correct login heading, 7252c33 fix: resolve failing tests from open-core pivot, 7e6565e fix: look for Stack Explorer text on dashboard instead of dashboard text (+10 more)

### Community 18 - "Community 18"
Cohesion: 0.15
Nodes (7): 4c271fb fix: ensure Prisma generates on Vercel build and add robust error handling in auth action, 6199608 feat: integrate Graphify knowledge graph explorer into dashboard, 9e67322 fix: auth security, billing checkout, RLS, plan gating, CLI command, b736ebb fix(billing): client side redirect for lemonsqueezy checkout, d214810 fix: add explicit trustHost and secret to NextAuth config for Vercel deployment, d869b58 fix: provide explicit secret fallback in NextAuth config to eliminate MissingSecret on Vercel, { handlers, auth, signIn, signOut }

### Community 19 - "Community 19"
Cohesion: 0.19
Nodes (5): read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors

### Community 20 - "Community 20"
Cohesion: 0.13
Nodes (3): TestFixtureValidation, TestMetricMath, TestThresholdGate

### Community 21 - "Community 21"
Cohesion: 0.13
Nodes (7): bdf0787 docs: replace readme placeholders with real screenshots, f957e38 docs: remove license section and force add .env.example, prisma, prisma, client, net, start

### Community 22 - "Community 22"
Cohesion: 0.13
Nodes (15): copyRecursiveSync(), destDir, excludedPatterns, excludedSpecificFiles, { execSync }, fs, overviewPath, path (+7 more)

### Community 23 - "Community 23"
Cohesion: 0.31
Nodes (1): CatalogRefreshTest

### Community 24 - "Community 24"
Cohesion: 0.13
Nodes (3): TestAntiPatternGating, TestLuminance, TestModeResolution

### Community 25 - "Community 25"
Cohesion: 0.22
Nodes (10): createAuthenticatedUser(), createMockSession(), mockSession, mockSignIn, mockSignOut, mockUser, resetAuthMocks(), setMockRole() (+2 more)

### Community 26 - "Community 26"
Cohesion: 0.20
Nodes (6): DesignSystemGenerator, Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Find matching reasoning rule for a category., Apply reasoning rules to search results., Select best matching result based on priority keywords.

### Community 27 - "Community 27"
Cohesion: 0.17
Nodes (2): _rows(), TestWebStackFreshness

### Community 28 - "Community 28"
Cohesion: 0.22
Nodes (5): CredentialsSchema, RegisterSchema, 0999f13 fix: resolve vercel build error by excluding tests and fixing setup, 5871434 fix: fixed 'Get Instant Access' button, and migrated the test suites to correspond to the new ShipOnClick overhaul, 93038a6 docs: update DEVELOPMENT.md and .gitignore

### Community 29 - "Community 29"
Cohesion: 0.28
Nodes (11): handleOrderCreated(), handleSubscriptionCancelled(), handleSubscriptionCreated(), handleSubscriptionUpdated(), mapLSStatus(), POST(), updateOrgFromSubscription(), createCheckoutSession() (+3 more)

### Community 30 - "Community 30"
Cohesion: 0.21
Nodes (2): _rows(), TestNativeDesktopStackFreshness

### Community 31 - "Community 31"
Cohesion: 0.18
Nodes (2): read_rows(), TestStyleTaxonomy

### Community 32 - "Community 32"
Cohesion: 0.29
Nodes (6): getSubscriptionStatus(), hasSubscriptionPlan(), requireActiveSubscription(), MockFunction, mockPrisma, resetPrismaMocks()

### Community 33 - "Community 33"
Cohesion: 0.22
Nodes (10): _contrast_ratio(), _derive_dark_palette(), _palette_is_dark(), WCAG relative luminance of a #RRGGBB string, or None if unparseable., True when a colors.csv row's Background is a dark surface., WCAG contrast ratio for two hex colors, or None if either is invalid., Keep product brand tokens while deriving accessible dark surfaces., Pick the highest-ranked palette matching the resolved mode.      Only the dark c (+2 more)

### Community 34 - "Community 34"
Cohesion: 0.20
Nodes (7): _filter_anti_patterns_for_mode(), Drop "avoid dark mode" advice once dark mode is the resolved answer., Execute searches across multiple domains., Extract results list from search result dict., Generate complete design system recommendation.          variance/motion/density, Bucket a 1-10 dial value into its tier config. Returns None if value is None., _resolve_dial()

### Community 35 - "Community 35"
Cohesion: 0.22
Nodes (3): read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval

### Community 36 - "Community 36"
Cohesion: 0.22
Nodes (8): ApiResponse, AuthUser, MemberWithUser, NavItem, OrganizationWithSubscription, PaginatedResponse, PaginationParams, PlanTier

### Community 37 - "Community 37"
Cohesion: 0.25
Nodes (3): CodebaseExplorer(), fileSystem, FSNode

### Community 38 - "Community 38"
Cohesion: 0.29
Nodes (7): { execSync }, fs, main(), path, question(), readline, rl

### Community 39 - "Community 39"
Cohesion: 0.33
Nodes (6): COMMUNITY_COLORS, Edge, getCommunityColor(), GraphData, KnowledgeGraphViewer(), Node

### Community 40 - "Community 40"
Cohesion: 0.33
Nodes (5): apply_decision_rules(), parse_decision_rules(), Return deterministic mutations and an audit trail; never execute data., Parse the canonical condition -> action-array representation., _validate_action()

### Community 41 - "Community 41"
Cohesion: 0.29
Nodes (2): The exact reproduction from issue #428., TestEndToEndCoherence

### Community 42 - "Community 42"
Cohesion: 0.33
Nodes (6): _query_wants_dark(), True when a styles.csv row describes itself as dark-first., True when the query explicitly asks for a dark theme., Resolve the mode the rest of the output has to agree with., _resolve_color_mode(), _style_is_dark_primary()

### Community 43 - "Community 43"
Cohesion: 0.33
Nodes (1): TestPaletteSelection

### Community 44 - "Community 44"
Cohesion: 0.50
Nodes (2): ActionState, AuthActionError

### Community 46 - "Community 46"
Cohesion: 0.67
Nodes (1): prisma

### Community 47 - "Community 47"
Cohesion: 0.67
Nodes (2): format_output(), Format results for Claude consumption (token-optimized)

## Knowledge Gaps
- **167 isolated node(s):** `Apply longest-first synonym substitution at token boundaries.`, `BM25 ranking algorithm for text search`, `Lowercase, normalize synonyms, split, remove punctuation, filter stopwords`, `Build BM25 index from documents`, `Score all documents against query` (+162 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 23`** (1 nodes): `CatalogRefreshTest`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 27`** (2 nodes): `_rows()`, `TestWebStackFreshness`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 30`** (2 nodes): `_rows()`, `TestNativeDesktopStackFreshness`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 31`** (2 nodes): `read_rows()`, `TestStyleTaxonomy`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 41`** (2 nodes): `The exact reproduction from issue #428.`, `TestEndToEndCoherence`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (1 nodes): `TestPaletteSelection`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 44`** (2 nodes): `ActionState`, `AuthActionError`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 46`** (1 nodes): `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 47`** (2 nodes): `format_output()`, `Format results for Claude consumption (token-optimized)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DesignSystemGenerator` connect `Community 26` to `Community 7`, `Community 34`, `Community 2`, `Community 6`, `Community 41`, `Community 24`, `Community 43`?**
  _High betweenness centrality (0.072) - this node is a cross-community bridge._
- **Why does `TestSearchDomains` connect `Community 2` to `Community 0`, `Community 26`?**
  _High betweenness centrality (0.028) - this node is a cross-community bridge._
- **Are the 17 inferred relationships involving `DesignSystemGenerator` (e.g. with `TestBm25CoreBehavior` and `TestDiagnosticsContracts`) actually correct?**
  _`DesignSystemGenerator` has 17 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Apply longest-first synonym substitution at token boundaries.`, `BM25 ranking algorithm for text search`, `Lowercase, normalize synonyms, split, remove punctuation, filter stopwords` to the rest of the system?**
  _167 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06597222222222222 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.0783673469387755 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.0425531914893617 - nodes in this community are weakly interconnected._