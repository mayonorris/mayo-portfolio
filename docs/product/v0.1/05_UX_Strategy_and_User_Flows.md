# UX Strategy, User Flows, and Wireframe Brief

Version: 0.1
Status: Draft for validation

## 1. UX objective

Reduce the cognitive cost of understanding a multidisciplinary profile while preserving depth for technical and academic visitors.

## 2. Core UX principles

### 2.1 Progressive disclosure

The first screen communicates identity and value.

The next level shows selected projects and outcomes.

Detailed methods, code, and research remain available for visitors who need depth.

### 2.2 Outcome-first project presentation

Each project preview should answer:

- What problem was addressed?
- What did Mayo contribute?
- What changed or what was delivered?

Tools should not dominate the first layer.

### 2.3 Two reading speeds

The website must support:

- fast scanning by recruiters and clients;
- deep reading by researchers and technical peers.

### 2.4 Predictable navigation

Creative interactions must not replace standard links, headings, scrolling, and browser behavior.

### 2.5 One coherent identity

The user should not perceive a disruptive transition between Next.js and Quarto.

## 3. Primary user flows

### Flow A: Recruiter evaluation

```text
Search result or shared link
→ Homepage
→ Positioning
→ Selected work
→ Relevant case study
→ Experience or CV
→ Contact
```

Success condition:

The visitor understands the profile and reaches the CV or contact action without confusion.

### Flow B: Consulting evaluation

```text
Referral or EM² link
→ Homepage or case study
→ Institutional project
→ Role, approach, outputs, impact
→ Related technical evidence
→ Contact
```

Success condition:

The visitor sees reduced delivery risk and a clear reason to initiate a discussion.

### Flow C: Research evaluation

```text
Research link
→ Quarto article or research landing
→ Research agenda
→ Methods and references
→ CV
→ Contact
```

Success condition:

The visitor can assess research readiness and methodological competence.

### Flow D: Technical peer

```text
Project or article link
→ Technical explanation
→ Architecture or code
→ GitHub repository
→ Related project
```

Success condition:

The visitor can verify implementation quality and personal contribution.

### Flow E: Mobile visitor

```text
Homepage
→ Compact navigation
→ One project
→ CV or contact
```

Success condition:

Core content and actions remain clear without relying on hover or large-screen effects.

## 4. Homepage wireframe brief

### Header

- logo or wordmark;
- compact primary navigation;
- language switch;
- CV action;
- responsive menu.

### Hero

Recommended structure:

Left or central content:

- small context label;
- name;
- primary title;
- value proposition;
- two actions.

Visual area:

- data-inspired interactive composition;
- no stock image;
- no generic laptop mockup;
- no continuous distracting animation.

### Proof strip

A short set of defensible indicators.

### Selected work

Use varied editorial compositions rather than identical cards if visual consistency is preserved.

Each item must expose:

- context;
- role;
- impact;
- project type.

### Capability section

Capabilities should be described as transformations:

- questions to evidence;
- raw data to reliable systems;
- models to decision tools;
- knowledge to transferable methods.

### Research section

Show:

- one current research theme;
- one recent article;
- one technical note;
- link to research hub.

### Footer

- concise identity;
- contact links;
- location;
- source or build credit if desired;
- legal links.

## 5. Case-study UX

### Opening section

Must include:

- title;
- one-sentence result;
- project metadata;
- hero visual;
- role statement.

### Sticky or compact contents

Useful for long case studies:

- Challenge
- Approach
- Solution
- Results
- Technical details
- Reflection

### Evidence blocks

Use:

- diagrams;
- annotated screenshots;
- before-and-after states;
- data visualizations;
- architecture maps;
- selected code excerpts.

Avoid decorative images without explanatory value.

### Methodological depth

Provide a summary in the case study and link to a detailed Quarto note where appropriate.

## 6. Research UX

Quarto pages should use:

- readable content width;
- clear table of contents;
- metadata;
- citations;
- code folding;
- figure captions;
- article status;
- related articles;
- return link to portfolio.

## 7. Language UX

- The default language should be selected based on strategy, not automatically assumed.
- Language switching must be visible but not dominant.
- A translated page should link to the equivalent page.
- Missing translations should not create broken paths.
- Project names may remain in the official language, with translated descriptions.

## 8. Interaction strategy

### Signature interaction

A controlled data transformation showing:

```text
Raw data → structure → model → insight → decision
```

Possible behaviors:

- scroll-based transformation;
- pointer-responsive nodes;
- parameter adjustment;
- reduced-motion static fallback.

### Micro-interactions

Allowed:

- subtle card response;
- text reveal;
- focus and hover states;
- chart annotation;
- transition between project previews;
- theme transition.

Avoid:

- custom cursors that reduce usability;
- long loading intros;
- scroll hijacking;
- automatic horizontal navigation;
- animations required to access content.

## 9. UX validation tasks

Test at least the following:

1. Find the current professional positioning.
2. Identify Mayo's contribution to a project.
3. Find the CV.
4. Find research on econometrics or macro-finance.
5. Contact Mayo.
6. Switch language.
7. Navigate using only the keyboard.
8. Use the site with reduced motion.
9. Read a case study on mobile.
10. Move from a case study to a technical note and back.

## 10. UX deliverables before coding

- low-fidelity sitemap;
- homepage wireframe;
- work-index wireframe;
- case-study wireframe;
- about-page wireframe;
- research-landing wireframe;
- mobile navigation states;
- Next.js to Quarto transition prototype;
- interaction prototype for the signature data element.
