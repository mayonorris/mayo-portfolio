# Sprint 1 Implementation Audit

Date: 2026-07-11

Scope: repository state compared with `docs/architecture/v1.0/04_SPRINT_1_BACKLOG.md`.

## Summary

- Completed or effectively completed before implementation: repository creation, legacy archive, documentation integration, public-safety notes, `.gitignore`, and `.gitattributes`.
- Implemented during this task: Node and pnpm runtime pinning plus the initial pnpm workspace manifest.
- Current global Sprint 1 status: partial. Foundations have started, but no Next.js app, Quarto projects, token package, content schema, rewrites, or CI exist yet.

## Task Audit

| Task | Status | Evidence in repository | Missing elements | Dependencies | Next recommended action |
|---|---|---|---|---|---|
| S1-01 Create public repository | completed | Git repository on `main`, remote `origin`, README, archived legacy site, integrated docs, `.gitignore`, `.gitattributes`. | README can later be expanded once the app exists. | None. | Continue foundations without recreating archived work. |
| S1-02 Pin runtime | completed | `.nvmrc`, root `package.json` with `packageManager`, `engines`, and `pnpm-lock.yaml`. | None for the pinning baseline. | Node 24 and pnpm 10 policy from blueprint. | Use these pins for all later framework initialization. |
| S1-03 Create pnpm workspace | partial | `pnpm-workspace.yaml` declares `apps/*` and `packages/*`. No nested Git repository found. | Actual workspace packages and app/package directories are not initialized yet. | S1-02. | Create `apps/web` and package workspaces when S1-04 starts. |
| S1-04 Initialize Next.js manually | not_started | `apps/web` does not exist. | App Router, TypeScript strict mode, Tailwind, ESLint, alias, neutral root redirect. | S1-02, S1-03. | Initialize the minimal Next.js app in `apps/web`. |
| S1-05 Initialize Quarto projects | not_started | `apps/knowledge` does not exist. | EN and FR Quarto configs, sample indexes, sample articles, shared SCSS import. | Workspace foundation. | Initialize localized Quarto projects after web foundation or when selected. |
| S1-06 Create token source | not_started | `packages/design-tokens` does not exist. | Semantic `tokens.json` with light and dark values. | Workspace package structure. | Add shared design token source after workspace packages exist. |
| S1-07 Generate CSS and SCSS | not_started | No token generator or generated outputs exist. | Deterministic generator, CSS output, SCSS output, stale-output check. | S1-06. | Implement after token source is added. |
| S1-08 Add locale routing | not_started | No Next.js app exists. | `/`, `/en`, `/fr`, locale rejection, localized metadata. | S1-04. | Add after minimal app exists. |
| S1-09 Add typed dictionaries | not_started | No app dictionary structure exists. | EN and FR interface dictionaries and key-parity guard. | S1-04, S1-08. | Add after locale routing. |
| S1-10 Add Zod schemas | not_started | `packages/content-schema` does not exist. | Project, experience, education, certification, link, status, confidentiality schemas. | Workspace package structure. | Add content schema package. |
| S1-11 Add sample registry | blocked | No schema package exists. | One non-sensitive sample registry and validation entry point. | S1-10. | Wait for content schemas. |
| S1-12 Deploy Quarto test origin | blocked | No Quarto project exists. | Rendered EN and FR static outputs and gated preview workflow. | S1-05. | Wait for Quarto initialization. |
| S1-13 Add rewrites | blocked | No Next.js app or Quarto origin exists. | Rewrites for `/en/research`, `/fr/research`, `/en/writing`, `/fr/writing`. | S1-04, S1-05, S1-12. | Wait for app and Quarto preview origin. |
| S1-14 Configure formatting and linting | not_started | No ESLint, Prettier, or YAML validation config exists. | Root quality scripts and configs. | Package structure. | Configure after package/tool layout is stable. |
| S1-15 Add CI | blocked | No `.github/workflows` validation workflow exists. | Install, token generation, typecheck, lint, web build, Quarto renders. | S1-04, S1-05, S1-07, S1-14. | Add after local checks exist. |

## Implementation Performed

Selected first non-blocked technical task: S1-02 Pin runtime.

Reason: the repository had no Node pin, root package metadata, pnpm pin, or lockfile. This is required before initializing Next.js, Quarto, tokens, or CI.

Additional compatible groundwork: added the initial `pnpm-workspace.yaml` so future Sprint 1 tasks can place packages under the blueprint paths without changing the workspace contract.

## Remaining Immediate Work

Next recommended technical task: S1-04 Initialize Next.js manually in `apps/web`, after confirming whether to create package directories as part of S1-04 or as a dedicated S1-03 completion task.
