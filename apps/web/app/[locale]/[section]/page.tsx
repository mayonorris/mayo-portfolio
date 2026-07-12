import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
import { getRoutePage, routePages } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";
import { getLocalizedPath } from "@/lib/routes";

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
    routePages[locale].map((page) => ({ locale, section: page.slug })),
  );
}

export async function generateMetadata({
  params,
}: RoutePageProps): Promise<Metadata> {
  const { locale: localeParam, section } = await params;
  const locale = parseLocale(localeParam);
  const page = parseRoutePage(locale, section);

  return {
    title: `${page.title} | ${publicProfile.name}`,
    description: page.description,
    alternates: {
      canonical: getLocalizedPath(locale, `/${page.slug}`),
      languages: {
        en: getLocalizedPath("en", `/${page.slug}`),
        fr: getLocalizedPath("fr", `/${page.slug}`),
        "x-default": getLocalizedPath(defaultLocale, `/${page.slug}`),
      },
    },
  };
}

export default async function LocalizedRoutePage({ params }: RoutePageProps) {
  const { locale: localeParam, section } = await params;
  const locale = parseLocale(localeParam);
  const page = parseRoutePage(locale, section);

  return (
    <Section className="route-placeholder" labelledBy="route-placeholder-title">
      <Container className="route-placeholder__inner">
        <Eyebrow>{publicProfile.positioning}</Eyebrow>
        <h1 id="route-placeholder-title">{page.title}</h1>
        <p>{page.status}</p>
        <LinkButton href={getLocalizedPath(locale, "/")} variant="secondary">
          {page.backHome}
        </LinkButton>
      </Container>
    </Section>
  );
}
