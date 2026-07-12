"use client";

import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  labels: Dictionary["themeToggle"];
};

const storageKey = "mayo-portfolio-theme";

function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(storageKey);
  return value === "light" || value === "dark" ? value : null;
}

function getSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getInitialTheme(): Theme {
  if (typeof document !== "undefined") {
    const currentTheme = document.documentElement.dataset.theme;

    if (currentTheme === "light" || currentTheme === "dark") {
      return currentTheme;
    }
  }

  return getStoredTheme() ?? getSystemTheme();
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const currentLabel = theme === "dark" ? labels.dark : labels.light;

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <button
      aria-label={`${labels.label}: ${currentLabel}. ${labels.switchTo[nextTheme]}`}
      aria-pressed={theme === "dark"}
      className="theme-toggle"
      onClick={() => {
        window.localStorage.setItem(storageKey, nextTheme);
        setTheme(nextTheme);
      }}
      suppressHydrationWarning
      type="button"
    >
      <span className="theme-toggle__indicator" aria-hidden="true" />
      <span className="theme-toggle__label">{currentLabel}</span>
    </button>
  );
}
