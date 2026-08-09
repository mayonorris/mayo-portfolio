import type { Locale } from "@/i18n/locales";
import type { CaseStudyContent, EarlierProject, SelectedWorkItem } from "./work";

export const workBatchItems = {
  en: [
    {
      slug: "bceao-survey-data-quality",
      category: "Data quality \u00b7 Statistical programming \u00b7 Data integration",
      title: "Data cleaning and quality-monitoring system for a BCEAO financial-services supply survey",
      scope: "Designing a workflow for anomaly detection, review, correction, reintegration and consolidation in institutional survey data.",
      role: "R pipeline development \u00b7 Collaborative Stata workflow",
      period: "April\u2013May 2026",
      visual: "data-quality",
    },
    {
      slug: "garch-volatility-persistence",
      category: "Financial econometrics \u00b7 Time series \u00b7 R programming",
      title: "GARCH modelling and post-shock volatility persistence analysis",
      scope: "Building an R financial-econometrics pipeline and a custom procedure to measure the return of volatility toward a stable regime after a market shock.",
      role: "Confidential analytical assignment",
      period: "2020 \u00b7 Four-month assignment",
      visual: "volatility",
    },
  ],
  fr: [
    {
      slug: "bceao-survey-data-quality",
      category: "Qualit\u00e9 des donn\u00e9es \u00b7 Programmation statistique \u00b7 Int\u00e9gration de donn\u00e9es",
      title: "Apurement et syst\u00e8me de suivi de la qualit\u00e9 des donn\u00e9es d\u2019une enqu\u00eate de la BCEAO sur l\u2019offre de services financiers",
      scope: "Structurer un processus de d\u00e9tection, correction, consolidation et r\u00e9int\u00e9gration des anomalies dans des donn\u00e9es institutionnelles.",
      role: "D\u00e9veloppement du pipeline R \u00b7 Workflow Stata collaboratif",
      period: "Avril\u2013mai 2026",
      visual: "data-quality",
    },
    {
      slug: "garch-volatility-persistence",
      category: "\u00c9conom\u00e9trie financi\u00e8re \u00b7 S\u00e9ries temporelles \u00b7 Programmation R",
      title: "Mod\u00e9lisation GARCH et analyse de la persistance des chocs de volatilit\u00e9",
      scope: "D\u00e9velopper en R un pipeline d\u2019\u00e9conom\u00e9trie financi\u00e8re et une proc\u00e9dure sp\u00e9cifique pour mesurer le retour de la volatilit\u00e9 vers un r\u00e9gime stable apr\u00e8s un choc.",
      role: "Mission analytique confidentielle",
      period: "2020 \u00b7 Mission de quatre mois",
      visual: "volatility",
    },
  ],
} satisfies Record<Locale, SelectedWorkItem[]>;

export const workBatchEarlierProjects = {
  en: {
    eyebrow: "Selected earlier analytical projects",
    items: [
      {
        title: "Exploring borrower risk and loan characteristics",
        status: "Udacity learning project",
        description: "Exploratory analysis of a lending dataset, from data preparation and univariate exploration to relationships between borrower characteristics, credit conditions and loan outcomes. The work passed through several review and resubmission cycles before final validation.",
        skills: "Python \u00b7 Data wrangling \u00b7 EDA \u00b7 Data visualization",
      },
      {
        title: "Multi-source data gathering, assessment and cleaning",
        status: "Udacity learning project",
        description: "A data-wrangling project covering multi-source gathering, visual and programmatic quality assessment, explicit cleaning definitions, implementation, testing and final consolidation.",
        skills: "Python \u00b7 pandas \u00b7 Data quality \u00b7 Data integration",
      },
      {
        title: "Movie-data exploration and cleaning decisions",
        status: "Udacity learning project",
        description: "Exploratory analysis focused on data quality, genre evolution, relationships between economic and popularity variables, and documented cleaning trade-offs.",
        skills: "Python \u00b7 pandas \u00b7 EDA \u00b7 Data cleaning",
      },
      {
        title: "Supermarket sales exploration with R",
        status: "Archived exploration \u00b7 Unfinished",
        description: "An unfinished personal exploration covering structural assessment, type correction, datetime engineering, descriptive statistics, categorical analysis and an initial examination of correlations.",
        skills: "R \u00b7 tidyverse \u00b7 ggplot2 \u00b7 EDA",
      },
    ],
  },
  fr: {
    eyebrow: "Premiers projets analytiques s\u00e9lectionn\u00e9s",
    items: [
      {
        title: "Exploration du risque emprunteur et des caract\u00e9ristiques des pr\u00eats",
        status: "Projet d\u2019apprentissage Udacity",
        description: "Analyse exploratoire d\u2019un jeu de donn\u00e9es de pr\u00eats, de la pr\u00e9paration et l\u2019exploration univari\u00e9e aux relations entre caract\u00e9ristiques des emprunteurs, conditions de cr\u00e9dit et statut des pr\u00eats. Le travail a connu plusieurs cycles de revue et resoumission avant validation finale.",
        skills: "Python \u00b7 Data wrangling \u00b7 EDA \u00b7 Visualisation",
      },
      {
        title: "Collecte, \u00e9valuation et nettoyage de donn\u00e9es multi-sources",
        status: "Projet d\u2019apprentissage Udacity",
        description: "Projet de data wrangling couvrant collecte multi-sources, \u00e9valuation visuelle et programmatique, d\u00e9finition des corrections, impl\u00e9mentation, tests et consolidation finale.",
        skills: "Python \u00b7 pandas \u00b7 Qualit\u00e9 des donn\u00e9es \u00b7 Int\u00e9gration",
      },
      {
        title: "Exploration de donn\u00e9es cin\u00e9matographiques et choix de nettoyage",
        status: "Projet d\u2019apprentissage Udacity",
        description: "Analyse exploratoire centr\u00e9e sur la qualit\u00e9 des donn\u00e9es, l\u2019\u00e9volution des genres, les relations entre variables \u00e9conomiques et de popularit\u00e9, et les arbitrages de nettoyage document\u00e9s.",
        skills: "Python \u00b7 pandas \u00b7 EDA \u00b7 Nettoyage",
      },
      {
        title: "Exploration des ventes d\u2019un supermarch\u00e9 avec R",
        status: "Exploration archiv\u00e9e \u00b7 Inachev\u00e9e",
        description: "Projet personnel inachev\u00e9 couvrant l\u2019\u00e9valuation de la structure, la correction des types, la cr\u00e9ation d\u2019une variable date-heure, les statistiques descriptives et une premi\u00e8re analyse des corr\u00e9lations.",
        skills: "R \u00b7 tidyverse \u00b7 ggplot2 \u00b7 EDA",
      },
    ],
  },
} satisfies Record<Locale, { eyebrow: string; items: EarlierProject[] }>;

export const workBatchCases = {
  en: {
    "bceao-survey-data-quality": {
      backToWork: "Back to selected work",
      contactCta: "Start a conversation",
      sections: [
        { eyebrow: "Context", title: "Institutional survey quality control", body: ["As part of a subcontracting assignment delivered by a team in April\u2013May 2026, I contributed to cleaning and quality control for a BCEAO survey on the supply of financial services.", "The work connected several survey databases, consistency checks, atypical-value review, correction workflows and consolidation into an analysis-ready dataset."] },
        { eyebrow: "Problem", title: "From separate databases to a controlled workflow", body: "How can multiple institutional survey databases be transformed into a structured process that identifies anomalies, organizes human review, reintegrates corrections and produces a consolidated dataset?" },
        { eyebrow: "My role", title: "An individually owned R pipeline within a team assignment", body: ["I independently developed the R pipeline used to structure, reorganize and prepare the data before exporting monitoring tables to Excel for review.", "I also prepared review tables, integrated returned corrections, and merged and consolidated the databases. Stata processing, do-file improvements, consistency checks and the broader cleaning workflow were collaborative contributions."] },
        { eyebrow: "Workflow", title: "A repeatable review and reintegration cycle", body: "The operational layer linked programmed controls with human review and correction.", kind: "workflow", steps: ["Survey databases", "Harmonization", "Validation rules", "Anomaly review", "Excel correction", "Reintegration", "Consolidation"] },
        { eyebrow: "Distinctive contribution", title: "Connecting statistical processing and operational review", body: "My main contribution was the R-based layer that moved observations from statistical processing into review tables and then reintegrated corrected values. The work therefore went beyond one-off cleaning." },
        { eyebrow: "Outcome", title: "A structured quality-monitoring process", body: "The assignment produced a structured cleaning and quality-monitoring process combining programmatic controls with operational review. No survey figures, anomaly counts or information about responding institutions are published." },
        { eyebrow: "Collaboration", title: "Individual and collective contributions kept distinct", body: "Team project. The R pipeline described here is my individual contribution; Stata processing and the overall cleaning and validation workflow were collaborative." },
        { eyebrow: "Technologies", title: "Tools and methods", body: "R \u00b7 Stata \u00b7 Excel \u00b7 Data Quality \u00b7 Data Validation \u00b7 Data Integration" },
        { eyebrow: "Confidentiality", title: "Operational information remains private", body: "Raw databases, observed values, respondent names, contact details, detailed anomalies, operational files and original scripts are not published.", kind: "confidentiality" },
      ],
    },
    "garch-volatility-persistence": {
      backToWork: "Back to selected work",
      contactCta: "Start a conversation",
      sections: [
        { eyebrow: "Context", title: "A completed confidential assignment", body: "During a four-month assignment completed in December 2020, I supported doctoral research by developing a substantial part of an R-based financial-econometrics pipeline. The client identity, location and institution remain private." },
        { eyebrow: "Problem", title: "Measuring the persistence of volatility shocks", body: "The work required modelling conditional volatility across financial series, identifying high-volatility episodes and determining when volatility returned sufficiently close to a stable reference level after a shock." },
        { eyebrow: "My role", title: "Development of the analytical R workflow", body: "I developed most of the analytical R code, covering series preparation, return calculation, descriptive statistics, ACF/PACF analysis, Ljung-Box and stationarity tests, GARCH specification and estimation, diagnostics, conditional-variance extraction and identification of high-volatility episodes." },
        { eyebrow: "Method", title: "A custom post-shock recovery procedure", body: "The procedure identified conditional-variance peaks, recovered their dates, defined a reference volatility level, scanned observations after each shock, detected the first sufficiently close return to that level and calculated recovery duration.", kind: "workflow", steps: ["Stable regime", "Shock", "Variance peak", "Post-shock decay", "Reference threshold", "Recovery duration"] },
        { eyebrow: "Analytical distinction", title: "Volatility recovery is not price equilibrium", body: "The procedure measures volatility returning toward a reference or stable regime. It does not claim that prices return to equilibrium, establish causality or demonstrate unsupported model performance." },
        { eyebrow: "Outcome", title: "A usable econometric workflow", body: "The assignment produced an analytical workflow and an additional procedure for quantifying the temporal persistence of volatility shocks. Detailed empirical results are not published." },
        { eyebrow: "Technologies", title: "Tools and methods", body: "R \u00b7 GARCH \u00b7 Time Series \u00b7 Financial Econometrics \u00b7 Conditional Volatility" },
        { eyebrow: "Confidentiality", title: "Client and empirical materials remain private", body: "The client identity, country, institution, doctoral topic, data, detailed results and original source code are not published.", kind: "confidentiality" },
      ],
    },
  },
  fr: {
    "bceao-survey-data-quality": {
      backToWork: "Retour aux projets",
      contactCta: "Prendre contact",
      sections: [
        { eyebrow: "Contexte", title: "Contr\u00f4le qualit\u00e9 d\u2019une enqu\u00eate institutionnelle", body: ["Dans le cadre d\u2019une mission de sous-traitance men\u00e9e en \u00e9quipe en avril\u2013mai 2026, j\u2019ai contribu\u00e9 \u00e0 l\u2019apurement et au contr\u00f4le qualit\u00e9 des donn\u00e9es d\u2019une enqu\u00eate de la BCEAO sur l\u2019offre de services financiers.", "Le travail reliait plusieurs bases, des contr\u00f4les de coh\u00e9rence, la revue de valeurs atypiques, les corrections et la consolidation d\u2019une base exploitable."] },
        { eyebrow: "Probl\u00e8me", title: "Des bases distinctes vers un workflow contr\u00f4l\u00e9", body: "Comment transformer plusieurs bases d\u2019enqu\u00eate en un processus structur\u00e9 qui identifie les anomalies, organise la revue humaine, r\u00e9int\u00e8gre les corrections et produit une base consolid\u00e9e ?" },
        { eyebrow: "Mon r\u00f4le", title: "Un pipeline R individuel dans une mission collective", body: ["J\u2019ai d\u00e9velopp\u00e9 individuellement le pipeline R utilis\u00e9 pour structurer, r\u00e9organiser et pr\u00e9parer les donn\u00e9es avant l\u2019export de tables de suivi vers Excel.", "J\u2019ai aussi pr\u00e9par\u00e9 les tables de revue, int\u00e9gr\u00e9 les corrections re\u00e7ues, puis fusionn\u00e9 et consolid\u00e9 les bases. Les traitements Stata, l\u2019am\u00e9lioration du do-file, les contr\u00f4les de coh\u00e9rence et le processus global relevaient d\u2019un travail collectif."] },
        { eyebrow: "Workflow", title: "Un cycle reproductible de revue et r\u00e9int\u00e9gration", body: "La couche op\u00e9rationnelle reliait les contr\u00f4les programmatiques \u00e0 la revue humaine et aux corrections.", kind: "workflow", steps: ["Bases d\u2019enqu\u00eate", "Harmonisation", "R\u00e8gles de validation", "Revue des anomalies", "Correction Excel", "R\u00e9int\u00e9gration", "Consolidation"] },
        { eyebrow: "Contribution distinctive", title: "Relier traitement statistique et revue op\u00e9rationnelle", body: "Ma contribution principale a \u00e9t\u00e9 la couche R faisant circuler les observations entre traitement statistique, tables de revue et r\u00e9int\u00e9gration des valeurs corrig\u00e9es. Le travail d\u00e9passait ainsi un nettoyage ponctuel." },
        { eyebrow: "R\u00e9sultat", title: "Un processus structur\u00e9 de suivi qualit\u00e9", body: "La mission a produit un processus structur\u00e9 d\u2019apurement et de suivi de la qualit\u00e9 combinant contr\u00f4les programmatiques et revue op\u00e9rationnelle. Aucun chiffre d\u2019enqu\u00eate, nombre d\u2019anomalies ou renseignement sur les structures enqu\u00eat\u00e9es n\u2019est publi\u00e9." },
        { eyebrow: "Collaboration", title: "Contributions individuelle et collective distingu\u00e9es", body: "Projet r\u00e9alis\u00e9 en \u00e9quipe. Le pipeline R d\u00e9crit ici correspond \u00e0 ma contribution individuelle ; les traitements Stata et le processus global d\u2019apurement et de validation sont collaboratifs." },
        { eyebrow: "Technologies", title: "Outils et m\u00e9thodes", body: "R \u00b7 Stata \u00b7 Excel \u00b7 Qualit\u00e9 des donn\u00e9es \u00b7 Validation \u00b7 Int\u00e9gration" },
        { eyebrow: "Confidentialit\u00e9", title: "Les informations op\u00e9rationnelles restent priv\u00e9es", body: "Les bases, valeurs observ\u00e9es, noms des structures enqu\u00eat\u00e9es, coordonn\u00e9es, anomalies d\u00e9taill\u00e9es, fichiers op\u00e9rationnels et scripts originaux ne sont pas publi\u00e9s.", kind: "confidentiality" },
      ],
    },
    "garch-volatility-persistence": {
      backToWork: "Retour aux projets",
      contactCta: "Prendre contact",
      sections: [
        { eyebrow: "Contexte", title: "Une mission confidentielle achev\u00e9e", body: "Pendant une mission de quatre mois achev\u00e9e en d\u00e9cembre 2020, j\u2019ai appuy\u00e9 un travail doctoral en d\u00e9veloppant une part substantielle d\u2019un pipeline d\u2019\u00e9conom\u00e9trie financi\u00e8re sous R. L\u2019identit\u00e9, le lieu et l\u2019institution de la cliente restent priv\u00e9s." },
        { eyebrow: "Probl\u00e8me", title: "Mesurer la persistance des chocs de volatilit\u00e9", body: "Le travail devait mod\u00e9liser la volatilit\u00e9 conditionnelle de s\u00e9ries financi\u00e8res, identifier les \u00e9pisodes de forte volatilit\u00e9 et d\u00e9terminer quand elle revenait suffisamment pr\u00e8s d\u2019un niveau de r\u00e9f\u00e9rence stable apr\u00e8s un choc." },
        { eyebrow: "Mon r\u00f4le", title: "D\u00e9veloppement du workflow analytique R", body: "J\u2019ai r\u00e9alis\u00e9 la majeure partie du code analytique R : pr\u00e9paration des s\u00e9ries, calcul des rendements, statistiques descriptives, analyses ACF/PACF, tests de Ljung-Box et de stationnarit\u00e9, sp\u00e9cification et estimation GARCH, diagnostics, extraction de la variance conditionnelle et identification des \u00e9pisodes de forte volatilit\u00e9." },
        { eyebrow: "M\u00e9thode", title: "Une proc\u00e9dure sur mesure apr\u00e8s le choc", body: "La proc\u00e9dure identifiait les pics de variance conditionnelle et leurs dates, d\u00e9finissait un niveau de r\u00e9f\u00e9rence, parcourait les observations post\u00e9rieures, d\u00e9tectait le premier retour suffisamment proche et calculait la dur\u00e9e de r\u00e9cup\u00e9ration.", kind: "workflow", steps: ["R\u00e9gime stable", "Choc", "Pic de variance", "D\u00e9croissance", "Seuil de r\u00e9f\u00e9rence", "Dur\u00e9e de r\u00e9cup\u00e9ration"] },
        { eyebrow: "Distinction analytique", title: "R\u00e9cup\u00e9ration de la volatilit\u00e9, pas \u00e9quilibre des prix", body: "La proc\u00e9dure mesure le retour de la volatilit\u00e9 vers un niveau de r\u00e9f\u00e9rence ou un r\u00e9gime stable. Elle n\u2019affirme ni un retour des prix \u00e0 l\u2019\u00e9quilibre, ni une causalit\u00e9, ni une performance non \u00e9tay\u00e9e des mod\u00e8les." },
        { eyebrow: "R\u00e9sultat", title: "Un workflow \u00e9conom\u00e9trique exploitable", body: "La mission a produit un workflow analytique et une proc\u00e9dure compl\u00e9mentaire pour quantifier la persistance temporelle des chocs de volatilit\u00e9. Les r\u00e9sultats empiriques d\u00e9taill\u00e9s ne sont pas publi\u00e9s." },
        { eyebrow: "Technologies", title: "Outils et m\u00e9thodes", body: "R \u00b7 GARCH \u00b7 S\u00e9ries temporelles \u00b7 \u00c9conom\u00e9trie financi\u00e8re \u00b7 Volatilit\u00e9 conditionnelle" },
        { eyebrow: "Confidentialit\u00e9", title: "La cliente et les mat\u00e9riaux empiriques restent priv\u00e9s", body: "L\u2019identit\u00e9 de la cliente, son pays, son institution, le sujet doctoral, les donn\u00e9es, les r\u00e9sultats d\u00e9taill\u00e9s et le code source original ne sont pas publi\u00e9s.", kind: "confidentiality" },
      ],
    },
  },
} satisfies Record<Locale, Record<string, CaseStudyContent>>;
