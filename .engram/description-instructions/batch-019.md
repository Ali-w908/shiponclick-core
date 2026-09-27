# Node Description Batch 20 of 24

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

- "scripts_design_system_rationale_247": "Drop \"avoid dark mode\" advice once dark mode is the resolved answer." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L247 | neighbors=[_filter_anti_patterns_for_mode()] | lang=en
- "scripts_design_system_rationale_259": "Generates design system recommendations from aggregated searches." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L259 | neighbors=[DesignSystemGenerator] | lang=en
- "scripts_design_system_rationale_268": "Load reasoning rules from CSV." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L268 | neighbors=[._load_reasoning()] | lang=en
- "scripts_design_system_rationale_321": "Execute searches across multiple domains." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L321 | neighbors=[._multi_domain_search()] | lang=en
- "scripts_design_system_rationale_358": "Find matching reasoning rule for a category." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L358 | neighbors=[._find_reasoning_rule()] | lang=en
- "scripts_design_system_rationale_366": "Apply reasoning rules to search results." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L366 | neighbors=[._apply_reasoning()] | lang=en
- "scripts_design_system_rationale_409": "Select best matching result based on priority keywords." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L409 | neighbors=[._select_best_match()] | lang=en
- "scripts_design_system_rationale_446": "Extract results list from search result dict." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L446 | neighbors=[._extract_results()] | lang=en
- "scripts_design_system_rationale_451": "Generate complete design system recommendation.          variance/motion/density" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L451 | neighbors=[.generate()] | lang=en
- "scripts_design_system_rationale_612": "Convert hex color to ANSI True Color swatch (██) with fallback." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L612 | neighbors=[hex_to_ansi()] | lang=en
- "scripts_design_system_rationale_626": "Like str.ljust but accounts for zero-width ANSI escape sequences." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L626 | neighbors=[ansi_ljust()] | lang=en
- "scripts_design_system_rationale_634": "Create a Unicode section separator: ├─── NAME ───...┤" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L634 | neighbors=[section_header()] | lang=pt
- "scripts_design_system_rationale_641": "Format design system as Unicode box with ANSI color swatches." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L641 | neighbors=[format_ascii_box()] | lang=en
- "scripts_design_system_rationale_792": "Format design system as markdown." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L792 | neighbors=[format_markdown()] | lang=en
- "scripts_design_system_rationale_91": "Bucket a 1-10 dial value into its tier config. Returns None if value is None." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L91 | neighbors=[_resolve_dial()] | lang=en
- "scripts_design_system_rationale_923": "Main entry point for design system generation.      Args:         query: Search" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L923 | neighbors=[generate_design_system()] | lang=en
- "scripts_design_system_rationale_962": "Slugify a name into a single safe path segment.      Only [a-z0-9_-] survives; e" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L962 | neighbors=[safe_slug()] | lang=pt
- "scripts_design_system_rationale_973": "Write fully to a temp file, then publish atomically." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L973 | neighbors=[_write_persisted_file()] | lang=en
- "scripts_design_system_rationale_997": "Persist design system to design-system/<project>/ folder using Master + Override" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/design_system.py:L997 | neighbors=[persist_design_system()] | lang=en
- "scripts_list_variants_listallvariants": "listAllVariants()" | kind=code-symbol | source=scripts/list-variants.ts:L5 | neighbors=[list-variants.ts] | lang=en
- "scripts_migrate_test_variants_main": "main()" | kind=code-symbol | source=scripts/migrate-test-variants.ts:L5 | neighbors=[migrate-test-variants.ts] | lang=en
- "scripts_migrate_test_variants_prisma": "prisma" | kind=code-symbol | source=scripts/migrate-test-variants.ts:L3 | neighbors=[migrate-test-variants.ts] | lang=en
- "scripts_reasoning_contract_object_without_duplicates": "_object_without_duplicates()" | kind=code-symbol | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L58 | neighbors=[reasoning_contract.py] | lang=en
- "scripts_reasoning_contract_rationale_102": "Return deterministic mutations and an audit trail; never execute data." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L102 | neighbors=[apply_decision_rules()] | lang=en
- "scripts_reasoning_contract_rationale_68": "Parse the canonical condition -> action-array representation." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/reasoning_contract.py:L68 | neighbors=[parse_decision_rules()] | lang=en
- "scripts_search_rationale_45": "Format results for Claude consumption (token-optimized)" | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/search.py:L45 | neighbors=[format_output()] | lang=en
- "scripts_setup_colors": "colors" | kind=code-symbol | source=scripts/setup.js:L6 | neighbors=[setup.js] | lang=en
- "scripts_setup_execsync": "{ execSync }" | kind=code-symbol | source=scripts/setup.js:L3 | neighbors=[setup.js] | lang=en
- "scripts_setup_fs": "fs" | kind=code-symbol | source=scripts/setup.js:L1 | neighbors=[setup.js] | lang=en
- "scripts_setup_main": "main()" | kind=code-symbol | source=scripts/setup.js:L18 | neighbors=[setup.js] | lang=en
- "scripts_setup_path": "path" | kind=code-symbol | source=scripts/setup.js:L2 | neighbors=[setup.js] | lang=en
- "scripts_test_ls_checkout_testcheckout": "testCheckout()" | kind=code-symbol | source=scripts/test-ls-checkout.ts:L5 | neighbors=[test-ls-checkout.ts] | lang=en
- "scripts_validate_data_rationale_1000": "Return every semantic data problem without terminating the process." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L1000 | neighbors=[validate()] | lang=en
- "scripts_validate_data_rationale_158": "Return WCAG contrast for two opaque six-digit sRGB colors." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L158 | neighbors=[contrast_ratio()] | lang=en
- "scripts_validate_data_rationale_802": "Validate curated-stack applicability and official high-impact sources." | kind=entity | source=.agents/skills/ui-ux-pro-max/scripts/validate_data.py:L802 | neighbors=[_check_stack_freshness_contract()] | lang=en
- "scripts_wait_for_port_client": "client" | kind=code-symbol | source=scripts/wait-for-port.js:L4 | neighbors=[wait-for-port.js] | lang=en
- "scripts_wait_for_port_net": "net" | kind=code-symbol | source=scripts/wait-for-port.js:L3 | neighbors=[wait-for-port.js] | lang=en
- "scripts_wait_for_port_start": "start" | kind=code-symbol | source=scripts/wait-for-port.js:L5 | neighbors=[wait-for-port.js] | lang=en
- "scripts_wait_for_port_tryconnect": "tryConnect()" | kind=code-symbol | source=scripts/wait-for-port.js:L7 | neighbors=[wait-for-port.js] | lang=en
- "security_input_validation_test_constructor": "constructor()" | kind=code-symbol | source=tests/security/input-validation.test.ts:L35 | neighbors=[input-validation.test.ts] | lang=en

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.engram\description-instructions\batch-019.json

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
