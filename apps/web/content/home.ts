import type { Locale } from "@/i18n/locales";

export type RouteSlug = "work" | "research" | "writing" | "about" | "contact";

export type HomeContent = {
  hero: {
    actionsLabel: string;
    primaryCta: string;
    secondaryCta: string;
    externalLinksLabel: string;
  };
  preview: {
    ariaLabel: string;
    label: string;
    caption: string;
    layers: string[];
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
  };
  brand: {
    eyebrow: string;
    title: string;
    label: string;
    text: string;
  };
  links: {
    eyebrow: string;
    title: string;
    intro: string;
    externalNote: string;
    contactLabel: string;
  };
};

export type RoutePageContent = {
  slug: RouteSlug;
  title: string;
  description: string;
  status: string;
  backHome: string;
};

export const homeContent = {
  en: {
    hero: {
      actionsLabel: "Portfolio actions",
      primaryCta: "View selected experience",
      secondaryCta: "Explore work",
      externalLinksLabel: "Professional links",
    },
    preview: {
      ariaLabel: "Abstract analytical preview with no real data",
      label: "Analytical frame",
      caption: "Abstract signal only",
      layers: ["Signal", "Evidence", "Decision"],
    },
    experience: {
      eyebrow: "EXPERIENCE",
      title: "Selected experience",
      intro:
        "A selection of roles and assignments across official statistics, economic analysis, data quality, and applied research.",
      listLabel: "Selected experience",
    },
    brand: {
      eyebrow: "CURRENT ROLE",
      title: "EM² Data & AI Lab",
      label: "Co-founder and Head of Data",
      text: "EM² Data & AI Lab is the current identity of the initiative originally developed as CaSEG.",
    },
    links: {
      eyebrow: "PROFESSIONAL LINKS",
      title: "Connect",
      intro: "Explore my technical work, professional background, or get in touch.",
      externalNote: "opens in a new tab",
      contactLabel: "Contact",
    },
  },
  fr: {
    hero: {
      actionsLabel: "Actions du portfolio",
      primaryCta: "Voir les expériences sélectionnées",
      secondaryCta: "Découvrir les projets",
      externalLinksLabel: "Liens professionnels",
    },
    preview: {
      ariaLabel: "Aperçu analytique abstrait sans données réelles",
      label: "Cadre analytique",
      caption: "Signal abstrait uniquement",
      layers: ["Signal", "Preuve", "Décision"],
    },
    experience: {
      eyebrow: "EXPÉRIENCE",
      title: "Expériences sélectionnées",
      intro:
        "Une sélection de fonctions et de missions en statistique publique, analyse économique, qualité des données et recherche appliquée.",
      listLabel: "Expériences sélectionnées",
    },
    brand: {
      eyebrow: "FONCTION ACTUELLE",
      title: "EM² Data & AI Lab",
      label: "Cofondateur et responsable Data",
      text: "EM² Data & AI Lab est l’identité actuelle de l’initiative initialement développée sous le nom de CaSEG.",
    },
    links: {
      eyebrow: "LIENS PROFESSIONNELS",
      title: "Échangeons",
      intro: "Découvrez mes travaux techniques, mon parcours professionnel ou contactez-moi.",
      externalNote: "s’ouvre dans un nouvel onglet",
      contactLabel: "Contact",
    },
  },
} satisfies Record<Locale, HomeContent>;

export const routePages = {
  en: [
    {
      slug: "work",
      title: "Work",
      description: "Selected work section.",
      status: "Selected work will appear here as the portfolio expands.",
      backHome: "Back to home",
    },
    {
      slug: "research",
      title: "Research",
      description: "Research section.",
      status: "Research notes and reproducible work will appear here later.",
      backHome: "Back to home",
    },
    {
      slug: "writing",
      title: "Writing",
      description: "Writing section.",
      status: "Writing and publications will appear here later.",
      backHome: "Back to home",
    },
    {
      slug: "about",
      title: "About",
      description: "About section.",
      status: "A fuller profile will appear here later.",
      backHome: "Back to home",
    },
    {
      slug: "contact",
      title: "Contact",
      description: "Contact section.",
      status: "For now, use the professional links on the homepage.",
      backHome: "Back to home",
    },
  ],
  fr: [
    {
      slug: "work",
      title: "Projets",
      description: "Section projets.",
      status: "Une sélection de projets apparaîtra ici à mesure que le portfolio s’enrichit.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "research",
      title: "Recherche",
      description: "Section recherche.",
      status: "Les notes de recherche et travaux reproductibles apparaîtront ici ultérieurement.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "writing",
      title: "Publications",
      description: "Section publications.",
      status: "Les textes et publications apparaîtront ici ultérieurement.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "about",
      title: "À propos",
      description: "Section à propos.",
      status: "Un profil plus complet apparaîtra ici ultérieurement.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "contact",
      title: "Contact",
      description: "Section contact.",
      status: "Pour le moment, utilisez les liens professionnels de la page d’accueil.",
      backHome: "Retour à l’accueil",
    },
  ],
} satisfies Record<Locale, RoutePageContent[]>;

export function getRoutePage(locale: Locale, slug: string) {
  return routePages[locale].find((page) => page.slug === slug);
}
