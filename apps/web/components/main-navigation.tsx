import Link from "next/link";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { getLocalizedPath } from "@/lib/routes";

type MainNavigationProps = {
  items: Dictionary["navigation"]["items"];
  label: string;
  locale: Locale;
};

export function MainNavigation({ items, label, locale }: MainNavigationProps) {
  return (
    <nav aria-label={label} className="main-nav">
      <ul className="main-nav__list" role="list">
        {items.map((item) => {
          const href = getLocalizedPath(locale, item.path);
          const isHome = item.path === "/";

          return (
            <li key={item.path}>
              <Link
                aria-current={isHome ? "page" : undefined}
                className="main-nav__link"
                href={href}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
