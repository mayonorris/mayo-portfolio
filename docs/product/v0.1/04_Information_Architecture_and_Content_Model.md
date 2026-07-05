# Information Architecture and Content Model

Version: 0.1
Status: Draft for validation

## 1. Navigation model

Recommended main navigation:

- Work
- Research
- Writing
- About
- Contact

Persistent secondary action:

- CV

Optional utility items:

- language switcher;
- theme control;
- GitHub;
- LinkedIn.

The navigation should avoid displaying every professional dimension as a separate top-level item.

## 2. Proposed sitemap

```text
/
├── /work
│   ├── /work/em2-data-ai-lab
│   ├── /work/decentralization-impact-togo
│   ├── /work/economic-indicators
│   └── /work/financial-inclusion-fintech
├── /research
│   ├── /research/topics
│   ├── /research/projects
│   └── /research/publications
├── /writing
│   ├── /writing/econometrics
│   ├── /writing/data-science
│   ├── /writing/economics
│   ├── /writing/software
│   └── /writing/teaching
├── /about
├── /experience
├── /cv
├── /contact
├── /privacy
└── /404
```

The Quarto deployment may physically serve:

```text
/research/*
/writing/*
/teaching/*
```

The public navigation should make the technical separation invisible.

## 3. Homepage information hierarchy

### Block 1: Hero

- name;
- professional title;
- one-sentence value proposition;
- primary action: View selected work;
- secondary action: Open CV;
- optional current-status line.

### Block 2: Selected proof

Possible content:

- years or range of applied experience;
- institutions or sectors;
- number of project types;
- countries or regional scope;
- technologies only where meaningful.

Proof indicators must be precise and defensible.

### Block 3: Selected work

Four flagship case studies.

### Block 4: Capabilities

Recommended categories:

1. Economic and Statistical Analysis
2. Data Science and Econometrics
3. Decision Systems and Data Products
4. Research and Knowledge Transfer

### Block 5: Research and writing

- recent research;
- latest technical note;
- current research focus;
- link to Quarto section.

### Block 6: Professional narrative

A short bridge to the About page.

### Block 7: Contact

A specific invitation based on the target opportunities.

## 4. Work index

The work index should support scanning by:

- domain;
- project type;
- year;
- public or confidential status;
- primary capability.

Potential domains:

- public policy;
- official statistics;
- economic analysis;
- financial inclusion;
- data systems;
- web products;
- research;
- education.

Avoid complex filtering in Version 1 unless the number of public projects exceeds eight.

## 5. Case-study content model

Each case study should include structured fields.

### Identity

- title;
- subtitle;
- year or period;
- location;
- sector;
- organization or anonymized context;
- project type;
- confidentiality status.

### Contribution

- role;
- responsibilities;
- collaborators;
- tools;
- methods.

### Narrative

- challenge;
- context;
- constraints;
- approach;
- decisions;
- implementation;
- outputs;
- results;
- lessons.

### Evidence

- screenshots;
- diagrams;
- dashboards;
- code;
- repository;
- report;
- presentation;
- live link;
- technical note.

### Related content

- related case studies;
- research article;
- technical note;
- service or capability;
- external publication.

## 6. Research-content model

Quarto research items should include:

```yaml
title:
subtitle:
description:
date:
date-modified:
author:
categories:
tags:
status:
language:
citation:
bibliography:
code-fold:
toc:
image:
draft:
```

Recommended status values:

- published;
- working paper;
- research proposal;
- technical note;
- work in progress;
- archived.

## 7. Writing-content model

Writing categories:

- Econometrics
- Statistics
- Data Science
- Economics and Finance
- Software Engineering
- Research Practice
- Teaching

Each article should define:

- intended audience;
- prerequisite level;
- estimated reading time;
- code availability;
- last updated date;
- usage or citation guidance.

## 8. About-page structure

1. Short professional statement
2. Integrated career narrative
3. Current focus
4. Experience timeline
5. Education and training
6. Working principles
7. EM² role
8. Selected recognition
9. Personal or human details, limited and intentional
10. Contact action

## 9. CV architecture

The online CV may include:

- summary;
- experience;
- education;
- selected projects;
- teaching;
- research;
- certifications;
- skills;
- languages;
- links.

The downloadable PDF should remain concise and tailored. The website may contain more detail than the PDF.

## 10. Content ownership and source of truth

Recommended sources of truth:

- structured TypeScript or MDX data for Next.js case studies;
- `.qmd` files for research and technical content;
- one central profile data file for name, bio, links, location, and social metadata;
- one shared design-token package;
- a controlled asset library with descriptive filenames.
