"use client";

import { useEffect, useSyncExternalStore } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type Theme = "light" | "dark";

type ThemeToggleProps = {
  labels: Dictionary["themeToggle"];
};

const storageKey = "mayo-portfolio-theme";
const themeChangeEvent = "mayo-portfolio-themechange";

function getStoredTheme(): Theme | null {
  const value = window.localStorage.getItem(storageKey);
  return value === "light" || value === "dark" ? value : null;
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getThemeSnapshot(): Theme {
  const currentTheme = document.documentElement.dataset.theme;

  if (currentTheme === "light" || currentTheme === "dark") {
    return currentTheme;
  }

  return getStoredTheme() ?? getSystemTheme();
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function notifyThemeSubscribers() {
  window.dispatchEvent(new Event(themeChangeEvent));
}

function subscribeToTheme(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const handleSystemThemeChange = () => {
    if (getStoredTheme() === null) {
      applyTheme(getSystemTheme());
      notifyThemeSubscribers();
    }
  };

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", onStoreChange);
  media.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
    media.removeEventListener("change", handleSystemThemeChange);
  };
}

function MoonIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-toggle__svg"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <path d="M20.1 14.4A7.2 7.2 0 0 1 9.6 3.9 8.6 8.6 0 1 0 20.1 14.4Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      aria-hidden="true"
      className="theme-toggle__svg"
      focusable="false"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
    </svg>
  );
}

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const currentLabel = theme === "dark" ? labels.dark : labels.light;
  const buttonLabel = labels.label + ": " + currentLabel + ". " + labels.switchTo[nextTheme];

  useEffect(() => {
    applyTheme(getStoredTheme() ?? getSystemTheme());
    notifyThemeSubscribers();
  }, []);

  return (
    <button
      aria-label={buttonLabel}
      aria-pressed={theme === "dark"}
      className="theme-toggle"
      onClick={() => {
        window.localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
        notifyThemeSubscribers();
      }}
      title={buttonLabel}
      type="button"
    >
      <span className="theme-toggle__indicator" aria-hidden="true" />
      {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      <span className="sr-only">{currentLabel}</span>
    </button>
  );
}
