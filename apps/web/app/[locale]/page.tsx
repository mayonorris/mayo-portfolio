import { notFound } from "next/navigation";
import { AnalyticalPreview } from "@/components/analytical-preview";
import { Container } from "@/components/container";
import { Divider } from "@/components/divider";
import { Eyebrow } from "@/components/eyebrow";
import { LinkButton } from "@/components/link-button";
import { Section } from "@/components/section";
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
  const [homeItem, workItem, researchItem] = dictionary.navigation.items;

  return (
    <Section className="hero-section" labelledBy="hero-title">
      <Container className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>{dictionary.home.eyebrow}</Eyebrow>
          <h1 className="hero-title" id="hero-title">
            {dictionary.home.title}
          </h1>
          <p className="hero-lead">{dictionary.home.body}</p>
          <Divider />
          <div className="hero-actions" aria-label={dictionary.home.actionsLabel}>
            <LinkButton href={getLocalizedPath(locale, homeItem.path)}>
              {homeItem.label}
            </LinkButton>
            <LinkButton
              href={getLocalizedPath(locale, workItem.path)}
              variant="secondary"
            >
              {workItem.label}
            </LinkButton>
            <LinkButton
              href={getLocalizedPath(locale, researchItem.path)}
              variant="secondary"
            >
              {researchItem.label}
            </LinkButton>
          </div>
        </div>
        <AnalyticalPreview labels={dictionary.home.preview} />
      </Container>
    </Section>
  );
}
