import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/lib/routes";

export type ResearchEntry = {
  id: string;
  type: string;
  title: string;
  description: string;
  status: string;
};

export type ResearchContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  entries: ResearchEntry[];
  ctas: {
    primary: string;
    primaryRoute: RouteKey;
    secondary: string;
    secondaryRoute: RouteKey;
  };
  preview: {
    kind: string;
    title: string;
    body: string;
    cta: string;
    routeKey: RouteKey;
  };
};

export const researchContent = {
  en: {
    hero: {
      eyebrow: "RESEARCH",
      title: "Applied research for economic and institutional decisions",
      intro:
        "My research connects econometrics, official statistics and data systems to questions of financial inclusion, public policy and economic dynamics.",
    },
    entries: [
      {
        id: "financial-inclusion-mobile-money",
        type: "Applied study",
        title: "Financial inclusion and mobile-money adoption",
        description:
          "An applied analysis of financial inclusion using FinScope Benin 2018 microdata and multivariate and binary-choice modelling.",
        status: "Completed study",
      },
      {
        id: "exchange-rate-volatility-waemu",
        type: "Applied econometrics",
        title: "Exchange-rate volatility and trade in the WAEMU",
        description:
          "A study of exchange-rate volatility and regional trade using econometric modelling and macroeconomic data.",
        status: "Completed study",
      },
      {
        id: "decentralization-living-conditions",
        type: "Public-policy evaluation",
        title: "Decentralization and local living conditions",
        description:
          "A methodological and analytical framework for evaluating how decentralization relates to local living conditions in Togo.",
        status: "Ongoing applied work",
      },
      {
        id: "macro-financial-vulnerabilities",
        type: "Research agenda",
        title: "Macro-financial vulnerabilities and growth reversals",
        description:
          "A research agenda on early-warning systems for macro-financial vulnerabilities and growth reversals in West Africa.",
        status: "Research agenda",
      },
    ],
    ctas: {
      primary: "Explore selected work",
      primaryRoute: "work",
      secondary: "Read technical notes",
      secondaryRoute: "writing",
    },
    preview: {
      kind: "Research",
      title: "Applied research for decisions",
      body:
        "Econometrics, official statistics and data systems applied to financial inclusion, public policy and economic dynamics.",
      cta: "Go to research",
      routeKey: "research",
    },
  },
  fr: {
    hero: {
      eyebrow: "RECHERCHE",
      title:
        "Une recherche appliquée au service des décisions économiques et institutionnelles",
      intro:
        "Mes travaux relient économétrie, statistique officielle et systèmes de données aux questions d’inclusion financière, de politique publique et de dynamiques économiques.",
    },
    entries: [
      {
        id: "financial-inclusion-mobile-money",
        type: "Étude appliquée",
        title: "Inclusion financière et adoption du mobile money",
        description:
          "Une analyse appliquée de l’inclusion financière à partir des microdonnées FinScope Bénin 2018 et de méthodes multivariées et de choix binaire.",
        status: "Étude achevée",
      },
      {
        id: "exchange-rate-volatility-waemu",
        type: "Économétrie appliquée",
        title: "Volatilité du taux de change et commerce dans l’UEMOA",
        description:
          "Une étude de la volatilité du taux de change et du commerce régional à partir de modèles économétriques et de données macroéconomiques.",
        status: "Étude achevée",
      },
      {
        id: "decentralization-living-conditions",
        type: "Évaluation de politique publique",
        title: "Décentralisation et conditions de vie locales",
        description:
          "Un cadre méthodologique et analytique pour évaluer les liens entre la décentralisation et les conditions de vie locales au Togo.",
        status: "Travail appliqué en cours",
      },
      {
        id: "macro-financial-vulnerabilities",
        type: "Agenda de recherche",
        title: "Vulnérabilités macrofinancières et retournements de croissance",
        description:
          "Un agenda de recherche sur les systèmes d’alerte précoce appliqués aux vulnérabilités macrofinancières et aux retournements de croissance en Afrique de l’Ouest.",
        status: "Agenda de recherche",
      },
    ],
    ctas: {
      primary: "Découvrir les projets",
      primaryRoute: "work",
      secondary: "Lire les notes techniques",
      secondaryRoute: "writing",
    },
    preview: {
      kind: "Recherche",
      title: "Recherche appliquée pour la décision",
      body:
        "Économétrie, statistique officielle et systèmes de données appliqués à l’inclusion financière, aux politiques publiques et aux dynamiques économiques.",
      cta: "Aller à la recherche",
      routeKey: "research",
    },
  },
} satisfies Record<Locale, ResearchContent>;
