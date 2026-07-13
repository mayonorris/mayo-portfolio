# Sprint 1 Implementation Audit

Date: 2026-07-13

Scope: repository state compared with `docs/architecture/v1.0/04_SPRINT_1_BACKLOG.md` and the official Sprint 1 task sequence.

## Summary

- Completed before development start: repository creation, legacy archive, documentation integration, public-safety notes, `.gitignore`, and `.gitattributes`.
- Completed during Sprint 1 foundation work: Node and pnpm runtime pinning, root package metadata, pnpm workspace manifest, initial Next.js web application, bilingual locale routing, typed shell dictionaries, Editorial Intelligence visual foundation, public homepage MVP, and Home realignment to Design Reference 1.0.
- Current global Sprint 1 status: partial. The web foundation now has bilingual routing, a compact editorial shell, CSS design tokens, light/dark themes, locale-aware routes, a Design Reference 1.0-aligned Home, selected-work case placeholders, and a dedicated Experience/Parcours route. Quarto projects, the official shared design-token package, content schemas, rewrites, full formatting policy, and CI do not exist yet.

## Task Audit

| Task | Status | Evidence in repository | Missing elements | Dependencies | Next recommended action |
|---|---|---|---|---|---|
| S1-01 Create public repository | completed | Git repository on `main`, remote `origin`, README, archived legacy site, integrated docs, `.gitignore`, `.gitattributes`. | README can later be expanded once deployment details exist. | None. | Continue foundations without recreating archived work. |
| S1-02 Pin runtime | completed | `.nvmrc`, root `package.json` with `packageManager`, `engines`, and `pnpm-lock.yaml`; active toolchain verified with Node 24 and pnpm 11.2.0. | None for the pinning baseline. | Node 24 and pnpm policy from blueprint. | Use these pins for all later framework work. |
| S1-03 Create pnpm workspace | partial | `pnpm-workspace.yaml` declares `apps/*` and `packages/*`; root scripts target the web workspace; pnpm discovers the root and `apps/web`; no nested Git repository found. | Shared package workspaces such as `packages/design-tokens` and `packages/content-schema` are not initialized yet. | S1-02. | Create package workspaces when their Sprint tasks start. |
| S1-04 Initialize Next.js manually | completed | `apps/web` exists with App Router, TypeScript strict mode, Tailwind CSS, ESLint, alias `@/*`, neutral technical baseline, and no nested Git repository. | Production deployment wiring remains out of scope. | S1-02, S1-03. | Continue downstream web tasks. |
| S1-05 Initialize Quarto projects | not_started | `apps/knowledge` does not exist. | EN and FR Quarto configs, sample indexes, sample articles, shared SCSS import. | Workspace foundation. | Initialize localized Quarto projects when selected. |
| S1-06 Create token source | partial | `apps/web/app/globals.css` contains centralized CSS variables and the current visual token baseline. | Official `packages/design-tokens/src/tokens.json` source, package scaffolding, and cross-engine token ownership are still missing. | Workspace package structure. | Promote the CSS token baseline into the shared design-token package when S1-06 formally starts. |
| S1-07 Generate CSS and SCSS | not_started | No token generator or generated outputs exist. | Deterministic generator, CSS output, SCSS output, stale-output check. | S1-06. | Implement after token source is added. |
| S1-08 Add locale routing | completed | `apps/web/app/[locale]` renders `/en` and `/fr`; `apps/web/proxy.ts` redirects `/` to `/en`; unsupported locales return 404; document language and metadata are locale-aware; language switcher maps equivalent localized paths. | Future Quarto rewrites are not present. | S1-04. | Continue with content and routing governance. |
| S1-09 Add typed dictionaries | partial | Typed dictionaries cover metadata, shell labels, footer labels, language switcher, theme toggle, and localized navigation. Home content is centralized in typed registries. | Explicit key-parity guard and full future interface coverage are not implemented yet. | S1-04, S1-08. | Formalize dictionary parity and shared interface labels. |
| S1-10 Add Zod schemas | not_started | `packages/content-schema` does not exist. | Project, experience, education, certification, link, status, confidentiality schemas. | Workspace package structure. | Add content schema package. |
| S1-11 Add sample registry | blocked | No schema package exists. | One non-sensitive sample registry and validation entry point. | S1-10. | Wait for content schemas. |
| S1-12 Deploy Quarto test origin | blocked | No Quarto project exists. | Rendered EN and FR static outputs and gated preview workflow. | S1-05. | Wait for Quarto initialization. |
| S1-13 Add rewrites | blocked | Locale routing exists, but no Quarto origin exists. | Rewrites for research and writing origins once Quarto is available. | S1-04, S1-05, S1-12. | Wait for locale routing and Quarto preview origin. |
| S1-14 Configure formatting and linting | partial | `apps/web` has ESLint and root scripts delegate to the web workspace; `git diff --check` is used locally. | Repository-wide Prettier, Markdown/JSON/YAML checks, and formatting scripts are not configured. | Package structure. | Configure full repository quality policy later in Sprint 1. |
| S1-15 Add CI | blocked | No `.github/workflows` validation workflow exists. | Install, token generation, typecheck, lint, web build, Quarto renders. | S1-04, S1-05, S1-07, S1-14. | Add after local checks exist. |

## Implementation Performed

Latest selected task: Home realignment to Design Reference 1.0 and prototype V3 structure, without copying prototype routes or unvalidated prototype text.

Previous selected tasks: public homepage MVP, Editorial Visual Foundation, S1-08 bilingual locale routing, and S1-04 Next.js initialization.

Implementation details:

- Replaced the homepage composition with the Design Reference 1.0 sequence: value proposition hero, interactive method module, practice at a glance, selected work, capabilities, research/writing, concise about, contact, and public footer.
- Removed the detailed experience list from the Home and kept experience details on the dedicated Experience/Parcours route.
- Added selected-work case placeholder routes under `/en/work/[slug]` and `/fr/projets/[slug]` for the four approved structural case entries.
- Added a keyboard-accessible method module using React state and native range input; no dependency, empirical result, or private data was introduced.
- Expanded typed public content registries in `apps/web/content/home.ts` and kept profile facts separated in `apps/web/content/public-profile.ts`.
- Updated localized route helpers for English and French slugs: Work/Projets, Research/Recherche, Writing/Publications, About/À propos, Experience/Parcours, and Contact.
- Preserved `/en`, `/fr`, root redirect behavior, light/dark themes, the Editorial Intelligence visual direction, and the existing Next.js App Router foundation.
- No vault content, portrait, CV, diploma, certificate, private contact details, legacy content, prototype content, unsupported metric, unsupported client logo, or new dependency was introduced.

## Validation Results

- `pnpm.cmd install`: passed; workspace already up to date with pnpm 11.2.0.
- `pnpm.cmd --filter web lint`: passed.
- `pnpm.cmd --filter web typecheck`: passed.
- `pnpm.cmd --filter web build`: passed; 25 static pages generated including localized case routes.
- `git diff --check`: passed.
- Local route checks: `/en`, `/fr`, Work/Projets, Research/Recherche, Writing/Publications, About/À propos, Experience/Parcours, Contact, and representative case routes returned 200.
- Local responsive QA through Chrome DevTools covered `/en` and `/fr`, light and dark themes, 1920 px, 1440 px, 1366 px, tablet, and mobile. Checks passed for single H1, no horizontal overflow, no visible Next.js error overlay, footer presence, selected-work cards, capability cards, method interaction, language links, and theme toggle.

## Content Sprint Update - 2026-07-13

Selected task: About, Experience and Work public-content pass.

Implementation details:

- Added typed public-content registries for About, Experience, Work and external project links.
- Implemented the About page with the approved editorial heading, serif statement, abstract monogram frame, four concise long-form sections and CTA row.
- Restricted the Experience page to the five explicitly validated entries: EM² Data & AI Lab, INSEED / PHASAO, INSEED national accounts and forecasting, Directorate-General for Economic Affairs in Benin, and Office Data Science.
- Kept excluded items out of the public timeline: Ministry of Justice assignment, teaching experience, BCEAO or other consulting, unverified institutions, and any content awaiting confirmation.
- Preserved the four flagship Work cases and added locale-aware live links for EM² Data & AI Lab without replacing internal case routes.
- Added the Currency Converter as a secondary live utility build after the flagship Work cases.
- Kept the header CTA on Experience / Parcours and did not add a CV button because no public CV asset is approved in the repository.
- Removed visible internal-review wording from the updated public pages.

Validation results:

- `pnpm.cmd install`: passed; workspace already up to date with pnpm 11.2.0.
- `pnpm.cmd --filter web lint`: passed.
- `pnpm.cmd --filter web typecheck`: passed.
- `pnpm.cmd --filter web build`: passed; 25 static pages generated including localized case routes.
- `git diff --check`: passed.
- Local preview QA covered /en/about, /fr/a-propos, /en/experience, /fr/parcours, /en/work and /fr/projets at 1920 px, 1440 px, 1366 px, tablet and mobile widths, in light and dark themes. Checks passed for one h1 per page, no horizontal overflow, footer/header presence, four Work cards, five Experience entries, four About sections, safe external-link attributes, and no visible internal wording.

## Content Sprint V2 Update - 2026-07-13

Selected task: Research, Writing and Contact public-content pass V2.

Implementation details:

- Added typed bilingual registries for Research, Writing and Contact content.
- Completed `/en/research` and `/fr/recherche` with four applied-research entries and no unsupported metrics, venues, DOI or publication claims.
- Completed `/en/writing` and `/fr/publications` with four planned technical or methodological note entries, using preparation status only.
- Completed `/en/contact` and `/fr/contact` with the validated two-column composition: editorial content and direct public links on the left, large form card on the right.
- Implemented the contact form as a no-backend LinkedIn message helper with client-side validation, clipboard preparation and no simulated message delivery.
- Preserved approved public channels only: GitHub, LinkedIn and localized EM² Data & AI Lab links.
- Applied the compact global shell controls: EN | FR segmented language switcher, icon-only theme button, and Experience / Parcours CTA.
- Connected homepage Research and Writing preview cards to the new typed registries.
- Removed visible public-facing review language from the new routes.

Validation results:

- `pnpm.cmd --filter web typecheck`: passed.
- `pnpm.cmd --filter web lint`: passed.
- `pnpm.cmd --filter web build`: passed; 25 static pages generated including localized section and case routes.
- `git diff --check`: passed.
- Local HTTP QA on `http://localhost:3000` returned 200 for `/en`, `/fr`, Research/Recherche, Writing/Publications, Contact, Work/Projets, About/À propos, Experience/Parcours and all four localized case-study routes.
- Visible-text checks found no public occurrences of placeholder, draft, candidate, validation, internal, publication readiness, content to confirm, prototype, preview form states, or unapproved contact placeholders.
- Contact route checks confirmed the four form fields, localized reason options, direct public channel links, and no Send message / Envoyer wording.

Operational note:

- `pnpm.cmd install` had already passed as up to date during the interrupted V2 run. After reboot, the rerun was not executed because the approval gate treated it as a potential network operation.

## Remaining Immediate Work

Next recommended technical task: S1-09 formalize dictionary key parity and interface text governance, or S1-06 promote the current CSS token baseline into the official shared design-token package.
