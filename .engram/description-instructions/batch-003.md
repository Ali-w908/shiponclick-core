# Node Description Batch 4 of 24

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

- "tests_test_design_system_mode_testendtoendcoherence": "TestEndToEndCoherence" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L138 | neighbors=[test_design_system_mode.py, The exact reproduction from issue #428., DesignSystemGenerator, .test_dark_query_does_not_advise_agains…, .test_dark_query_foreground_is_lighter_…, .test_dark_query_gets_a_dark_background…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@343228ba2668d9e13e08fea3d84c48321e3aa4e3": "343228b feat(auth): add account deletion functionality with cascade deletes" | kind=Commit | source=git | neighbors=[auth-actions.ts, feature/auros-theme, main, efb9145 fix: add logout button, github …, delete-account-button.tsx, page.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@6199608b0a4aaefb7b4ec41f0bad7b99c2c0b9e2": "6199608 feat: integrate Graphify knowledge graph explorer into dashboard" | kind=Commit | source=git | neighbors=[14d2b75 fix: update image paths in docs…, feature/auros-theme, main, d214810 fix: add explicit trustHost and…, knowledge-graph-viewer.tsx, sidebar.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@9f800eaff2cb76f6ec3ae7ecccf120c9fd5d9123": "9f800ea Initial commit from Create Next App" | kind=Commit | source=git | neighbors=[layout.tsx, feature/auros-theme, main, 4384d32 docs: complete documentation su…, eslint.config.mjs, next.config.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@b152a29cb797df13b19c63fc0461711cddee985e": "b152a29 fix: update landing page and metadata to Next.js 16" | kind=Commit | source=git | neighbors=[0999f13 fix: resolve vercel build error…, auth-actions.ts, feature/auros-theme, main, edc8b80 refactor: cleanup debug logs an…, metadata.ts]
- "dashboard_cli_instructions": "cli-instructions.tsx" | kind=code-symbol | source=src/components/dashboard/cli-instructions.tsx:L1 | neighbors=[a95c6d0 feat: introduce AI semantic 3-w…, f849da3 feat: stabilize github claim ac…, CliInstructions(), FormatType, OSType, page.tsx]
- "dashboard_delete_account_button": "delete-account-button.tsx" | kind=code-symbol | source=src/components/dashboard/delete-account-button.tsx:L1 | neighbors=[0df7eda fix: handle nextjs redirect in …, 343228b feat(auth): add account deletio…, auth-actions.ts, deleteAccount(), DeleteAccountButton(), plasmic.ts]
- "dashboard_invite_form": "invite-form.tsx" | kind=code-symbol | source=src/components/dashboard/invite-form.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, a50344d design: apply premium UI polish…, org-actions.ts, inviteUser(), InviteForm(), plasmic.ts]
- "docs_page": "page.tsx" | kind=code-symbol | source=src/app/(marketing)/docs/page.tsx:L1 | neighbors=[16fab98 feat: product evolution sprint …, d49750b feat: complete product overhaul…, DocsPage(), getMarkdownContent(), metadata, utils.ts]
- "factories_index_createmockorganizationwithsubscription": "createMockOrganizationWithSubscription()" | kind=code-symbol | source=tests/factories/index.ts:L97 | neighbors=[index.ts, createMockOrganization(), generateId(), createSubscribedScenario(), subscription.test.ts, authorization.test.ts]
- "factories_index_generateid": "generateId()" | kind=code-symbol | source=tests/factories/index.ts:L16 | neighbors=[index.ts, createMockAuditLog(), createMockInvite(), createMockMember(), createMockOrganization(), createMockOrganizationWithSubscription()]
- "lib_auth_config": "auth.config.ts" | kind=code-symbol | source=src/lib/auth.config.ts:L1 | neighbors=[259b106 feat: complete LemonSqueezy int…, 4384d32 docs: complete documentation su…, 50fa99d feat: streamline logged-in chec…, 9e67322 fix: auth security, billing che…, d214810 fix: add explicit trustHost and…, d869b58 fix: provide explicit secret fa…]
- "lib_email": "email.ts" | kind=code-symbol | source=src/lib/email.ts:L1 | neighbors=[org.test.ts, 4384d32 docs: complete documentation su…, getResend(), sendInviteEmail(), SendInviteParams, email.test.ts]
- "lib_utils_test": "utils.test.ts" | kind=code-symbol | source=tests/unit/lib/utils.test.ts:L1 | neighbors=[93038a6 docs: update DEVELOPMENT.md and…, utils.ts, absoluteUrl(), cn(), formatCurrency(), formatDate()]
- "marketing_demo_video": "demo-video.tsx" | kind=code-symbol | source=src/components/marketing/demo-video.tsx:L1 | neighbors=[2fc46b9 docs: update marketing demo vid…, 78c7265 update: design updates, f2af8ac checkpoint: before 3D backgroun…, fb15d37 feat: add raw demo video sectio…, plasmic.ts, DemoVideo()]
- "marketing_interactive_skills": "interactive-skills.tsx" | kind=code-symbol | source=src/components/marketing/interactive-skills.tsx:L1 | neighbors=[09673f9 fix: remove slash prefix from n…, 373b817 feat: architectural refactor fo…, cd64b70 fix: remove slash from terminal…, f2af8ac checkpoint: before 3D backgroun…, plasmic.ts, hero.tsx]
- "scripts_core_suggest_terms": "_suggest_terms()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L483 | neighbors=[core.py, Nearest known vocabulary terms for a qu…, search(), search_stack(), .tokenize(), .vocabulary()]
- "scripts_design_system_generate_design_system": "generate_design_system()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L919 | neighbors=[design_system.py, DesignSystemGenerator, .generate(), format_ascii_box(), format_markdown(), persist_design_system()]
- "scripts_design_system_persist_design_system": "persist_design_system()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L995 | neighbors=[design_system.py, generate_design_system(), format_master_md(), format_page_override_md(), safe_slug(), _write_persisted_file()]
- "scripts_validate_data_check_font_catalog": "_check_font_catalog()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L529 | neighbors=[validate_data.py, _check_catalog_contract(), _catalog_date(), _font_families(), _imported_weights(), _split()]
- "scripts_validate_data_check_provenance": "_check_provenance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L896 | neighbors=[validate_data.py, _valid_catalog_source_key(), _valid_confidence(), _valid_dataset_source_key(), _valid_date(), _valid_provenance_source()]
- "scripts_validate_data_check_typography_contract": "_check_typography_contract()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L468 | neighbors=[validate_data.py, _check_core_data_contract(), _configured_font_names(), _declared_weights(), _font_families(), _font_names()]
- "tests_test_data_contracts_testgeneratedcatalogcontract": "TestGeneratedCatalogContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L355 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .load_json(), .test_canonical_catalogs_and_provenance…, .test_curated_icon_and_summary_drift_fa…, .test_font_license_and_typography_drift…]
- "tests_test_data_contracts_testlandingandstackcontract": "TestLandingAndStackContract" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_data_contracts.py:L261 | neighbors=[test_data_contracts.py, DesignSystemGenerator, .test_dataset_provenance_scope_binds_re…, .test_landing_sections_use_one_delimite…, .test_provenance_rejects_bad_shapes_enu…, .test_provenance_sidecar_has_stable_sha…]
- "tests_test_design_system_mode_testpaletteselection": "TestPaletteSelection" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_design_system_mode.py:L94 | neighbors=[test_design_system_mode.py, DesignSystemGenerator, .test_category_identity_wins_over_unrel…, .test_dark_mode_falls_back_to_top_hit_w…, .test_dark_mode_skips_light_palettes(), .test_empty_results()]
- "tests_test_relevance_evaluator_testthresholdgate": "TestThresholdGate" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_relevance_evaluator.py:L77 | neighbors=[test_relevance_evaluator.py, .test_manifest_binds_oracle_and_validat…, .test_manifest_rejects_missing_contract…, .test_manifest_rejects_non_finite_and_i…, .test_metric_sample_and_locked_case_fai…, .test_oracle_fingerprint_hashes_the_sel…]
- "ui_button": "button.tsx" | kind=code-symbol | source=src/components/ui/button.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, plasmic.ts, utils.ts, cn(), Button, ButtonProps]
- "ui_feedback_widget": "feedback-widget.tsx" | kind=code-symbol | source=src/components/ui/feedback-widget.tsx:L1 | neighbors=[layout.tsx, f03e200 fix: add untracked files, f2af8ac checkpoint: before 3D backgroun…, plasmic.ts, feedback-actions.ts, submitFeedback()]
- "actions_feedback_actions": "feedback-actions.ts" | kind=code-symbol | source=src/actions/feedback-actions.ts:L1 | neighbors=[feedbackSchema, submitFeedback(), auth.ts, 28ddf7f fix: zod error issues property, f03e200 fix: add untracked files, feedback-widget.tsx]
- "actions_user_actions": "user-actions.ts" | kind=code-symbol | source=src/actions/user-actions.ts:L1 | neighbors=[updateUserProfile(), auth.ts, db.ts, 4384d32 docs: complete documentation su…, profile-form.tsx, input-validation.test.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@7252c33274acff0852dd77987b86ab1e963c2257": "7252c33 fix: resolve failing tests from open-core pivot" | kind=Commit | source=git | neighbors=[auth-actions.ts, feature/auros-theme, main, cb6a41d fix: remove duplicate test.use …, subscription.test.ts, 8161816 feat: pivot to open-core strate…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@8c0c607180a8a5edfe321bce521dc6929626b865": "8c0c607 fix: allow email account linking for OAuth providers" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, 89988d0 full dashboard redesign, README…, eee52de Update README.md, auth.ts, f6172b0 feat: UI/UX overhaul, modern de…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@a95c6d0664135faacbbbf8d8d12553d4e53dfbfa": "a95c6d0 feat: introduce AI semantic 3-way merge system and sync-updates skill" | kind=Commit | source=git | neighbors=[2b22890 feat: add vercel analytics, feature/auros-theme, main, f2af8ac checkpoint: before 3D backgroun…, cli-instructions.tsx, setup.js]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@b736ebb13e8ce64aaa48a060cbe0af822060f0b5": "b736ebb fix(billing): client side redirect for lemonsqueezy checkout" | kind=Commit | source=git | neighbors=[9e67322 fix: auth security, billing che…, billing-actions.ts, feature/auros-theme, main, 343228b feat(auth): add account deletio…, pricing-card.tsx]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@bdf078793ce68cefe8a8b4c49d4e559c0e8e5d00": "bdf0787 docs: replace readme placeholders with real screenshots" | kind=Commit | source=git | neighbors=[feature/auros-theme, main, f957e38 docs: remove license section an…, capture-screenshots.spec.ts, wait-for-port.js, edc8b80 refactor: cleanup debug logs an…]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@d214810cc5e6f11294746e2c8b184b0060998e74": "d214810 fix: add explicit trustHost and secret to NextAuth config for Vercel de…" | kind=Commit | source=git | neighbors=[6199608 feat: integrate Graphify knowle…, feature/auros-theme, main, 4c271fb fix: ensure Prisma generates on…, auth.ts, auth.config.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@d869b58a3a81d9ebe05e8f2e48a0006293a64600": "d869b58 fix: provide explicit secret fallback in NextAuth config to eliminate M…" | kind=Commit | source=git | neighbors=[4c271fb fix: ensure Prisma generates on…, feature/auros-theme, main, 71ae643 feat: complete product overhaul…, auth.ts, auth.config.ts]
- "commit:repo:github.com/Ali-w908/nextjs-saas-starter-kit@fb15d373dfd0345efecd3f8f123b2a0b8ef8e204": "fb15d37 feat: add raw demo video section and remove fake social proof" | kind=Commit | source=git | neighbors=[a1391e2 feat: add raw demo video sectio…, feature/auros-theme, main, be8086c feat: complete UI unslop, redes…, demo-video.tsx, page.tsx]
- "config_metadata": "metadata.ts" | kind=code-symbol | source=src/config/metadata.ts:L1 | neighbors=[layout.tsx, 16fab98 feat: product evolution sprint …, 4384d32 docs: complete documentation su…, 71ae643 feat: complete product overhaul…, b152a29 fix: update landing page and me…, metadata]
- "dashboard_profile_form": "profile-form.tsx" | kind=code-symbol | source=src/components/dashboard/profile-form.tsx:L1 | neighbors=[4384d32 docs: complete documentation su…, user-actions.ts, updateUserProfile(), ProfileForm(), plasmic.ts, page.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-003.json

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
