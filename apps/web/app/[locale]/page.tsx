import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { MethodDemo } from "@/components/method-demo";
import { Section } from "@/components/section";
import { WorkVisual } from "@/components/work-visual";
import { homeContent } from "@/content/home";
import { isLocale, type Locale } from "@/i18n/locales";
import { getCaseStudyPath, getLocalizedPath } from "@/lib/routes";

type LocaleHomePageProps = {
  params: Promise<{ locale: string }>;
};

function parseLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export default async function LocaleHomePage({ params }: LocaleHomePageProps) {
  const { locale: localeParam } = await params;
  const locale = parseLocale(localeParam);
  const content = homeContent[locale];

  return (
    <>
      <Section className="home-hero" labelledBy="home-hero-title">
        <Container className="home-hero__grid">
          <div className="home-hero__copy">
            <Eyebrow>{content.hero.eyebrow}</Eyebrow>
            <h1 className="home-hero__title" id="home-hero-title">
              {content.hero.title}
            </h1>
            <p className="home-hero__body">{content.hero.body}</p>
            <p className="home-hero__signature">{content.hero.signature}</p>
            <div className="home-hero__actions" aria-label={content.hero.actionsLabel}>
              <LinkButton href="#selected-work">{content.hero.primaryCta}</LinkButton>
              <LinkButton
                href={getLocalizedPath(locale, "/experience")}
                variant="secondary"
              >
                {content.hero.secondaryCta}
              </LinkButton>
            </div>
          </div>
          <MethodDemo content={content.method} />
        </Container>
      </Section>

      <Section className="practice-band" labelledBy="practice-title">
        <Container>
          <div className="practice-band__header">
            <Eyebrow>{content.practice.eyebrow}</Eyebrow>
            <h2 className="sr-only" id="practice-title">
              {content.practice.eyebrow}
            </h2>
          </div>
          <dl className="practice-grid">
            {content.practice.items.map((item) => (
              <div className="practice-item" key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      <Section
        className="selected-work-section"
        id="selected-work"
        labelledBy="selected-work-title"
      >
        <Container>
          <div className="section-heading selected-work-section__heading">
            <Eyebrow>{content.selectedWork.eyebrow}</Eyebrow>
            <h2 id="selected-work-title">{content.selectedWork.title}</h2>
            <p>{content.selectedWork.intro}</p>
          </div>
          <div className="selected-work-grid">
            {content.selectedWork.items.map((item) => (
              <article className="work-card" key={item.slug}>
                <WorkVisual variant={item.visual} />
                <div className="work-card__body">
                  <p className="work-card__category">{item.category}</p>
                  <h3>{item.title}</h3>
                  <p>{item.scope}</p>
                  <p className="work-card__role">
                    <span>{content.selectedWork.roleLabel}</span>
                    {item.role}
                  </p>
                  <LinkButton
                    href={getCaseStudyPath(locale, item.slug)}
                    variant="secondary"
                  >
                    {content.selectedWork.cardCta}
                  </LinkButton>
                </div>
              </article>
            ))}
          </div>
          <div className="selected-work-section__footer">
            <LinkButton href={getLocalizedPath(locale, "/work")} variant="secondary">
              {content.selectedWork.viewAll}
            </LinkButton>
          </div>
        </Container>
      </Section>

      <Section className="capabilities-section" labelledBy="capabilities-title">
        <Container>
          <div className="section-heading">
            <Eyebrow>{content.capabilities.eyebrow}</Eyebrow>
            <h2 id="capabilities-title">{content.capabilities.title}</h2>
            <p>{content.capabilities.intro}</p>
          </div>
          <div className="capabilities-grid">
            {content.capabilities.groups.map((group) => (
              <article className="capability-card" key={group.title}>
                <p>{group.transform}</p>
                <h3>{group.title}</h3>
                <ul role="list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="research-writing-section" labelledBy="research-writing-title">
        <Container>
          <div className="section-heading">
            <Eyebrow>{content.researchWriting.eyebrow}</Eyebrow>
            <h2 id="research-writing-title">{content.researchWriting.title}</h2>
            <p>{content.researchWriting.intro}</p>
          </div>
          <div className="research-writing-grid">
            {content.researchWriting.cards.map((card) => (
              <article className="preview-card" key={card.routeKey}>
                <p className="preview-card__kind">{card.kind}</p>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <LinkButton
                  href={getLocalizedPath(locale, `/${card.routeKey}`)}
                  variant="secondary"
                >
                  {card.cta}
                </LinkButton>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="about-contact-section" labelledBy="about-title">
        <Container className="about-contact-grid">
          <article className="about-panel">
            <Eyebrow>{content.about.eyebrow}</Eyebrow>
            <h2 id="about-title">{content.about.statement}</h2>
            <LinkButton href={getLocalizedPath(locale, "/about")} variant="secondary">
              {content.about.cta}
            </LinkButton>
          </article>
          <article className="contact-panel" aria-labelledby="contact-title">
            <Eyebrow>{content.contact.eyebrow}</Eyebrow>
            <h2 id="contact-title">{content.contact.title}</h2>
            <p>{content.contact.body}</p>
            <ul className="opportunity-tags" role="list">
              {content.contact.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
            <LinkButton href={getLocalizedPath(locale, "/contact")}>
              {content.contact.cta}
            </LinkButton>
          </article>
        </Container>
      </Section>
    </>
  );
}
