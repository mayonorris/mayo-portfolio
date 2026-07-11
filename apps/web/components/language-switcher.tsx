import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import { getAlternateLocale, type Locale, locales } from "@/i18n/locales";
import { getLocalizedPath } from "@/lib/routes";

type LanguageSwitcherProps = {
  locale: Locale;
  labels: Dictionary["languageSwitcher"];
  equivalentPath?: string;
};

export function LanguageSwitcher({
  locale,
  labels,
  equivalentPath = "/",
}: LanguageSwitcherProps) {
  const alternateLocale = getAlternateLocale(locale);

  return (
    <nav aria-label={labels.ariaLabel}>
      <ul className="flex items-center gap-2 text-sm" role="list">
        {locales.map((targetLocale) => {
          const isCurrent = targetLocale === locale;
          const label = isCurrent ? labels.current : labels.switchTo[targetLocale];

          return (
            <li key={targetLocale}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
                aria-label={label}
                className={[
                  "inline-flex min-h-10 items-center rounded-full border px-4 font-medium transition-colors",
                  isCurrent
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-300 text-slate-700 hover:border-slate-950 hover:text-slate-950",
                ].join(" ")}
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