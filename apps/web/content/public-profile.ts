import type { Locale } from "@/i18n/locales";

export type LocalizedText = Record<Locale, string>;

export type ProfessionalLink = {
  id: "github" | "linkedin";
  label: string;
  href: string;
};

export type PublicExperience = {
  id: string;
  organization: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  marker: LocalizedText;
  description: LocalizedText;
};

export const publicProfile = {
  name: "Mayo Takémsi Norris KADANGA",
  qualification: "Ingénieur Statisticien Économiste",
  positioning: "Economic Data Scientist & Analytics Builder",
  ventureRole: "Co-founder and Head of Data, EM² Data & AI Lab",
  brandRule: {
    en: "EM² Data & AI Lab is the current public identity. CaSEG is the former identity or origin context of the initiative.",
    fr: "EM² Data & AI Lab est l’identité publique actuelle. CaSEG est l’ancienne identité ou le contexte d’origine de l’initiative.",
  },
  links: [
    {
      id: "github",
      label: "GitHub",
      href: "https://github.com/mayonorris",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mayo-takemsi-kadanga",
    },
  ],
  experiences: [
    {
      id: "inseed-national-accounts",
      organization: {
        en: "INSEED Togo",
        fr: "INSEED Togo",
      },
      role: {
        en: "National accounts and forecasting",
        fr: "Comptes nationaux et prévision",
      },
      period: {
        en: "February to October 2024",
        fr: "Février à octobre 2024",
      },
      marker: {
        en: "Economic monitoring",
        fr: "Conjoncture économique",
      },
      description: {
        en: "Supported national accounts, economic monitoring, and forecasting work at INSEED Togo, including quarterly national accounts, the Monthly Indicator of Economic Activity, and seasonal adjustment work, from February to October 2024.",
        fr: "Appui aux travaux de comptes nationaux, de conjoncture et de prévision économique à l’INSEED Togo, notamment sur les comptes trimestriels, l’IMAE et les travaux de désaisonnalisation, de février à octobre 2024.",
      },
    },
    {
      id: "inseed-phasao",
      organization: {
        en: "INSEED Togo / PHASAO",
        fr: "INSEED Togo / PHASAO",
      },
      role: {
        en: "Junior Consultant",
        fr: "Junior Consultant",
      },
      period: {
        en: "November 2024 to December 2025",
        fr: "Novembre 2024 à décembre 2025",
      },
      marker: {
        en: "Quality control",
        fr: "Contrôle qualité",
      },
      description: {
        en: "Junior Consultant under the West Africa Harmonizing and Improving Statistics Project at INSEED Togo, from November 2024 to December 2025. Contributed to economic indicator production, field-operation supervision, quality control, and data validation.",
        fr: "Junior Consultant dans le cadre du Projet d’Harmonisation et d’Amélioration des Statistiques en Afrique de l’Ouest à l’INSEED Togo, de novembre 2024 à décembre 2025. Contribution à la production d’indicateurs économiques, à la supervision d’opérations de collecte, au contrôle qualité et à la validation des données.",
      },
    },
    {
      id: "em2-data-ai-lab",
      organization: {
        en: "EM² Data & AI Lab",
        fr: "EM² Data & AI Lab",
      },
      role: {
        en: "Co-founder and Head of Data",
        fr: "Co-founder and Head of Data",
      },
      period: {
        en: "Current public identity",
        fr: "Identité publique actuelle",
      },
      marker: {
        en: "Public identity",
        fr: "Identité publique",
      },
      description: {
        en: "Co-founder and Head of Data, EM² Data & AI Lab. CaSEG is the former identity or origin context of the initiative.",
        fr: "Co-founder and Head of Data, EM² Data & AI Lab. CaSEG constitue l’ancienne identité ou le contexte d’origine de l’initiative.",
      },
    },
    {
      id: "dge-benin",
      organization: {
        en: "Directorate-General for Economic Affairs, Benin",
        fr: "Direction générale de l’Économie du Bénin",
      },
      role: {
        en: "Internship",
        fr: "Stage",
      },
      period: {
        en: "May to August 2023",
        fr: "Mai à août 2023",
      },
      marker: {
        en: "Economic analysis",
        fr: "Analyse économique",
      },
      description: {
        en: "Internship at the Directorate-General for Economic Affairs in Benin, from May to August 2023. Worked on exchange-rate volatility and trade in the WAEMU, and contributed to analysis related to the 2023 Finance Act.",
        fr: "Stage à la Direction générale de l’Économie du Bénin, de mai à août 2023. Travaux sur la volatilité du taux de change et le commerce dans l’UEMOA, ainsi que contribution à l’analyse de la Loi de finances 2023.",
      },
    },
    {
      id: "office-data-science",
      organization: {
        en: "Office Data Science",
        fr: "Office Data Science",
      },
      role: {
        en: "Internship",
        fr: "Stage",
      },
      period: {
        en: "September 2019 to April 2020",
        fr: "Septembre 2019 à avril 2020",
      },
      marker: {
        en: "Statistical modelling",
        fr: "Modélisation statistique",
      },
      description: {
        en: "Internship at Office Data Science in Lomé, from September 2019 to April 2020. Worked on statistical mortality modelling with R.",
        fr: "Stage à Office Data Science, à Lomé, de septembre 2019 à avril 2020. Travaux de modélisation statistique de la mortalité avec R.",
      },
    },
  ],
} as const;

export type PublicProfile = typeof publicProfile;
