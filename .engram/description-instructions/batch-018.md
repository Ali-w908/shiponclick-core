# Node Description Batch 19 of 24

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
LANGUAGE: each entry has a `lang=` marker giving the language of its source.
Write that entry's description in EXACTLY that language. Do not translate to
a single common language — match each node's source language individually.
No marketing language.
Respond ONLY with a JSON object mapping each node id (as a string) to its
one-sentence description — no prose, no markdown fences.

- "scripts_core_bm25_init": ".__init__()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L285 | neighbors=[BM25] | lang=en
- "scripts_core_rationale_274": "Apply longest-first synonym substitution at token boundaries." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L274 | neighbors=[_normalize()] | lang=en
- "scripts_core_rationale_283": "BM25 ranking algorithm for text search" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L283 | neighbors=[BM25] | lang=en
- "scripts_core_rationale_297": "Lowercase, normalize synonyms, split, remove punctuation, filter stopwords" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L297 | neighbors=[.tokenize()] | lang=en
- "scripts_core_rationale_303": "Build BM25 index from documents" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L303 | neighbors=[.fit()] | lang=en
- "scripts_core_rationale_324": "Score all documents against query" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L324 | neighbors=[.score()] | lang=en
- "scripts_core_rationale_346": "All indexed terms, for suggestion/typo-recovery purposes." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L346 | neighbors=[.vocabulary()] | lang=en
- "scripts_core_rationale_364": "Return rows and the verified signature of the bytes they came from." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L364 | neighbors=[_load_csv_snapshot()] | lang=en
- "scripts_core_rationale_382": "Load CSV rows from a stable, signature-verified snapshot." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L382 | neighbors=[_load_csv()] | lang=en
- "scripts_core_rationale_387": "Fitted index with cache identity covering fields and scorer version." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L387 | neighbors=[_get_bm25()] | lang=en
- "scripts_core_rationale_417": "Calibrated search returning results, index, and internal diagnostics." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L417 | neighbors=[_search_csv_detailed()] | lang=en
- "scripts_core_rationale_467": "Backward-compatible internal search tuple used by existing callers/tests." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L467 | neighbors=[_search_csv()] | lang=en
- "scripts_core_rationale_484": "Nearest known vocabulary terms for a query that returned 0 hits,     so the call" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L484 | neighbors=[_suggest_terms()] | lang=en
- "scripts_core_rationale_505": "Suggest complete public identities so a retry can bypass score thresholds." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L505 | neighbors=[_suggest_identities()] | lang=pt
- "scripts_core_rationale_526": "Return non-empty public identities from ordinary and alias fields." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L526 | neighbors=[_row_identities()] | lang=en
- "scripts_core_rationale_539": "Return high-signal product labels/aliases, never every corpus keyword." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L539 | neighbors=[_load_product_keywords()] | lang=en
- "scripts_core_rationale_596": "Apply only explicit, semantic rewrites for routing-only vocabulary." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L596 | neighbors=[_rewrite_query_for_domain()] | lang=en
- "scripts_core_rationale_629": "Auto-detect the most relevant domain from query.      Matches are weighted by ke" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L629 | neighbors=[detect_domain()] | lang=en
- "scripts_core_rationale_665": "Resolve an explicit style identity without opening generic variant ranking." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L665 | neighbors=[_style_identity()] | lang=en
- "scripts_core_rationale_696": "Return one row whose stable public identity exactly matches the query." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L696 | neighbors=[_exact_row_identity()] | lang=en
- "scripts_core_rationale_706": "Load rows for optional identity routing, leaving search to report I/O errors." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L706 | neighbors=[_load_rows_or_empty()] | lang=en
- "scripts_core_rationale_737": "Resolve a deprecated in-domain alias, or expose a cross-domain redirect." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L737 | neighbors=[_style_search_destination()] | lang=pt
- "scripts_core_rationale_756": "Main search function with auto-domain detection" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L756 | neighbors=[search()] | lang=en
- "scripts_core_rationale_849": "Whether a stack query explicitly targets an older framework generation." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L849 | neighbors=[_stack_query_requests_legacy()] | lang=en
- "scripts_core_rationale_889": "Choose one coherent applicability generation for stack retrieval." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L889 | neighbors=[_stack_row_filter()] | lang=en
- "scripts_core_rationale_926": "Resolve a standalone API identifier even when its BM25 IDF is low." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L926 | neighbors=[_exact_stack_identifier()] | lang=en
- "scripts_core_rationale_939": "Prefer the explicit successor row for a brand-new app on legacy-only stacks." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L939 | neighbors=[_legacy_successor_guidance()] | lang=en
- "scripts_core_rationale_952": "Search stack-specific guidelines" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/core.py:L952 | neighbors=[search_stack()] | lang=en
- "scripts_design_system_rationale_1077": "Format design system as MASTER.md with hierarchical override logic." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1077 | neighbors=[format_master_md()] | lang=en
- "scripts_design_system_rationale_130": "WCAG relative luminance of a #RRGGBB string, or None if unparseable." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L130 | neighbors=[_relative_luminance()] | lang=en
- "scripts_design_system_rationale_1382": "Format a page-specific override file with intelligent AI-generated content." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1382 | neighbors=[format_page_override_md()] | lang=en
- "scripts_design_system_rationale_148": "True when a colors.csv row's Background is a dark surface." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L148 | neighbors=[_palette_is_dark()] | lang=pt
- "scripts_design_system_rationale_1491": "Generate intelligent overrides based on page type using layered search." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1491 | neighbors=[_generate_intelligent_overrides()] | lang=en
- "scripts_design_system_rationale_154": "WCAG contrast ratio for two hex colors, or None if either is invalid." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L154 | neighbors=[_contrast_ratio()] | lang=en
- "scripts_design_system_rationale_1597": "Detect page type from context and search results." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L1597 | neighbors=[_detect_page_type()] | lang=en
- "scripts_design_system_rationale_165": "True when a styles.csv row describes itself as dark-first." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L165 | neighbors=[_style_is_dark_primary()] | lang=pt
- "scripts_design_system_rationale_181": "True when the query explicitly asks for a dark theme." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L181 | neighbors=[_query_wants_dark()] | lang=en
- "scripts_design_system_rationale_187": "Resolve the mode the rest of the output has to agree with." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L187 | neighbors=[_resolve_color_mode()] | lang=en
- "scripts_design_system_rationale_194": "Keep product brand tokens while deriving accessible dark surfaces." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L194 | neighbors=[_derive_dark_palette()] | lang=en
- "scripts_design_system_rationale_222": "Pick the highest-ranked palette matching the resolved mode.      Only the dark c" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L222 | neighbors=[_select_palette_for_mode()] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-018.json

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
