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
    currentRoleLabel: string;
    identityLabel: string;
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
      actionsLabel: "Public portfolio actions",
      primaryCta: "View selected experience",
      secondaryCta: "Explore work",
      externalLinksLabel: "Validated professional links",
    },
    preview: {
      ariaLabel: "Abstract analytical preview with no real data",
      label: "Analytical frame",
      caption: "Abstract signal only",
      layers: ["Signal", "Evidence", "Decision"],
    },
    experience: {
      eyebrow: "Validated experience",
      title: "Selected experience",
      intro:
        "Five public experience entries validated for this first homepage MVP.",
      listLabel: "Selected validated experience",
    },
    brand: {
      eyebrow: "Current public identity",
      title: "EM² Data & AI Lab",
      currentRoleLabel: "Current role",
      identityLabel: "Public identity rule",
    },
    links: {
      eyebrow: "Professional links",
      title: "Connect through validated public channels",
      intro:
        "GitHub and LinkedIn are the only professional links approved for this MVP.",
      externalNote: "opens in a new tab",
      contactLabel: "Contact",
    },
  },
  fr: {
    hero: {
      actionsLabel: "Actions du portfolio public",
      primaryCta: "Voir les expériences sélectionnées",
      secondaryCta: "Découvrir les projets",
      externalLinksLabel: "Liens professionnels validés",
    },
    preview: {
      ariaLabel: "Aperçu analytique abstrait sans données réelles",
      label: "Cadre analytique",
      caption: "Signal abstrait uniquement",
      layers: ["Signal", "Preuve", "Décision"],
    },
    experience: {
      eyebrow: "Expériences validées",
      title: "Expériences sélectionnées",
      intro:
        "Cinq entrées d’expérience publique validées pour ce premier MVP de page d’accueil.",
      listLabel: "Expériences validées sélectionnées",
    },
    brand: {
      eyebrow: "Identité publique actuelle",
      title: "EM² Data & AI Lab",
      currentRoleLabel: "Fonction actuelle",
      identityLabel: "Règle d’identité publique",
    },
    links: {
      eyebrow: "Liens professionnels",
      title: "Échanger via les canaux publics validés",
      intro:
        "GitHub et LinkedIn sont les seuls liens professionnels approuvés pour ce MVP.",
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
      description: "Selected work section in preparation.",
      status:
        "This section is in preparation. Validated projects will be added after content review.",
      backHome: "Back to home",
    },
    {
      slug: "research",
      title: "Research",
      description: "Research section in preparation.",
      status:
        "This section is in preparation. Validated research content will be added later.",
      backHome: "Back to home",
    },
    {
      slug: "writing",
      title: "Writing",
      description: "Writing section in preparation.",
      status:
        "This section is in preparation. Validated writing and publications will be added later.",
      backHome: "Back to home",
    },
    {
      slug: "about",
      title: "About",
      description: "About section in preparation.",
      status:
        "This section is in preparation. Only validated public profile content will be added.",
      backHome: "Back to home",
    },
    {
      slug: "contact",
      title: "Contact",
      description: "Contact section in preparation.",
      status:
        "This section is in preparation. No private contact details are published in this MVP.",
      backHome: "Back to home",
    },
  ],
  fr: [
    {
      slug: "work",
      title: "Projets",
      description: "Section projets en préparation.",
      status:
        "Cette section est en préparation. Les projets validés seront ajoutés après revue du contenu.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "research",
      title: "Recherche",
      description: "Section recherche en préparation.",
      status:
        "Cette section est en préparation. Les contenus de recherche validés seront ajoutés ultérieurement.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "writing",
      title: "Publications",
      description: "Section publications en préparation.",
      status:
        "Cette section est en préparation. Les publications et textes validés seront ajoutés ultérieurement.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "about",
      title: "À propos",
      description: "Section à propos en préparation.",
      status:
        "Cette section est en préparation. Seuls les contenus de profil public validés seront ajoutés.",
      backHome: "Retour à l’accueil",
    },
    {
      slug: "contact",
      title: "Contact",
      description: "Section contact en préparation.",
      status:
        "Cette section est en préparation. Aucune coordonnée privée n’est publiée dans ce MVP.",
      backHome: "Retour à l’accueil",
    },
  ],
} satisfies Record<Locale, RoutePageContent[]>;

export function getRoutePage(locale: Locale, slug: string) {
  return routePages[locale].find((page) => page.slug === slug);
}
