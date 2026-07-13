import { publicProfile } from "@/content/public-profile";
import type { Locale } from "./locales";

type NavItem = {
  label: string;
  path: string;
};

export type Dictionary = {
  metadata: {
    title: string;
    description: string;
  };
  shell: {
    skipLink: string;
    brand: string;
    status: string;
    navLabel: string;
    cta: string;
    footer: {
      signatureLabel: string;
      linksLabel: string;
      externalNote: string;
    };
  };
  navigation: {
    items: NavItem[];
  };
  languageSwitcher: {
    ariaLabel: string;
    current: string;
    switchTo: Record<Locale, string>;
    names: Record<Locale, string>;
    shortNames: Record<Locale, string>;
  };
  themeToggle: {
    label: string;
    light: string;
    dark: string;
    switchTo: {
      light: string;
      dark: string;
    };
  };
};

export const dictionaries = {
  en: {
    metadata: {
      title: `${publicProfile.shortName} | Portfolio`,
      description:
        "Economic data science, analytical systems, selected work, research, writing and contact.",
    },
    shell: {
      skipLink: "Skip to main content",
      brand: publicProfile.shortName,
      status: publicProfile.compactDescriptor,
      navLabel: "Primary navigation",
      cta: "Experience",
      footer: {
        signatureLabel: "Signature",
        linksLabel: "Footer navigation",
        externalNote: "opens in a new tab",
      },
    },
    navigation: {
      items: [
        { label: "Work", path: "/work" },
        { label: "Research", path: "/research" },
        { label: "Writing", path: "/writing" },
        { label: "About", path: "/about" },
        { label: "Experience", path: "/experience" },
        { label: "Contact", path: "/contact" },
      ],
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
        fr: "Français",
      },
      shortNames: {
        en: "EN",
        fr: "FR",
      },
    },
    themeToggle: {
      label: "Theme",
      light: "Light",
      dark: "Dark",
      switchTo: {
        light: "Switch to light theme",
        dark: "Switch to dark theme",
      },
    },
  },
  fr: {
    metadata: {
      title: `${publicProfile.shortName} | Portfolio`,
      description:
        "Data science économique, systèmes analytiques, travaux sélectionnés, recherche, publications et contact.",
    },
    shell: {
      skipLink: "Aller au contenu principal",
      brand: publicProfile.shortName,
      status: publicProfile.compactDescriptor,
      navLabel: "Navigation principale",
      cta: "Parcours",
      footer: {
        signatureLabel: "Signature",
        linksLabel: "Navigation de pied de page",
        externalNote: "s’ouvre dans un nouvel onglet",
      },
    },
    navigation: {
      items: [
        { label: "Projets", path: "/work" },
        { label: "Recherche", path: "/research" },
        { label: "Publications", path: "/writing" },
        { label: "À propos", path: "/about" },
        { label: "Parcours", path: "/experience" },
        { label: "Contact", path: "/contact" },
      ],
    },
    languageSwitcher: {
      ariaLabel: "Sélecteur de langue",
      current: "Langue active",
      switchTo: {
        en: "Passer en anglais",
        fr: "Passer en français",
      },
      names: {
        en: "English",
        fr: "Français",
      },
      shortNames: {
        en: "EN",
        fr: "FR",
      },
    },
    themeToggle: {
      label: "Thème",
      light: "Clair",
      dark: "Sombre",
      switchTo: {
        light: "Passer au thème clair",
        dark: "Passer au thème sombre",
      },
    },
  },
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
