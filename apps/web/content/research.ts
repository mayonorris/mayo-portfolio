import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/lib/routes";

export type ResearchFilterId =
  | "research-agenda"
  | "applied-study"
  | "research-project"
  | "methodology"
  | "completed-study"
  | "work-in-progress";

export type ResearchGroupId =
  | "current-research-agenda"
  | "applied-research"
  | "institutional-research-projects"
  | "archive";

export type ResearchFilter = {
  id: ResearchFilterId;
  label: string;
};

export type ResearchGroup = {
  id: ResearchGroupId;
  label: string;
};

export type ResearchEntry = {
  id: string;
  groupId: ResearchGroupId;
  filterIds: ResearchFilterId[];
  type: string;
  status: string;
  title: string;
  description: string;
  period?: string;
  contextLabel?: string;
  articleHref?: string;
  articleLabel?: string;
  unavailableLabel?: string;
};

export type ResearchContent = {
  strip: string;
  stripParts: [string, string];
  hero: {
    eyebrow: string;
    eyebrowParts: [string, string];
    title: string;
    intro: string;
  };
  controls: {
    searchLabel: string;
    searchPlaceholder: string;
    allLabel: string;
    clearLabel: string;
    resultsSingular: string;
    resultsPlural: string;
    emptyTitle: string;
    emptyBody: string;
  };
  filters: ResearchFilter[];
  groups: ResearchGroup[];
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
    strip: "Research notebook · Reproducible R & Python",
    stripParts: ["Research notebook", "Reproducible R & Python"],
    hero: {
      eyebrow: "RESEARCH · QUARTO",
      eyebrowParts: ["RESEARCH", "QUARTO"],
      title: "Research",
      intro:
        "Formal and ongoing research: completed studies, applied projects, methodological work and research agendas. Distinct from Writing.",
    },
    controls: {
      searchLabel: "Search",
      searchPlaceholder: "Search research topics",
      allLabel: "All",
      clearLabel: "Clear filters",
      resultsSingular: "research item",
      resultsPlural: "research items",
      emptyTitle: "No research item matches this view.",
      emptyBody: "Adjust the search or choose another filter.",
    },
    filters: [
      { id: "research-agenda", label: "Research agenda" },
      { id: "applied-study", label: "Applied study" },
      { id: "research-project", label: "Research project" },
      { id: "methodology", label: "Methodology" },
      { id: "completed-study", label: "Completed study" },
      { id: "work-in-progress", label: "Work in progress" },
    ],
    groups: [
      { id: "current-research-agenda", label: "CURRENT RESEARCH AGENDA" },
      { id: "applied-research", label: "APPLIED RESEARCH" },
      { id: "institutional-research-projects", label: "INSTITUTIONAL RESEARCH PROJECTS" },
      { id: "archive", label: "ARCHIVE" },
    ],
    entries: [
      {
        id: "macro-financial-vulnerabilities",
        groupId: "current-research-agenda",
        filterIds: ["research-agenda", "methodology", "work-in-progress"],
        type: "Research agenda",
        status: "Work in progress",
        title: "Macro-financial vulnerabilities and growth reversals",
        description:
          "A research agenda on early-warning systems for macro-financial vulnerabilities and growth reversals in West Africa.",
        contextLabel: "West Africa",
        unavailableLabel: "Article in preparation",
      },
      {
        id: "financial-inclusion-multidimensional-poverty",
        groupId: "applied-research",
        filterIds: ["applied-study", "methodology", "completed-study"],
        type: "Applied study",
        status: "Completed group study",
        title: "Financial inclusion and multidimensional poverty in Benin",
        description:
          "A group study examining the relationship between financial inclusion and multidimensional poverty in Benin using FinScope Benin 2018 microdata, multivariate analysis and binary-choice modelling.",
        contextLabel: "FinScope Benin 2018 microdata",
        articleHref: "/en/research/financial-inclusion-multidimensional-poverty",
        articleLabel: "View study page",
      },
      {
        id: "exchange-rate-volatility-waemu",
        groupId: "applied-research",
        filterIds: ["applied-study", "methodology", "completed-study"],
        type: "Applied study",
        status: "Completed study",
        title: "Exchange-rate volatility and trade in the WAEMU",
        description:
          "A study of exchange-rate volatility and regional trade using econometric modelling and macroeconomic data.",
        contextLabel: "WAEMU",
        unavailableLabel: "Article in preparation",
      },
      {
        id: "decentralization-living-conditions",
        groupId: "institutional-research-projects",
        filterIds: ["research-project", "methodology", "work-in-progress"],
        type: "Research project",
        status: "Work in progress",
        title: "Decentralization and local living conditions",
        description:
          "A methodological and analytical framework for evaluating how decentralization relates to local living conditions in Togo.",
        contextLabel: "Togo",
        unavailableLabel: "Article in preparation",
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
    strip: "Carnet de recherche · R et Python reproductibles",
    stripParts: ["Carnet de recherche", "R et Python reproductibles"],
    hero: {
      eyebrow: "RECHERCHE · QUARTO",
      eyebrowParts: ["RECHERCHE", "QUARTO"],
      title: "Recherche",
      intro:
        "Travaux de recherche formels et en cours : études achevées, projets appliqués, travaux méthodologiques et agendas de recherche. Une section distincte des Publications.",
    },
    controls: {
      searchLabel: "Rechercher",
      searchPlaceholder: "Rechercher dans les sujets de recherche",
      allLabel: "Tout",
      clearLabel: "Effacer les filtres",
      resultsSingular: "élément de recherche",
      resultsPlural: "éléments de recherche",
      emptyTitle: "Aucun élément de recherche ne correspond à cette vue.",
      emptyBody: "Modifiez la recherche ou choisissez un autre filtre.",
    },
    filters: [
      { id: "research-agenda", label: "Agenda de recherche" },
      { id: "applied-study", label: "Étude appliquée" },
      { id: "research-project", label: "Projet de recherche" },
      { id: "methodology", label: "Méthodologie" },
      { id: "completed-study", label: "Étude achevée" },
      { id: "work-in-progress", label: "Travail en cours" },
    ],
    groups: [
      { id: "current-research-agenda", label: "AGENDA DE RECHERCHE ACTUEL" },
      { id: "applied-research", label: "RECHERCHE APPLIQUÉE" },
      { id: "institutional-research-projects", label: "PROJETS DE RECHERCHE INSTITUTIONNELS" },
      { id: "archive", label: "ARCHIVES" },
    ],
    entries: [
      {
        id: "macro-financial-vulnerabilities",
        groupId: "current-research-agenda",
        filterIds: ["research-agenda", "methodology", "work-in-progress"],
        type: "Agenda de recherche",
        status: "Travail en cours",
        title: "Vulnérabilités macrofinancières et retournements de croissance",
        description:
          "Un agenda de recherche sur les systèmes d’alerte précoce appliqués aux vulnérabilités macrofinancières et aux retournements de croissance en Afrique de l’Ouest.",
        contextLabel: "Afrique de l’Ouest",
        unavailableLabel: "Article en préparation",
      },
      {
        id: "inclusion-financiere-pauvrete-multidimensionnelle",
        groupId: "applied-research",
        filterIds: ["applied-study", "methodology", "completed-study"],
        type: "Étude appliquée",
        status: "Étude collective achevée",
        title: "Inclusion financière et pauvreté multidimensionnelle au Bénin",
        description:
          "Une étude collective sur la relation entre inclusion financière et pauvreté multidimensionnelle au Bénin, à partir des microdonnées FinScope Bénin 2018, d’analyses multivariées et de modèles de choix binaire.",
        contextLabel: "Microdonnées FinScope Bénin 2018",
        articleHref: "/fr/recherche/inclusion-financiere-pauvrete-multidimensionnelle",
        articleLabel: "Voir la page d’étude",
      },
      {
        id: "exchange-rate-volatility-waemu",
        groupId: "applied-research",
        filterIds: ["applied-study", "methodology", "completed-study"],
        type: "Étude appliquée",
        status: "Étude achevée",
        title: "Volatilité du taux de change et commerce dans l’UEMOA",
        description:
          "Une étude de la volatilité du taux de change et du commerce régional à partir de modèles économétriques et de données macroéconomiques.",
        contextLabel: "UEMOA",
        unavailableLabel: "Article en préparation",
      },
      {
        id: "decentralization-living-conditions",
        groupId: "institutional-research-projects",
        filterIds: ["research-project", "methodology", "work-in-progress"],
        type: "Projet de recherche",
        status: "Travail en cours",
        title: "Décentralisation et conditions de vie locales",
        description:
          "Un cadre méthodologique et analytique pour évaluer les liens entre la décentralisation et les conditions de vie locales au Togo.",
        contextLabel: "Togo",
        unavailableLabel: "Article en préparation",
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
