import type { Locale } from "@/i18n/locales";
import type { ExternalProjectLinkId } from "./external-links";

export type WorkVisualVariant = "systems" | "research" | "signal" | "finance";

export type SelectedWorkItem = {
  slug: string;
  category: string;
  title: string;
  scope: string;
  role: string;
  period?: string;
  visual: WorkVisualVariant;
  liveLinkId?: ExternalProjectLinkId;
};

export type AdditionalBuild = {
  eyebrow: string;
  title: string;
  category: string;
  description: string;
  linkId: ExternalProjectLinkId;
};

export type CaseStudySection = {
  eyebrow: string;
  title: string;
  body: string | string[];
};

export type CaseStudyContent = {
  backToWork: string;
  contactCta: string;
  liveSiteCta?: string;
  sections: CaseStudySection[];
};

export type WorkContent = {
  eyebrow: string;
  title: string;
  intro: string;
  viewAll: string;
  cardCta: string;
  roleLabel: string;
  periodLabel: string;
  liveSiteLabel: string;
  items: SelectedWorkItem[];
  additionalBuild: AdditionalBuild;
  cases: Record<string, CaseStudyContent>;
};

const workItems = {
  en: [
    {
      slug: "em2-data-ai-lab-website",
      category: "Product strategy · Information architecture · UX/UI · Web development",
      title: "Designing the bilingual institutional platform for EM² Data & AI Lab",
      scope:
        "From digital identity redesign to the production launch of a scalable institutional platform.",
      role: "Product designer and lead developer",
      period: "January-June 2026",
      visual: "systems",
      liveLinkId: "em2",
    },
    {
      slug: "impact-decentralization-togo",
      category: "Applied research",
      title: "Impact of decentralization in Togo",
      scope:
        "A cautious applied-study frame for decentralization, territorial structure, and public decision questions in Togo.",
      role: "Applied research",
      visual: "research",
    },
    {
      slug: "economic-indicators-seasonal-adjustment",
      category: "Statistical workflow",
      title: "Economic indicators & seasonal adjustment",
      scope:
        "A synthetic workflow frame for comparing raw economic signals with adjusted monitoring views.",
      role: "Statistical workflow",
      visual: "signal",
    },
    {
      slug: "financial-inclusion-fintech-analysis",
      category: "Econometric analysis",
      title: "Financial inclusion & FinTech analysis",
      scope:
        "An analytical case frame for financial inclusion and digital finance segmentation questions.",
      role: "Econometric analysis",
      visual: "finance",
    },
  ],
  fr: [
    {
      slug: "em2-data-ai-lab-website",
      category: "Stratégie produit · Architecture de l’information · UX/UI · Développement web",
      title: "Conception de la plateforme institutionnelle bilingue d’EM² Data & AI Lab",
      scope:
        "De la refonte de l’identité numérique à la mise en production d’une plateforme institutionnelle évolutive.",
      role: "Concepteur produit et développeur principal",
      period: "Janvier-juin 2026",
      visual: "systems",
      liveLinkId: "em2",
    },
    {
      slug: "impact-decentralization-togo",
      category: "Recherche appliquée",
      title: "Impact of decentralization in Togo",
      scope:
        "Un cadre d’étude appliquée prudent sur la décentralisation, la structure territoriale et les questions de décision publique au Togo.",
      role: "Recherche appliquée",
      visual: "research",
    },
    {
      slug: "economic-indicators-seasonal-adjustment",
      category: "Flux statistique",
      title: "Economic indicators & seasonal adjustment",
      scope:
        "Un cadre de flux synthétique pour comparer des signaux économiques bruts avec des vues de suivi ajustées.",
      role: "Flux statistique",
      visual: "signal",
    },
    {
      slug: "financial-inclusion-fintech-analysis",
      category: "Analyse économétrique",
      title: "Financial inclusion & FinTech analysis",
      scope:
        "Un cadre analytique pour les questions d’inclusion financière et de segmentation de la finance numérique.",
      role: "Analyse économétrique",
      visual: "finance",
    },
  ],
} satisfies Record<Locale, SelectedWorkItem[]>;

export const workContent = {
  en: {
    eyebrow: "SELECTED WORK",
    title: "Evidence, systems & products",
    intro:
      "A selection of analytical systems, applied studies and digital products.",
    viewAll: "View all work",
    cardCta: "Open case",
    roleLabel: "Role",
    periodLabel: "Period",
    liveSiteLabel: "Live site",
    items: workItems.en,
    additionalBuild: {
      eyebrow: "ADDITIONAL BUILD",
      title: "Currency Converter",
      category: "Live utility project",
      description:
        "A compact public utility for exploring currency conversion through a focused web interface.",
      linkId: "currencyConverter",
    },
    cases: {
      "em2-data-ai-lab-website": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        liveSiteCta: "Visit the EM² Data & AI Lab platform",
        sections: [
          {
            eyebrow: "Overview",
            title: "From identity shift to public platform",
            body: [
              "Between January and June 2026, I designed and developed the bilingual institutional platform for EM² Data & AI Lab, from initial framing through production deployment.",
              "The project supported the transition from CaSEG to a broader organization covering statistics, data engineering, economic intelligence, management and governance, and the development of analytical products.",
              "The objective was not merely to build a new website. It was to translate an initially under-structured vision into a coherent digital identity, a readable service offering and a platform capable of supporting the firm’s future development.",
            ],
          },
          {
            eyebrow: "Initial situation",
            title: "A previous web presence had reached its limits",
            body: [
              "CaSEG previously had a website built with Google Sites in 2021. At the time, the solution appeared satisfactory, particularly because of our limited experience in web development and digital strategy.",
              "After completing development and professional foundations training with ALX, I reassessed that initial digital presence. The existing website then appeared limited in several respects: weak institutional positioning, insufficiently distinctive visual identity, difficulty structuring the service offering, limited capacity for evolution, an architecture poorly suited to bilingual content, and limited technical and editorial control.",
              "This assessment led to a complete redesign rather than an incremental improvement of the former website.",
            ],
          },
          {
            eyebrow: "Problem",
            title: "Making a complex offer legible",
            body: [
              "How could a complex multidisciplinary offering be transformed into a clear, credible and bilingual institutional platform that remained flexible enough to support new services, training programmes and publications?",
              "The project also had to make the continuity between CaSEG and EM² Data & AI Lab visible without creating an artificial break with the initiative’s history.",
            ],
          },
          {
            eyebrow: "Role and responsibilities",
            title: "Product design, content and frontend delivery",
            body: [
              "I independently designed and delivered the project, using Claude Code as a development assistant.",
              "My responsibilities covered needs analysis, product strategy, digital identity repositioning, information architecture, division structure, service and training design, content writing, French-English translation, art direction, UX/UI, frontend development, responsive optimization, technical SEO, domain configuration, deployment and quality assurance.",
              "The other EM² members acted as internal stakeholders and provided feedback.",
            ],
          },
          {
            eyebrow: "Organizational design",
            title: "A three-division structure",
            body: [
              "The three-division structure reflects the organization’s three main professional profiles: Statistics and Data Engineering, Economic Intelligence, and Management and Governance.",
              "The platform had to make this structure immediately understandable while maintaining a unified user experience.",
            ],
          },
          {
            eyebrow: "Service design",
            title: "Formalizing the offer while building the interface",
            body: [
              "The services, training programmes, intervention categories and institutional messages had not yet been formalized.",
              "The project therefore included defining areas of intervention, organizing services, designing training programmes, clarifying target audiences, establishing information hierarchy, writing institutional content and adapting it for both languages.",
              "The platform became both a communication channel and a tool for formalizing EM²’s offering.",
            ],
          },
          {
            eyebrow: "Information architecture",
            title: "Bilingual paths for several audiences",
            body: [
              "The architecture was designed for public institutions, development partners, financial organizations, businesses, researchers, professionals and students seeking training.",
              "The navigation had to provide quick access to divisions, services, training programmes, the organizational profile and contact channels. French-English bilingualism was incorporated from the start.",
            ],
          },
          {
            eyebrow: "Visual system",
            title: "Institutional depth, clarity and distinction",
            body: [
              "The visual identity is based on dark blue to convey credibility, depth and an institutional character; gold as an accent associated with value and distinction; and white to preserve clarity and visual breathing space.",
              "The system was applied across typography, buttons, service cards, divisions, navigation, interaction states, and mobile and desktop layouts.",
            ],
          },
          {
            eyebrow: "Technical choices",
            title: "A scalable Next.js foundation",
            body: [
              "The platform uses Next.js, TypeScript, Tailwind CSS, Vercel and Hostinger.",
              "Next.js provides an architecture that can evolve toward publications, training resources and potential interactive services. No CMS, business backend or database system has yet been integrated.",
            ],
          },
          {
            eyebrow: "Constraints",
            title: "Domain setup and content availability",
            body: [
              "Two constraints had a particularly strong influence on the project: hosting and domain configuration, with the application deployment and domain managed separately; and content availability, as the core editorial materials did not yet exist in a publishable form.",
              "The organizational structure, services, training programmes, institutional messages, bilingual content and their interface representation therefore had to be designed in parallel.",
            ],
          },
          {
            eyebrow: "AI-assisted development",
            title: "Claude Code as development assistant",
            body: [
              "Claude Code was used as a development assistant to accelerate selected production, exploration and correction tasks.",
              "Decisions concerning positioning, content, architecture, design, functionality and final validation remained under my responsibility.",
            ],
          },
          {
            eyebrow: "Outcome",
            title: "A public institutional platform for EM²",
            body: [
              "The project delivered a bilingual institutional platform presenting the new EM² Data & AI Lab identity, the three divisions, the main service areas, training offerings, institutional positioning, contact pathways and an architecture prepared for future content.",
              "The platform is now EM² Data & AI Lab’s primary public digital presence.",
            ],
          },
          {
            eyebrow: "Limits and next steps",
            title: "Prepared for future product growth",
            body:
              "The platform can evolve with an editorial publishing system, more advanced training management, backend-connected forms, a database, workflow automation, a resource center and interactive analytical products.",
          },
          {
            eyebrow: "Technologies",
            title: "Stack and production environment",
            body: "Next.js · TypeScript · Tailwind CSS · Vercel · Hostinger · Claude Code",
          },
        ],
      },
      "impact-decentralization-togo": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        sections: [
          {
            eyebrow: "Context",
            title: "Applied research frame",
            body:
              "This case remains framed around decentralization, territorial structure and public decision questions without adding unverified results.",
          },
          {
            eyebrow: "Scope",
            title: "Research presentation",
            body:
              "The public page presents the type of analytical problem and method family, not confidential data, institutional files or unsupported findings.",
          },
        ],
      },
      "economic-indicators-seasonal-adjustment": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        sections: [
          {
            eyebrow: "Context",
            title: "Statistical workflow",
            body:
              "This case frames a public-safe workflow for comparing raw economic signals with seasonally adjusted monitoring views.",
          },
          {
            eyebrow: "Scope",
            title: "Decision-ready signals",
            body:
              "The presentation stays synthetic and does not expose real institutional series, estimates or operational data.",
          },
        ],
      },
      "financial-inclusion-fintech-analysis": {
        backToWork: "Back to selected work",
        contactCta: "Start a conversation",
        sections: [
          {
            eyebrow: "Context",
            title: "Econometric analysis frame",
            body:
              "This case presents a cautious analytical frame for financial inclusion and digital finance segmentation questions.",
          },
          {
            eyebrow: "Scope",
            title: "Public-safe case structure",
            body:
              "The public page avoids client claims, source data, provider details, performance metrics and unsupported impact statements.",
          },
        ],
      },
    },
  },
  fr: {
    eyebrow: "TRAVAUX SÉLECTIONNÉS",
    title: "Preuves, systèmes et produits",
    intro:
      "Une sélection de systèmes analytiques, d’études appliquées et de produits numériques.",
    viewAll: "Voir tous les travaux",
    cardCta: "Voir le cas",
    roleLabel: "Rôle",
    periodLabel: "Période",
    liveSiteLabel: "Site en ligne",
    items: workItems.fr,
    additionalBuild: {
      eyebrow: "PROJET COMPLÉMENTAIRE",
      title: "Convertisseur de devises",
      category: "Outil web en ligne",
      description:
        "Un outil public compact permettant d’explorer la conversion de devises à travers une interface web ciblée.",
      linkId: "currencyConverter",
    },
    cases: {
      "em2-data-ai-lab-website": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        liveSiteCta: "Visiter la plateforme EM² Data & AI Lab",
        sections: [
          {
            eyebrow: "Vue d’ensemble",
            title: "De l’identité numérique à la plateforme publique",
            body: [
              "Entre janvier et juin 2026, j’ai conçu et développé la plateforme institutionnelle bilingue d’EM² Data & AI Lab, depuis le cadrage initial jusqu’à sa mise en production.",
              "Le projet accompagnait la transformation de CaSEG en une structure au positionnement plus large, couvrant la statistique, l’ingénierie des données, l’intelligence économique, le management et la gouvernance, ainsi que la construction de produits analytiques.",
              "L’objectif n’était pas uniquement de créer un nouveau site. Il fallait transformer une vision encore peu structurée en une identité numérique cohérente, une offre de services lisible et une plateforme capable de soutenir le développement futur du cabinet.",
            ],
          },
          {
            eyebrow: "Situation initiale",
            title: "Une première présence web devenue limitée",
            body: [
              "CaSEG disposait auparavant d’un site réalisé avec Google Sites en 2021. À l’époque, cette solution semblait satisfaisante, notamment en raison de notre expérience limitée en développement web et en stratégie numérique.",
              "Après mes formations en développement et en fondements professionnels auprès d’ALX, j’ai réévalué cette première présence numérique. Le site existant apparaissait alors limité sur plusieurs dimensions : positionnement institutionnel peu affirmé, identité visuelle insuffisamment différenciée, offre de services difficile à structurer, faible capacité d’évolution, architecture peu adaptée au bilinguisme, et contrôle technique et éditorial limité.",
              "Cette analyse a conduit à reprendre entièrement le projet plutôt qu’à améliorer progressivement l’ancien site.",
            ],
          },
          {
            eyebrow: "Problème",
            title: "Rendre lisible une offre multidisciplinaire",
            body: [
              "Comment transformer une offre multidisciplinaire complexe en une plateforme institutionnelle claire, crédible, bilingue et suffisamment flexible pour accompagner de nouveaux services, formations et publications ?",
              "Le travail devait également rendre visible la continuité entre CaSEG et EM² Data & AI Lab sans créer de rupture artificielle avec l’histoire de l’initiative.",
            ],
          },
          {
            eyebrow: "Rôle et responsabilités",
            title: "Conception produit, contenu et développement frontend",
            body: [
              "J’ai assuré seul la conception et la réalisation du projet, avec Claude Code comme assistant de développement.",
              "Mon intervention a couvert : analyse du besoin, stratégie produit, repositionnement de l’identité numérique, architecture de l’information, structuration des divisions, conception des services et formations, rédaction, traduction français-anglais, direction artistique, UX/UI, développement frontend, responsive, SEO technique, configuration du domaine, déploiement et contrôle qualité.",
              "Les autres membres d’EM² sont intervenus comme parties prenantes internes pour donner leurs avis et retours.",
            ],
          },
          {
            eyebrow: "Structuration de l’organisation",
            title: "Une organisation en trois divisions",
            body: [
              "L’organisation autour de trois divisions résulte d’une décision interne correspondant aux trois profils principaux de la structure : Statistique et ingénierie des données, Intelligence économique, et Management et gouvernance.",
              "La plateforme devait rendre cette organisation immédiatement compréhensible tout en conservant une expérience unifiée.",
            ],
          },
          {
            eyebrow: "Conception de l’offre",
            title: "Formaliser l’offre en construisant l’interface",
            body: [
              "Les services, les formations, les catégories d’intervention et les messages institutionnels n’étaient pas encore formalisés.",
              "Le projet a donc inclus : définition des domaines d’intervention, organisation des prestations, conception des offres de formation, clarification des publics cibles, hiérarchisation des informations, rédaction institutionnelle et adaptation bilingue.",
              "La plateforme est ainsi devenue à la fois un support de communication et un outil de formalisation de l’offre d’EM².",
            ],
          },
          {
            eyebrow: "Architecture de l’information",
            title: "Des parcours bilingues pour plusieurs publics",
            body: [
              "L’architecture a été pensée pour les institutions publiques, partenaires au développement, organisations financières, entreprises, chercheurs, professionnels et étudiants recherchant une formation.",
              "La navigation devait permettre d’accéder rapidement aux divisions, services, formations, à la présentation de la structure et aux canaux de contact. Le bilinguisme français-anglais a été intégré dès la conception.",
            ],
          },
          {
            eyebrow: "Système visuel",
            title: "Profondeur institutionnelle, clarté et distinction",
            body: [
              "La charte graphique repose sur un bleu sombre pour la crédibilité, la profondeur et le caractère institutionnel; une teinte dorée pour l’accent, la valeur et la distinction; et le blanc pour la respiration et la lisibilité.",
              "Le système a été décliné dans la hiérarchie typographique, les boutons, les cartes de services, les divisions, la navigation, les états interactifs et les versions mobile et desktop.",
            ],
          },
          {
            eyebrow: "Choix techniques",
            title: "Une base Next.js évolutive",
            body: [
              "La plateforme utilise Next.js, TypeScript, Tailwind CSS, Vercel et Hostinger.",
              "Next.js fournit une architecture évolutive pour de futures publications, formations, ressources et services interactifs. Aucun CMS, backend métier ou système de base de données n’est encore intégré.",
            ],
          },
          {
            eyebrow: "Contraintes",
            title: "Domaine, hébergement et disponibilité des contenus",
            body: [
              "Deux contraintes ont particulièrement structuré le projet : l’hébergement et la configuration du domaine, avec une application déployée séparément du domaine; et la disponibilité des contenus, les principaux éléments éditoriaux n’existant pas encore sous une forme directement publiable.",
              "Il a donc fallu concevoir simultanément l’organisation, les services, les formations, les messages institutionnels, les contenus bilingues et leur représentation dans l’interface.",
            ],
          },
          {
            eyebrow: "Développement assisté par l’IA",
            title: "Claude Code comme assistant de développement",
            body: [
              "Claude Code a été utilisé comme assistant de développement pour accélérer certaines tâches de production, d’exploration et de correction.",
              "Les décisions relatives au positionnement, aux contenus, à l’architecture, au design, aux fonctionnalités et à la validation finale sont restées sous ma responsabilité.",
            ],
          },
          {
            eyebrow: "Résultat",
            title: "Une plateforme institutionnelle publique pour EM²",
            body: [
              "Le projet a abouti à une plateforme institutionnelle bilingue présentant la nouvelle identité EM² Data & AI Lab, les trois divisions, les principaux domaines de services, les offres de formation, le positionnement institutionnel, les parcours de contact et une architecture prête à accueillir de futurs contenus.",
              "Le site constitue désormais la principale présence numérique publique d’EM² Data & AI Lab.",
            ],
          },
          {
            eyebrow: "Limites et évolutions",
            title: "Une base prête pour les prochains développements",
            body:
              "La plateforme pourra évoluer avec un système éditorial, une gestion plus avancée des formations, des formulaires connectés à un backend, une base de données, des automatisations, un espace de ressources et des produits analytiques interactifs.",
          },
          {
            eyebrow: "Technologies",
            title: "Stack et environnement de production",
            body: "Next.js · TypeScript · Tailwind CSS · Vercel · Hostinger · Claude Code",
          },
        ],
      },
      "impact-decentralization-togo": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        sections: [
          {
            eyebrow: "Contexte",
            title: "Cadre de recherche appliquée",
            body:
              "Ce cas reste centré sur la décentralisation, la structure territoriale et les questions de décision publique sans ajouter de résultats non vérifiés.",
          },
          {
            eyebrow: "Périmètre",
            title: "Présentation de recherche",
            body:
              "La page publique présente le type de problème analytique et la famille de méthodes, sans données confidentielles, fichiers institutionnels ni résultats non étayés.",
          },
        ],
      },
      "economic-indicators-seasonal-adjustment": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        sections: [
          {
            eyebrow: "Contexte",
            title: "Flux statistique",
            body:
              "Ce cas présente un flux public et prudent pour comparer des signaux économiques bruts avec des vues de suivi désaisonnalisées.",
          },
          {
            eyebrow: "Périmètre",
            title: "Signaux utiles à la décision",
            body:
              "La présentation reste synthétique et n’expose aucune série institutionnelle, estimation ou donnée opérationnelle réelle.",
          },
        ],
      },
      "financial-inclusion-fintech-analysis": {
        backToWork: "Retour aux projets",
        contactCta: "Prendre contact",
        sections: [
          {
            eyebrow: "Contexte",
            title: "Cadre d’analyse économétrique",
            body:
              "Ce cas présente un cadre analytique prudent pour les questions d’inclusion financière et de segmentation de la finance numérique.",
          },
          {
            eyebrow: "Périmètre",
            title: "Structure de cas publiable",
            body:
              "La page publique évite les affirmations client, les données sources, les détails de fournisseurs, les métriques de performance et les impacts non étayés.",
          },
        ],
      },
    },
  },
} satisfies Record<Locale, WorkContent>;

export function getSelectedWorkItem(locale: Locale, slug: string): SelectedWorkItem | undefined {
  return workContent[locale].items.find((item) => item.slug === slug);
}

export function getCaseStudyContent(locale: Locale, slug: string): CaseStudyContent | undefined {
  return (workContent[locale].cases as Record<string, CaseStudyContent>)[slug];
}
