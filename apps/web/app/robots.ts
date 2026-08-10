import type { MetadataRoute } from "next";

const productionUrl = "https://mayokadanga-portfolio.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${productionUrl}/sitemap.xml`,
  };
}
