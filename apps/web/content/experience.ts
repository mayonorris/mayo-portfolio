import type { Locale } from "@/i18n/locales";

type LocalizedText = Record<Locale, string>;
const localized = (en: string, fr: string): LocalizedText => ({ en, fr });

export type ExperienceEntry = {
  id: string;
  category: LocalizedText;
  period: LocalizedText;
  role: LocalizedText;
  organization: LocalizedText;
  location?: LocalizedText;
  summary: LocalizedText;
  highlights: Record<Locale, string[]>;
  relatedWorkSlug?: string;
  relatedWorkLabel?: LocalizedText;
};

export type PracticeArea = {
  title: LocalizedText;
  description: LocalizedText;
};

export type ConsultingAssignment = {
  id: string;
  title: LocalizedText;
  period: LocalizedText;
  engagement: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  relatedWorkSlug: string;
  relatedWorkLabel: LocalizedText;
};

export type ExperienceContent = {
  eyebrow: string;
  title: string;
  intro: string;
  supportingLine: string;
  practice: { eyebrow: string; items: PracticeArea[] };
  core: { eyebrow: string; entries: ExperienceEntry[] };
  assignments: { title: string; intro: string; items: ConsultingAssignment[] };
  knowledgeTransfer: {
    eyebrow: string;
    period: string;
    title: string;
    description: string;
    topics: string[];
  };
  ctas: { work: string; contact: string };
};

const practiceAreas = [
  {
    title: localized("OFFICIAL STATISTICS", "STATISTIQUE PUBLIQUE"),
    description: localized(
      "Economic indicators, national accounts, seasonal adjustment and quality control",
      "Indicateurs économiques, comptes nationaux, désaisonnalisation et contrôle qualité",
    ),
  },
  {
    title: localized("SURVEYS & DATA QUALITY", "ENQUÊTES & QUALITÉ DES DONNÉES"),
    description: localized(
      "Field operations, survey databases, validation workflows and data cleaning",
      "Opérations de terrain, bases d’enquête, workflows de validation et apurement",
    ),
  },
  {
    title: localized("ECONOMETRICS & RESEARCH", "ÉCONOMÉTRIE & RECHERCHE"),
    description: localized(
      "Time series, financial econometrics, applied economic analysis and reproducible methods",
      "Séries temporelles, économétrie financière, analyse économique appliquée et méthodes reproductibles",
    ),
  },
  {
    title: localized("ANALYTICAL PRODUCTS", "PRODUITS ANALYTIQUES"),
    description: localized(
      "R/Python pipelines, Shiny and web systems, decision tools and product delivery",
      "Pipelines R/Python, Shiny et systèmes web, outils décisionnels et livraison produit",
    ),
  },
] satisfies PracticeArea[];

const entries = [
  {
    id: "em2-data-ai-lab",
    category: localized("Entrepreneurship", "Entrepreneuriat"),
    period: localized("2026–Present", "2026–aujourd’hui"),
    role: localized("Co-founder and Head of Data", "Cofondateur et responsable Data"),
    organization: localized("EM² Data & AI Lab", "EM² Data & AI Lab"),
    summary: localized(
      "Co-founded and currently lead the data and analytical-product dimension of EM² Data & AI Lab, the initiative that evolved from CaSEG.",
      "Cofondateur et responsable de la dimension data et produits analytiques d’EM² Data & AI Lab, initiative issue de l’évolution de CaSEG.",
    ),
    highlights: {
      en: [
        "Shape analytical positioning, data strategy and the structure of service and training offers.",
        "Design data, AI and decision-support products from initial framing through implementation.",
        "Built the bilingual institutional platform and its information architecture.",
        "Coordinate the technical direction of data-oriented internal initiatives.",
      ],
      fr: [
        "Structuration du positionnement analytique, de la stratégie data et des offres de services et de formation.",
        "Conception de produits data, IA et d’aide à la décision, du cadrage à l’implémentation.",
        "Conception et développement de la plateforme institutionnelle bilingue et de son architecture de l’information.",
        "Orientation technique des initiatives internes à dominante data.",
      ],
    },
    relatedWorkSlug: "em2-data-ai-lab-website",
    relatedWorkLabel: localized("View EM² case study", "Voir l’étude de cas EM²"),
  },
  {
    id: "inseed-phasao",
    category: localized("Official statistics", "Statistique publique"),
    period: localized("Nov 2024 – Dec 2025", "Nov. 2024 – déc. 2025"),
    role: localized("Junior Consultant, PHASAO", "Consultant junior, PHASAO"),
    organization: localized("INSEED Togo", "INSEED Togo"),
    location: localized("Togo", "Togo"),
    summary: localized(
      "Worked within the West Africa Harmonizing and Improving Statistics Project, combining economic-indicator production, field-operation supervision and statistical quality control.",
      "Intervention dans le cadre du Projet d’Harmonisation et d’Amélioration des Statistiques en Afrique de l’Ouest, à l’interface entre production d’indicateurs, supervision de terrain et contrôle qualité statistique.",
    ),
    highlights: {
      en: [
        "Contributed to production and review of economic indicators, including industrial and producer-price statistics.",
        "Supervised and supported field data-collection operations and validation workflows.",
        "Participated in training, quality review and operational monitoring for statistical operations.",
        "Worked across statistical production and field implementation rather than only downstream analysis.",
      ],
      fr: [
        "Contribution à la production et à la revue d’indicateurs économiques, notamment industriels et de prix à la production.",
        "Supervision et appui aux opérations de collecte et aux workflows de validation.",
        "Participation à la formation, au contrôle qualité et au suivi opérationnel d’opérations statistiques.",
        "Intervention sur l’ensemble de la chaîne, de la collecte à la production statistique.",
      ],
    },
    relatedWorkSlug: "economic-indicators-seasonal-adjustment",
    relatedWorkLabel: localized(
      "View related statistical workflow",
      "Voir le workflow statistique associé",
    ),
  },
  {
    id: "inseed-national-accounts",
    category: localized("Economic statistics", "Statistiques économiques"),
    period: localized("Feb 2024 – Oct 2024", "Fév. 2024 – oct. 2024"),
    role: localized(
      "National accounts and forecasting support",
      "Appui aux comptes nationaux et à la prévision",
    ),
    organization: localized("INSEED Togo", "INSEED Togo"),
    location: localized("Togo", "Togo"),
    summary: localized(
      "Supported national accounts, short-term economic monitoring and forecasting work within the national statistical system.",
      "Appui aux comptes nationaux, à la conjoncture et à la prévision économique au sein du système statistique national.",
    ),
    highlights: {
      en: [
        "Contributed to quarterly national-accounts work.",
        "Supported the Monthly Indicator of Economic Activity (IMAE).",
        "Worked on seasonal-adjustment and economic-monitoring tasks.",
        "Connected statistical production with interpretation of short-term economic signals.",
      ],
      fr: [
        "Contribution aux travaux de comptes nationaux trimestriels.",
        "Appui à l’Indicateur mensuel d’activité économique (IMAE).",
        "Travaux de désaisonnalisation et de suivi conjoncturel.",
        "Articulation entre production statistique et lecture des signaux économiques de court terme.",
      ],
    },
    relatedWorkSlug: "economic-indicators-seasonal-adjustment",
    relatedWorkLabel: localized(
      "View related statistical workflow",
      "Voir le workflow statistique associé",
    ),
  },
  {
    id: "dge-benin",
    category: localized("Economic analysis", "Analyse économique"),
    period: localized("May 2023 – Aug 2023", "Mai 2023 – août 2023"),
    role: localized("Economic analysis internship", "Stage en analyse économique"),
    organization: localized(
      "Directorate-General for Economic Affairs, Benin",
      "Direction générale de l’Économie du Bénin",
    ),
    location: localized("Benin", "Bénin"),
    summary: localized(
      "Applied econometrics and macroeconomic analysis during an internship at the Directorate-General for Economic Affairs.",
      "Travaux d’économétrie appliquée et d’analyse macroéconomique au cours d’un stage à la Direction générale de l’Économie.",
    ),
    highlights: {
      en: [
        "Worked on exchange-rate volatility and trade in the WAEMU.",
        "Developed and interpreted econometric models for the final ISE research project.",
        "Contributed to analytical work related to the 2023 Finance Act.",
        "Combined institutional economic analysis with academic research requirements.",
      ],
      fr: [
        "Travaux sur la volatilité du taux de change et le commerce dans l’UEMOA.",
        "Développement et interprétation de modèles économétriques pour le mémoire de fin de formation ISE.",
        "Contribution à des analyses relatives à la Loi de finances 2023.",
        "Articulation entre analyse économique institutionnelle et recherche académique.",
      ],
    },
  },
  {
    id: "office-data-science",
    category: localized("Statistical modelling", "Modélisation statistique"),
    period: localized("Sep 2019 – Apr 2020", "Sept. 2019 – avr. 2020"),
    role: localized("Data analysis internship", "Stage en analyse de données"),
    organization: localized("Office Data Science", "Office Data Science"),
    location: localized("Lomé", "Lomé"),
    summary: localized(
      "Early applied-statistics experience focused on mortality modelling with R.",
      "Première expérience appliquée en statistique, centrée sur la modélisation de la mortalité avec R.",
    ),
    highlights: {
      en: [
        "Applied statistical methods to mortality data.",
        "Used R for modelling and analytical implementation.",
        "Developed an early practice of translating mathematical/statistical reasoning into code.",
      ],
      fr: [
        "Application de méthodes statistiques à des données de mortalité.",
        "Utilisation de R pour la modélisation et l’implémentation analytique.",
        "Première mise en pratique du passage du raisonnement mathématique et statistique au code.",
      ],
    },
  },
] satisfies ExperienceEntry[];

const assignments = [
  {
    id: "bceao-survey-data-quality",
    title: localized("BCEAO survey data quality", "Qualité des données d’enquête BCEAO"),
    period: localized("Apr–May 2026", "Avr.–mai 2026"),
    engagement: localized("Subcontracting assignment", "Mission de sous-traitance"),
    role: localized(
      "R pipeline development · Collaborative data-cleaning workflow",
      "Développement du pipeline R · Workflow d’apurement collaboratif",
    ),
    description: localized(
      "Developed the R pipeline used to structure survey databases, prepare anomaly-review tables for Excel, reintegrate returned corrections and consolidate the cleaned data. Also contributed with the team to Stata processing and consistency checks.",
      "Développement du pipeline R utilisé pour structurer les bases d’enquête, préparer les tables de revue des anomalies sous Excel, réintégrer les corrections et consolider les données apurées. Contribution également, en équipe, aux traitements Stata et aux contrôles de cohérence.",
    ),
    relatedWorkSlug: "bceao-survey-data-quality",
    relatedWorkLabel: localized("View BCEAO case study", "Voir l’étude de cas BCEAO"),
  },
  {
    id: "impact-decentralization-togo",
    title: localized(
      "Decentralization impact evaluation in Togo",
      "Évaluation de l’impact de la décentralisation au Togo",
    ),
    period: localized("2026", "2026"),
    engagement: localized(
      "Applied research assignment",
      "Mission de recherche appliquée",
    ),
    role: localized(
      "Sampling methodology · Survey systems · Analytical design",
      "Méthodologie d’échantillonnage · Systèmes d’enquête · Design analytique",
    ),
    description: localized(
      "Contributed to the methodological architecture of a national impact-evaluation study, including sampling design, survey-system preparation and analytical planning.",
      "Contribution à l’architecture méthodologique d’une étude nationale d’évaluation d’impact, notamment au plan d’échantillonnage, à la préparation des systèmes d’enquête et au cadrage analytique.",
    ),
    relatedWorkSlug: "impact-decentralization-togo",
    relatedWorkLabel: localized("View project overview", "Voir l’aperçu du projet"),
  },
] satisfies ConsultingAssignment[];

export const experienceContent = {
  en: {
    eyebrow: "EXPERIENCE",
    title: "From official statistics to analytical systems",
    intro:
      "A selective record of roles and assignments across official statistics, economic analysis, data quality, applied research and analytical product development.",
    supportingLine:
      "The common thread is implementation: turning statistical and economic methods into workflows, evidence and systems that can be used in practice.",
    practice: { eyebrow: "PRACTICE SNAPSHOT", items: practiceAreas },
    core: { eyebrow: "CORE PROFESSIONAL EXPERIENCE", entries },
    assignments: {
      title: "Selected consulting assignments",
      intro:
        "Selected assignments where methodology, data quality or analytical implementation was the main contribution.",
      items: assignments,
    },
    knowledgeTransfer: {
      eyebrow: "TEACHING & KNOWLEDGE TRANSFER",
      period: "2024–2026",
      title: "Undergraduate mathematics, statistics and quantitative methods",
      description:
        "Teaching and supporting undergraduate courses in mathematics, statistics and quantitative methods, with an emphasis on structured reasoning and practical problem solving.",
      topics: [
        "Analysis",
        "Algebra",
        "Decision statistics",
        "Operations research",
        "Numerical analysis",
      ],
    },
    ctas: { work: "Explore selected work", contact: "Start a conversation" },
  },
  fr: {
    eyebrow: "PARCOURS",
    title: "De la statistique publique aux systèmes analytiques",
    intro:
      "Une sélection de fonctions et de missions en statistique publique, analyse économique, qualité des données, recherche appliquée et développement de produits analytiques.",
    supportingLine:
      "Le fil conducteur est la mise en œuvre : transformer les méthodes statistiques et économiques en workflows, preuves et systèmes réellement utilisables.",
    practice: { eyebrow: "APERÇU DE LA PRATIQUE", items: practiceAreas },
    core: { eyebrow: "EXPÉRIENCE PROFESSIONNELLE PRINCIPALE", entries },
    assignments: {
      title: "Missions de conseil sélectionnées",
      intro:
        "Une sélection de missions où la méthodologie, la qualité des données ou l’implémentation analytique constituait le cœur de ma contribution.",
      items: assignments,
    },
    knowledgeTransfer: {
      eyebrow: "ENSEIGNEMENT & TRANSMISSION",
      period: "2024–2026",
      title: "Mathématiques, statistique et méthodes quantitatives au premier cycle",
      description:
        "Enseignement et accompagnement de cours de premier cycle en mathématiques, statistique et méthodes quantitatives, avec un accent sur le raisonnement structuré et la résolution pratique de problèmes.",
      topics: [
        "Analyse",
        "Algèbre",
        "Statistique décisionnelle",
        "Recherche opérationnelle",
        "Analyse numérique",
      ],
    },
    ctas: { work: "Découvrir les projets", contact: "Prendre contact" },
  },
} satisfies Record<Locale, ExperienceContent>;
