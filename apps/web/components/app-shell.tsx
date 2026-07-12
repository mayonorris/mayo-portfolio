import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { Container } from "./container";
import { LanguageSwitcher } from "./language-switcher";
import { MainNavigation } from "./main-navigation";
import { ThemeToggle } from "./theme-toggle";

type AppShellProps = {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
};

export function AppShell({ children, dictionary, locale }: AppShellProps) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        {dictionary.shell.skipLink}
      </a>
      <header className="site-header">
        <Container className="site-header__inner">
          <div className="site-header__identity" aria-label={dictionary.shell.brand}>
            <span className="site-header__brand">{dictionary.shell.brand}</span>
            <span className="site-header__status">{dictionary.shell.status}</span>
          </div>
          <div className="site-header__navigation">
            <MainNavigation
              items={dictionary.navigation.items}
              label={dictionary.shell.navLabel}
              locale={locale}
            />
            <div className="site-header__controls">
              <LanguageSwitcher labels={dictionary.languageSwitcher} locale={locale} />
              <ThemeToggle labels={dictionary.themeToggle} />
            </div>
          </div>
        </Container>
      </header>
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <Container className="site-footer__inner">
          <span>{dictionary.shell.footer.label}</span>
          <span>{dictionary.shell.footer.status}</span>
        </Container>
      </footer>
    </div>
  );
}
