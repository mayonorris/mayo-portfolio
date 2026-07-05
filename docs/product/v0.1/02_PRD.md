# Product Requirements Document

Version: 0.1
Status: Draft for validation

## 1. Product name

Working name: **Mayo T. N. Kadanga Portfolio**

## 2. Product summary

A bilingual personal portfolio and knowledge platform built with Next.js and Quarto.

The product combines:

- recruiter-friendly case studies;
- institutional credibility;
- research publishing;
- technical notes;
- interactive data storytelling;
- clear conversion paths.

## 3. Scope for Version 1

### Required pages

- Home
- Work index
- Four selected case studies
- Research landing
- Quarto research section
- Writing or Notes landing
- About
- Experience
- CV
- Contact
- Custom 404 page
- Legal and privacy information

### Required global features

- English and French content
- Responsive design
- Keyboard-accessible navigation
- Light mode and dark mode, or one highly polished default theme with future-ready tokens
- Persistent access to CV and contact
- Shared visual identity between Next.js and Quarto
- SEO metadata
- Social preview cards
- Sitemap
- Analytics
- Reduced-motion support
- Optimized images and fonts
- Print-friendly CV and research pages

## 4. Functional requirements

### FR-01: Homepage positioning

The homepage must display:

- name;
- professional title;
- value proposition;
- selected work;
- primary calls to action;
- concise proof indicators;
- current focus or recent work.

### FR-02: Selected work

The website must display a limited set of high-value projects.

Each project card must include:

- project title;
- domain;
- role;
- year or period;
- short outcome statement;
- visual preview;
- case-study link.

### FR-03: Case studies

Each flagship case study must include:

- challenge;
- context;
- Mayo's role;
- constraints;
- process;
- methodology;
- technical architecture where relevant;
- decisions and trade-offs;
- outputs;
- results or impact;
- confidentiality note where relevant;
- related technical or research links.

### FR-04: Research publishing

The Quarto section must support:

- `.qmd` content;
- R and Python outputs;
- citations;
- bibliography;
- equations;
- code folding;
- tables and figures;
- article listings;
- tags or categories;
- local search;
- RSS.

### FR-05: CV

The CV must be:

- viewable online;
- downloadable as PDF;
- available in English and French when ready;
- accessible from the main navigation or a persistent action.

### FR-06: Contact

The contact page must provide:

- email;
- LinkedIn;
- GitHub;
- location at city and country level;
- concise list of collaboration types;
- contact form or mailto workflow;
- spam protection if a form is used.

### FR-07: Language switching

Users must be able to switch between English and French.

Requirements:

- current page context should be preserved where a translation exists;
- missing translations should be handled clearly;
- language choice should persist;
- metadata and canonical links must be language-aware.

### FR-08: Navigation

Main navigation should remain limited and stable.

Recommended labels:

- Work
- Research
- Writing
- About
- Contact

CV should appear as a distinct action.

### FR-09: Search

Version 1 may use:

- Quarto-native search for research and technical content;
- no global search on the Next.js area unless the content volume justifies it.

Unified search is a later enhancement.

### FR-10: Analytics

Track only meaningful, privacy-conscious events:

- case-study opens;
- CV opens and downloads;
- contact actions;
- language switching;
- research article visits;
- outbound GitHub and LinkedIn clicks.

## 5. Content requirements

### Required homepage content

- final positioning statement;
- short professional introduction;
- four selected projects;
- capabilities;
- proof indicators;
- current focus;
- concise contact invitation.

### Required project content

For each flagship project:

- approved title;
- public-safe description;
- contribution statement;
- technologies;
- methodology;
- available images;
- outcomes;
- external links;
- confidentiality classification.

### Required about content

- professional narrative;
- timeline;
- education;
- current focus;
- selected principles or working approach;
- relationship with EM².

## 6. Quality requirements

### Performance

Target quality thresholds:

- fast first load on mobile networks;
- no unnecessary blocking scripts;
- optimized responsive images;
- lazy loading for secondary media;
- restrained animation;
- stable layouts.

### Accessibility

Target: WCAG 2.2 AA for core flows.

Minimum expectations:

- semantic landmarks;
- keyboard navigation;
- visible focus states;
- sufficient color contrast;
- meaningful alternative text;
- accessible forms;
- reduced-motion behavior;
- no content available only on hover;
- headings in logical order.

### Security and privacy

- no confidential data in repositories;
- no exposed API keys;
- form validation and anti-spam controls;
- minimal personal-data collection;
- clear privacy notice if analytics or forms collect data.

## 7. Version 1 exclusions

Deferred unless required during design validation:

- account system;
- comments;
- newsletter;
- CMS dashboard;
- complex 3D scenes;
- AI chatbot;
- global search across both systems;
- public project datasets containing sensitive material;
- advanced personalization;
- multilingual content beyond English and French.

## 8. Success metrics

### Product metrics

- percentage of visitors who open at least one case study;
- percentage who open or download the CV;
- contact conversion rate;
- research article engagement;
- return visits;
- mobile usability;
- successful indexing of core pages.

### Qualitative indicators

- recruiters understand the positioning without explanation;
- visitors do not describe the profile as fragmented;
- case studies communicate contribution and impact clearly;
- transition between Next.js and Quarto feels coherent;
- the site looks credible to both institutions and technical audiences.

## 9. Launch criteria

The website can launch when:

- all core pages are complete;
- at least three flagship case studies are publication-ready;
- English content is complete;
- French coverage meets the agreed minimum;
- accessibility review is passed;
- performance review is passed;
- all links work;
- metadata and social cards are validated;
- analytics is tested;
- no confidential material is exposed;
- Quarto and Next.js navigation are visually coherent.
