import type { NextConfig } from "next";

const quartoOrigin = process.env.QUARTO_ORIGIN;

const nextConfig: NextConfig = {
  reactStrictMode: true,

  async rewrites() {
    if (!quartoOrigin) {
      return [];
    }

    return [
      {
        source: "/en/research/:path*",
        destination: `${quartoOrigin}/en/research/:path*`,
      },
      {
        source: "/en/writing/:path*",
        destination: `${quartoOrigin}/en/writing/:path*`,
      },
      {
        source: "/fr/research/:path*",
        destination: `${quartoOrigin}/fr/research/:path*`,
      },
      {
        source: "/fr/writing/:path*",
        destination: `${quartoOrigin}/fr/writing/:path*`,
      },
    ];
  },
};

export default nextConfig;
