import type { Locale } from "@/i18n/locales";

export type ExternalProjectLinkId = "em2" | "currencyConverter";

export type ExternalProjectLink = {
  id: ExternalProjectLinkId;
  href: Record<Locale, string>;
  label: Record<Locale, string>;
  accessibleLabel: Record<Locale, string>;
};

export const externalProjectLinks = {
  em2: {
    id: "em2",
    href: {
      en: "https://em2lab.org/en",
      fr: "https://em2lab.org/fr",
    },
    label: {
      en: "Visit live site",
      fr: "Voir le site",
    },
    accessibleLabel: {
      en: "Visit the EM² Data & AI Lab live site",
      fr: "Voir le site public EM² Data & AI Lab",
    },
  },
  currencyConverter: {
    id: "currencyConverter",
    href: {
      en: "https://mayo-currency-converter.netlify.app/",
      fr: "https://mayo-currency-converter.netlify.app/",
    },
    label: {
      en: "Open live project",
      fr: "Ouvrir le projet",
    },
    accessibleLabel: {
      en: "Open the Currency Converter live project",
      fr: "Ouvrir le projet en ligne Convertisseur de devises",
    },
  },
} satisfies Record<ExternalProjectLinkId, ExternalProjectLink>;

export function getExternalProjectLink(
  id: ExternalProjectLinkId,
  locale: Locale,
) {
  const link = externalProjectLinks[id];

  return {
    href: link.href[locale],
    label: link.label[locale],
    accessibleLabel: link.accessibleLabel[locale],
  };
}
