import { useThemeStore } from "@/lib/theme/theme.store";

export const useTheme = () => {
  const store = useThemeStore();

  return {
    theme: store.theme,
    systemTheme: store.systemTheme,
    resolvedTheme: store.getResolvedTheme(),
    setTheme: store.setTheme,
  };
};
