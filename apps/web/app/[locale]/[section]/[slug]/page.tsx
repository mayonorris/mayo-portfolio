import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import { WorkVisual } from "@/components/work-visual";
import { getSelectedWorkItem, homeContent, routePages } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
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

    return homeContent[locale].selectedWork.items.map((item) => ({
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
  const content = homeContent[locale];

  if (!item) {
    notFound();
  }

  return (
    <Section className="case-page" labelledBy="case-page-title">
      <Container className="case-page__grid">
        <div className="case-page__copy">
          <Eyebrow>{item.category}</Eyebrow>
          <h1 id="case-page-title">{item.title}</h1>
          <p>{item.scope}</p>
          <dl className="case-page__meta">
            <div>
              <dt>{content.selectedWork.roleLabel}</dt>
              <dd>{item.role}</dd>
            </div>
          </dl>
          <div className="case-page__actions">
            <LinkButton href={getLocalizedPath(locale, "/work")} variant="secondary">
              {content.selectedWork.viewAll}
            </LinkButton>
            <LinkButton href={getLocalizedPath(locale, "/contact")}>
              {content.contact.cta}
            </LinkButton>
          </div>
        </div>
        <WorkVisual variant={item.visual} />
      </Container>
    </Section>
  );
}
