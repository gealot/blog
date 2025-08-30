// 설정 가능한 테마 타입
export type Theme = "system" | "dark" | "light";

// 실제 적용된 테마 타입
export type ResolvedTheme = "dark" | "light";

// 테마 상태 타입
export interface ThemeState {
  theme: Theme;
  systemTheme: ResolvedTheme;
}

// 테마 설정 타입
export interface ThemeConfig {
  // 테마 저장 키
  storageKey: string;
  // 테마 적용 속성
  attribute: string;
  // 기본 테마
  defaultTheme: Theme;
  // 테마 전환 애니메이션
  transitions: {
    // 애니메이션 지속 시간
    duration: number;
    // 애니메이션 속도 곡선
    easing: string;
  };
}
