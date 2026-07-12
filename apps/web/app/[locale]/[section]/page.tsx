import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import { WorkVisual } from "@/components/work-visual";
import { getRoutePage, homeContent, routePages } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
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
  const page = getRoutePage(locale, section);

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
  const content = homeContent[locale];

  if (page.routeKey === "work") {
    return (
      <Section className="route-page route-page--work" labelledBy="route-page-title">
        <Container>
          <div className="route-page__heading">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{page.title}</h1>
            <p>{page.status}</p>
          </div>
          <div className="selected-work-grid selected-work-grid--route">
            {content.selectedWork.items.map((item) => (
              <article className="work-card" key={item.slug}>
                <WorkVisual variant={item.visual} />
                <div className="work-card__body">
                  <p className="work-card__category">{item.category}</p>
                  <h2>{item.title}</h2>
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
        </Container>
      </Section>
    );
  }

  if (page.routeKey === "experience") {
    return (
      <Section className="route-page route-page--experience" labelledBy="route-page-title">
        <Container>
          <div className="route-page__heading">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 id="route-page-title">{page.title}</h1>
            <p>{page.status}</p>
          </div>
          <div className="experience-timeline" aria-label={page.title}>
            {publicProfile.experiences.map((experience) => (
              <article className="experience-timeline__item" key={experience.id}>
                <div className="experience-timeline__meta">
                  <span>{experience.period[locale]}</span>
                  <span>{experience.marker[locale]}</span>
                </div>
                <div className="experience-timeline__body">
                  <h2>{experience.organization[locale]}</h2>
                  <p className="experience-timeline__role">{experience.role[locale]}</p>
                  <p>{experience.description[locale]}</p>
                </div>
              </article>
            ))}
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
