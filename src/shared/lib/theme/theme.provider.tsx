"use client";

import { createContext, useContext, useEffect, type PropsWithChildren } from "react";

import { useThemeStore } from "./theme.store";

interface ThemeProviderProps {
  /**
   * 테마 프로바이더로 감쌀 자식 컴포넌트들
   */
  children: React.ReactNode;
}

const ThemeContext = createContext<ReturnType<typeof useThemeStore> | null>(null);

/**
 * 테마 프로바이더
 * 테마 상태를 하위 컴포넌트에 제공하고 DOM에 테마 속성을 적용
 */
export function ThemeProvider({ children }: PropsWithChildren<ThemeProviderProps>) {
  const themeStore = useThemeStore();

  useEffect(() => {
    // 초기 테마 적용을 위한 DOM 업데이트
    const resolvedTheme = themeStore.getResolvedTheme();

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
  }, [themeStore]);

  return <ThemeContext.Provider value={themeStore}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
