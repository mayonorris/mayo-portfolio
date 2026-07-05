# Decision Log, Risks, and Open Questions

Version: 0.1
Status: Active

## 1. Confirmed decisions

### D-001: Product type

The website is a professional proof system, not a visual CV.

### D-002: Core architecture

Use Next.js for the flagship portfolio and Quarto for research, writing, and reproducible technical content.

### D-003: Visual direction

Use an Editorial Intelligence direction that combines institutional credibility, editorial clarity, and data-native interaction.

### D-004: Project strategy

Feature a small number of strong case studies and maintain a secondary archive later.

### D-005: Content depth

Use progressive disclosure:

- concise professional case study in Next.js;
- detailed methodological or technical content in Quarto where appropriate.

### D-006: Primary languages

The website will support English and French.

## 2. Proposed decisions requiring validation

### P-001: Default language

Proposal: English as the default public language, with full French support for core pages.

Reason:

- international recruitment;
- research and doctoral opportunities;
- technical audience;
- professional visibility beyond Francophone markets.

Alternative:

French at root and English under `/en`.

### P-002: Professional title

Proposal:

**Economic Data Scientist and Full-Stack Analytics Builder**

French:

**Ingénieur Statisticien Économiste et concepteur de solutions analytiques et numériques**

### P-003: Signature

Proposal:

**From evidence to decisions. From models to digital systems.**

### P-004: Initial flagship projects

Proposal:

1. EM² Data & AI Lab website
2. Decentralization impact evaluation in Togo
3. Economic indicators and seasonal adjustment
4. Financial inclusion and FinTech

### P-005: Styling approach

Proposal:

Tailwind CSS plus shared CSS custom properties for Next.js, and shared SCSS tokens for Quarto.

## 3. Risks

### R-001: Profile appears fragmented

Impact: High
Mitigation:

- one core positioning;
- capabilities organized around value creation;
- selected work;
- integrated career narrative.

### R-002: Scope becomes too large

Impact: High
Mitigation:

- launch with three case studies;
- defer unified search and advanced interaction;
- separate Must, Should, and Could items.

### R-003: Next.js and Quarto feel like different sites

Impact: High
Mitigation:

- shared design tokens;
- identical navigation structure;
- shared assets;
- one typography system;
- transition testing.

### R-004: Confidentiality limits project evidence

Impact: High
Mitigation:

- anonymized narratives;
- recreated diagrams;
- synthetic data;
- methodology-focused evidence;
- explicit confidentiality labels.

### R-005: Bilingual maintenance burden

Impact: Medium to High
Mitigation:

- translation-status tracking;
- shared terminology glossary;
- define minimum French and English coverage;
- avoid publishing half-translated core flows.

### R-006: Excessive animation harms credibility or performance

Impact: Medium
Mitigation:

- one signature interaction;
- motion budget;
- reduced-motion fallback;
- performance tests.

### R-007: Research section grows without governance

Impact: Medium
Mitigation:

- front-matter schema;
- content categories;
- article status;
- scheduled reviews;
- draft controls.

### R-008: Inconsistent personal and EM² branding

Impact: Medium
Mitigation:

- related but distinct visual systems;
- explicit brand relationship;
- no duplication of the corporate service catalogue.

## 4. Open questions

1. What domain will the portfolio use?
2. Should English or French be the default language?
3. Which version of the professional title feels most authentic?
4. Which three projects are guaranteed to be publication-ready for launch?
5. What assets are available for each project?
6. Which projects require anonymization?
7. Should the CV be one general version or multiple targeted versions?
8. Should the first release include dark mode?
9. Should the homepage include a portrait?
10. Which analytics platform should be used?
11. Which contact workflow is preferred?
12. Should research and writing use one Quarto site or separate sections?
13. Should teaching content be public at launch?
14. Which GitHub repositories are ready for public visibility?
15. Which interactive demonstration should become the signature element?

## 5. Immediate validation checklist

The next working session should finalize:

- default language;
- professional title;
- signature;
- flagship project list;
- domain strategy;
- visual direction;
- Version 1 scope;
- confidentiality classification;
- preferred Next.js styling approach.
