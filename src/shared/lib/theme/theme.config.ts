import { ThemeConfig } from "@/types";

export const THEME_CONFIG: ThemeConfig = {
  storageKey: "blog-theme",
  attribute: "data-theme",
  defaultTheme: "system",
  transitions: {
    duration: 300,
    easing: "ease-in-out",
  },
} as const;

export const THEME_CYCLE: Record<string, "system" | "light" | "dark"> = {
  system: "light",
  light: "dark",
  dark: "system",
} as const;

export const THEME_LABELS = {
  system: "시스템 설정",
  light: "라이트 모드",
  dark: "다크 모드",
} as const;
