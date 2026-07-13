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
    intro: string;
  };
  portrait: {
    imageSrc: string | null;
    alt: string;
    fallback: string;
    label: string;
    caption: string;
    notes: string[];
  };
  narrative: {
    eyebrow: string;
    title: string;
    intro: string;
    sections: AboutSection[];
  };
  principles: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  languages: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  ctas: {
    eyebrow: string;
    title: string;
    body: string;
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
        "I connect methods, evidence, systems and implementation so complex questions can move toward decisions with clarity.",
      intro:
        "My work sits between economic analysis, official statistics, data science and analytical products. The common thread is simple: build the full chain from question to evidence, then from evidence to systems people can use.",
    },
    portrait: {
      imageSrc: "/images/profile-final.jpg",
      alt: "Portrait of Mayo Kadanga",
      fallback: "MK",
      label: "Editorial profile portrait area",
      caption: "Mayo T. N. Kadanga",
      notes: ["Methods", "Evidence", "Systems"],
    },
    narrative: {
      eyebrow: "PROFESSIONAL STORY",
      title: "A path shaped by rigor, field questions and usable systems",
      intro:
        "The profile is multidisciplinary, but not fragmented. Each layer adds a way to move from abstraction to institutional reality, and from analysis to decision support.",
      sections: [
        {
          eyebrow: "Foundations",
          title: "From mathematics to economic reasoning",
          body:
            "Mathematics gave the first discipline: precision, structure and the habit of proving before asserting. Economics and statistics then turned that discipline toward real social and institutional questions.",
        },
        {
          eyebrow: "Training",
          title: "Training as an Ingénieur Statisticien Économiste",
          body:
            "The ISE path brought together statistical theory, economics, econometrics and public decision problems. It shaped a profile that is comfortable with models, but also with the limits and responsibilities of measurement.",
        },
        {
          eyebrow: "Institutions",
          title: "Inside official statistics",
          body:
            "Work around official statistics added another layer: standards, field operations, quality control, national accounts, indicators and the care required when data becomes public evidence.",
        },
        {
          eyebrow: "Research",
          title: "Economic and econometric research",
          body:
            "Applied research sharpened the connection between methods and interpretation. The goal is not only to estimate, but to explain what can be trusted, what remains uncertain and what a decision-maker can responsibly use.",
        },
        {
          eyebrow: "Systems",
          title: "Into data science and software",
          body:
            "Data science and software became the bridge from analysis to use. Interfaces, dashboards, pipelines and web products make analytical work easier to inspect, reuse and act upon.",
        },
        {
          eyebrow: "Transmission",
          title: "Consulting, teaching and the CaSEG to EM² story",
          body:
            "Consulting and teaching contexts pushed the work toward clearer explanation and stronger implementation. CaSEG was the starting identity of that initiative. EM² Data & AI Lab is the current public identity.",
        },
        {
          eyebrow: "Now",
          title: "What I am building now",
          body:
            "Today the focus is on analytical systems that combine economic thinking, statistical care, reproducible methods and digital delivery, especially where evidence must become a tool for action.",
        },
      ],
    },
    principles: {
      eyebrow: "WORKING PRINCIPLES",
      title: "The habits behind the work",
      items: [
        "Evidence before opinion",
        "Interpretable methods over opaque claims",
        "Documentation as part of the product",
        "Systems designed for decisions, not only presentation",
      ],
    },
    languages: {
      eyebrow: "LANGUAGES",
      title: "Bilingual professional communication",
      items: ["French", "English"],
    },
    ctas: {
      eyebrow: "NEXT",
      title: "Explore the work behind the story",
      body:
        "The Experience page gives the concrete roles and periods. The Work page shows how the same practice appears in analytical systems, studies and digital products.",
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
        "Je relie méthodes, preuves, systèmes et mise en œuvre pour faire avancer les questions complexes vers des décisions plus claires.",
      intro:
        "Mon travail se situe entre analyse économique, statistique publique, data science et produits analytiques. Le fil conducteur est simple : construire toute la chaîne, de la question à la preuve, puis de la preuve aux systèmes utilisables.",
    },
    portrait: {
      imageSrc: "/images/profile-final.jpg",
      alt: "Portrait de Mayo Kadanga",
      fallback: "MK",
      label: "Zone éditoriale de portrait de profil",
      caption: "Mayo T. N. Kadanga",
      notes: ["Méthodes", "Preuves", "Systèmes"],
    },
    narrative: {
      eyebrow: "RÉCIT PROFESSIONNEL",
      title: "Un parcours façonné par la rigueur, le terrain et les systèmes utilisables",
      intro:
        "Le profil est multidisciplinaire, mais pas dispersé. Chaque couche ajoute une manière de passer de l’abstraction à la réalité institutionnelle, puis de l’analyse à l’aide à la décision.",
      sections: [
        {
          eyebrow: "Fondations",
          title: "Des mathématiques au raisonnement économique",
          body:
            "Les mathématiques ont donné la première discipline : précision, structure et habitude de démontrer avant d’affirmer. L’économie et la statistique ont ensuite orienté cette discipline vers des questions sociales et institutionnelles concrètes.",
        },
        {
          eyebrow: "Formation",
          title: "Formation d’Ingénieur Statisticien Économiste",
          body:
            "Le parcours ISE a réuni théorie statistique, économie, économétrie et problèmes de décision publique. Il a façonné un profil à l’aise avec les modèles, mais aussi avec les limites et les responsabilités de la mesure.",
        },
        {
          eyebrow: "Institutions",
          title: "Au contact de la statistique publique",
          body:
            "Le travail autour de la statistique publique a ajouté une autre couche : normes, opérations de terrain, contrôle qualité, comptes nationaux, indicateurs et prudence nécessaire lorsque la donnée devient une preuve publique.",
        },
        {
          eyebrow: "Recherche",
          title: "Recherche économique et économétrique",
          body:
            "La recherche appliquée a renforcé le lien entre méthodes et interprétation. L’objectif n’est pas seulement d’estimer, mais d’expliquer ce qui est fiable, ce qui reste incertain et ce qu’un décideur peut utiliser avec responsabilité.",
        },
        {
          eyebrow: "Systèmes",
          title: "Vers la data science et le logiciel",
          body:
            "La data science et le logiciel sont devenus le pont entre analyse et usage. Interfaces, tableaux de bord, pipelines et produits web rendent le travail analytique plus inspectable, réutilisable et actionnable.",
        },
        {
          eyebrow: "Transmission",
          title: "Conseil, enseignement et histoire CaSEG vers EM²",
          body:
            "Les contextes de conseil et d’enseignement ont poussé le travail vers une explication plus claire et une mise en œuvre plus solide. CaSEG est l’identité de départ de l’initiative. EM² Data & AI Lab est son identité publique actuelle.",
        },
        {
          eyebrow: "Aujourd’hui",
          title: "Ce que je construis maintenant",
          body:
            "L’orientation actuelle porte sur des systèmes analytiques qui combinent raisonnement économique, exigence statistique, méthodes reproductibles et livraison numérique, surtout lorsque la preuve doit devenir un outil d’action.",
        },
      ],
    },
    principles: {
      eyebrow: "PRINCIPES DE TRAVAIL",
      title: "Les habitudes derrière le travail",
      items: [
        "La preuve avant l’opinion",
        "Des méthodes interprétables plutôt que des affirmations opaques",
        "La documentation comme partie du produit",
        "Des systèmes conçus pour décider, pas seulement pour présenter",
      ],
    },
    languages: {
      eyebrow: "LANGUES",
      title: "Communication professionnelle bilingue",
      items: ["Français", "Anglais"],
    },
    ctas: {
      eyebrow: "SUITE",
      title: "Explorer le travail derrière le récit",
      body:
        "La page Parcours présente les fonctions et les périodes concrètes. La page Projets montre comment la même pratique apparaît dans des systèmes analytiques, des études et des produits numériques.",
      experience: "Voir le parcours",
      work: "Découvrir les projets",
      contact: "Prendre contact",
    },
  },
} satisfies Record<Locale, AboutContent>;
