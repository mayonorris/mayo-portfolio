"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n/dictionaries";
import { getAlternateLocale, type Locale, locales } from "@/i18n/locales";
import { getLocalizedPath } from "@/lib/routes";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: Dictionary["languageSwitcher"];
};

function getEquivalentPath(pathname: string, locale: Locale): string {
  const localePrefix = `/${locale}`;

  if (pathname === localePrefix) {
    return "/";
  }

  if (pathname.startsWith(`${localePrefix}/`)) {
    return pathname.slice(localePrefix.length);
  }

  return "/";
}

export function LanguageSwitcher({ locale, labels }: LanguageSwitcherProps) {
  const alternateLocale = getAlternateLocale(locale);
  const pathname = usePathname();
  const equivalentPath = getEquivalentPath(pathname, locale);

  return (
    <nav aria-label={labels.ariaLabel} className="language-switcher">
      <ul className="language-switcher__list" role="list">
        {locales.map((targetLocale) => {
          const isCurrent = targetLocale === locale;
          const label = isCurrent ? labels.current : labels.switchTo[targetLocale];

          return (
            <li key={targetLocale}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                aria-label={label}
                className="language-switcher__link"
                data-current={isCurrent ? "true" : "false"}
                href={getLocalizedPath(targetLocale, equivalentPath)}
                hrefLang={targetLocale}
                lang={targetLocale}
              >
                {labels.names[targetLocale]}
              </Link>
            </li>
          );
        })}
      </ul>
      <span className="sr-only">{labels.switchTo[alternateLocale]}</span>
    </nav>
  );
}
