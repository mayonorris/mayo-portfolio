import type { Locale } from "@/i18n/locales";

export type RouteKey =
  | "home"
  | "work"
  | "research"
  | "writing"
  | "about"
  | "experience"
  | "contact";

export const localizedRoutes = {
  en: {
    home: "/",
    work: "/work",
    research: "/research",
    writing: "/writing",
    about: "/about",
    experience: "/experience",
    contact: "/contact",
  },
  fr: {
    home: "/",
    work: "/projets",
    research: "/recherche",
    writing: "/publications",
    about: "/a-propos",
    experience: "/parcours",
    contact: "/contact",
  },
} satisfies Record<Locale, Record<RouteKey, string>>;

function splitPath(path: string): string[] {
  return path.split("/").filter(Boolean);
}

function getRouteKeyFromFirstSegment(segment: string): RouteKey | null {
  const firstSegment = `/${segment}`;

  for (const localeRoutes of Object.values(localizedRoutes)) {
    const match = Object.entries(localeRoutes).find(([, route]) => route === firstSegment);

    if (match) {
      return match[0] as RouteKey;
    }
  }

  return null;
}

export function getLocalizedPath(locale: Locale, equivalentPath = "/"): string {
  if (equivalentPath === "/") {
    return `/${locale}`;
  }

  const segments = splitPath(equivalentPath);
  const routeKey = getRouteKeyFromFirstSegment(segments[0] ?? "");

  if (!routeKey) {
    return `/${locale}${equivalentPath.startsWith("/") ? equivalentPath : `/${equivalentPath}`}`;
  }

  const localizedBase = localizedRoutes[locale][routeKey];
  const suffix = segments.slice(1).join("/");

  return suffix
    ? `/${locale}${localizedBase}/${suffix}`
    : `/${locale}${localizedBase === "/" ? "" : localizedBase}`;
}

export function getLocalizedRoutePath(locale: Locale, routeKey: RouteKey): string {
  return getLocalizedPath(locale, localizedRoutes.en[routeKey]);
}

export function getCaseStudyPath(locale: Locale, slug: string): string {
  return `${getLocalizedPath(locale, "/work")}/${slug}`;
}

export function getRouteKeyForLocalizedSegment(
  locale: Locale,
  segment: string,
): RouteKey | null {
  const firstSegment = `/${segment}`;
  const match = Object.entries(localizedRoutes[locale]).find(
    ([, route]) => route === firstSegment,
  );

  return match ? (match[0] as RouteKey) : null;
}
