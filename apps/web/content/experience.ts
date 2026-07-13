import type { Locale } from "@/i18n/locales";

export type ExperienceEntry = {
  id: string;
  category: Record<Locale, string>;
  period: Record<Locale, string>;
  role: Record<Locale, string>;
  organization: string;
  location?: Record<Locale, string>;
  description: Record<Locale, string>;
};

export type ExperienceContent = {
  eyebrow: string;
  title: string;
  intro: string;
  framing: {
    title: string;
    body: string;
    arc: string[];
  };
  ctas: {
    work: string;
    contact: string;
  };
  entries: ExperienceEntry[];
};

const entries = [
  {
    id: "em2-data-ai-lab",
    category: {
      en: "Entrepreneurship",
      fr: "Entrepreneuriat",
    },
    period: {
      en: "Current",
      fr: "Actuel",
    },
    role: {
      en: "Co-founder and Head of Data",
      fr: "Cofondateur et responsable Data",
    },
    organization: "EM² Data & AI Lab",
    description: {
      en: "EM² Data & AI Lab is the current identity of the initiative originally developed as CaSEG. The role connects analytical positioning, data leadership and the design of public-facing data and AI systems.",
      fr: "EM² Data & AI Lab est l’identité actuelle de l’initiative initialement développée sous le nom de CaSEG. La fonction relie positionnement analytique, responsabilité data et conception de systèmes data et IA orientés vers le public.",
    },
  },
  {
    id: "inseed-phasao",
    category: {
      en: "Quality control",
      fr: "Contrôle qualité",
    },
    period: {
      en: "Nov 2024 – Dec 2025",
      fr: "Nov. 2024 – déc. 2025",
    },
    role: {
      en: "Junior Consultant, PHASAO",
      fr: "Consultant junior, PHASAO",
    },
    organization: "INSEED Togo",
    location: {
      en: "Togo",
      fr: "Togo",
    },
    description: {
      en: "Junior Consultant under the West Africa Harmonizing and Improving Statistics Project at INSEED Togo. Contributed to economic indicator production, field-operation supervision, quality control and data review.",
      fr: "Consultant junior dans le cadre du Projet d’Harmonisation et d’Amélioration des Statistiques en Afrique de l’Ouest à l’INSEED Togo. Contribution à la production d’indicateurs économiques, à la supervision d’opérations de collecte, au contrôle qualité et à la revue des données.",
    },
  },
  {
    id: "inseed-national-accounts",
    category: {
      en: "National accounts",
      fr: "Comptes nationaux",
    },
    period: {
      en: "Feb 2024 – Oct 2024",
      fr: "Fév. 2024 – oct. 2024",
    },
    role: {
      en: "National accounts and forecasting support",
      fr: "Appui aux comptes nationaux et à la prévision",
    },
    organization: "INSEED Togo",
    location: {
      en: "Togo",
      fr: "Togo",
    },
    description: {
      en: "Supported national accounts, economic monitoring and economic forecasting work at INSEED Togo, including quarterly accounts, the Monthly Indicator of Economic Activity and seasonal adjustment work.",
      fr: "Appui aux travaux de comptes nationaux, de conjoncture et de prévision économique à l’INSEED Togo, notamment sur les comptes trimestriels, l’IMAE et les travaux de désaisonnalisation.",
    },
  },
  {
    id: "dge-benin",
    category: {
      en: "Internship",
      fr: "Stage",
    },
    period: {
      en: "May 2023 – Aug 2023",
      fr: "Mai 2023 – août 2023",
    },
    role: {
      en: "Internship",
      fr: "Stage",
    },
    organization: "Directorate-General for Economic Affairs, Benin",
    location: {
      en: "Benin",
      fr: "Bénin",
    },
    description: {
      en: "Internship at the Directorate-General for Economic Affairs in Benin. Worked on exchange-rate volatility and trade in the WAEMU, and contributed to analysis related to the 2023 Finance Act.",
      fr: "Stage à la Direction générale de l’Économie du Bénin. Travaux sur la volatilité du taux de change et le commerce dans l’UEMOA, ainsi que contribution à l’analyse de la Loi de finances 2023.",
    },
  },
  {
    id: "office-data-science",
    category: {
      en: "Internship",
      fr: "Stage",
    },
    period: {
      en: "Sep 2019 – Apr 2020",
      fr: "Sept. 2019 – avr. 2020",
    },
    role: {
      en: "Internship",
      fr: "Stage",
    },
    organization: "Office Data Science",
    location: {
      en: "Lomé",
      fr: "Lomé",
    },
    description: {
      en: "Internship at Office Data Science in Lomé. Worked on statistical mortality modelling with R, an early bridge between statistical reasoning and applied software practice.",
      fr: "Stage à Office Data Science, à Lomé. Travaux de modélisation statistique de la mortalité avec R, comme premier pont entre raisonnement statistique et pratique logicielle appliquée.",
    },
  },
] satisfies ExperienceEntry[];

export const experienceContent = {
  en: {
    eyebrow: "EXPERIENCE",
    title: "A trajectory through evidence, institutions and systems",
    intro:
      "A selective timeline of roles and assignments across official statistics, economic analysis, data systems and applied research.",
    framing: {
      title: "One path, several disciplines",
      body:
        "The sequence is not only chronological. It shows how mathematical discipline, economic reasoning, official statistics, applied research and software practice reinforce one another.",
      arc: [
        "Mathematics",
        "Economics and statistics",
        "Official statistics",
        "Applied research",
        "Data systems",
        "EM²",
      ],
    },
    ctas: {
      work: "Explore selected work",
      contact: "Start a conversation",
    },
    entries,
  },
  fr: {
    eyebrow: "PARCOURS",
    title: "Une trajectoire entre preuve, institutions et systèmes",
    intro:
      "Une chronologie sélective de fonctions et de missions en statistique publique, analyse économique, systèmes de données et recherche appliquée.",
    framing: {
      title: "Un même parcours, plusieurs disciplines",
      body:
        "La séquence n’est pas seulement chronologique. Elle montre comment rigueur mathématique, raisonnement économique, statistique publique, recherche appliquée et pratique logicielle se renforcent mutuellement.",
      arc: [
        "Mathématiques",
        "Économie et statistique",
        "Statistique publique",
        "Recherche appliquée",
        "Systèmes data",
        "EM²",
      ],
    },
    ctas: {
      work: "Découvrir les projets",
      contact: "Prendre contact",
    },
    entries,
  },
} satisfies Record<Locale, ExperienceContent>;
