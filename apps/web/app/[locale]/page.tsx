import { notFound } from "next/navigation";
import { AnalyticalPreview } from "@/components/analytical-preview";
import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import { homeContent } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, type Locale } from "@/i18n/locales";
import { getLocalizedPath } from "@/lib/routes";

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
  const dictionary = getDictionary(locale);
  const content = homeContent[locale];

  return (
    <>
      <Section className="hero-section" labelledBy="hero-title">
        <Container className="hero-grid">
          <div className="hero-copy">
            <Eyebrow>{publicProfile.qualification}</Eyebrow>
            <h1 className="hero-title" id="hero-title">
              {publicProfile.name}
            </h1>
            <p className="hero-kicker">{publicProfile.positioning}</p>
            <p className="hero-role">{publicProfile.ventureRole}</p>
            <Divider />
            <div className="hero-actions" aria-label={content.hero.actionsLabel}>
              <LinkButton href="#selected-experience">
                {content.hero.primaryCta}
              </LinkButton>
              <LinkButton
                href={getLocalizedPath(locale, "/work")}
                variant="secondary"
              >
                {content.hero.secondaryCta}
              </LinkButton>
            </div>
            <ul
              aria-label={content.hero.externalLinksLabel}
              className="hero-links"
              role="list"
            >
              {publicProfile.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                    <span className="sr-only">
                      {` (${dictionary.shell.footer.externalNote})`}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <AnalyticalPreview labels={content.preview} />
        </Container>
      </Section>

      <Section
        className="experience-section"
        id="selected-experience"
        labelledBy="selected-experience-title"
      >
        <Container>
          <div className="section-heading">
            <Eyebrow>{content.experience.eyebrow}</Eyebrow>
            <h2 id="selected-experience-title">{content.experience.title}</h2>
            <p>{content.experience.intro}</p>
          </div>
          <div className="experience-list" aria-label={content.experience.listLabel}>
            {publicProfile.experiences.map((experience) => (
              <article className="experience-item" key={experience.id}>
                <div className="experience-item__meta">
                  <span>{experience.period[locale]}</span>
                  <span>{experience.marker[locale]}</span>
                </div>
                <div className="experience-item__body">
                  <div className="experience-item__header">
                    <h3>{experience.organization[locale]}</h3>
                    <p>{experience.role[locale]}</p>
                  </div>
                  <p>{experience.description[locale]}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="brand-section" labelledBy="brand-title">
        <Container>
          <div className="brand-panel">
            <div className="section-heading section-heading--compact">
              <Eyebrow>{content.brand.eyebrow}</Eyebrow>
              <h2 id="brand-title">{content.brand.title}</h2>
            </div>
            <dl className="brand-facts">
              <div>
                <dt>{content.brand.currentRoleLabel}</dt>
                <dd>{publicProfile.ventureRole}</dd>
              </div>
              <div>
                <dt>{content.brand.identityLabel}</dt>
                <dd>{publicProfile.brandRule[locale]}</dd>
              </div>
            </dl>
          </div>
        </Container>
      </Section>

      <Section className="links-section" labelledBy="links-title">
        <Container className="links-grid">
          <div className="section-heading section-heading--compact">
            <Eyebrow>{content.links.eyebrow}</Eyebrow>
            <h2 id="links-title">{content.links.title}</h2>
            <p>{content.links.intro}</p>
          </div>
          <div className="professional-links">
            {publicProfile.links.map((link) => (
              <a href={link.href} key={link.id} rel="noreferrer" target="_blank">
                {link.label}
                <span className="sr-only">{` (${content.links.externalNote})`}</span>
              </a>
            ))}
            <LinkButton href={getLocalizedPath(locale, "/contact")} variant="secondary">
              {content.links.contactLabel}
            </LinkButton>
          </div>
        </Container>
      </Section>
    </>
  );
}
