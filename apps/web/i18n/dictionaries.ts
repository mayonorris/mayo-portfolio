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
      label: string;
      status: string;
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
  home: {
    eyebrow: string;
    title: string;
    body: string;
    actionsLabel: string;
    preview: {
      ariaLabel: string;
      label: string;
      caption: string;
      layers: string[];
    };
  };
};

export const dictionaries = {
  en: {
    metadata: {
      title: "Portfolio visual foundation",
      description:
        "Technical visual foundation for the bilingual public portfolio.",
    },
    shell: {
      skipLink: "Skip to main content",
      brand: "Portfolio System",
      status: "Sprint 1 visual foundation",
      navLabel: "Primary navigation",
      footer: {
        label: "Editorial Intelligence",
        status: "Technical foundation. Public content is pending validation.",
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
    home: {
      eyebrow: "PORTFOLIO SYSTEM PREVIEW",
      title: "Editorial intelligence for complex decisions",
      body: "Visual foundation under active development.",
      actionsLabel: "Preview navigation",
      preview: {
        ariaLabel: "Abstract analytical preview with no real data",
        label: "System preview",
        caption: "Abstract visual structure only",
        layers: ["Signal", "Evidence", "Decision"],
      },
    },
  },
  fr: {
    metadata: {
      title: "Fondation visuelle du portfolio",
      description:
        "Fondation visuelle technique pour le portfolio public bilingue.",
    },
    shell: {
      skipLink: "Aller au contenu principal",
      brand: "Système Portfolio",
      status: "Fondation visuelle Sprint 1",
      navLabel: "Navigation principale",
      footer: {
        label: "Editorial Intelligence",
        status: "Fondation technique. Le contenu public reste à valider.",
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
    home: {
      eyebrow: "APERÇU DU SYSTÈME DE PORTFOLIO",
      title: "Une intelligence éditoriale au service des décisions complexes",
      body: "Fondation visuelle en cours de développement.",
      actionsLabel: "Navigation de prévisualisation",
      preview: {
        ariaLabel: "Aperçu analytique abstrait sans données réelles",
        label: "Aperçu système",
        caption: "Structure visuelle abstraite uniquement",
        layers: ["Signal", "Preuve", "Décision"],
      },
    },
  },
} satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
