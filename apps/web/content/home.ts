import type { Locale } from "@/i18n/locales";
import type { RouteKey } from "@/lib/routes";
import { researchContent } from "./research";
import { writingContent } from "./writing";
import { getHomepageWorkItems, type SelectedWorkItem } from "./work";

export type MethodStage = {
  label: string;
  readiness: string;
};

export type PracticeArea = {
  label: string;
  value: string;
};

export type CapabilityGroup = {
  transform: string;
  title: string;
  items: string[];
};

export type PreviewCard = {
  kind: string;
  title: string;
  body: string;
  cta: string;
  routeKey: RouteKey;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    signature: string;
    primaryCta: string;
    secondaryCta: string;
    actionsLabel: string;
  };
  method: {
    title: string;
    note: string;
    sliderLabel: string;
    progressLabel: string;
    currentStageLabel: string;
    readinessLabel: string;
    stages: MethodStage[];
  };
  practice: {
    eyebrow: string;
    items: PracticeArea[];
  };
  selectedWork: {
    eyebrow: string;
    title: string;
    intro: string;
    viewAll: string;
    cardCta: string;
    overviewCta: string;
    roleLabel: string;
    items: SelectedWorkItem[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    intro: string;
    groups: CapabilityGroup[];
  };
  researchWriting: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: [PreviewCard, PreviewCard];
  };
  about: {
    eyebrow: string;
    statement: string;
    cta: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    tags: string[];
  };
  footer: {
    signature: string;
  };
};

export type RoutePageContent = {
  routeKey: RouteKey;
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  status: string;
  backHome: string;
};

export const homeContent = {
  en: {
    hero: {
      eyebrow: "INGÉNIEUR STATISTICIEN ÉCONOMISTE",
      title: "Economic Data Scientist & Analytics Builder",
      body:
        "I transform economic questions, complex data, and institutional needs into models, analytical systems, and decision-ready digital products.",
      signature: "From evidence to decisions. From models to digital systems.",
      primaryCta: "View selected work",
      secondaryCta: "Experience",
      actionsLabel: "Homepage actions",
    },
    method: {
      title: "THE METHOD, LIVE",
      note:
        "Illustrative analytical workflow · synthetic · no empirical result is presented.",
      sliderLabel: "Move through the analytical workflow",
      progressLabel: "Progress",
      currentStageLabel: "Current stage",
      readinessLabel: "Readiness",
      stages: [
        { label: "Raw data", readiness: "Inputs are gathered and limits are visible." },
        { label: "Structure", readiness: "Relationships and definitions become explicit." },
        { label: "Model", readiness: "A modelling frame can be tested and documented." },
        { label: "Insight", readiness: "The signal can be interpreted with care." },
        { label: "Decision", readiness: "The result can support a decision scenario." },
      ],
    },
    practice: {
      eyebrow: "PRACTICE AT A GLANCE",
      items: [
        { label: "Economic & statistical analysis", value: "Official statistics, econometrics & indicators" },
        { label: "Public & institutional data systems", value: "Surveys, sampling & data collection at scale" },
        { label: "Data science & econometrics", value: "R / Python modelling & reproducible pipelines" },
        { label: "Digital analytical products", value: "Shiny, full-stack builds & decision tools" },
      ],
    },
    selectedWork: {
      eyebrow: "SELECTED WORK",
      title: "Evidence, systems & products",
      intro:
        "A selection of analytical systems, applied studies and digital products.",
      viewAll: "View all work",
      cardCta: "Open case",
      overviewCta: "Project overview",
      roleLabel: "Role",
      items: getHomepageWorkItems("en"),
    },
    capabilities: {
      eyebrow: "CAPABILITIES",
      title: "Organised around transformations, not tool lists",
      intro:
        "What I do is move problems along a chain: from open questions to systems people can rely on.",
      groups: [
        {
          transform: "Questions → evidence",
          title: "Economic & Statistical Analysis",
          items: ["econometrics and causal inference", "official statistics and indicators", "survey methodology and sampling", "time series and seasonal adjustment"],
        },
        {
          transform: "Raw data → reliable systems",
          title: "Data Science & Econometrics",
          items: ["R and Python analysis pipelines", "multivariate analysis", "probabilistic and predictive models", "reproducible documented workflows"],
        },
        {
          transform: "Models → decision tools",
          title: "Decision Systems & Data Products",
          items: ["Shiny and interactive dashboards", "full-stack builds", "budget and scenario simulation", "deployment, SEO and accessibility"],
        },
        {
          transform: "Knowledge → transferable methods",
          title: "Research & Knowledge Transfer",
          items: ["reproducible publishing", "teaching and technical notes", "method documentation", "bilingual communication"],
        },
      ],
    },
    researchWriting: {
      eyebrow: "RESEARCH & WRITING",
      title: "Reproducible, decision-oriented work",
      intro:
        "Research and writing stay separate so analytical depth and public explanation each have room to breathe.",
      cards: [
        researchContent.en.preview,
        writingContent.en.preview,
      ],
    },
    about: {
      eyebrow: "ABOUT",
      statement:
        "I build the whole chain: from survey design and estimation to the applications and reports that put results in decision-makers’ hands.",
      cta: "Read the full story",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Let’s talk about your data problem",
      body:
        "Open to employment, consulting, research collaboration, technical builds, and speaking or teaching.",
      cta: "Start a conversation",
      tags: ["Employment", "Consulting", "Research collaboration", "Technical collaboration", "Speaking / teaching"],
    },
    footer: {
      signature: "From evidence to decisions. From models to digital systems.",
    },
  },
  fr: {
    hero: {
      eyebrow: "INGÉNIEUR STATISTICIEN ÉCONOMISTE",
      title: "Data Scientist économique et concepteur de systèmes analytiques",
      body:
        "Je transforme les questions économiques, les données complexes et les besoins institutionnels en modèles, systèmes analytiques et produits numériques d’aide à la décision.",
      signature: "Des preuves aux décisions. Des modèles aux systèmes numériques.",
      primaryCta: "Voir les travaux sélectionnés",
      secondaryCta: "Parcours",
      actionsLabel: "Actions de la page d’accueil",
    },
    method: {
      title: "LA MÉTHODE, EN DIRECT",
      note:
        "Flux analytique illustratif · données synthétiques · aucun résultat empirique n’est présenté.",
      sliderLabel: "Parcourir le flux analytique",
      progressLabel: "Progression",
      currentStageLabel: "Étape actuelle",
      readinessLabel: "Maturité",
      stages: [
        { label: "Données brutes", readiness: "Les intrants sont rassemblés et leurs limites sont visibles." },
        { label: "Structure", readiness: "Les relations et définitions deviennent explicites." },
        { label: "Modèle", readiness: "Un cadre de modélisation peut être testé et documenté." },
        { label: "Enseignement", readiness: "Le signal peut être interprété avec prudence." },
        { label: "Décision", readiness: "Le résultat peut soutenir un scénario de décision." },
      ],
    },
    practice: {
      eyebrow: "PRATIQUE EN UN COUP D’ŒIL",
      items: [
        { label: "Analyse économique et statistique", value: "Statistique officielle, économétrie et indicateurs" },
        { label: "Systèmes de données publics et institutionnels", value: "Enquêtes, échantillonnage et collecte à grande échelle" },
        { label: "Data science et économétrie", value: "Modélisation R / Python et pipelines reproductibles" },
        { label: "Produits analytiques numériques", value: "Shiny, applications full-stack et outils décisionnels" },
      ],
    },
    selectedWork: {
      eyebrow: "TRAVAUX SÉLECTIONNÉS",
      title: "Preuves, systèmes et produits",
      intro:
        "Une sélection de systèmes analytiques, d’études appliquées et de produits numériques.",
      viewAll: "Voir tous les travaux",
      cardCta: "Voir le cas",
      overviewCta: "Aperçu du projet",
      roleLabel: "Rôle",
      items: getHomepageWorkItems("fr"),
    },
    capabilities: {
      eyebrow: "CAPACITÉS",
      title: "Organisées autour des transformations, pas des listes d’outils",
      intro:
        "Mon travail consiste à faire progresser les problèmes le long d’une chaîne, des questions ouvertes vers des systèmes fiables.",
      groups: [
        {
          transform: "Questions → preuves",
          title: "Analyse économique et statistique",
          items: ["économétrie et inférence causale", "statistique officielle et indicateurs", "méthodologie d’enquête et échantillonnage", "séries temporelles et désaisonnalisation"],
        },
        {
          transform: "Données brutes → systèmes fiables",
          title: "Data science et économétrie",
          items: ["pipelines d’analyse en R et Python", "analyse multivariée", "modèles probabilistes et prédictifs", "workflows reproductibles et documentés"],
        },
        {
          transform: "Modèles → outils décisionnels",
          title: "Systèmes décisionnels et produits data",
          items: ["Shiny et tableaux de bord interactifs", "applications full-stack", "simulation budgétaire et scénarios", "déploiement, SEO et accessibilité"],
        },
        {
          transform: "Savoir → méthodes transférables",
          title: "Recherche et transfert de connaissances",
          items: ["publication reproductible", "enseignement et notes techniques", "documentation méthodologique", "communication bilingue"],
        },
      ],
    },
    researchWriting: {
      eyebrow: "RECHERCHE ET PUBLICATIONS",
      title: "Des travaux reproductibles orientés vers la décision",
      intro:
        "La recherche et les publications restent séparées pour laisser respirer la profondeur analytique et l’explication publique.",
      cards: [
        { kind: "Recherche", title: "Travaux analytiques reproductibles", body: "Un espace pour les notes de recherche, les méthodes et l’analyse orientée vers la décision.", cta: "Aller à la recherche", routeKey: "research" },
        { kind: "Publications", title: "Notes techniques et essais", body: "Un espace pour les explications accessibles, les notes d’implémentation et l’écriture analytique.", cta: "Aller aux publications", routeKey: "writing" },
      ],
    },
    about: {
      eyebrow: "À PROPOS",
      statement:
        "Je construis l’ensemble de la chaîne, de la conception d’enquête et de l’estimation aux applications et rapports qui mettent les résultats entre les mains des décideurs.",
      cta: "Découvrir le parcours",
    },
    contact: {
      eyebrow: "CONTACT",
      title: "Échangeons autour de votre problématique de données",
      body:
        "Ouvert aux opportunités d’emploi, au conseil, aux collaborations de recherche, aux constructions techniques et aux interventions ou formations.",
      cta: "Prendre contact",
      tags: ["Emploi", "Conseil", "Collaboration de recherche", "Collaboration technique", "Interventions et enseignement"],
    },
    footer: {
      signature: "Des preuves aux décisions. Des modèles aux systèmes numériques.",
    },
  },
} satisfies Record<Locale, HomeContent>;

export const routePages = {
  en: [
    { routeKey: "work", path: "work", title: "Work", description: "Selected analytical work and case-study previews.", eyebrow: "SELECTED WORK", status: "Selected work entries will expand into fuller case studies over time.", backHome: "Back to home" },
    { routeKey: "research", path: "research", title: "Research", description: "Applied research across econometrics, official statistics and data systems.", eyebrow: "RESEARCH", status: "Applied research across econometrics, official statistics and data systems.", backHome: "Back to home" },
    { routeKey: "writing", path: "writing", title: "Writing", description: "Technical notes, methods and analytical explanations.", eyebrow: "WRITING", status: "Technical notes, methods and analytical explanations.", backHome: "Back to home" },
    { routeKey: "about", path: "about", title: "About", description: "Professional profile and working approach.", eyebrow: "ABOUT", status: "A fuller story will connect the portfolio’s analytical, institutional, and product-building threads.", backHome: "Back to home" },
    { routeKey: "experience", path: "experience", title: "Experience", description: "Experience across official statistics, economic analysis and data products.", eyebrow: "EXPERIENCE", status: "Selected roles and assignments are presented as a dedicated professional timeline.", backHome: "Back to home" },
    { routeKey: "contact", path: "contact", title: "Contact", description: "Professional contact options and a LinkedIn message helper.", eyebrow: "CONTACT", status: "Use the professional links or prepare a concise LinkedIn message.", backHome: "Back to home" },
  ],
  fr: [
    { routeKey: "work", path: "projets", title: "Projets", description: "Travaux analytiques sélectionnés et aperçus de cas.", eyebrow: "TRAVAUX SÉLECTIONNÉS", status: "Les travaux sélectionnés s’enrichiront progressivement en études de cas plus complètes.", backHome: "Retour à l’accueil" },
    { routeKey: "research", path: "recherche", title: "Recherche", description: "Recherche et travaux analytiques reproductibles.", eyebrow: "RECHERCHE", status: "Les notes de recherche et travaux reproductibles apparaîtront ici à mesure que la couche connaissance se développe.", backHome: "Retour à l’accueil" },
    { routeKey: "writing", path: "publications", title: "Publications", description: "Publications, notes techniques et essais analytiques.", eyebrow: "PUBLICATIONS", status: "Les notes techniques, essais d’implémentation et textes analytiques publics apparaîtront ici.", backHome: "Retour à l’accueil" },
    { routeKey: "about", path: "a-propos", title: "À propos", description: "Profil professionnel et manière de travailler.", eyebrow: "À PROPOS", status: "Un récit plus complet reliera les dimensions analytiques, institutionnelles et produit du portfolio.", backHome: "Retour à l’accueil" },
    { routeKey: "experience", path: "parcours", title: "Parcours", description: "Parcours en statistique officielle, analyse économique et produits data.", eyebrow: "PARCOURS", status: "Les fonctions et missions sélectionnées sont présentées comme une chronologie professionnelle dédiée.", backHome: "Retour à l’accueil" },
    { routeKey: "contact", path: "contact", title: "Contact", description: "Options de contact professionnel.", eyebrow: "CONTACT", status: "Utilisez les liens professionnels ou lancez une conversation autour d’une problématique de données.", backHome: "Retour à l’accueil" },
  ],
} satisfies Record<Locale, RoutePageContent[]>;

export function getRoutePage(locale: Locale, path: string) {
  return routePages[locale].find((page) => page.path === path);
}

export function getRoutePageByKey(locale: Locale, routeKey: RouteKey) {
  return routePages[locale].find((page) => page.routeKey === routeKey);
}
