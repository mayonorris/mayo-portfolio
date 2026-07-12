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
    footer: {
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
      title: `${publicProfile.name} | Portfolio`,
      description:
        "Public bilingual portfolio for economic data science and analytical work.",
    },
    shell: {
      skipLink: "Skip to main content",
      brand: publicProfile.name,
      status: publicProfile.positioning,
      navLabel: "Primary navigation",
      footer: {
        linksLabel: "Professional links",
        externalNote: "opens in a new tab",
      },
    },
    navigation: {
      items: [
        { label: "Home", path: "/" },
        { label: "Work", path: "/work" },
        { label: "Research", path: "/research" },
        { label: "Writing", path: "/writing" },
        { label: "About", path: "/about" },
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
      title: `${publicProfile.name} | Portfolio`,
      description:
        "Portfolio public bilingue pour la data science économique et les travaux analytiques.",
    },
    shell: {
      skipLink: "Aller au contenu principal",
      brand: publicProfile.name,
      status: publicProfile.positioning,
      navLabel: "Navigation principale",
      footer: {
        linksLabel: "Liens professionnels",
        externalNote: "s’ouvre dans un nouvel onglet",
      },
    },
    navigation: {
      items: [
        { label: "Accueil", path: "/" },
        { label: "Projets", path: "/work" },
        { label: "Recherche", path: "/research" },
        { label: "Publications", path: "/writing" },
        { label: "À propos", path: "/about" },
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
