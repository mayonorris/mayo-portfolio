import type { Locale } from "./locales";

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  shell: {
    skipLink: string;
    label: string;
    status: string;
    footer: string;
  };
  languageSwitcher: {
    ariaLabel: string;
    current: string;
    switchTo: Record<Locale, string>;
    names: Record<Locale, string>;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    checksLabel: string;
    checks: string[];
  };
};

export const dictionaries = {
  en: {
    metadata: {
      title: "Portfolio routing scaffold",
      description: "Technical bilingual routing scaffold for the public portfolio.",
    },
    shell: {
      skipLink: "Skip to main content",
      label: "Portfolio web scaffold",
      status: "Sprint 1 routing foundation",
      footer: "Technical placeholder. Public content is not loaded yet.",
    },
    languageSwitcher: {
      ariaLabel: "Language switcher",
      current: "Current language",
      switchTo: {
        en: "Switch to English",
        fr: "Switch to French",
      },
      names: {
        en: "English",
        fr: "Francais",
      },
    },
    home: {
      eyebrow: "Locale route ready",
      title: "English technical scaffold",
      intro:
        "This provisional page validates locale routing, metadata, dictionaries, and the shared application shell before real portfolio content is added.",
      checksLabel: "Current checks",
      checks: [
        "App Router segment: /en",
        "Typed locale dictionary loaded",
        "Language switcher points to /fr",
      ],
    },
  },
  fr: {
    metadata: {
      title: "Socle de routage du portfolio",
      description: "Socle technique bilingue du routage pour le portfolio public.",
    },
    shell: {
      skipLink: "Aller au contenu principal",
      label: "Socle web du portfolio",
      status: "Fondation du routage Sprint 1",
      footer: "Espace technique provisoire. Aucun contenu public final n'est charge.",
    },
    languageSwitcher: {
      ariaLabel: "Selecteur de langue",
      current: "Langue active",
      switchTo: {
        en: "Passer en anglais",
        fr: "Passer en francais",
      },
      names: {
        en: "English",
        fr: "Francais",
      },
    },
    home: {
      eyebrow: "Route locale prete",
      title: "Socle technique francais",
      intro:
        "Cette page provisoire valide le routage par langue, les metadonnees, les dictionnaires et le shell partage avant l'ajout du contenu reel du portfolio.",
      checksLabel: "Controles actuels",
      checks: [
        "Segment App Router : /fr",
        "Dictionnaire de locale type charge",
        "Le selecteur de langue pointe vers /en",
      ],
    },
  },
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}