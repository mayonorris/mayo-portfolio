# Technical Implementation Blueprint

Version: 1.0
Status: Approved for Sprint 1
Design reference: Claude Design V3
Product owner: Mayo T. N. Kadanga

## 1. Implementation objective

Build a bilingual professional proof system that presents Mayo's integrated practice across economics, statistics, econometrics, data science, institutional work, research and software development.

The implementation must preserve the validated Editorial Intelligence design while replacing prototype-only behaviors with production architecture.

The production website must provide:

- stable and shareable URLs;
- semantic navigation;
- localized metadata;
- typed and validated content;
- maintainable case studies;
- reproducible Quarto publishing;
- coherent visual identity across both engines;
- accessibility and performance as first-class requirements;
- public development history through a clean Git repository.

## 2. Scope boundary

### Next.js owns

- `/en` and `/fr` homepages;
- Work indexes;
- professional case studies;
- About;
- Experience;
- online CV;
- Contact;
- theme and language controls;
- portrait integration;
- signature analytical interaction;
- SEO metadata for portfolio pages;
- structured data for the person and profile;
- contact form backend when implemented.

### Quarto owns

- Research indexes;
- Writing indexes;
- research articles;
- technical notes;
- equations;
- citations and bibliography;
- R and Python output;
- article search;
- RSS;
- code blocks and downloadable analytical assets.

### Explicit exclusions from Version 1

- full CMS;
- user accounts;
- comments;
- AI assistant;
- global search across both engines;
- large WebGL or 3D experience;
- client portal;
- newsletter;
- public display of confidential institutional data.

## 3. Runtime and toolchain

### Required baseline

- Node.js 24 LTS
- pnpm workspace
- Next.js App Router
- React
- TypeScript strict mode
- Tailwind CSS with CSS variables
- Quarto CLI
- R and Python environments only where an article needs execution
- GitHub Actions
- Vercel for the Next.js application
- static hosting for Quarto output
- Vercel external rewrites for unified public paths

### Version policy

- Pin the Node major in `.nvmrc`.
- Pin pnpm through the root `packageManager` field.
- Commit `pnpm-lock.yaml`.
- Pin Quarto in CI.
- Use `renv.lock` for R articles that execute code.
- Use `requirements.txt` or a locked Python environment for Python articles.
- Avoid unpinned production dependencies.

## 4. Monorepo architecture

```text
mayo-portfolio/
├── apps/
│   ├── web/
│   │   ├── app/
│   │   │   ├── [locale]/
│   │   │   │   ├── page.tsx
│   │   │   │   ├── work/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── [slug]/page.tsx
│   │   │   │   ├── about/page.tsx
│   │   │   │   ├── experience/page.tsx
│   │   │   │   ├── cv/page.tsx
│   │   │   │   ├── contact/page.tsx
│   │   │   │   ├── layout.tsx
│   │   │   │   └── not-found.tsx
│   │   │   ├── api/
│   │   │   └── robots.ts
│   │   ├── components/
│   │   ├── content/
│   │   │   ├── case-studies/en/
│   │   │   ├── case-studies/fr/
│   │   │   ├── profile/
│   │   │   └── dictionaries/
│   │   ├── lib/
│   │   ├── public/
│   │   ├── styles/
│   │   ├── tests/
│   │   └── package.json
│   └── knowledge/
│       ├── en/
│       │   ├── _quarto.yml
│       │   ├── research/
│       │   ├── writing/
│       │   └── styles.scss
│       ├── fr/
│       │   ├── _quarto.yml
│       │   ├── research/
│       │   ├── writing/
│       │   └── styles.scss
│       ├── shared/
│       ├── dist/
│       └── package.json
├── packages/
│   ├── design-tokens/
│   ├── content-schema/
│   └── shared-assets/
├── docs/
├── scripts/
├── .github/workflows/
├── pnpm-workspace.yaml
├── package.json
├── pnpm-lock.yaml
├── .nvmrc
└── README.md
```

## 5. Locale strategy

### Public routes

```text
/en
/fr
/en/work
/fr/work
/en/work/[slug]
/fr/work/[slug]
/en/about
/fr/about
/en/experience
/fr/experience
/en/cv
/fr/cv
/en/contact
/fr/contact
/en/research
/fr/research
/en/writing
/fr/writing
```

### Rules

- `/` redirects to `/en`.
- Do not auto-switch based on geographic location.
- A stored language preference may be used only after the visitor chooses a language.
- Every public page declares its actual locale.
- Language switching preserves the equivalent page when a translation exists.
- Missing translations use an explicit fallback state, never silent mixed-language rendering.
- Slugs remain stable across English and French in Version 1.
- English is the default content language.
- French is a complete first-class locale for core pages.

Use small dictionaries for interface language and locale-specific files for long content. Do not place long bilingual strings directly inside React components.

## 6. Content architecture

### Structured content

Use typed structured files for:

- navigation;
- profile facts;
- experience;
- education;
- certifications;
- project metadata;
- social links;
- downloadable CV assets;
- content status;
- confidentiality status.

### MDX content

Use MDX for Next.js case-study narratives because case studies require rich editorial sections, figures, callouts, comparison blocks, architecture diagrams and custom React components.

### Quarto content

Use `.qmd` for research, technical notes, teaching notes, executable R or Python output, equations, citations and bibliography.

### Source-of-truth rule

- UI labels live in dictionaries.
- Project metadata lives in a project registry.
- Long case-study prose lives in MDX.
- Research metadata lives in Quarto front matter.
- Do not duplicate the full same article in Next.js and Quarto.
- Next.js explains professional value.
- Quarto explains technical or methodological depth.

## 7. Case-study model

Every flagship case study supports:

- slug;
- locale;
- title;
- summary;
- project type;
- period;
- geographical scope;
- organization or public-safe context;
- role;
- collaborators;
- confidentiality status;
- methods;
- technologies;
- hero visual;
- challenge;
- contribution;
- approach;
- outputs;
- results;
- limitations;
- lessons;
- related research;
- external links;
- next project.

The content system must support different comparison labels such as Team contribution vs personal contribution, Source study vs personal analysis, or Institutional system vs personal role. Do not force identical wording onto every case.

## 8. Design system implementation

### Source of truth

`packages/design-tokens/src/tokens.json`

The token builder generates:

- `tokens.css` for Next.js and shared browser styles;
- `tokens.scss` for Quarto.

### Next.js styling

- Tailwind CSS for layout and responsive utilities.
- CSS custom properties for brand values and theme switching.
- Component-level CSS only when necessary.
- Avoid arbitrary values unless promoted to a token.

### Quarto styling

- Import generated SCSS variables.
- Override Bootstrap variables before Quarto theme compilation.
- Add shared rules for header, footer, article metadata, code, tables and callouts.
- Reproduce visual equivalence, not implementation identity.

## 9. Component inventory

### Global

- `SiteHeader`
- `DesktopNavigation`
- `MobileNavigation`
- `LanguageSwitcher`
- `ThemeToggle`
- `CvAction`
- `SiteFooter`
- `SkipLink`
- `PageContainer`
- `ReadingContainer`

### Homepage

- `Hero`
- `AnalyticalReadinessDemo`
- `PracticeSummary`
- `FeaturedWork`
- `ProjectCard`
- `CapabilitiesGrid`
- `ResearchWritingPreview`
- `AboutPreview`
- `ContactCallout`

### Work and case studies

- `WorkIndex`
- `ProjectRow`
- `CaseStudyHero`
- `ProjectFacts`
- `ContributionComparison`
- `MethodFlow`
- `ProjectFigure`
- `ResultCard`
- `LimitationsLessons`
- `RelatedResearchCard`
- `NextProjectLink`
- `ConfidentialityNotice`

### Profile pages

- `EditorialPortrait`
- `CareerNarrative`
- `ExperienceTimeline`
- `OnlineCv`
- `DownloadAsset`
- `ContactForm`

## 10. Signature interaction

Use:

- English: Analytical readiness
- French: Maturité analytique

Avoid model confidence, statistical confidence, empirical effect and causal effect.

The five stages are:

1. Data incomplete
2. Structure detected
3. Model estimated
4. Signal interpretable
5. Decision scenario available

Implementation rules:

- SVG preferred;
- keyboard-operable slider;
- qualitative stages rather than pseudo-statistical percentages;
- reduced-motion support;
- no autoplay;
- no WebGL;
- no real policy claim;
- text equivalent required.

## 11. Portrait implementation

- Main placement: About page.
- Optional use: social card and structured data.
- Not used as the main homepage hero visual.
- 4:5 editorial crop.
- Responsive sizes and explicit focal point.
- Objective alt text.
- EXIF metadata removed.
- Rights confirmed.
- Mobile crop reviewed separately.
- Placeholder monogram allowed only before launch.

## 12. Rendering strategy

Static generation by default for portfolio pages. Client components are limited to theme toggle, language preference persistence, mobile menu, signature interaction and form state. Most page components remain server components.

## 13. SEO and metadata

### Next.js

Use the Metadata API for title, description, canonical URL, locale alternates, Open Graph, social images and robots rules.

Generate `Person`, `ProfilePage`, `BreadcrumbList` and appropriate `CreativeWork` JSON-LD.

### Quarto

Every article defines title, description, author, language, verified dates, categories, status, image and citation metadata where applicable. RSS uses the final public `site-url`.

## 14. Quarto architecture

Use two Quarto subprojects:

```text
apps/knowledge/en
apps/knowledge/fr
```

Public paths:

```text
/en/research/*
/en/writing/*
/fr/research/*
/fr/writing/*
```

Default execution policy:

```yaml
execute:
  freeze: auto
```

Execute code locally while authoring. CI may render without re-executing fragile historical content. Executable articles use locked R or Python environments. Confidential data never enters the public repository.

## 15. Deployment architecture

### Main application

- Provider: Vercel
- Source: `apps/web`
- Preview deployments enabled

### Knowledge site

- Static origin built through GitHub Actions
- Initial hosting: GitHub Pages or another static host
- English and French builds assembled into one static artifact

### Unified routing

```text
/en/research/* -> Quarto origin /en/research/*
/en/writing/*  -> Quarto origin /en/writing/*
/fr/research/* -> Quarto origin /fr/research/*
/fr/writing/*  -> Quarto origin /fr/writing/*
```

Environment variables:

```text
NEXT_PUBLIC_SITE_URL
QUARTO_ORIGIN
CONTACT_TO_EMAIL
CONTACT_FROM_EMAIL
CONTACT_PROVIDER_API_KEY
ANALYTICS_ID
```

Only the first two are relevant to the initial architecture proof.

## 16. Testing strategy

### Static checks

- TypeScript strict
- ESLint
- Prettier
- content schema validation
- broken-link check
- Quarto render check

### Unit tests

- locale utilities;
- route mapping;
- content parsers;
- project ordering;
- language-switch mapping;
- analytical readiness stage logic.

### End-to-end tests

Use Playwright for homepage, locale switching, Work to case study, CV action, Next.js to Quarto transition, keyboard mobile menu, 404, dark theme and reduced motion.

### Accessibility

Use automated axe checks plus keyboard review, visible focus, color contrast, semantic landmarks, accessible names and chart text alternatives.

## 17. Security and confidentiality

- Public repository by design.
- Never commit secret keys.
- Never commit raw confidential datasets.
- Use synthetic or anonymized project figures.
- Add a content-publication checklist.
- Contact form later includes server validation, rate limiting, honeypot and spam controls.
- Build validation rejects `internal-only` content on public routes.

## 18. Git and delivery model

Repository: `mayo-portfolio`
Visibility: Public
Default branch: `main`

Branch prefixes:

```text
feat/*
fix/*
content/*
docs/*
chore/*
```

Commit examples:

```text
feat(web): add localized root layout
feat(tokens): generate css and scss outputs
content(work): add financial inclusion metadata
fix(a11y): restore focus after mobile menu closes
docs(architecture): record quarto deployment decision
```

## 19. Sprint sequence

1. Foundations
2. Global shell
3. Homepage
4. Work system
5. Profile pages
6. Quarto
7. Final content
8. Launch quality

## 20. Sprint 1 exit criteria

Sprint 1 is complete only when:

- the public repository exists;
- Node and pnpm are pinned;
- `pnpm install` succeeds;
- `pnpm dev:web` starts Next.js;
- `/en` and `/fr` render;
- language metadata is correct;
- tokens are generated from JSON;
- Quarto English and French sample sites render;
- one rewrite demonstrates path integration;
- lint and type checks pass;
- CI runs on pull requests;
- architecture records are committed;
- no design page has been implemented prematurely.
