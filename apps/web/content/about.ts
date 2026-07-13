import type { Locale } from "@/i18n/locales";

export type AboutSection = {
  eyebrow: string;
  title: string;
  body: string;
};

export type AboutContent = {
  hero: {
    eyebrow: string;
    name: string;
    descriptor: string;
    statement: string;
  };
  portrait: {
    monogram: string;
    label: string;
    note: string;
  };
  sections: AboutSection[];
  ctas: {
    experience: string;
    work: string;
    contact: string;
  };
};

export const aboutContent = {
  en: {
    hero: {
      eyebrow: "ABOUT",
      name: "Mayo T. N. Kadanga",
      descriptor:
        "Economic Data Scientist & Analytics Builder · Ingénieur Statisticien Économiste",
      statement:
        "I build the whole chain — from survey design and estimation to the applications and reports that put results in decision-makers’ hands.",
    },
    portrait: {
      monogram: "MK",
      label: "Editorial profile frame",
      note: "Designed for a future 4:5 public portrait.",
    },
    sections: [
      {
        eyebrow: "Field",
        title: "Across economics, statistics and analytical systems",
        body:
          "My work sits at the intersection of official statistics, economic analysis, data science and analytical products.",
      },
      {
        eyebrow: "Systems",
        title: "From evidence to usable systems",
        body:
          "I focus on transforming questions and complex data into decision-ready systems that can be documented, interpreted and reused.",
      },
      {
        eyebrow: "Current role",
        title: "EM² Data & AI Lab",
        body:
          "I serve as Co-founder and Head of Data at EM² Data & AI Lab, the current identity of the initiative originally developed as CaSEG.",
      },
      {
        eyebrow: "Practice",
        title: "How I work",
        body:
          "I use reproducible, documented and interpretable approaches so that analysis can move carefully from method to decision.",
      },
    ],
    ctas: {
      experience: "View experience",
      work: "Explore work",
      contact: "Start a conversation",
    },
  },
  fr: {
    hero: {
      eyebrow: "À PROPOS",
      name: "Mayo T. N. Kadanga",
      descriptor:
        "Data Scientist économique et concepteur de systèmes analytiques · Ingénieur Statisticien Économiste",
      statement:
        "Je construis l’ensemble de la chaîne, de la conception d’enquête et de l’estimation aux applications et rapports qui mettent les résultats entre les mains des décideurs.",
    },
    portrait: {
      monogram: "MK",
      label: "Cadre éditorial de profil",
      note: "Conçu pour un futur portrait public au format 4:5.",
    },
    sections: [
      {
        eyebrow: "Champ",
        title: "À l’intersection de l’économie, de la statistique et des systèmes analytiques",
        body:
          "Mon travail se situe à l’intersection de la statistique publique, de l’analyse économique, de la data science et des produits analytiques.",
      },
      {
        eyebrow: "Systèmes",
        title: "Des preuves aux systèmes utilisables",
        body:
          "Je me concentre sur la transformation de questions et de données complexes en systèmes utiles à la décision, documentables, interprétables et réutilisables.",
      },
      {
        eyebrow: "Fonction actuelle",
        title: "EM² Data & AI Lab",
        body:
          "Je suis Cofondateur et responsable Data à EM² Data & AI Lab, l’identité actuelle de l’initiative initialement développée sous le nom de CaSEG.",
      },
      {
        eyebrow: "Pratique",
        title: "Ma manière de travailler",
        body:
          "J’utilise des approches reproductibles, documentées et interprétables afin que l’analyse puisse progresser avec prudence de la méthode à la décision.",
      },
    ],
    ctas: {
      experience: "Voir le parcours",
      work: "Découvrir les projets",
      contact: "Prendre contact",
    },
  },
} satisfies Record<Locale, AboutContent>;
