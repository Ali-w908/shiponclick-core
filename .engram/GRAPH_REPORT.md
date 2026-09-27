# Graph Report - .  (2026-09-27)

## Corpus Check
- 291 files · ~249,857 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 947 nodes · 1993 edges · 53 communities detected
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.5)
- Token cost: 0 input · 0 output
- Edge kinds: contains: 467 · MODIFIES: 378 · calls: 277 · imports: 191 · method: 186 · imports_from: 166 · ON_BRANCH: 156 · PARENT_OF: 80 · rationale_for: 68 · uses: 24


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 291 · Candidates: 520
- Excluded: 0 untracked · 56773 ignored · 0 sensitive · 0 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `cd64b70`
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
Cohesion: 0.11
Nodes (48): feature/auros-theme, main, 046fd8b feat: add terminal selector for setup command and create add-tests AI skill, 0999f13 fix: resolve vercel build error by excluding tests and fixing setup, 0b2cca8 fix: seed database in CI and use valid credentials in playwright setup, 0df7eda fix: handle nextjs redirect in delete button, 14d2b75 fix: update image paths in docs/INTRODUCTION.md, 1f93fc1 fix: remove fragile cursor and agy URI links and rely on robust CLI commands (+40 more)

### Community 2 - "Community 2"
Cohesion: 0.10
Nodes (23): 16fab98 feat: product evolution sprint - ui upgrades, AI skills, and unified documentation, 71ae643 feat: complete product overhaul (ShipOnClick rebranding, premium landing page, one-time pricing, projects dashboard, setup scripts), 78c7265 update: design updates, f2af8ac checkpoint: before 3D background experiment, f6172b0 feat: UI/UX overhaul, modern design system, and auth callback fixes, fb15d37 feat: add raw demo video section and remove fake social proof, AuroraBackground(), DemoVideo() (+15 more)

### Community 3 - "Community 3"
Cohesion: 0.04
Nodes (7): TestBm25CoreBehavior, TestDiagnosticsContracts, TestDomainDetection, TestPersistence, TestReasoningMatch, TestSearchDomains, TestTokenizer

### Community 4 - "Community 4"
Cohesion: 0.10
Nodes (41): _catalog_date(), _check_app_interface_contract(), _check_catalog_contract(), _check_catalog_summary(), _check_chart_contract(), _check_color_contract(), _check_core_data_contract(), _check_file() (+33 more)

### Community 5 - "Community 5"
Cohesion: 0.06
Nodes (11): authenticate(), loginWithGithub(), loginWithGoogle(), logOut(), register(), RegisterSchema, DashboardSidebar(), getNavigation() (+3 more)

### Community 6 - "Community 6"
Cohesion: 0.06
Nodes (17): feedbackSchema, submitFeedback(), jakarta, jetbrainsMono, outfit, 28ddf7f fix: zod error issues property, 5c2866e chore: setup Sentry and clean up example pages, a9d42ff fix: build errors (zod issues and strict types) (+9 more)

### Community 7 - "Community 7"
Cohesion: 0.10
Nodes (12): createCheckout(), getSubscriptionDetails(), requireBillingPermission(), 259b106 feat: complete LemonSqueezy integration and zero-token agent onboarding, 4384d32 docs: complete documentation suite, 52bad2b chore: remove build logs and update gitignore, 89988d0 full dashboard redesign, README update, free plan update and builder plan unlimited projects update, { handlers, auth, signIn, signOut } (+4 more)

### Community 8 - "Community 8"
Cohesion: 0.07
Nodes (18): 09673f9 fix: remove slash prefix from non-skill hover words, 0afec64 fix: replace JSX.Element with ReactNode to fix TS build error, 373b817 feat: architectural refactor for deep modules, plugins, and interactive hovers, 3a0cfe8 fix: restore knowledge-graph-viewer.tsx to fix build, cd64b70 fix: remove slash from terminal output inside SkillTerminal, COMMUNITY_COLORS, Edge, getCommunityColor() (+10 more)

### Community 9 - "Community 9"
Cohesion: 0.10
Nodes (7): read_rows(), split_values(), style_identities(), TestGeneratedCatalogContract, TestLandingAndStackContract, TestReasoningContract, TestStyleIdentityContract

### Community 10 - "Community 10"
Cohesion: 0.11
Nodes (26): ansi_ljust(), _detect_page_type(), format_ascii_box(), format_markdown(), format_master_md(), format_page_override_md(), generate_design_system(), _generate_intelligent_overrides() (+18 more)

### Community 11 - "Community 11"
Cohesion: 0.10
Nodes (16): multiOrgScenarios, subscriptionStates, teamRoles, validationCases, webhookEvents, createMockWebhookEvent(), generateMockStripeSignature(), mockBillingPortalSession (+8 more)

### Community 12 - "Community 12"
Cohesion: 0.16
Nodes (20): cancelSubscriptionAtPeriodEnd(), createBillingPortalSession(), createCheckoutSession(), createCustomer(), getStripe(), getSubscription(), resumeSubscription(), stripe (+12 more)

### Community 13 - "Community 13"
Cohesion: 0.17
Nodes (12): acceptInvite(), inviteUser(), removeMember(), revokeInvite(), updateMemberRole(), a50344d design: apply premium UI polish to Stack Explorer, Knowledge Graph, and Settings, InviteForm(), Invite (+4 more)

### Community 14 - "Community 14"
Cohesion: 0.21
Nodes (18): createExpiredInvite(), createMockAdmin(), createMockAuditLog(), createMockBillingMember(), createMockInvite(), createMockMember(), createMockOrganization(), createMockOrganizationWithSubscription() (+10 more)

### Community 15 - "Community 15"
Cohesion: 0.13
Nodes (7): 3f83b6b fix: restore missing imports in dashboard page, be8086c feat: complete UI unslop, redesign landing page, and integrate github OAuth fulfillment, cb974c5 chore: revamp dashboard onboarding and fix claim error, f849da3 feat: stabilize github claim action with tests and polish dashboard UI, CliInstructions(), FormatType, OSType

### Community 16 - "Community 16"
Cohesion: 0.19
Nodes (5): read_rows(), TestAccessibilityGuidance, TestChartsTypographyAndIcons, TestCurrentReactGuidance, TestSemanticColors

### Community 17 - "Community 17"
Cohesion: 0.13
Nodes (3): TestFixtureValidation, TestMetricMath, TestThresholdGate

### Community 18 - "Community 18"
Cohesion: 0.20
Nodes (11): createAuthenticatedUser(), createMockSession(), mockAuth, mockSession, mockSignIn, mockSignOut, mockUser, resetAuthMocks() (+3 more)

### Community 19 - "Community 19"
Cohesion: 0.24
Nodes (10): Overview(), PLASMIC, testCategories, TestingSuite(), Card, CardContent, CardDescription, CardFooter (+2 more)

### Community 20 - "Community 20"
Cohesion: 0.31
Nodes (1): CatalogRefreshTest

### Community 21 - "Community 21"
Cohesion: 0.13
Nodes (3): TestAntiPatternGating, TestLuminance, TestModeResolution

### Community 22 - "Community 22"
Cohesion: 0.13
Nodes (4): ICON_MAP, STACK_ITEMS, StackExplorer(), StackItem

### Community 23 - "Community 23"
Cohesion: 0.20
Nodes (9): metadata, absoluteUrl(), cn(), formatCurrency(), formatDate(), slugify(), Button, ButtonProps (+1 more)

### Community 24 - "Community 24"
Cohesion: 0.20
Nodes (6): DesignSystemGenerator, Generates design system recommendations from aggregated searches., Load reasoning rules from CSV., Find matching reasoning rule for a category., Apply reasoning rules to search results., Select best matching result based on priority keywords.

### Community 25 - "Community 25"
Cohesion: 0.17
Nodes (2): _rows(), TestWebStackFreshness

### Community 26 - "Community 26"
Cohesion: 0.22
Nodes (5): CredentialsSchema, RegisterSchema, 5871434 fix: fixed 'Get Instant Access' button, and migrated the test suites to correspond to the new ShipOnClick overhaul, 93038a6 docs: update DEVELOPMENT.md and .gitignore, efb9145 fix: add logout button, github auto invite

### Community 27 - "Community 27"
Cohesion: 0.28
Nodes (11): handleOrderCreated(), handleSubscriptionCancelled(), handleSubscriptionCreated(), handleSubscriptionUpdated(), mapLSStatus(), POST(), updateOrgFromSubscription(), createCheckoutSession() (+3 more)

### Community 28 - "Community 28"
Cohesion: 0.21
Nodes (2): _rows(), TestNativeDesktopStackFreshness

### Community 29 - "Community 29"
Cohesion: 0.18
Nodes (2): read_rows(), TestStyleTaxonomy

### Community 30 - "Community 30"
Cohesion: 0.31
Nodes (6): getSubscriptionStatus(), hasSubscriptionPlan(), requireActiveSubscription(), MockFunction, mockPrisma, resetPrismaMocks()

### Community 31 - "Community 31"
Cohesion: 0.24
Nodes (5): getResend(), sendInviteEmail(), SendInviteParams, { mockEmailsSend }, InviteService

### Community 32 - "Community 32"
Cohesion: 0.29
Nodes (5): deleteAccount(), updateUserProfile(), 343228b feat(auth): add account deletion functionality with cascade deletes, DeleteAccountButton(), ProfileForm()

### Community 33 - "Community 33"
Cohesion: 0.20
Nodes (8): components, componentsDir, currentPlasmic, fs, path, plasmicFile, seen, uniqueComponents

### Community 34 - "Community 34"
Cohesion: 0.22
Nodes (10): _contrast_ratio(), _derive_dark_palette(), _palette_is_dark(), WCAG relative luminance of a #RRGGBB string, or None if unparseable., True when a colors.csv row's Background is a dark surface., WCAG contrast ratio for two hex colors, or None if either is invalid., Keep product brand tokens while deriving accessible dark surfaces., Pick the highest-ranked palette matching the resolved mode.      Only the dark c (+2 more)

### Community 35 - "Community 35"
Cohesion: 0.20
Nodes (7): _filter_anti_patterns_for_mode(), Drop "avoid dark mode" advice once dark mode is the resolved answer., Execute searches across multiple domains., Extract results list from search result dict., Generate complete design system recommendation.          variance/motion/density, Bucket a 1-10 dial value into its tier config. Returns None if value is None., _resolve_dial()

### Community 36 - "Community 36"
Cohesion: 0.22
Nodes (3): read_rows(), TestTextLayoutDataContracts, TestTextLayoutRetrieval

### Community 37 - "Community 37"
Cohesion: 0.28
Nodes (7): 7cf3551 fix: make setup command 100% cross-platform compatible, 8920425 fix: resolve terminal prompt text duplication and make setup output pretty, d49750b feat: complete product overhaul (ShipOnClick rebranding, premium docs page, AI Onboarding system, Graphify setup, refund removal), colors, { execSync }, fs, path

### Community 38 - "Community 38"
Cohesion: 0.22
Nodes (8): ApiResponse, AuthUser, MemberWithUser, NavItem, OrganizationWithSubscription, PaginatedResponse, PaginationParams, PlanTier

### Community 39 - "Community 39"
Cohesion: 0.43
Nodes (4): claimGithubRepository(), getUsernameById(), GithubConnectionCard(), GithubConnectionCardProps

### Community 40 - "Community 40"
Cohesion: 0.36
Nodes (4): 50fa99d feat: streamline logged-in checkout redirect, rename overview tab, split pricing cards, 9e67322 fix: auth security, billing checkout, RLS, plan gating, CLI command, b736ebb fix(billing): client side redirect for lemonsqueezy checkout, PricingCard()

### Community 41 - "Community 41"
Cohesion: 0.25
Nodes (3): CodebaseExplorer(), fileSystem, FSNode

### Community 42 - "Community 42"
Cohesion: 0.33
Nodes (5): apply_decision_rules(), parse_decision_rules(), Return deterministic mutations and an audit trail; never execute data., Parse the canonical condition -> action-array representation., _validate_action()

### Community 43 - "Community 43"
Cohesion: 0.29
Nodes (2): The exact reproduction from issue #428., TestEndToEndCoherence

### Community 44 - "Community 44"
Cohesion: 0.33
Nodes (6): _query_wants_dark(), True when a styles.csv row describes itself as dark-first., True when the query explicitly asks for a dark theme., Resolve the mode the rest of the output has to agree with., _resolve_color_mode(), _style_is_dark_primary()

### Community 45 - "Community 45"
Cohesion: 0.33
Nodes (1): TestPaletteSelection

### Community 46 - "Community 46"
Cohesion: 0.40
Nodes (3): 9f800ea Initial commit from Create Next App, eslintConfig, config

### Community 47 - "Community 47"
Cohesion: 0.40
Nodes (3): client, net, start

### Community 48 - "Community 48"
Cohesion: 0.50
Nodes (2): ActionState, AuthActionError

### Community 50 - "Community 50"
Cohesion: 0.67
Nodes (2): agentFeatures, AgentsShowcase()

### Community 51 - "Community 51"
Cohesion: 0.67
Nodes (1): prisma

### Community 52 - "Community 52"
Cohesion: 0.67
Nodes (1): prisma

### Community 53 - "Community 53"
Cohesion: 0.67
Nodes (2): format_output(), Format results for Claude consumption (token-optimized)

## Knowledge Gaps
- **157 isolated node(s):** `Apply longest-first synonym substitution at token boundaries.`, `BM25 ranking algorithm for text search`, `Lowercase, normalize synonyms, split, remove punctuation, filter stopwords`, `Build BM25 index from documents`, `Score all documents against query` (+152 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 20`** (1 nodes): `CatalogRefreshTest`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 25`** (2 nodes): `_rows()`, `TestWebStackFreshness`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 28`** (2 nodes): `_rows()`, `TestNativeDesktopStackFreshness`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 29`** (2 nodes): `read_rows()`, `TestStyleTaxonomy`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 43`** (2 nodes): `The exact reproduction from issue #428.`, `TestEndToEndCoherence`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 45`** (1 nodes): `TestPaletteSelection`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 48`** (2 nodes): `ActionState`, `AuthActionError`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 50`** (2 nodes): `agentFeatures`, `AgentsShowcase()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 51`** (1 nodes): `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 52`** (1 nodes): `prisma`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 53`** (2 nodes): `format_output()`, `Format results for Claude consumption (token-optimized)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `DesignSystemGenerator` connect `Community 24` to `Community 10`, `Community 35`, `Community 3`, `Community 9`, `Community 43`, `Community 21`, `Community 45`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `TestSearchDomains` connect `Community 3` to `Community 0`, `Community 24`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **What connects `Apply longest-first synonym substitution at token boundaries.`, `BM25 ranking algorithm for text search`, `Lowercase, normalize synonyms, split, remove punctuation, filter stopwords` to the rest of the system?**
  _157 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.06597222222222222 - nodes in this community are weakly interconnected._
- **Should `Community 1` be split into smaller, more focused modules?**
  _Cohesion score 0.10666666666666667 - nodes in this community are weakly interconnected._
- **Should `Community 2` be split into smaller, more focused modules?**
  _Cohesion score 0.09805735430157261 - nodes in this community are weakly interconnected._
- **Should `Community 3` be split into smaller, more focused modules?**
  _Cohesion score 0.0425531914893617 - nodes in this community are weakly interconnected._