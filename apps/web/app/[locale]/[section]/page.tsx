import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import { WorkVisual } from "@/components/work-visual";
import { aboutContent } from "@/content/about";
import { experienceContent } from "@/content/experience";
import { getExternalProjectLink } from "@/content/external-links";
import { routePages } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
import { workContent } from "@/content/work";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";
import { getCaseStudyPath, getLocalizedPath, getLocalizedRoutePath } from "@/lib/routes";

type RoutePageProps = {
  params: Promise<{ locale: string; section: string }>;
};

function parseLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

function parseRoutePage(locale: Locale, section: string) {
  const page = routePages[locale].find((routePage) => routePage.path === section);

  if (!page) {
    notFound();
  }

  return page;
}

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    routePages[locale].map((page) => ({ locale, section: page.path })),
  );
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { locale: localeParam, section } = await params;
  const locale = parseLocale(localeParam);
  const page = parseRoutePage(locale, section);

  const title = `${page.title} | ${publicProfile.shortName}`;

  return {
    title,
    description: page.description,
    openGraph: {
      title,
      description: page.description,
      siteName: "Mayo Kadanga Portfolio",
      type: "website",
      locale,
    },
    alternates: {
      canonical: getLocalizedRoutePath(locale, page.routeKey),
      languages: {
        en: getLocalizedRoutePath("en", page.routeKey),
        fr: getLocalizedRoutePath("fr", page.routeKey),
        "x-default": getLocalizedRoutePath(defaultLocale, page.routeKey),
      },
    },
  };
}

export default async function LocalizedRoutePage({ params }: RoutePageProps) {
  const { locale: localeParam, section } = await params;
  const locale = parseLocale(localeParam);
  const page = parseRoutePage(locale, section);

  if (page.routeKey === "about") {
    const about = aboutContent[locale];

    return (
      <Section className="route-page about-page" labelledBy="about-page-title">
        <Container className="about-page__hero">
          <div className="about-page__copy">
            <Eyebrow>{about.hero.eyebrow}</Eyebrow>
            <h1 id="about-page-title">{about.hero.name}</h1>
            <p className="about-page__descriptor">{about.hero.descriptor}</p>
            <p className="about-page__statement">{about.hero.statement}</p>
          </div>
          <aside className="about-page__portrait" aria-label={about.portrait.label}>
            <div className="about-page__monogram" aria-hidden="true">
              {about.portrait.monogram}
            </div>
            <p>{about.portrait.note}</p>
          </aside>
        </Container>
        <Container className="about-page__sections">
          {about.sections.map((aboutSection) => (
            <article className="about-page__section" key={aboutSection.title}>
              <Eyebrow>{aboutSection.eyebrow}</Eyebrow>
              <h2>{aboutSection.title}</h2>
              <p>{aboutSection.body}</p>
            </article>
          ))}
        </Container>
        <Container className="about-page__cta-row">
          <LinkButton href={getLocalizedPath(locale, "/experience")}>{about.ctas.experience}</LinkButton>
          <LinkButton href={getLocalizedPath(locale, "/work")} variant="secondary">
            {about.ctas.work}
          </LinkButton>
          <LinkButton href={getLocalizedPath(locale, "/contact")} variant="secondary">
            {about.ctas.contact}
          </LinkButton>
        </Container>
      </Section>
    );
  }

  if (page.routeKey === "work") {
    const work = workContent[locale];
    const additionalLink = getExternalProjectLink(work.additionalBuild.linkId, locale);

    return (
      <Section className="route-page route-page--work" labelledBy="route-page-title">
        <Container>
          <div className="route-page__heading">
            <Eyebrow>{work.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{page.title}</h1>
            <p>{work.intro}</p>
          </div>
          <div className="selected-work-grid selected-work-grid--route">
            {work.items.map((item) => {
              const liveLink = item.liveLinkId
                ? getExternalProjectLink(item.liveLinkId, locale)
                : null;

              return (
                <article className="work-card" key={item.slug}>
                  <WorkVisual variant={item.visual} />
                  <div className="work-card__body">
                    <p className="work-card__category">{item.category}</p>
                    <h2>{item.title}</h2>
                    <p>{item.scope}</p>
                    <p className="work-card__role">
                      <span>{work.roleLabel}</span>
                      {item.role}
                    </p>
                    <div className="work-card__actions">
                      <LinkButton href={getCaseStudyPath(locale, item.slug)}>
                        {work.cardCta}
                      </LinkButton>
                      {liveLink ? (
                        <LinkButton
                          ariaLabel={liveLink.accessibleLabel}
                          href={liveLink.href}
                          isExternal
                          variant="secondary"
                        >
                          {liveLink.label}
                        </LinkButton>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <article className="additional-build" aria-labelledby="additional-build-title">
            <div>
              <Eyebrow>{work.additionalBuild.eyebrow}</Eyebrow>
              <h2 id="additional-build-title">{work.additionalBuild.title}</h2>
              <p className="additional-build__category">{work.additionalBuild.category}</p>
              <p>{work.additionalBuild.description}</p>
            </div>
            <LinkButton
              ariaLabel={additionalLink.accessibleLabel}
              href={additionalLink.href}
              isExternal
              variant="secondary"
            >
              {additionalLink.label}
            </LinkButton>
          </article>
        </Container>
      </Section>
    );
  }

  if (page.routeKey === "experience") {
    const experience = experienceContent[locale];

    return (
      <Section className="route-page route-page--experience" labelledBy="route-page-title">
        <Container>
          <div className="route-page__heading">
            <Eyebrow>{experience.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{experience.title}</h1>
            <p>{experience.intro}</p>
          </div>
          <ol className="experience-timeline" aria-label={experience.title} role="list">
            {experience.entries.map((entry) => (
              <li className="experience-timeline__item" key={entry.id}>
                <div className="experience-timeline__meta">
                  <span>{entry.category[locale]}</span>
                  <time>{entry.period[locale]}</time>
                </div>
                <div className="experience-timeline__body">
                  <h2>{entry.role[locale]}</h2>
                  <p className="experience-timeline__organization">
                    {entry.organization}
                    {entry.location ? <span>{entry.location[locale]}</span> : null}
                  </p>
                  <p>{entry.description[locale]}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="experience-timeline__actions">
            <LinkButton href={getLocalizedPath(locale, "/work")}>{experience.ctas.work}</LinkButton>
            <LinkButton href={getLocalizedPath(locale, "/contact")} variant="secondary">
              {experience.ctas.contact}
            </LinkButton>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="route-page" labelledBy="route-page-title">
      <Container className="route-page__inner">
        <Eyebrow>{page.eyebrow}</Eyebrow>
        <h1 id="route-page-title">{page.title}</h1>
        <p>{page.status}</p>
        <LinkButton href={getLocalizedPath(locale, "/")} variant="secondary">
          {page.backHome}
        </LinkButton>
      </Container>
    </Section>
  );
}