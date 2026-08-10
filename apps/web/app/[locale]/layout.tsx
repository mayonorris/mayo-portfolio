import type { Metadata } from "next";
import { Hanken_Grotesk, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";
import "../globals.css";

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

const productionUrl = new URL("https://mayokadanga-portfolio.vercel.app");

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

function parseLocale(value: string): Locale {
  if (!isLocale(value)) {
    notFound();
  }

  return value;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = parseLocale(localeParam);
  const dictionary = getDictionary(locale);

  return {
    metadataBase: productionUrl,
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      siteName: "Mayo Kadanga Portfolio",
      type: "website",
      locale,
      alternateLocale: locales.filter((item) => item !== locale),
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        fr: "/fr",
        "x-default": `/${defaultLocale}`,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  const locale = parseLocale(localeParam);
  const dictionary = getDictionary(locale);

  return (
    <html
      className={`${hankenGrotesk.variable} ${sourceSerif.variable} ${ibmPlexMono.variable}`}
      lang={locale}
      data-locale={locale}
      suppressHydrationWarning
    >
      <body>
        <AppShell dictionary={dictionary} locale={locale}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
