# Sprint 1 Implementation Audit

Date: 2026-07-11

Scope: repository state compared with `docs/architecture/v1.0/04_SPRINT_1_BACKLOG.md`.

## Summary

- Completed before development start: repository creation, legacy archive, documentation integration, public-safety notes, `.gitignore`, and `.gitattributes`.
- Completed during Sprint 1 foundation work: Node and pnpm runtime pinning, root package metadata, initial pnpm workspace manifest, and the minimal Next.js web application.
- Current global Sprint 1 status: partial. The web foundation exists and validates, but Quarto projects, design tokens, content schemas, locale routing, rewrites, full formatting policy, and CI do not exist yet.

## Task Audit

| Task | Status | Evidence in repository | Missing elements | Dependencies | Next recommended action |
|---|---|---|---|---|---|
| S1-01 Create public repository | completed | Git repository on `main`, remote `origin`, README, archived legacy site, integrated docs, `.gitignore`, `.gitattributes`. | README can later be expanded once the app exists. | None. | Continue foundations without recreating archived work. |
| S1-02 Pin runtime | completed | `.nvmrc`, root `package.json` with `packageManager`, `engines`, and `pnpm-lock.yaml`; active toolchain verified with Node 24 and pnpm 11.2.0. | None for the pinning baseline. | Node 24 and pnpm policy from blueprint. | Use these pins for all later framework initialization. |
| S1-03 Create pnpm workspace | partial | `pnpm-workspace.yaml` declares `apps/*` and `packages/*`; root scripts target the web workspace; pnpm discovers the root and `apps/web`; no nested Git repository found. | Shared package workspaces such as `packages/design-tokens` and `packages/content-schema` are not initialized yet. | S1-02. | Create package workspaces when their Sprint tasks start. |
| S1-04 Initialize Next.js manually | completed | `apps/web` exists with App Router, TypeScript strict mode, Tailwind CSS, ESLint, alias `@/*`, neutral technical page, and no nested Git repository. `pnpm --filter web lint`, `typecheck`, and `build` pass. | Final locale routing, navigation, portfolio sections, and production design are intentionally out of scope. | S1-02, S1-03. | Proceed to the next non-blocked Sprint 1 task. |
| S1-05 Initialize Quarto projects | not_started | `apps/knowledge` does not exist. | EN and FR Quarto configs, sample indexes, sample articles, shared SCSS import. | Workspace foundation. | Initialize localized Quarto projects when selected. |
| S1-06 Create token source | not_started | `packages/design-tokens` does not exist. | Semantic `tokens.json` with light and dark values. | Workspace package structure. | Add shared design token source after package workspace creation. |
| S1-07 Generate CSS and SCSS | not_started | No token generator or generated outputs exist. | Deterministic generator, CSS output, SCSS output, stale-output check. | S1-06. | Implement after token source is added. |
| S1-08 Add locale routing | not_started | The current app only exposes the root scaffold page. | `/`, `/en`, `/fr`, locale rejection, localized metadata. | S1-04. | Add locale routing foundation. |
| S1-09 Add typed dictionaries | not_started | No app dictionary structure exists. | EN and FR interface dictionaries and key-parity guard. | S1-04, S1-08. | Add after locale routing. |
| S1-10 Add Zod schemas | not_started | `packages/content-schema` does not exist. | Project, experience, education, certification, link, status, confidentiality schemas. | Workspace package structure. | Add content schema package. |
| S1-11 Add sample registry | blocked | No schema package exists. | One non-sensitive sample registry and validation entry point. | S1-10. | Wait for content schemas. |
| S1-12 Deploy Quarto test origin | blocked | No Quarto project exists. | Rendered EN and FR static outputs and gated preview workflow. | S1-05. | Wait for Quarto initialization. |
| S1-13 Add rewrites | blocked | No Quarto origin exists and locale routing is not yet implemented. | Rewrites for `/en/research`, `/fr/research`, `/en/writing`, `/fr/writing`. | S1-04, S1-05, S1-12. | Wait for locale routing and Quarto preview origin. |
| S1-14 Configure formatting and linting | partial | `apps/web` has ESLint and a root `lint` script delegates to the web workspace. | Repository-wide Prettier, Markdown/JSON/YAML checks, and formatting scripts are not configured. | Package structure. | Configure full repository quality policy later in Sprint 1. |
| S1-15 Add CI | blocked | No `.github/workflows` validation workflow exists. | Install, token generation, typecheck, lint, web build, Quarto renders. | S1-04, S1-05, S1-07, S1-14. | Add after local checks exist. |

## Implementation Performed

Selected task: S1-04 Initialize Next.js manually.

Implementation details:

- Created `apps/web` with `create-next-app` using pnpm, App Router, TypeScript, Tailwind CSS, ESLint, alias `@/*`, no `src` directory, no nested Git repository, and skipped installation until the root workspace install step.
- Removed generated demo and boilerplate files that were not appropriate for the monorepo.
- Added a neutral technical scaffold page without portfolio content, personal data, legacy content, vault content, or prototype content.
- Added root scripts for web development, lint, typecheck, and build.
- Updated the workspace pnpm build-script policy for `sharp` and `unrs-resolver` so installs remain explicit and non-interactive.

## Validation Results

- `pnpm.cmd install`: passed after explicit pnpm build-script policy was set.
- `pnpm.cmd --filter web lint`: passed.
- `pnpm.cmd --filter web typecheck`: passed.
- `pnpm.cmd --filter web build`: passed.
- `git diff --check`: passed.
- No nested Git repository was found under `apps`.
- No `.env`, private key, or obvious secret file was found outside ignored build and dependency folders.

## Remaining Immediate Work

Next recommended technical task: S1-05 Initialize Quarto EN and FR projects, or S1-08 Add locale routing if the web route foundation should be completed before Quarto.
