# Technical Architecture

Version: 0.1
Status: Proposed architecture

## 1. Architecture overview

The portfolio uses two complementary systems.

### Next.js application

Responsibilities:

- homepage;
- work index;
- case studies;
- about;
- experience;
- CV landing;
- contact;
- interactive data components;
- global brand experience.

### Quarto website

Responsibilities:

- research;
- technical notes;
- teaching content;
- reproducible R and Python outputs;
- citations;
- bibliographies;
- equations;
- code;
- search;
- RSS.

## 2. Recommended repository model

```text
mayo-portfolio/
├── apps/
│   ├── web/
│   │   ├── app/
│   │   ├── components/
│   │   ├── content/
│   │   ├── public/
│   │   ├── styles/
│   │   └── package.json
│   └── research/
│       ├── _quarto.yml
│       ├── research/
│       ├── writing/
│       ├── teaching/
│       ├── assets/
│       └── styles.scss
├── packages/
│   ├── design-tokens/
│   ├── content-schema/
│   └── shared-assets/
├── docs/
├── package.json
└── README.md
```

## 3. Recommended core technologies

### Next.js

- Next.js App Router
- TypeScript
- React
- CSS variables
- Tailwind CSS or a disciplined CSS-module system
- MDX only if selected Next.js content benefits from it
- schema validation for project content
- image optimization
- server rendering or static generation based on page needs

### Quarto

- Quarto website project
- SCSS customization
- R and Python execution where needed
- bibliography and citation support
- article listings
- local search
- RSS
- code folding
- static output

### Tooling

- pnpm workspaces
- ESLint
- Prettier
- TypeScript strict mode
- automated link checking
- accessibility testing
- performance checks
- GitHub Actions
- Vercel for the Next.js application

## 4. Deployment model

Recommended model:

- deploy Next.js independently;
- render and deploy Quarto independently;
- expose Quarto under the main domain through path-based routing;
- configure Quarto for the correct public subpath;
- keep builds independent.

Public structure:

```text
https://example.com/
https://example.com/work/
https://example.com/research/
https://example.com/writing/
```

## 5. Shared visual system

The shared token package should provide:

```text
packages/design-tokens/tokens.css
packages/design-tokens/tokens.scss
packages/design-tokens/tokens.json
```

Next.js consumes CSS or generated Tailwind values.

Quarto consumes SCSS variables and custom rules.

Shared assets:

- logo;
- icons;
- social images;
- font declarations;
- favicon;
- profile image;
- selected decorative SVG assets.

## 6. Content architecture

### Next.js structured project content

Recommended fields:

```ts
type CaseStudy = {
  slug: string;
  language: "en" | "fr";
  title: string;
  summary: string;
  period: string;
  sector: string[];
  role: string[];
  capabilities: string[];
  technologies: string[];
  status: "public" | "anonymized" | "limited";
  featured: boolean;
  outcomes: string[];
  heroImage: string;
  relatedResearch?: string[];
  externalLinks?: {
    label: string;
    url: string;
  }[];
};
```

### Quarto content

Use consistent front matter and category rules across research and writing.

## 7. Internationalization

Requirements:

- locale-aware routes;
- translated metadata;
- language-aware canonical links;
- equivalent-page mapping;
- fallback strategy;
- no automatic translation in production;
- consistent terminology glossary.

Possible route model:

```text
/en/*
/fr/*
```

Alternative:

- English at root;
- French under `/fr`.

The final choice should consider SEO, maintenance, and preferred public identity.

## 8. Integration concerns

### Asset paths

Quarto assets must resolve correctly under the public subpath.

### Navigation

Both systems must reproduce the same navigation labels, order, and dimensions.

### Theme preference

Theme choice should persist across systems through a shared storage or cookie strategy.

### Analytics

Use one analytics property with consistent route naming.

### Search

Version 1 uses Quarto search only inside the Quarto area.

### Error handling

The public routing layer must define behavior for missing Quarto and Next.js pages.

## 9. Security and confidentiality

- use environment variables for secrets;
- no sensitive data in public repositories;
- anonymize institutional materials;
- sanitize user input;
- use anti-spam controls;
- review public images for confidential information;
- maintain a content publication checklist.

## 10. Testing strategy

### Automated

- unit tests for critical utilities;
- schema validation;
- build tests;
- link checks;
- accessibility checks;
- visual regression for key components;
- route smoke tests;
- bilingual route checks.

### Manual

- mobile and desktop;
- keyboard navigation;
- reduced motion;
- screen-reader spot checks;
- low-bandwidth behavior;
- transition between Next.js and Quarto;
- CV downloads;
- social preview validation.

## 11. Technical decision still required

Choose one styling implementation for Next.js:

### Option A: Tailwind plus shared CSS variables

Advantages:

- fast component development;
- responsive utilities;
- easy consistency;
- compatible with shared tokens.

### Option B: CSS Modules plus shared CSS variables

Advantages:

- explicit component styles;
- fewer utility classes in markup;
- close control over editorial layouts.

Either is valid. The decision should be based on the preferred implementation workflow and component complexity.
