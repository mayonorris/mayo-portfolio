import { z } from "zod";

export const LocaleSchema = z.enum(["en", "fr"]);
export type Locale = z.infer<typeof LocaleSchema>;

export const ContentStatusSchema = z.enum([
  "draft",
  "review",
  "approved",
  "published",
  "archived",
]);

export const ConfidentialitySchema = z.enum([
  "public",
  "anonymized",
  "limited",
  "internal-only",
]);

export const LocalizedTextSchema = z.object({
  en: z.string().min(1),
  fr: z.string().min(1),
});

export const ProfessionalLinkSchema = z.object({
  id: z.string().min(1),
  label: LocalizedTextSchema,
  href: z.string().url(),
  public: z.boolean().default(true),
});

export const EducationSchema = z.object({
  id: z.string().min(1),
  qualification: LocalizedTextSchema,
  institution: z.string().min(1),
  location: LocalizedTextSchema.optional(),
  startYear: z.number().int().optional(),
  endYear: z.number().int(),
  note: LocalizedTextSchema.optional(),
  status: ContentStatusSchema,
});

export const CertificationSchema = z.object({
  id: z.string().min(1),
  title: z.union([z.string().min(1), LocalizedTextSchema]),
  provider: z.string().min(1),
  year: z.number().int(),
  credentialUrl: z.string().url().optional(),
  status: ContentStatusSchema,
});

export const ExperienceSchema = z.object({
  id: z.string().min(1),
  kind: z.enum([
    "employment",
    "consulting",
    "entrepreneurship",
    "teaching",
    "internship",
  ]),
  organization: z.string().min(1),
  role: LocalizedTextSchema,
  location: LocalizedTextSchema,
  startDate: z.string().regex(/^\d{4}(-\d{2})?$/),
  endDate: z.string().regex(/^\d{4}(-\d{2})?$/).optional(),
  summary: LocalizedTextSchema,
  relatedProjectSlugs: z.array(z.string()).default([]),
  confidentiality: ConfidentialitySchema,
  status: ContentStatusSchema,
});

export const ProjectSchema = z.object({
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  title: LocalizedTextSchema,
  summary: LocalizedTextSchema,
  type: LocalizedTextSchema,
  period: LocalizedTextSchema,
  location: LocalizedTextSchema,
  role: LocalizedTextSchema,
  organization: z.string().optional(),
  collaborators: LocalizedTextSchema.optional(),
  confidentiality: ConfidentialitySchema,
  status: ContentStatusSchema,
  featured: z.boolean().default(false),
  order: z.number().int().nonnegative(),
  methods: z.array(z.string()),
  technologies: z.array(z.string()),
  visual: z.object({
    src: z.string().min(1),
    alt: LocalizedTextSchema,
    caption: LocalizedTextSchema.optional(),
  }),
  mdx: z.object({
    en: z.string().min(1),
    fr: z.string().min(1),
  }),
  relatedResearch: z.array(z.string()).default([]),
  externalLinks: z.array(ProfessionalLinkSchema).default([]),
});

export const SiteProfileSchema = z.object({
  fullName: z.string().min(1),
  shortName: z.string().min(1),
  title: LocalizedTextSchema,
  qualification: LocalizedTextSchema,
  signature: LocalizedTextSchema,
  location: LocalizedTextSchema,
  email: z.string().email().optional(),
  portrait: z
    .object({
      src: z.string().min(1),
      alt: LocalizedTextSchema,
      focalPoint: z.object({
        x: z.number().min(0).max(100),
        y: z.number().min(0).max(100),
      }),
      rightsConfirmed: z.boolean(),
      exifRemoved: z.boolean(),
    })
    .optional(),
  links: z.array(ProfessionalLinkSchema),
});

export type Project = z.infer<typeof ProjectSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type Certification = z.infer<typeof CertificationSchema>;
export type SiteProfile = z.infer<typeof SiteProfileSchema>;

export function assertPublicContent<T extends { confidentiality: string }>(
  item: T,
): T {
  if (item.confidentiality === "internal-only") {
    throw new Error("Internal-only content cannot be included in a public build.");
  }

  return item;
}
