# UI Art Direction and Design System Brief

Version: 0.1
Status: Draft for visual exploration

## 1. Art direction

Working concept: **Editorial Intelligence**

The design should combine:

- the precision of an analytical report;
- the authority of an institutional publication;
- the clarity of a modern editorial platform;
- the energy of a contemporary digital product;
- the visual language of data, systems, and models.

## 2. Desired perception

The site should feel:

- intelligent;
- rigorous;
- contemporary;
- calm;
- distinctive;
- credible;
- technically accomplished;
- human.

It should not feel:

- like a standard developer template;
- overly corporate;
- like an academic site from a default theme;
- decorative without substance;
- dominated by neon effects;
- dependent on dark mode.

## 3. Visual principles

1. Strong typography carries the identity.
2. Data graphics are structural, not decorative.
3. Space communicates confidence.
4. Project evidence receives visual priority.
5. Accent color is controlled.
6. Motion explains hierarchy or transformation.
7. Technical elements use monospace selectively.
8. Grid systems may be visible in subtle ways.
9. Contrast between editorial and technical surfaces is intentional.
10. Every component must work in both languages.

## 4. Initial color direction

Final values require visual testing.

### Base

```css
--background: #F5F2EA;
--surface: #FFFFFF;
--text-primary: #151515;
--text-secondary: #5F625F;
--border: #D8D7D1;
```

### Dark surface

```css
--surface-dark: #171A1F;
--text-on-dark: #F4F4F1;
--text-muted-dark: #A9AFB7;
```

### Accent candidates

Test one primary accent:

- electric cobalt;
- deep violet;
- controlled acid green;
- signal orange;
- cyan-blue.

Only one should become dominant.

## 5. Typography direction

Recommended roles:

### Interface sans serif

For:

- navigation;
- body text;
- buttons;
- metadata;
- forms.

### Editorial serif or display face

For:

- major headings;
- pull quotes;
- selected project titles;
- research emphasis.

### Monospace

For:

- code;
- model names;
- technical labels;
- coordinates;
- data annotations;
- small metadata.

Font selection criteria:

- strong Latin support;
- correct French accents;
- high readability;
- variable font availability where possible;
- acceptable loading cost;
- licensing suitable for web use.

## 6. Layout system

### Grid

- 12-column desktop grid;
- flexible tablet grid;
- 4-column mobile grid;
- consistent content and reading widths;
- intentional asymmetry on selected pages.

### Widths

- wide visual container for project showcases;
- narrower reading measure for research and long text;
- full-width sections only when the content benefits.

### Spacing

Use a consistent scale based on CSS custom properties.

## 7. Core components

### Global

- header;
- desktop navigation;
- mobile menu;
- language switcher;
- theme control;
- footer;
- button;
- text link;
- icon link;
- skip link.

### Content

- project card;
- featured project block;
- capability block;
- metric or proof indicator;
- timeline item;
- quote;
- callout;
- tag;
- metadata row;
- related-content card.

### Case study

- project hero;
- project fact sheet;
- role and contribution block;
- process step;
- architecture diagram;
- result block;
- image comparison;
- gallery;
- technical-note link;
- confidentiality notice.

### Research

- article card;
- publication citation;
- code block;
- figure;
- table;
- equation;
- table of contents;
- article status;
- related research.

## 8. Motion rules

Motion should be:

- brief;
- purposeful;
- reversible where relevant;
- disabled or simplified for reduced-motion users;
- performance-aware.

Suggested durations:

- micro-feedback: 120 to 180 ms;
- component transition: 180 to 280 ms;
- major section transition: 300 to 500 ms.

Avoid long sequences that delay interaction.

## 9. Data-visual language

Potential motifs:

- points and relationships;
- time-series traces;
- confidence bands;
- maps and geographic grids;
- matrices;
- sampling frames;
- layered systems;
- annotations;
- index numbers;
- model states.

Rules:

- use real or clearly synthetic data;
- label visual encodings;
- provide text alternatives;
- do not create fake dashboards as decoration;
- preserve interpretability.

## 10. Shared design tokens

Next.js and Quarto should share:

- colors;
- typography;
- spacing;
- radii;
- shadows;
- content widths;
- breakpoints;
- motion preferences.

A shared token package should export:

```text
tokens.css
tokens.scss
tokens.json
```

## 11. UI exploration deliverables

Before final UI production:

1. Three moodboards
2. Three homepage hero directions
3. Two typography systems
4. Two color systems
5. One project-card comparison
6. One case-study layout
7. One Quarto article skin
8. Mobile navigation states
9. Dark-surface component sample
10. Signature interaction prototype
