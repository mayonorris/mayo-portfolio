# Project Index

This index is the entry point for the Mayo portfolio documentation. It explains what each document family is for, which sources are authoritative, and how Codex should consult the repository without loading every file for every task.

## Portfolio Purpose

The portfolio is a public professional platform for Mayo Takemsi Norris Kadanga. It should present statistical, economic, data product, software, research, writing, and advisory work through a polished bilingual web experience and a clearly separated knowledge/research publishing layer.

## Documentation Families

- `docs/product/v0.1/`: product vision, PRD, personas, content model, UX strategy, UI direction, roadmap, risks, and open questions.
- `docs/design-reference/v1.0/`: active visual reference, including the V3 prototype.
- `docs/architecture/v1.0/`: approved implementation blueprint, architectural decisions, route/content matrix, Sprint 1 backlog, conventions, acceptance checklist, and official references.
- `docs/architecture/v1.0/reference-drafts/`: technical examples and draft assets that are references only, not active application code.
- `docs/codex/`: Codex operating guidance, prompts, procedures, checklists, and future AGENTS.md templates.
- `docs/tasks/sprint-1/`: Sprint 1 execution prompts and task material.
- `legacy/static-site-v1/`: archived first static portfolio.

## Folder Roles

- `docs/product/v0.1/` defines the intended product and audience.
- `docs/design-reference/v1.0/` defines the active visual direction.
- `docs/architecture/v1.0/` defines the approved technical direction.
- `docs/architecture/v1.0/reference-drafts/` stores examples that may guide implementation but must not be treated as active source code.
- `docs/codex/` defines how Codex should work in this repository.
- `docs/tasks/sprint-1/` stores bounded Sprint 1 prompts and tasks.
- `legacy/static-site-v1/` preserves historical context only.

## Source Authority Order

1. Approved task currently in progress.
2. Applicable `AGENTS.md`.
3. Technical Implementation Blueprint V1.
4. Architecture Decision Records.
5. Design Reference 1.0 and prototype V3.
6. PRD and product documentation.
7. Drafts and technical examples.
8. Legacy static site.

## Active Documents

- `AGENTS.md`
- `.codex/config.toml`
- `docs/00_PROJECT_INDEX.md`
- `docs/01_CURRENT_STATE.md`
- `docs/architecture/v1.0/README.md`
- `docs/architecture/v1.0/01_TECHNICAL_IMPLEMENTATION_BLUEPRINT.md`
- `docs/architecture/v1.0/02_ARCHITECTURE_DECISION_RECORDS.md`
- `docs/architecture/v1.0/03_ROUTE_CONTENT_MATRIX.md`
- `docs/architecture/v1.0/04_SPRINT_1_BACKLOG.md`
- `docs/architecture/v1.0/05_REPOSITORY_CONVENTIONS.md`
- `docs/architecture/v1.0/06_ACCEPTANCE_CHECKLIST.md`
- `docs/design-reference/v1.0/DESIGN_REFERENCE.md`
- `docs/design-reference/v1.0/prototype/Mayo-Kadanga-Portfolio-v3.dc.html`
- `docs/product/v0.1/02_PRD.md`
- `docs/codex/README.md`

## Reference-Only Documents

- `docs/architecture/v1.0/reference-drafts/`
- `docs/architecture/v1.0/INITIALIZATION_COMMANDS.md`
- `docs/architecture/v1.0/OFFICIAL_REFERENCES.md`
- `docs/product/v0.1/`
- `docs/codex/prompts/`
- `docs/codex/procedures/`
- `docs/codex/templates/`
- `docs/tasks/sprint-1/`

## Archived Documents

- `legacy/static-site-v1/`: original static HTML/CSS/JavaScript portfolio.

## Do Not Load Systematically

Codex must not read the full documentation set at the start of every task. Load only the documents that match the current task scope, then add specific references when a conflict, implementation decision, or acceptance criterion requires them.

Avoid loading these by default:

- Full product pack in `docs/product/v0.1/`
- Prototype HTML in `docs/design-reference/v1.0/prototype/`
- Draft examples in `docs/architecture/v1.0/reference-drafts/`
- Legacy static site files

## Codex Consultation Rules

1. Start with the approved task and applicable `AGENTS.md`.
2. For repository setup, architecture, routing, or implementation tasks, read the blueprint and ADRs first.
3. For visual, interaction, layout, or brand decisions, read the design reference and inspect the V3 prototype.
4. For product scope or content questions, read the PRD and the relevant product document only.
5. For prompt execution, use `docs/codex/` and the relevant Sprint 1 task file.
6. Treat reference drafts as examples, not source files to activate automatically.
7. Treat the legacy static site as archived context, not the target architecture.

## Contradiction Rules

When documents disagree, follow the authority order above. Do not silently merge conflicting instructions. Report the contradiction, identify the higher-authority source, and apply the higher-authority instruction only within the current approved task.