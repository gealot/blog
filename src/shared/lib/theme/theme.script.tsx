import { createThemeScript } from "./theme.utils";

/**
 * FOIT(Flash of Incorrect Theme) 방지를 위한 인라인 스크립트
 * 하이드레이션 이전에 테마를 적용하여 깜빡임 현상 제거
 */
export function ThemeScript() {
  return (
    <script dangerouslySetInnerHTML={{ __html: createThemeScript() }} suppressHydrationWarning />
  );
}
