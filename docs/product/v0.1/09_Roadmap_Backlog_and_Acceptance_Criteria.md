# Roadmap, Prioritized Backlog, and Acceptance Criteria

Version: 0.1
Status: Draft delivery plan

## 1. Delivery philosophy

Build the portfolio as a sequence of validated layers:

1. Strategy
2. Content
3. Information architecture
4. UX
5. Visual system
6. Technical foundation
7. Core pages
8. Case studies
9. Quarto integration
10. Quality assurance
11. Launch
12. Iteration

## 2. Phase 0: Discovery and validation

### Deliverables

- approved positioning;
- approved audiences;
- confirmed flagship projects;
- content inventory;
- confidentiality classification;
- domain decision;
- language strategy;
- technical architecture decision.

### Exit criteria

- no unresolved ambiguity about the main purpose;
- project list is realistic;
- required assets are identified;
- English and French scope is defined.

## 3. Phase 1: UX architecture

### Deliverables

- sitemap;
- navigation;
- user flows;
- low-fidelity wireframes;
- case-study template;
- research-page template;
- mobile states.

### Exit criteria

- primary tasks can be completed in prototype;
- navigation labels are clear;
- page hierarchy is stable.

## 4. Phase 2: UI system

### Deliverables

- moodboards;
- color and typography decisions;
- design tokens;
- component library;
- homepage visual direction;
- case-study design;
- Quarto skin;
- interaction specification.

### Exit criteria

- visual identity is distinctive;
- design works in English and French;
- Next.js and Quarto look coherent;
- mobile designs are complete.

## 5. Phase 3: Technical foundation

### Deliverables

- monorepo;
- Next.js application;
- Quarto project;
- shared design tokens;
- internationalization;
- CI workflows;
- deployment previews;
- analytics setup.

### Exit criteria

- both systems build independently;
- shared navigation is implemented;
- preview environments work;
- route integration is tested.

## 6. Phase 4: Core portfolio

### Deliverables

- homepage;
- work index;
- about;
- experience;
- CV;
- contact;
- footer;
- language switching;
- base SEO.

### Exit criteria

- complete responsive behavior;
- core accessibility checks pass;
- content is approved;
- forms and links work.

## 7. Phase 5: Case studies

### Deliverables

Minimum three publishable case studies:

1. EM² Data & AI Lab website
2. Decentralization impact evaluation
3. Economic indicators or financial inclusion

Fourth case study may launch with Version 1 if content is ready.

### Exit criteria for each case study

- challenge is clear;
- Mayo's contribution is explicit;
- visuals are available;
- outputs are verified;
- confidentiality review is complete;
- mobile layout is approved;
- related technical links work.

## 8. Phase 6: Research and writing

### Deliverables

- Quarto research landing;
- research categories;
- at least two substantial research items;
- at least two technical notes;
- search;
- bibliography;
- RSS;
- shared header and footer.

### Exit criteria

- article metadata is consistent;
- citations render correctly;
- code outputs render correctly;
- navigation back to portfolio works;
- subpath routing works.

## 9. Phase 7: Quality assurance and launch

### Deliverables

- accessibility review;
- performance review;
- SEO validation;
- analytics validation;
- content proofread;
- broken-link review;
- browser testing;
- launch checklist;
- rollback plan.

### Exit criteria

- no critical accessibility issue;
- no broken core link;
- no exposed confidential content;
- acceptable mobile performance;
- correct social previews;
- production domain configured.

## 10. Prioritized backlog

### Must

- positioning;
- responsive navigation;
- homepage;
- selected work;
- three case studies;
- about;
- CV;
- contact;
- English;
- French minimum coverage;
- Quarto research section;
- shared design tokens;
- SEO;
- accessibility;
- analytics;
- production deployment.

### Should

- fourth case study;
- current-focus section;
- dark mode;
- project categories;
- article-related content;
- print styles;
- automated link checks;
- visual regression tests.

### Could

- unified search;
- advanced project filtering;
- interactive sampling demo;
- interactive macroeconomic visualization;
- newsletter;
- public speaking page;
- book notes;
- public reading list.

### Not in Version 1

- user accounts;
- comments;
- AI chatbot;
- full CMS;
- large WebGL environment;
- extensive personalization.

## 11. Global acceptance criteria

The Version 1 product is accepted when:

- a first-time visitor can explain Mayo's positioning accurately;
- the selected projects show distinct but coherent capabilities;
- each project identifies Mayo's exact role;
- the CV is reachable in one interaction from the main navigation;
- contact is reachable from every major page;
- research articles render correctly;
- Next.js and Quarto share a coherent identity;
- all primary flows work on mobile;
- keyboard navigation is functional;
- reduced-motion preferences are respected;
- English and French routes do not create broken navigation;
- no confidential data is exposed;
- analytics records the agreed events;
- the site is indexable and has valid metadata.
