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
  hero: {
    eyebrow: string;
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
    strip: "Research notebook ? Reproducible R & Python",
    hero: {
      eyebrow: "RESEARCH ? QUARTO",
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
        unavailableLabel: "Article not available yet",
      },
      {
        id: "financial-inclusion-mobile-money",
        groupId: "applied-research",
        filterIds: ["applied-study", "methodology", "completed-study"],
        type: "Applied study",
        status: "Article framework available",
        title: "Financial inclusion and mobile-money adoption",
        description:
          "An applied analysis of financial inclusion using FinScope Benin 2018 microdata and multivariate and binary-choice modelling.",
        contextLabel: "FinScope Benin 2018 microdata",
        articleHref: "/en/research/financial-inclusion-mobile-money",
        articleLabel: "Open article framework",
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
        unavailableLabel: "Article not available yet",
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
        unavailableLabel: "Article not available yet",
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
    strip: "Carnet de recherche ? R et Python reproductibles",
    hero: {
      eyebrow: "RECHERCHE ? QUARTO",
      title: "Recherche",
      intro:
        "Travaux de recherche formels et en cours : ?tudes achev?es, projets appliqu?s, travaux m?thodologiques et agendas de recherche. Une section distincte des Publications.",
    },
    controls: {
      searchLabel: "Rechercher",
      searchPlaceholder: "Rechercher dans les sujets de recherche",
      allLabel: "Tout",
      clearLabel: "Effacer les filtres",
      resultsSingular: "?l?ment de recherche",
      resultsPlural: "?l?ments de recherche",
      emptyTitle: "Aucun ?l?ment de recherche ne correspond ? cette vue.",
      emptyBody: "Modifiez la recherche ou choisissez un autre filtre.",
    },
    filters: [
      { id: "research-agenda", label: "Agenda de recherche" },
      { id: "applied-study", label: "?tude appliqu?e" },
      { id: "research-project", label: "Projet de recherche" },
      { id: "methodology", label: "M?thodologie" },
      { id: "completed-study", label: "?tude achev?e" },
      { id: "work-in-progress", label: "Travail en cours" },
    ],
    groups: [
      { id: "current-research-agenda", label: "AGENDA DE RECHERCHE ACTUEL" },
      { id: "applied-research", label: "RECHERCHE APPLIQU?E" },
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
        title: "Vuln?rabilit?s macrofinanci?res et retournements de croissance",
        description:
          "Un agenda de recherche sur les syst?mes d?alerte pr?coce appliqu?s aux vuln?rabilit?s macrofinanci?res et aux retournements de croissance en Afrique de l?Ouest.",
        contextLabel: "Afrique de l?Ouest",
        unavailableLabel: "Article non disponible",
      },
      {
        id: "financial-inclusion-mobile-money",
        groupId: "applied-research",
        filterIds: ["applied-study", "methodology", "completed-study"],
        type: "?tude appliqu?e",
        status: "Ossature d?article disponible",
        title: "Inclusion financi?re et adoption du mobile money",
        description:
          "Une analyse appliqu?e de l?inclusion financi?re ? partir des microdonn?es FinScope B?nin 2018 et de m?thodes multivari?es et de choix binaire.",
        contextLabel: "Microdonn?es FinScope B?nin 2018",
        articleHref: "/fr/recherche/inclusion-financiere-mobile-money",
        articleLabel: "Ouvrir l?ossature d?article",
      },
      {
        id: "exchange-rate-volatility-waemu",
        groupId: "applied-research",
        filterIds: ["applied-study", "methodology", "completed-study"],
        type: "?tude appliqu?e",
        status: "?tude achev?e",
        title: "Volatilit? du taux de change et commerce dans l?UEMOA",
        description:
          "Une ?tude de la volatilit? du taux de change et du commerce r?gional ? partir de mod?les ?conom?triques et de donn?es macro?conomiques.",
        contextLabel: "UEMOA",
        unavailableLabel: "Article non disponible",
      },
      {
        id: "decentralization-living-conditions",
        groupId: "institutional-research-projects",
        filterIds: ["research-project", "methodology", "work-in-progress"],
        type: "Projet de recherche",
        status: "Travail en cours",
        title: "D?centralisation et conditions de vie locales",
        description:
          "Un cadre m?thodologique et analytique pour ?valuer les liens entre la d?centralisation et les conditions de vie locales au Togo.",
        contextLabel: "Togo",
        unavailableLabel: "Article non disponible",
      },
    ],
    ctas: {
      primary: "D?couvrir les projets",
      primaryRoute: "work",
      secondary: "Lire les notes techniques",
      secondaryRoute: "writing",
    },
    preview: {
      kind: "Recherche",
      title: "Recherche appliqu?e pour la d?cision",
      body:
        "?conom?trie, statistique officielle et syst?mes de donn?es appliqu?s ? l?inclusion financi?re, aux politiques publiques et aux dynamiques ?conomiques.",
      cta: "Aller ? la recherche",
      routeKey: "research",
    },
  },
} satisfies Record<Locale, ResearchContent>;
