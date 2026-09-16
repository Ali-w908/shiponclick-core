# Node Description Batch 22 of 23

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

- "tests_test_style_taxonomy_teststyletaxonomy_test_curated_state_distribution_is_explicit": ".test_curated_state_distribution_is_explicit()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L30 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_deprecated_rows_never_appear_in_generic_results": ".test_deprecated_rows_never_appear_in_generic_results()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L64 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_every_style_name_and_alias_has_a_deterministic_destination": ".test_every_style_name_and_alias_has_a_deterministic_destination()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L39 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_family_variants_and_mobile_intent_remain_distinct": ".test_family_variants_and_mobile_intent_remain_distinct()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L76 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_new_rows_have_first_party_provenance": ".test_new_rows_have_first_party_provenance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L154 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_searchable_prompt_lengths_are_balanced": ".test_searchable_prompt_lengths_are_balanced()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L144 | neighbors=[TestStyleTaxonomy]
- "tests_test_style_taxonomy_teststyletaxonomy_test_style_arbitration_does_not_steal_product_intent": ".test_style_arbitration_does_not_steal_product_intent()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_style_taxonomy.py:L72 | neighbors=[TestStyleTaxonomy]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts_test_new_tailwind_rows_are_unique_current_and_keep_required_utilities": ".test_new_tailwind_rows_are_unique_current_and_keep_required_utilities()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L86 | neighbors=[TestTextLayoutDataContracts]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts_test_new_ux_rows_are_unique_sequential_and_keep_critical_guidance": ".test_new_ux_rows_are_unique_sequential_and_keep_critical_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L74 | neighbors=[TestTextLayoutDataContracts]
- "tests_test_text_layout_resilience_testtextlayoutdatacontracts_test_refined_rows_are_context_sensitive_not_universal_recipes": ".test_refined_rows_are_context_sensitive_not_universal_recipes()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L100 | neighbors=[TestTextLayoutDataContracts]
- "tests_test_text_layout_resilience_testtextlayoutretrieval_test_locked_queries_return_the_canonical_identity_first": ".test_locked_queries_return_the_canonical_identity_first()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L42 | neighbors=[TestTextLayoutRetrieval]
- "tests_test_text_layout_resilience_testtextlayoutretrieval_test_tailwind_query_returns_compact_label_layout_first": ".test_tailwind_query_returns_compact_label_layout_first()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_text_layout_resilience.py:L58 | neighbors=[TestTextLayoutRetrieval]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_common_old_major_syntaxes_select_legacy_guidance": ".test_common_old_major_syntaxes_select_legacy_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L104 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_current_high_drift_queries_return_current_contracts": ".test_current_high_drift_queries_return_current_contracts()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L124 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_current_major_migration_query_stays_on_current_guidance": ".test_current_major_migration_query_stays_on_current_guidance()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L91 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_explicit_old_major_uses_only_curated_legacy_rows": ".test_explicit_old_major_uses_only_curated_legacy_rows()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L77 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_old_major_without_curated_legacy_guidance_abstains": ".test_old_major_without_curated_legacy_guidance_abstains()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L119 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_shadcn_named_base_excludes_incompatible_composition_apis": ".test_shadcn_named_base_excludes_incompatible_composition_apis()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L96 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_stack_without_curated_legacy_rows_keeps_nonlegacy_fallback": ".test_stack_without_curated_legacy_rows_keeps_nonlegacy_fallback()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L138 | neighbors=[TestWebStackFreshness]
- "tests_test_web_stack_freshness_testwebstackfreshness_test_svelte_current_and_legacy_queries_do_not_mix_generations": ".test_svelte_current_and_legacy_queries_do_not_mix_generations()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/tests/test_web_stack_freshness.py:L68 | neighbors=[TestWebStackFreshness]
- "token_page_invitepage": "InvitePage()" | kind=code-symbol | source=src/app/invite/[token]/page.tsx:L7 | neighbors=[page.tsx]
- "types_index_apiresponse": "ApiResponse" | kind=code-symbol | source=src/types/index.ts:L48 | neighbors=[index.ts]
- "types_index_authuser": "AuthUser" | kind=code-symbol | source=src/types/index.ts:L13 | neighbors=[index.ts]
- "types_index_memberwithuser": "MemberWithUser" | kind=code-symbol | source=src/types/index.ts:L37 | neighbors=[index.ts]
- "types_index_navitem": "NavItem" | kind=code-symbol | source=src/types/index.ts:L76 | neighbors=[index.ts]
- "types_index_organizationwithsubscription": "OrganizationWithSubscription" | kind=code-symbol | source=src/types/index.ts:L23 | neighbors=[index.ts]
- "types_index_paginatedresponse": "PaginatedResponse" | kind=code-symbol | source=src/types/index.ts:L65 | neighbors=[index.ts]
- "types_index_paginationparams": "PaginationParams" | kind=code-symbol | source=src/types/index.ts:L57 | neighbors=[index.ts]
- "types_index_plantier": "PlanTier" | kind=code-symbol | source=src/types/index.ts:L8 | neighbors=[index.ts]
- "ui_button_button": "Button" | kind=code-symbol | source=src/components/ui/button.tsx:L43 | neighbors=[button.tsx]
- "ui_button_buttonprops": "ButtonProps" | kind=code-symbol | source=src/components/ui/button.tsx:L37 | neighbors=[button.tsx]
- "ui_button_buttonvariants": "buttonVariants" | kind=code-symbol | source=src/components/ui/button.tsx:L8 | neighbors=[button.tsx]
- "ui_card_carddescription": "CardDescription" | kind=code-symbol | source=src/components/ui/card.tsx:L47 | neighbors=[card.tsx]
- "ui_card_cardfooter": "CardFooter" | kind=code-symbol | source=src/components/ui/card.tsx:L67 | neighbors=[card.tsx]
- "ui_login_form_githubicon": "GitHubIcon()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L18 | neighbors=[login-form.tsx]
- "ui_login_form_googleicon": "GoogleIcon()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L7 | neighbors=[login-form.tsx]
- "ui_login_form_loginbutton": "LoginButton()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L124 | neighbors=[login-form.tsx]
- "ui_login_form_loginform": "LoginForm()" | kind=code-symbol | source=src/components/ui/login-form.tsx:L26 | neighbors=[login-form.tsx]
- "ui_register_form_githubicon": "GitHubIcon()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L19 | neighbors=[register-form.tsx]
- "ui_register_form_googleicon": "GoogleIcon()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L8 | neighbors=[register-form.tsx]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-021.json

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
