"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { getLocalizedPath } from "@/lib/routes";

type MainNavigationProps = {
  items: Dictionary["navigation"]["items"];
  label: string;
  locale: Locale;
};

export function MainNavigation({ items, label, locale }: MainNavigationProps) {
  const pathname = usePathname();

  return (
    <nav aria-label={label} className="main-nav">
      <ul className="main-nav__list" role="list">
        {items.map((item) => {
          const href = getLocalizedPath(locale, item.path);
          const isHome = item.path === "/";
          const isCurrent = isHome
            ? pathname === href
            : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <li key={item.path}>
              <Link
                aria-current={isCurrent ? "page" : undefined}
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
