import type { Locale } from "@/i18n/locales";
import type { ExternalProjectLinkId } from "./external-links";

export type WorkVisualVariant = "systems" | "research" | "signal" | "finance";

export type SelectedWorkItem = {
  slug: string;
  category: string;
  title: string;
  scope: string;
  role: string;
  visual: WorkVisualVariant;
  liveLinkId?: ExternalProjectLinkId;
};

export type AdditionalBuild = {
  eyebrow: string;
  title: string;
  category: string;
  description: string;
  linkId: ExternalProjectLinkId;
};

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type CaseStudyContent = {
  backToWork: string;
  contactCta: string;
  liveSiteCta?: string;
  sections: CaseStudySection[];
};

export type WorkContent = {
  eyebrow: string;
  title: string;
  intro: string;
  viewAll: string;
  cardCta: string;
  roleLabel: string;
  liveSiteLabel: string;
  items: SelectedWorkItem[];
  additionalBuild: AdditionalBuild;
  cases: Record<string, CaseStudyContent>;
};

const workItems = {
  en: [
    {
      slug: "em2-data-ai-lab-website",
      category: "Analytical system",
      title: "EM² Data & AI Lab website",
      scope:
        "A portfolio case study for presenting an editorial web interface and product architecture for a data and AI initiative.",
      role: "Portfolio case study",
      visual: "systems",
      liveLinkId: "em2",
    },
    {
      slug: "impact-decentralization-togo",
      category: "Applied research",
      title: "Impact of decentralization in Togo",
      scope:
        "A cautious applied-study frame for decentralization, territorial structure, and public decision questions in Togo.",
      role: "Applied research",
      visual: "research",
    },
    {
      slug: "economic-indicators-seasonal-adjustment",
      category: "Statistical workflow",
      title: "Economic indicators & seasonal adjustment",
      scope:
        "A synthetic workflow frame for comparing raw economic signals with adjusted monitoring views.",
      role: "Statistical workflow",
      visual: "signal",
    },
    {
      slug: "financial-inclusion-fintech-analysis",
      category: "Econometric analysis",
      title: "Financial inclusion & FinTech analysis",
      scope:
        "An analytical case frame for financial inclusion and digital finance segmentation questions.",
      role: "Econometric analysis",
      visual: "finance",
    },
  ],
  fr: [
    {
      slug: "em2-data-ai-lab-website",
      category: "Système analytique",
      title: "EM² Data & AI Lab website",
      scope:
        "Une étude de cas portfolio pour présenter une interface web éditoriale et une architecture produit pour une initiative data et IA.",
      role: "Étude de cas portfolio",
      visual: "systems",
      liveLinkId: "em2",
    },
    {
      slug: "impact-decentralization-togo",
      category: "Recherche appliquée",
      title: "Impact of decentralization in Togo",
      scope:
        "Un cadre d’étude appliquée prudent sur la décentralisation, la structure territoriale et les questions de décision publique au Togo.",
      role: "Recherche appliquée",
      visual: "research",
    },
    {
      slug: "economic-indicators-seasonal-adjustment",
      category: "Flux statistique",
      title: "Economic indicators & seasonal adjustment",
      scope:
        "Un cadre de flux synthétique pour comparer des signaux économiques bruts avec des vues de suivi ajustées.",
      role: "Flux statistique",
      visual: "signal",
    },
    {
      slug: "financial-inclusion-fintech-analysis",
      category: "Analyse économétrique",
      title: "Financial inclusion & FinTech analysis",
      scope:
        "Un cadre analytique pour les questions d’inclusion financière et de segmentation de la finance numérique.",
      role: "Analyse économétrique",
      visual: "finance",
    },
  ],
} satisfies Record<Locale, SelectedWorkItem[]>;

export const workContent = {
  en: {
    eyebrow: "SELECTED WORK",
    title: "Evidence, systems & products",
    intro:
      "A selection of analytical systems, applied studies and digital products.",
    viewAll: "View all work",
    cardCta: "Open case",
    roleLabel: "Role",
    liveSiteLabel: "Live site",
    items: workItems.en,
    additionalBuild: {
      eyebrow: "ADDITIONAL BUILD",
      title: "Currency Converter",
      category: "Live utility project",
      description:
        "A compact public utility for exploring currency conversion through a focused web interface.",
      linkId: "currencyConverter",
    },
    cases: {
      "em2-data-ai-lab-website": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        liveSiteCta: "Visit live site",
        sections: [
          {
            eyebrow: "Context",
            title: "Current identity",
            body:
              "EM² Data & AI Lab is the current identity of the initiative originally developed as CaSEG.",
          },
          {
            eyebrow: "Scope",
            title: "Editorial product frame",
            body:
              "The case presents a public web interface for a data and AI initiative, with attention to navigation, service surfaces and bilingual access.",
          },
          {
            eyebrow: "Role",
            title: "Product and data positioning",
            body:
              "The portfolio frame focuses on the public role of Co-founder and Head of Data, while keeping the case limited to information suitable for public presentation.",
          },
          {
            eyebrow: "System architecture",
            title: "Structured public surface",
            body:
              "The site is treated as an analytical product surface: a clear information architecture, distinct user paths and a concise link between services, work and contact.",
          },
          {
            eyebrow: "Accessibility and bilingual design",
            title: "Two public entry points",
            body:
              "The live-site actions use the supplied English and French public links and keep the portfolio case route available.",
          },
        ],
      },
      "impact-decentralization-togo": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        sections: [
          {
            eyebrow: "Context",
            title: "Applied research frame",
            body:
              "This case remains framed around decentralization, territorial structure and public decision questions without adding unverified results.",
          },
          {
            eyebrow: "Scope",
            title: "Research presentation",
            body:
              "The public page presents the type of analytical problem and method family, not confidential data, institutional files or unsupported findings.",
          },
        ],
      },
      "economic-indicators-seasonal-adjustment": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        sections: [
          {
            eyebrow: "Context",
            title: "Statistical workflow",
            body:
              "This case frames a public-safe workflow for comparing raw economic signals with seasonally adjusted monitoring views.",
          },
          {
            eyebrow: "Scope",
            title: "Decision-ready signals",
            body:
              "The presentation stays synthetic and does not expose real institutional series, estimates or operational data.",
          },
        ],
      },
      "financial-inclusion-fintech-analysis": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        sections: [
          {
            eyebrow: "Context",
            title: "Econometric analysis frame",
            body:
              "This case presents a cautious analytical frame for financial inclusion and digital finance segmentation questions.",
          },
          {
            eyebrow: "Scope",
            title: "Public-safe case structure",
            body:
              "The public page avoids client claims, source data, provider details, performance metrics and unsupported impact statements.",
          },
        ],
      },
    },
  },
  fr: {
    eyebrow: "TRAVAUX SÉLECTIONNÉS",
    title: "Preuves, systèmes et produits",
    intro:
      "Une sélection de systèmes analytiques, d’études appliquées et de produits numériques.",
    viewAll: "Voir tous les travaux",
    cardCta: "Voir le cas",
    roleLabel: "Rôle",
    liveSiteLabel: "Site en ligne",
    items: workItems.fr,
    additionalBuild: {
      eyebrow: "PROJET COMPLÉMENTAIRE",
      title: "Convertisseur de devises",
      category: "Outil web en ligne",
      description:
        "Un outil public compact permettant d’explorer la conversion de devises à travers une interface web ciblée.",
      linkId: "currencyConverter",
    },
    cases: {
      "em2-data-ai-lab-website": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        liveSiteCta: "Voir le site",
        sections: [
          {
            eyebrow: "Contexte",
            title: "Identité actuelle",
            body:
              "EM² Data & AI Lab est l’identité actuelle de l’initiative initialement développée sous le nom de CaSEG.",
          },
          {
            eyebrow: "Périmètre",
            title: "Cadre de produit éditorial",
            body:
              "Le cas présente une interface web publique pour une initiative data et IA, avec une attention portée à la navigation, aux surfaces de services et à l’accès bilingue.",
          },
          {
            eyebrow: "Rôle",
            title: "Positionnement produit et data",
            body:
              "Le cadre portfolio se concentre sur la fonction publique de Cofondateur et responsable Data, tout en limitant le cas aux informations adaptées à une présentation publique.",
          },
          {
            eyebrow: "Architecture système",
            title: "Surface publique structurée",
            body:
              "Le site est traité comme une surface de produit analytique : architecture d’information claire, parcours distincts et lien concis entre services, travaux et contact.",
          },
          {
            eyebrow: "Accessibilité et design bilingue",
            title: "Deux points d’entrée publics",
            body:
              "Les actions vers le site en ligne utilisent les liens publics français et anglais fournis, tout en conservant la route interne de l’étude de cas portfolio.",
          },
        ],
      },
      "impact-decentralization-togo": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        sections: [
          {
            eyebrow: "Contexte",
            title: "Cadre de recherche appliquée",
            body:
              "Ce cas reste centré sur la décentralisation, la structure territoriale et les questions de décision publique sans ajouter de résultats non vérifiés.",
          },
          {
            eyebrow: "Périmètre",
            title: "Présentation de recherche",
            body:
              "La page publique présente le type de problème analytique et la famille de méthodes, sans données confidentielles, fichiers institutionnels ni résultats non étayés.",
          },
        ],
      },
      "economic-indicators-seasonal-adjustment": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        sections: [
          {
            eyebrow: "Contexte",
            title: "Flux statistique",
            body:
              "Ce cas présente un flux public et prudent pour comparer des signaux économiques bruts avec des vues de suivi désaisonnalisées.",
          },
          {
            eyebrow: "Périmètre",
            title: "Signaux utiles à la décision",
            body:
              "La présentation reste synthétique et n’expose aucune série institutionnelle, estimation ou donnée opérationnelle réelle.",
          },
        ],
      },
      "financial-inclusion-fintech-analysis": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        sections: [
          {
            eyebrow: "Contexte",
            title: "Cadre d’analyse économétrique",
            body:
              "Ce cas présente un cadre analytique prudent pour les questions d’inclusion financière et de segmentation de la finance numérique.",
          },
          {
            eyebrow: "Périmètre",
            title: "Structure de cas publiable",
            body:
              "La page publique évite les affirmations client, les données sources, les détails de fournisseurs, les métriques de performance et les impacts non étayés.",
          },
        ],
      },
    },
  },
} satisfies Record<Locale, WorkContent>;

export function getSelectedWorkItem(locale: Locale, slug: string) {
  return workContent[locale].items.find((item) => item.slug === slug);
}

export function getCaseStudyContent(locale: Locale, slug: string) {
  return (workContent[locale].cases as Record<string, CaseStudyContent>)[slug];
}
