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
      en: "EM² Data & AI Lab is the current identity of the initiative originally developed as CaSEG.",
      fr: "EM² Data & AI Lab est l’identité actuelle de l’initiative initialement développée sous le nom de CaSEG.",
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
      en: "Junior Consultant under the West Africa Harmonizing and Improving Statistics Project at INSEED Togo, from November 2024 to December 2025. Contributed to economic indicator production, field-operation supervision, quality control, and data review.",
      fr: "Consultant junior dans le cadre du Projet d’Harmonisation et d’Amélioration des Statistiques en Afrique de l’Ouest à l’INSEED Togo, de novembre 2024 à décembre 2025. Contribution à la production d’indicateurs économiques, à la supervision d’opérations de collecte, au contrôle qualité et à la revue des données.",
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
      en: "Supported national accounts, economic monitoring, and economic forecasting work at INSEED Togo, including quarterly accounts, the Monthly Indicator of Economic Activity, and seasonal adjustment work, from February to October 2024.",
      fr: "Appui aux travaux de comptes nationaux, de conjoncture et de prévision économique à l’INSEED Togo, notamment sur les comptes trimestriels, l’IMAE et les travaux de désaisonnalisation, de février à octobre 2024.",
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
      en: "Internship at the Directorate-General for Economic Affairs in Benin, from May to August 2023. Worked on exchange-rate volatility and trade in the WAEMU, and contributed to analysis related to the 2023 Finance Act.",
      fr: "Stage à la Direction générale de l’Économie du Bénin, de mai à août 2023. Travaux sur la volatilité du taux de change et le commerce dans l’UEMOA, ainsi que contribution à l’analyse de la Loi de finances 2023.",
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
      en: "Internship at Office Data Science, in Lomé, from September 2019 to April 2020. Worked on statistical mortality modelling with R.",
      fr: "Stage à Office Data Science, à Lomé, de septembre 2019 à avril 2020. Travaux de modélisation statistique de la mortalité avec R.",
    },
  },
] satisfies ExperienceEntry[];

export const experienceContent = {
  en: {
    eyebrow: "EXPERIENCE",
    title: "A career built across disciplines",
    intro:
      "A selection of roles and assignments across official statistics, economic analysis, data systems and applied research.",
    ctas: {
      work: "Explore selected work",
      contact: "Start a conversation",
    },
    entries,
  },
  fr: {
    eyebrow: "PARCOURS",
    title: "Un parcours construit à travers plusieurs disciplines",
    intro:
      "Une sélection de fonctions et de missions en statistique publique, analyse économique, systèmes de données et recherche appliquée.",
    ctas: {
      work: "Découvrir les projets",
      contact: "Prendre contact",
    },
    entries,
  },
} satisfies Record<Locale, ExperienceContent>;
