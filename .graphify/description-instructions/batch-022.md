# Node Description Batch 23 of 23

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

- "ui_register_form_registerbutton": "RegisterButton()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L129 | neighbors=[register-form.tsx]
- "ui_register_form_registerform": "RegisterForm()" | kind=code-symbol | source=src/components/ui/register-form.tsx:L27 | neighbors=[register-form.tsx]
- "webhooks_helpers_test_getcustomerid": "getCustomerId()" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L18 | neighbors=[helpers.test.ts]
- "webhooks_helpers_test_getsubscriptionid": "getSubscriptionId()" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L12 | neighbors=[helpers.test.ts]
- "webhooks_helpers_test_mapstripestatus": "mapStripeStatus()" | kind=code-symbol | source=tests/unit/webhooks/helpers.test.ts:L24 | neighbors=[helpers.test.ts]

## Instructions

Write a single JSON object mapping each node id to a one-sentence description
to: D:\SoftwareForSale\Next_js-SaaS-Starter-Kit\app\.graphify\description-instructions\batch-022.json

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
