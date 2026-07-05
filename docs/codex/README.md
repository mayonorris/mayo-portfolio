# Mayo Portfolio - Codex Implementation Kit

Version: 1.0
Purpose: Pilot the implementation of the Mayo T. N. Kadanga portfolio with Codex
Design reference: `Mayo Kadanga Portfolio_new.dc.html`
Technical reference: `Mayo_Portfolio_Technical_Implementation_Pack_v1`

## Contents

- `AGENTS.md`: durable repository rules
- `apps/web/AGENTS.md`: Next.js rules
- `apps/knowledge/AGENTS.md`: Quarto rules
- `.codex/config.toml`: conservative project settings
- `docs/codex/00_START_PROMPT.md`: first prompt to run
- `docs/codex/01_WORKFLOW.md`: operating workflow
- `docs/codex/02_REVIEW_PROMPT.md`: independent review prompt
- `docs/codex/03_CORRECTION_PROMPT.md`: targeted correction prompt
- `docs/codex/04_SPRINT_1_PROMPT_BOOK.md`: one bounded prompt per Sprint 1 task
- `docs/codex/05_HUMAN_REVIEW_CHECKLIST.md`: acceptance checklist

## Operating principle

Codex must implement one bounded task at a time. It must not copy the Claude Design HTML into production and must not build the entire portfolio in one request.
