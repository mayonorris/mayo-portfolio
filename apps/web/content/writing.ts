import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/lib/routes";

export type WritingEntry = {
  id: string;
  type: string;
  title: string;
  description: string;
  status: string;
};

export type WritingContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  entries: WritingEntry[];
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

export const writingContent = {
  en: {
    hero: {
      eyebrow: "WRITING",
      title: "Technical notes, methods and analytical explanations",
      intro:
        "Writing is where methods become reusable: concise notes, implementation guides and explanations for analysts, students and decision-makers.",
    },
    entries: [
      {
        id: "seasonal-adjustment-r",
        type: "Technical note",
        title: "Reproducible seasonal adjustment with R",
        description:
          "A planned technical note on reproducible seasonal-adjustment workflows and transparent analytical documentation.",
        status: "In preparation",
      },
      {
        id: "survey-design-data-systems",
        type: "Method note",
        title: "Survey design, sampling and field-ready data systems",
        description:
          "A planned method note on survey design, sampling logic and practical data systems for field operations.",
        status: "In preparation",
      },
      {
        id: "econometric-workflows",
        type: "Analytical guide",
        title: "Econometric workflows from specification to interpretation",
        description:
          "A planned analytical guide on moving from model specification to careful interpretation and reporting.",
        status: "In preparation",
      },
      {
        id: "decision-ready-products",
        type: "Implementation note",
        title: "Building decision-ready analytical products",
        description:
          "A planned implementation note on turning analysis into usable tools, interfaces and decision materials.",
        status: "In preparation",
      },
    ],
    ctas: {
      primary: "Explore research",
      primaryRoute: "research",
      secondary: "View selected work",
      secondaryRoute: "work",
    },
    preview: {
      kind: "Writing",
      title: "Methods made reusable",
      body:
        "Concise notes, implementation guides and analytical explanations for people who need methods they can use.",
      cta: "Go to writing",
      routeKey: "writing",
    },
  },
  fr: {
    hero: {
      eyebrow: "PUBLICATIONS",
      title: "Notes techniques, méthodes et explications analytiques",
      intro:
        "L’écriture rend les méthodes réutilisables à travers des notes concises, des guides d’implémentation et des explications destinées aux analystes, étudiants et décideurs.",
    },
    entries: [
      {
        id: "seasonal-adjustment-r",
        type: "Note technique",
        title: "Désaisonnalisation reproductible avec R",
        description:
          "Une note technique prévue sur les workflows de désaisonnalisation reproductibles et la documentation analytique transparente.",
        status: "En préparation",
      },
      {
        id: "survey-design-data-systems",
        type: "Note méthodologique",
        title: "Conception d’enquête, échantillonnage et systèmes de collecte",
        description:
          "Une note méthodologique prévue sur la conception d’enquête, la logique d’échantillonnage et les systèmes pratiques de collecte.",
        status: "En préparation",
      },
      {
        id: "econometric-workflows",
        type: "Guide analytique",
        title: "Workflows économétriques, de la spécification à l’interprétation",
        description:
          "Un guide analytique prévu sur le passage de la spécification des modèles à l’interprétation et au reporting prudents.",
        status: "En préparation",
      },
      {
        id: "decision-ready-products",
        type: "Note d’implémentation",
        title: "Construire des produits analytiques d’aide à la décision",
        description:
          "Une note d’implémentation prévue sur la transformation de l’analyse en outils, interfaces et supports de décision utilisables.",
        status: "En préparation",
      },
    ],
    ctas: {
      primary: "Découvrir la recherche",
      primaryRoute: "research",
      secondary: "Voir les projets",
      secondaryRoute: "work",
    },
    preview: {
      kind: "Publications",
      title: "Des méthodes réutilisables",
      body:
        "Des notes concises, guides d’implémentation et explications analytiques pour rendre les méthodes directement utiles.",
      cta: "Aller aux publications",
      routeKey: "writing",
    },
  },
} satisfies Record<Locale, WritingContent>;
