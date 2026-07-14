import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/site_libs/:path*",
        destination: "/research/en/site_libs/:path*",
      },
      {
        source: "/styles/:path*",
        destination: "/research/en/styles/:path*",
      },
      {
        source: "/en/site_libs/:path*",
        destination: "/research/en/site_libs/:path*",
      },
      {
        source: "/fr/site_libs/:path*",
        destination: "/research/fr/site_libs/:path*",
      },
      {
        source: "/en/styles/:path*",
        destination: "/research/en/styles/:path*",
      },
      {
        source: "/fr/styles/:path*",
        destination: "/research/fr/styles/:path*",
      },
      {
        source: "/en/research/financial-inclusion-mobile-money",
        destination: "/research/en/articles/financial-inclusion-mobile-money/index.html",
      },
      {
        source: "/fr/recherche/inclusion-financiere-mobile-money",
        destination: "/research/fr/articles/inclusion-financiere-mobile-money/index.html",
      },
    ];
  },
};

export default nextConfig;
