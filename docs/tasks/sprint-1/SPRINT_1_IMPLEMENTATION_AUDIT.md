# Sprint 1 Implementation Audit

Date: 2026-07-12

Scope: repository state compared with `docs/architecture/v1.0/04_SPRINT_1_BACKLOG.md`.

## Summary

- Completed before development start: repository creation, legacy archive, documentation integration, public-safety notes, `.gitignore`, and `.gitattributes`.
- Completed during Sprint 1 foundation work: Node and pnpm runtime pinning, root package metadata, initial pnpm workspace manifest, minimal Next.js web application, locale routing, and the first Editorial Intelligence visual foundation.
- Current global Sprint 1 status: partial. The web foundation now has bilingual routing, a shared editorial shell, CSS design tokens, light/dark themes, navigation, footer, and a provisional analytical hero. Quarto projects, the official shared design-token package, content schemas, rewrites, full formatting policy, and CI do not exist yet.

## Task Audit

| Task | Status | Evidence in repository | Missing elements | Dependencies | Next recommended action |
|---|---|---|---|---|---|
| S1-01 Create public repository | completed | Git repository on `main`, remote `origin`, README, archived legacy site, integrated docs, `.gitignore`, `.gitattributes`. | README can later be expanded once the app exists. | None. | Continue foundations without recreating archived work. |
| S1-02 Pin runtime | completed | `.nvmrc`, root `package.json` with `packageManager`, `engines`, and `pnpm-lock.yaml`; active toolchain verified with Node 24 and pnpm 11.2.0. | None for the pinning baseline. | Node 24 and pnpm policy from blueprint. | Use these pins for all later framework initialization. |
| S1-03 Create pnpm workspace | partial | `pnpm-workspace.yaml` declares `apps/*` and `packages/*`; root scripts target the web workspace; pnpm discovers the root and `apps/web`; no nested Git repository found. | Shared package workspaces such as `packages/design-tokens` and `packages/content-schema` are not initialized yet. | S1-02. | Create package workspaces when their Sprint tasks start. |
| S1-04 Initialize Next.js manually | completed | `apps/web` exists with App Router, TypeScript strict mode, Tailwind CSS, ESLint, alias `@/*`, neutral technical page, and no nested Git repository. `pnpm --filter web lint`, `typecheck`, and `build` pass. | Final locale routing, navigation, portfolio sections, and production design are intentionally out of scope. | S1-02, S1-03. | Proceed to the next non-blocked Sprint 1 task. |
| S1-05 Initialize Quarto projects | not_started | `apps/knowledge` does not exist. | EN and FR Quarto configs, sample indexes, sample articles, shared SCSS import. | Workspace foundation. | Initialize localized Quarto projects when selected. |
| S1-06 Create token source | partial | `apps/web/app/globals.css` contains centralized CSS variables for the current web visual foundation, aligned with the reference drafts. | Official `packages/design-tokens/src/tokens.json` source, package scaffolding, and cross-engine token ownership are still missing. | Workspace package structure. | Promote the CSS token baseline into the shared design-token package when S1-06 formally starts. |
| S1-07 Generate CSS and SCSS | not_started | No token generator or generated outputs exist. | Deterministic generator, CSS output, SCSS output, stale-output check. | S1-06. | Implement after token source is added. |
| S1-08 Add locale routing | completed | `apps/web/app/[locale]` renders /en and /fr; `apps/web/proxy.ts` redirects / to /en; unsupported locales return 404; document language and metadata are locale-aware; language switcher links equivalent locale routes. | Future nested route mapping will be needed as sections are added. | S1-04. | Continue with downstream bilingual interface work. |
| S1-09 Add typed dictionaries | partial | Typed dictionaries now cover metadata, shell labels, primary navigation, language switcher, theme toggle, and provisional hero copy. | Explicit key-parity guard and full future interface coverage are not implemented yet. | S1-04, S1-08. | Formalize dictionary parity and shared interface labels. |
| S1-10 Add Zod schemas | not_started | `packages/content-schema` does not exist. | Project, experience, education, certification, link, status, confidentiality schemas. | Workspace package structure. | Add content schema package. |
| S1-11 Add sample registry | blocked | No schema package exists. | One non-sensitive sample registry and validation entry point. | S1-10. | Wait for content schemas. |
| S1-12 Deploy Quarto test origin | blocked | No Quarto project exists. | Rendered EN and FR static outputs and gated preview workflow. | S1-05. | Wait for Quarto initialization. |
| S1-13 Add rewrites | blocked | Locale routing exists, but no Quarto origin exists. | Rewrites for `/en/research`, `/fr/research`, `/en/writing`, `/fr/writing`. | S1-04, S1-05, S1-12. | Wait for locale routing and Quarto preview origin. |
| S1-14 Configure formatting and linting | partial | `apps/web` has ESLint and a root `lint` script delegates to the web workspace. | Repository-wide Prettier, Markdown/JSON/YAML checks, and formatting scripts are not configured. | Package structure. | Configure full repository quality policy later in Sprint 1. |
| S1-15 Add CI | blocked | No `.github/workflows` validation workflow exists. | Install, token generation, typecheck, lint, web build, Quarto renders. | S1-04, S1-05, S1-07, S1-14. | Add after local checks exist. |

## Implementation Performed

Latest selected task: Final visual QA for the Sprint 1 Editorial Intelligence foundation.

Previous selected visual task: Sprint 1 Editorial Visual Foundation.

Previous selected tasks: S1-08 Add bilingual locale routing; S1-04 Initialize Next.js manually.

Implementation details:

- Created a centralized CSS token layer in `apps/web/app/globals.css` for colors, typography roles, type scale, spacing, radii, borders, shadows, container widths, transitions, and z-index essentials.
- Configured the approved typography roles through CSS font stacks: Hanken Grotesk for interface and body, Source Serif 4 for editorial headings, and IBM Plex Mono for labels and metadata. No font binaries or network font loading were added.
- Refactored the shared application shell with header, primary navigation, language switcher, accessible theme toggle, main landmark, skip link, and minimal footer.
- Added base UI components: `Container`, `Section`, `Eyebrow`, `LinkButton`, `Surface`, `Divider`, `MainNavigation`, `ThemeToggle`, and `AnalyticalPreview`.
- Replaced the routing scaffold page with the approved provisional bilingual hero copy and an abstract analytical preview that contains no real data, professional facts, portrait, CV, projects, legacy content, or vault content.
- Preserved `/en`, `/fr`, root redirect behavior, typed dictionaries, and locale-aware metadata.
- Placeholder navigation links point to future locale-prefixed routes and may render the framework 404 until those pages are implemented.

## Validation Results

- `pnpm.cmd install`: passed; workspace already up to date.
- `pnpm.cmd --filter web lint`: passed.
- `pnpm.cmd --filter web typecheck`: passed.
- `pnpm.cmd --filter web build`: passed.
- `git diff --check`: passed.
- No new dependency, `.env` file, font binary, vault content, real professional content, legacy content, or prototype file change was introduced.

## Remaining Immediate Work

Next recommended technical task: S1-06 Promote the current CSS token baseline into the official shared design-token package, or S1-09 formalize dictionary key parity if interface text governance should come first.
