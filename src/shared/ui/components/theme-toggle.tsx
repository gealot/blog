"use client";

import { Monitor, Moon, Sun } from "lucide-react";

import { useTheme } from "@/hooks/useTheme";

import { Button } from "@/primitives/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/primitives/dropdown-menu";
import { Theme } from "@/types/theme";

const themeOptions = [
  {
    value: "light" as Theme,
    label: "라이트 모드",
    icon: Sun,
  },
  {
    value: "dark" as Theme,
    label: "다크 모드",
    icon: Moon,
  },
  {
    value: "system" as Theme,
    label: "시스템 설정",
    icon: Monitor,
  },
] as const;

interface ThemeToggleProps {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function ThemeToggle({ variant = "ghost", size = "icon", className }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const getCurrentIcon = () => {
    if (theme === "system") {
      return Monitor;
    }

    return resolvedTheme === "dark" ? Moon : Sun;
  };

  const CurrentIcon = getCurrentIcon();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={variant} size={size} className={className} aria-label="테마 변경">
          <CurrentIcon className="h-4 w-4" />
          <span className="sr-only">테마 토글</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-40">
        {themeOptions.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem key={value} onClick={() => setTheme(value)} className="cursor-pointer">
            <Icon className="mr-2 h-4 w-4" />
            <span>{label}</span>
            {theme === value && <span className="ml-auto text-xs text-muted-foreground">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// 간단한 토글 버전 (라이트/다크만)
export function SimpleThemeToggle({
  variant = "ghost",
  size = "icon",
  className,
}: ThemeToggleProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant={variant}
      size={size}
      onClick={toggleTheme}
      className={className}
      aria-label={`${resolvedTheme === "dark" ? "라이트" : "다크"} 모드로 변경`}
    >
      {resolvedTheme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">테마 토글</span>
    </Button>
  );
}
