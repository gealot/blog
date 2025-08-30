import type { ResolvedTheme } from "@/types";

import { THEME_CONFIG } from "./theme.config";

export const withThemeTransition = (callback: () => void): void => {
  if (typeof window === "undefined") {
    return callback();
  }

  const root = document.documentElement;
  const transitionProperty = "--theme-transition-duration";

  root.style.setProperty(transitionProperty, `${THEME_CONFIG.transitions.duration}ms`);
  callback();

  setTimeout(() => {
    root.style.removeProperty(transitionProperty);
  }, THEME_CONFIG.transitions.duration);
};

export const getThemeClasses = (resolvedTheme: ResolvedTheme) => ({
  background: resolvedTheme === "dark" ? "bg-background-dark" : "bg-background-light",
  text: resolvedTheme === "dark" ? "text-foreground-dark" : "text-foreground-light",
  border: resolvedTheme === "dark" ? "border-border-dark" : "border-border-light",
});

export const createThemeScript = (): string => `
  (function() {
    try {
      var theme = localStorage.getItem('${THEME_CONFIG.storageKey}') || '${THEME_CONFIG.defaultTheme}';
      var root = document.documentElement;

      if (theme === 'system') {
        root.removeAttribute('${THEME_CONFIG.attribute}');
      } else {
        root.setAttribute('${THEME_CONFIG.attribute}', theme);
      }
    } catch (e) {
      console.warn('Theme initialization error:', e);
    }
  })();
`;
