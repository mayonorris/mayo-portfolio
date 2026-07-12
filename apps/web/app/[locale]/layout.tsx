import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";
import "../globals.css";

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
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
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
    <html lang={locale} data-locale={locale} suppressHydrationWarning>
      <body>
        <AppShell dictionary={dictionary} locale={locale}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
