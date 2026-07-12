import Link from "next/link";
import type { ReactNode } from "react";
import { homeContent } from "@/content/home";
import { publicProfile } from "@/content/public-profile";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { getLocalizedPath } from "@/lib/routes";
import { Container } from "./container";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";

type AppShellProps = {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
};

export function AppShell({ children, dictionary, locale }: AppShellProps) {
  const currentYear = new Date().getFullYear();
  const footerContent = homeContent[locale].footer;

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {dictionary.shell.skipLink}
      </a>
      <header className="site-header">
        <Container className="site-header__inner">
          <Link
            className="site-header__identity"
            href={getLocalizedPath(locale, "/")}
          >
            <span className="site-header__brand">{dictionary.shell.brand}</span>
            <span className="site-header__status">{dictionary.shell.status}</span>
          </Link>
          <div className="site-header__controls" aria-label={dictionary.shell.navLabel}>
            <LanguageSwitcher labels={dictionary.languageSwitcher} locale={locale} />
            <ThemeToggle labels={dictionary.themeToggle} />
            <Link className="site-header__cta" href={getLocalizedPath(locale, "/experience")}>
              {dictionary.shell.cta}
            </Link>
          </div>
        </Container>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <Container className="site-footer__inner site-footer__inner--public">
          <div className="site-footer__intro">
            <p className="site-footer__copyright">
              © {currentYear} {publicProfile.shortName}
            </p>
            <p aria-label={dictionary.shell.footer.signatureLabel}>
              {footerContent.signature}
            </p>
          </div>
          <nav aria-label={dictionary.shell.footer.linksLabel}>
            <ul className="site-footer__links" role="list">
              {dictionary.navigation.items.map((item) => (
                <li key={item.path}>
                  <Link href={getLocalizedPath(locale, item.path)}>{item.label}</Link>
                </li>
              ))}
              {publicProfile.links.map((link) => (
                <li key={link.id}>
                  <a href={link.href} rel="noreferrer" target="_blank">
                    {link.label}
                    <span className="sr-only">
                      {` (${dictionary.shell.footer.externalNote})`}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </footer>
    </div>
  );
}
