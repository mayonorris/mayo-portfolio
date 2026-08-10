import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import { WorkVisual } from "@/components/work-visual";
import { getExternalProjectLink } from "@/content/external-links";
import { routePages } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
import { getCaseStudyContent, getSelectedWorkItem, workContent } from "@/content/work";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";
import { getCaseStudyPath, getLocalizedPath, getRouteKeyForLocalizedSegment } from "@/lib/routes";

type CasePageProps = {
  params: Promise<{ locale: string; section: string; slug: string }>;
};

function parseLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

function assertWorkSection(locale: Locale, section: string) {
  if (getRouteKeyForLocalizedSegment(locale, section) !== "work") {
    notFound();
  }
}

export function generateStaticParams() {
  return locales.flatMap((locale) => {
    const workPage = routePages[locale].find((page) => page.routeKey === "work");

    if (!workPage) {
      return [];
    }

    return workContent[locale].items.map((item) => ({
      locale,
      section: workPage.path,
      slug: item.slug,
    }));
  });
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { locale: localeParam, section, slug } = await params;
  const locale = parseLocale(localeParam);
  assertWorkSection(locale, section);
  const item = getSelectedWorkItem(locale, slug);

  if (!item) {
    notFound();
  }

  const title = `${item.title} | ${publicProfile.shortName}`;

  return {
    title,
    description: item.scope,
    openGraph: {
      title,
      description: item.scope,
      siteName: "Mayo Kadanga Portfolio",
      type: "article",
      locale,
      images: [{ url: `/${locale}/opengraph-image`, width: 1200, height: 630, alt: "Mayo Kadanga portfolio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.scope,
      images: [`/${locale}/opengraph-image`],
    },
    alternates: {
      canonical: getCaseStudyPath(locale, item.slug),
      languages: {
        en: getCaseStudyPath("en", item.slug),
        fr: getCaseStudyPath("fr", item.slug),
        "x-default": getCaseStudyPath(defaultLocale, item.slug),
      },
    },
  };
}

export default async function CasePage({ params }: CasePageProps) {
  const { locale: localeParam, section, slug } = await params;
  const locale = parseLocale(localeParam);
  assertWorkSection(locale, section);
  const item = getSelectedWorkItem(locale, slug);
  const work = workContent[locale];
  const caseContent = getCaseStudyContent(locale, slug);

  if (!item || !caseContent) {
    notFound();
  }

  const liveLink = item.liveLinkId ? getExternalProjectLink(item.liveLinkId, locale) : null;

  return (
    <Section className="case-page" labelledBy="case-page-title">
      <Container className="case-page__grid">
        <div className="case-page__copy">
          <Eyebrow>{item.category}</Eyebrow>
          <h1 id="case-page-title">{item.title}</h1>
          <p>{item.scope}</p>
          <dl className="case-page__meta">
            <div>
              <dt>{work.roleLabel}</dt>
              <dd>{item.role}</dd>
            </div>
            {item.period ? (
              <div>
                <dt>{work.periodLabel}</dt>
                <dd>{item.period}</dd>
              </div>
            ) : null}
          </dl>
          <div className="case-page__actions">
            <LinkButton href={getLocalizedPath(locale, "/work")} variant="secondary">
              {caseContent.backToWork}
            </LinkButton>
            {liveLink && caseContent.liveSiteCta ? (
              <LinkButton
                ariaLabel={liveLink.accessibleLabel}
                href={liveLink.href}
                isExternal
                variant="secondary"
              >
                {caseContent.liveSiteCta}
              </LinkButton>
            ) : null}
            <LinkButton href={getLocalizedPath(locale, "/contact")}>
              {caseContent.contactCta}
            </LinkButton>
          </div>
        </div>
        <WorkVisual variant={item.visual} />
      </Container>
      <Container className="case-page__sections">
        {caseContent.sections.map((caseSection) => (
          <article
            className={`case-page__section case-page__section--${caseSection.kind ?? "standard"}`}
            key={caseSection.title}
          >
            <Eyebrow>{caseSection.eyebrow}</Eyebrow>
            <h2>{caseSection.title}</h2>
            {Array.isArray(caseSection.body) ? (
              caseSection.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <p>{caseSection.body}</p>
            )}
            {caseSection.steps ? (
              <ol className="case-page__workflow">
                {caseSection.steps.map((step) => <li key={step}>{step}</li>)}
              </ol>
            ) : null}
          </article>
        ))}
      </Container>
    </Section>
  );
}