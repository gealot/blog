import { useCallback, useSyncExternalStore } from "react";

import type { ResolvedTheme, Theme, ThemeState } from "@/types";

import { THEME_CONFIG } from "./theme.config";

// 순수 함수들
const getStoredTheme = (): Theme => {
  if (typeof window === "undefined") {
    return THEME_CONFIG.defaultTheme;
  }

  const stored = localStorage.getItem(THEME_CONFIG.storageKey) as Theme;

  return stored && ["system", "dark", "light"].includes(stored)
    ? stored
    : THEME_CONFIG.defaultTheme;
};

const getSystemTheme = (): ResolvedTheme => {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const updateDOM = (theme: Theme): void => {
  if (typeof window === "undefined") {
    return;
  }

  const root = document.documentElement;
  const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

  root.classList.toggle("dark", resolvedTheme === "dark");
  root.setAttribute(THEME_CONFIG.attribute, theme);
};

const persistTheme = (theme: Theme): void => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(THEME_CONFIG.storageKey, theme);
};

// 전역 테마 스토어
class ThemeStore {
  private state: ThemeState;
  private listeners = new Set<() => void>();
  private serverSnapshot: ThemeState;

  constructor() {
    this.state = {
      theme: THEME_CONFIG.defaultTheme,
      systemTheme: "dark",
    };

    this.serverSnapshot = {
      theme: THEME_CONFIG.defaultTheme,
      systemTheme: "dark",
    };

    if (typeof window !== "undefined") {
      this.initialize();
    }
  }

  private initialize() {
    const theme = getStoredTheme();
    const systemTheme = getSystemTheme();

    this.state = { theme, systemTheme };
    updateDOM(theme);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", this.handleSystemThemeChange);
  }

  private handleSystemThemeChange = (e: MediaQueryListEvent): void => {
    const newSystemTheme = e.matches ? "dark" : "light";

    if (newSystemTheme !== this.state.systemTheme) {
      this.state = { ...this.state, systemTheme: newSystemTheme };

      if (this.state.theme === "system") {
        updateDOM("system");
      }

      this.emit();
    }
  };

  getSnapshot = (): ThemeState => {
    return this.state;
  };

  getServerSnapshot = (): ThemeState => {
    return this.serverSnapshot;
  };

  subscribe = (listener: () => void) => {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  };

  setTheme = (theme: Theme): void => {
    if (theme === this.state.theme) {
      return;
    }

    persistTheme(theme);
    this.state = { ...this.state, theme };
    updateDOM(theme);
    this.emit();
  };

  getResolvedTheme = (): ResolvedTheme => {
    return this.state.theme === "system" ? this.state.systemTheme : this.state.theme;
  };

  private emit() {
    this.listeners.forEach(listener => listener());
  }
}

const themeStore = new ThemeStore();

// 테마 스토어 훅
export const useThemeStore = () => {
  const state = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot
  );

  const setTheme = useCallback((theme: Theme) => {
    themeStore.setTheme(theme);
  }, []);

  const getResolvedTheme = useCallback((): ResolvedTheme => {
    return themeStore.getResolvedTheme();
  }, []);

  return {
    ...state,
    setTheme,
    getResolvedTheme,
  };
};
