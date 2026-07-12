"use client";

import { useSyncExternalStore } from "react";
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

export function ThemeToggle({ labels }: ThemeToggleProps) {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );
  const nextTheme: Theme = theme === "dark" ? "light" : "dark";
  const currentLabel = theme === "dark" ? labels.dark : labels.light;

  return (
    <button
      aria-label={`${labels.label}: ${currentLabel}. ${labels.switchTo[nextTheme]}`}
      aria-pressed={theme === "dark"}
      className="theme-toggle"
      onClick={() => {
        window.localStorage.setItem(storageKey, nextTheme);
        applyTheme(nextTheme);
        notifyThemeSubscribers();
      }}
      type="button"
    >
      <span className="theme-toggle__indicator" aria-hidden="true" />
      <span className="theme-toggle__label">{currentLabel}</span>
    </button>
  );
}
