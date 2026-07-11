import type { ReactNode } from "react";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/locales";
import { LanguageSwitcher } from "./language-switcher";

type AppShellProps = {
  children: ReactNode;
  dictionary: Dictionary;
  locale: Locale;
};

export function AppShell({ children, dictionary, locale }: AppShellProps) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <a
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-slate-950 focus:px-4 focus:py-2 focus:text-white"
        href="#main-content"
      >
        {dictionary.shell.skipLink}
      </a>
      <header className="border-b border-slate-200 px-6 py-5">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">
              {dictionary.shell.label}
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {dictionary.shell.status}
            </p>
          </div>
          <LanguageSwitcher labels={dictionary.languageSwitcher} locale={locale} />
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="border-t border-slate-200 px-6 py-5 text-sm text-slate-500">
        <div className="mx-auto max-w-5xl">{dictionary.shell.footer}</div>
      </footer>
    </div>
  );
}