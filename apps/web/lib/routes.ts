import type { Locale } from "@/i18n/locales";

export function getLocalizedPath(locale: Locale, equivalentPath = "/"): string {
  const normalizedPath = equivalentPath === "/" ? "" : equivalentPath;
  return `/${locale}${normalizedPath}`;
}