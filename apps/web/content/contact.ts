import type { Locale } from "@/i18n/locales";

export type ContactReason = {
  value: string;
  label: string;
};

export type DirectContactChannel = {
  id: "github" | "linkedin" | "em2";
  label: string;
  href: string;
  description: string;
};

export type ContactContent = {
  hero: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  channels: {
    eyebrow: string;
    title: string;
    intro: string;
    items: DirectContactChannel[];
  };
  form: {
    eyebrow: string;
    title: string;
    intro: string;
    nameLabel: string;
    emailLabel: string;
    reasonLabel: string;
    reasonPlaceholder: string;
    messageLabel: string;
    submitLabel: string;
    linkedinLabel: string;
    reasons: ContactReason[];
    validation: {
      name: string;
      email: string;
      reason: string;
      message: string;
    };
    notice: {
      copied: string;
      clipboardUnavailable: string;
    };
    formattedMessageLabels: {
      name: string;
      email: string;
      reason: string;
      message: string;
    };
  };
};

export const contactContent = {
  en: {
    hero: {
      eyebrow: "CONTACT",
      title: "Let’s talk about your data problem",
      intro:
        "Open to employment, consulting, research collaboration, technical builds, and speaking or teaching.",
    },
    channels: {
      eyebrow: "DIRECT CHANNELS",
      title: "Professional links",
      intro:
        "Use the public channels below for technical work, professional background, or collaboration conversations.",
      items: [
        {
          id: "github",
          label: "GitHub",
          href: "https://github.com/mayonorris",
          description: "Technical work and public repositories",
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/mayo-takemsi-kadanga",
          description: "Professional profile and direct conversation",
        },
        {
          id: "em2",
          label: "EM² Data & AI Lab",
          href: "https://em2lab.org/en",
          description: "Current initiative and data product work",
        },
      ],
    },
    form: {
      eyebrow: "MESSAGE",
      title: "Prepare a concise note",
      intro:
        "Complete the fields below to prepare a message for LinkedIn. No message is sent from this website.",
      nameLabel: "Name",
      emailLabel: "Email",
      reasonLabel: "Reason",
      reasonPlaceholder: "Choose a reason",
      messageLabel: "Message",
      submitLabel: "Prepare message on LinkedIn",
      linkedinLabel: "Open LinkedIn profile",
      reasons: [
        { value: "employment", label: "Employment opportunity" },
        { value: "consulting", label: "Consulting" },
        { value: "research", label: "Research collaboration" },
        { value: "technical", label: "Technical collaboration" },
        { value: "speaking", label: "Speaking or teaching" },
        { value: "other", label: "Other" },
      ],
      validation: {
        name: "Name is required.",
        email: "Enter a valid email address.",
        reason: "Choose a reason.",
        message: "Message is required.",
      },
      notice: {
        copied:
          "Your message has been copied. Paste it into LinkedIn to continue the conversation.",
        clipboardUnavailable:
          "Clipboard access was not available. Use the LinkedIn link to continue the conversation.",
      },
      formattedMessageLabels: {
        name: "Name",
        email: "Email",
        reason: "Reason",
        message: "Message",
      },
    },
  },
  fr: {
    hero: {
      eyebrow: "CONTACT",
      title: "Échangeons autour de votre problématique de données",
      intro:
        "Ouvert aux opportunités d’emploi, au conseil, aux collaborations de recherche, aux constructions techniques et aux interventions ou formations.",
    },
    channels: {
      eyebrow: "LIENS DIRECTS",
      title: "Liens professionnels",
      intro:
        "Utilisez les canaux publics ci-dessous pour les travaux techniques, le parcours professionnel ou les échanges de collaboration.",
      items: [
        {
          id: "github",
          label: "GitHub",
          href: "https://github.com/mayonorris",
          description: "Travaux techniques et dépôts publics",
        },
        {
          id: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/mayo-takemsi-kadanga",
          description: "Profil professionnel et échange direct",
        },
        {
          id: "em2",
          label: "EM² Data & AI Lab",
          href: "https://em2lab.org/fr",
          description: "Initiative actuelle et travaux de produits data",
        },
      ],
    },
    form: {
      eyebrow: "MESSAGE",
      title: "Préparer une note concise",
      intro:
        "Remplissez les champs ci-dessous pour préparer un message LinkedIn. Aucun message n’est envoyé depuis ce site.",
      nameLabel: "Nom",
      emailLabel: "E-mail",
      reasonLabel: "Motif du contact",
      reasonPlaceholder: "Choisir un motif",
      messageLabel: "Message",
      submitLabel: "Préparer le message sur LinkedIn",
      linkedinLabel: "Ouvrir le profil LinkedIn",
      reasons: [
        { value: "employment", label: "Opportunité d’emploi" },
        { value: "consulting", label: "Conseil" },
        { value: "research", label: "Collaboration de recherche" },
        { value: "technical", label: "Collaboration technique" },
        { value: "speaking", label: "Intervention ou formation" },
        { value: "other", label: "Autre" },
      ],
      validation: {
        name: "Le nom est requis.",
        email: "Saisissez une adresse e-mail valide.",
        reason: "Choisissez un motif.",
        message: "Le message est requis.",
      },
      notice: {
        copied:
          "Votre message a été copié. Collez-le dans LinkedIn pour poursuivre l’échange.",
        clipboardUnavailable:
          "L’accès au presse-papiers n’était pas disponible. Utilisez le lien LinkedIn pour poursuivre l’échange.",
      },
      formattedMessageLabels: {
        name: "Nom",
        email: "E-mail",
        reason: "Motif",
        message: "Message",
      },
    },
  },
} satisfies Record<Locale, ContactContent>;
