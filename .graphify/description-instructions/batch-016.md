# Node Description Batch 17 of 23

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

- "prisma_seed_main": "main()" | kind=code-symbol | source=prisma/seed.ts:L10 | neighbors=[seed.ts] | lang=en
- "prisma_seed_prisma": "prisma" | kind=code-symbol | source=prisma/seed.ts:L4 | neighbors=[seed.ts] | lang=en
- "privacy_page_metadata": "metadata" | kind=code-symbol | source=src/app/(marketing)/privacy/page.tsx:L3 | neighbors=[page.tsx] | lang=en
- "privacy_page_privacypolicypage": "PrivacyPolicyPage()" | kind=code-symbol | source=src/app/(marketing)/privacy/page.tsx:L8 | neighbors=[page.tsx] | lang=en
- "profile_page_profilepage": "ProfilePage()" | kind=code-symbol | source=src/app/(dashboard)/settings/profile/page.tsx:L6 | neighbors=[page.tsx] | lang=en
- "register_page_registerpage": "RegisterPage()" | kind=code-symbol | source=src/app/(auth)/register/page.tsx:L15 | neighbors=[page.tsx] | lang=en
- "register_page_rocketicon": "RocketIcon()" | kind=code-symbol | source=src/app/(auth)/register/page.tsx:L4 | neighbors=[page.tsx] | lang=en
- "scripts_build_open_core_destdir": "destDir" | kind=code-symbol | source=scripts/build-open-core.js:L7 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_excludedpatterns": "excludedPatterns" | kind=code-symbol | source=scripts/build-open-core.js:L21 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_excludedspecificfiles": "excludedSpecificFiles" | kind=code-symbol | source=scripts/build-open-core.js:L37 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_execsync": "{ execSync }" | kind=code-symbol | source=scripts/build-open-core.js:L3 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_fs": "fs" | kind=code-symbol | source=scripts/build-open-core.js:L1 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_overviewpath": "overviewPath" | kind=code-symbol | source=scripts/build-open-core.js:L123 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_path": "path" | kind=code-symbol | source=scripts/build-open-core.js:L2 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_pkg": "pkg" | kind=code-symbol | source=scripts/build-open-core.js:L74 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_pkgpath": "pkgPath" | kind=code-symbol | source=scripts/build-open-core.js:L73 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_setupcontent": "setupContent" | kind=code-symbol | source=scripts/build-open-core.js:L113 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_setuppath": "setupPath" | kind=code-symbol | source=scripts/build-open-core.js:L112 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_sourcedir": "sourceDir" | kind=code-symbol | source=scripts/build-open-core.js:L6 | neighbors=[build-open-core.js] | lang=en
- "scripts_build_open_core_testdeps": "testDeps" | kind=code-symbol | source=scripts/build-open-core.js:L77 | neighbors=[build-open-core.js] | lang=en
- "scripts_capture_screenshots_capture": "capture()" | kind=code-symbol | source=scripts/capture-screenshots.ts:L5 | neighbors=[capture-screenshots.ts] | lang=en
- "scripts_check_users_main": "main()" | kind=code-symbol | source=scripts/check-users.ts:L5 | neighbors=[check-users.ts] | lang=en
- "scripts_check_users_prisma": "prisma" | kind=code-symbol | source=scripts/check-users.ts:L3 | neighbors=[check-users.ts] | lang=en
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

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-016.json

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
