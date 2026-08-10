import type { MetadataRoute } from "next";
import { workContent } from "@/content/work";

const productionUrl = "https://mayokadanga-portfolio.vercel.app";

const localizedPages = {
  en: ["", "work", "research", "writing", "about", "experience", "contact"],
  fr: ["", "projets", "recherche", "publications", "a-propos", "parcours", "contact"],
} as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = Object.entries(localizedPages).flatMap(([locale, paths]) =>
    paths.map((path) => `${productionUrl}/${locale}${path ? `/${path}` : ""}`),
  );
  const workCases = (["en", "fr"] as const).flatMap((locale) => {
    const segment = locale === "en" ? "work" : "projets";
    return workContent[locale].items
      .filter((item) => item.maturity === "detailed-case")
      .map((item) => `${productionUrl}/${locale}/${segment}/${item.slug}`);
  });
  const researchArticles = [
    `${productionUrl}/en/research/financial-inclusion-multidimensional-poverty`,
    `${productionUrl}/fr/recherche/inclusion-financiere-pauvrete-multidimensionnelle`,
  ];

  return [...pages, ...workCases, ...researchArticles].map((url) => ({ url }));
}
