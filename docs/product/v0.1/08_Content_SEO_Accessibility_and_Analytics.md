# Content, SEO, Accessibility, and Analytics Strategy

Version: 0.1
Status: Draft for validation

## 1. Editorial voice

The voice should be:

- precise;
- evidence-based;
- direct;
- reflective;
- technically credible;
- understandable to non-specialists.

Avoid:

- exaggerated claims;
- empty innovation language;
- excessive tool lists;
- unexplained acronyms;
- generic statements such as "passionate about data";
- confidential details.

## 2. Content hierarchy

Every important project should provide three layers.

### Layer 1: One-line value

What problem was solved and why it mattered.

### Layer 2: Case-study summary

Context, contribution, process, outputs, and results.

### Layer 3: Technical depth

Methodology, code, model specification, references, architecture, or reproducible analysis.

The third layer may live in Quarto.

## 3. Content production checklist

For each case study:

- final title;
- public-safe summary;
- contribution statement;
- verified dates;
- verified outputs;
- methods;
- tools;
- results;
- limitations;
- visuals;
- links;
- confidentiality review;
- English copy;
- French copy;
- metadata;
- alternative text.

## 4. SEO strategy

### Entity focus

The site should consistently identify:

- full professional name;
- professional title;
- location;
- areas of expertise;
- EM² relationship;
- GitHub;
- LinkedIn;
- research profiles where relevant.

### Page-level SEO

Each page requires:

- unique title;
- concise description;
- canonical URL;
- language alternate links;
- Open Graph metadata;
- social preview image;
- structured headings;
- descriptive internal links.

### Structured data

Potential schemas:

- Person
- ProfilePage
- Article
- ScholarlyArticle where appropriate
- CreativeWork
- BreadcrumbList
- WebSite

### Search strategy

Core keyword families may include:

- economic data scientist;
- statistician economist;
- econometrics;
- data analyst Togo;
- public-sector data systems;
- statistical consulting;
- R and Python analytics;
- full-stack analytics;
- decision-support systems.

Keywords must appear naturally and truthfully.

## 5. Accessibility strategy

Target: WCAG 2.2 AA for primary flows.

### Required practices

- semantic HTML;
- logical headings;
- skip navigation;
- keyboard support;
- visible focus;
- sufficient contrast;
- accessible names;
- form labels and errors;
- alternative text;
- captions where relevant;
- reduced-motion support;
- responsive zoom;
- no essential hover-only content;
- no color-only meaning.

### Data visualization accessibility

Each visualization should provide:

- title;
- explanation;
- units;
- source;
- text summary;
- keyboard interaction where interactive;
- sufficient contrast;
- non-visual alternative when necessary.

## 6. Performance strategy

- statically generate content where appropriate;
- minimize JavaScript;
- load interaction code only where required;
- optimize fonts;
- use responsive images;
- prefetch selectively;
- prevent layout shift;
- compress SVG and raster assets;
- avoid autoplay media;
- monitor field performance after launch.

## 7. Analytics plan

Use a privacy-conscious analytics solution.

### Core events

```text
view_case_study
open_cv
download_cv
contact_email
submit_contact_form
switch_language
open_research_article
outbound_github
outbound_linkedin
```

### Dimensions

Where privacy permits:

- language;
- device category;
- referral source;
- page category;
- case-study slug.

### Questions analytics should answer

- Which projects attract serious attention?
- Which entry pages lead to CV or contact actions?
- Do visitors explore research after viewing work?
- Which language is used most?
- Are mobile users completing core actions?
- Which external sources generate relevant visits?

## 8. Privacy

- collect only necessary data;
- do not store sensitive form content unnecessarily;
- disclose analytics;
- define retention rules;
- avoid invasive tracking;
- provide a contact channel that does not require a form.

## 9. Governance

Review cadence:

- monthly link and content checks;
- quarterly CV review;
- quarterly project status review;
- semiannual accessibility and performance audit;
- annual positioning review.
