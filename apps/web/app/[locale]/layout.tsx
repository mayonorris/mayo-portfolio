import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/app-shell";
import { getDictionary } from "@/i18n/dictionaries";
import { defaultLocale, isLocale, locales, type Locale } from "@/i18n/locales";
import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>;

const themeInitScript = `
(function () {
  try {
    var storageKey = "mayo-portfolio-theme";
    var stored = window.localStorage.getItem(storageKey);
    var theme = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (error) {}
})();
`;

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
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
          id="theme-init"
          strategy="beforeInteractive"
        />
        <AppShell dictionary={dictionary} locale={locale}>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
