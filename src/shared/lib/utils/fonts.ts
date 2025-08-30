import localFont from "next/font/local";

export const PretendardVariable = localFont({
  src: "../../../app/fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "45 920",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "맑은 고딕",
    "sans-serif",
  ],
  preload: true,
});

export const NanumSquareNeoVariable = localFont({
  src: "../../../app/fonts/NanumSquareNeo-Variable.woff2",
  variable: "--font-nanum-square-neo",
  display: "swap",
  weight: "100 900",
  fallback: ["Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", "sans-serif"],
  preload: true,
});

export const JetbrainsMonoVariable = localFont({
  src: [
    {
      path: "../../../app/fonts/JetBrainsMono-Variable.woff2",
      weight: "100 800",
      style: "normal",
    },
    {
      path: "../../../app/fonts/JetBrainsMono-Italic-Variable.woff2",
      weight: "100 800",
      style: "italic",
    },
  ],
  variable: "--font-jetbrains-mono",
  display: "swap",
  fallback: [
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "Monoplex KR Nerd",
    "Monoplex KR",
    "Pretendard Variable",
    "monospace",
  ],
  preload: true,
});

export const IBMPlexMono = localFont({
  src: [
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-ExtraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-Text.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-TextItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../app/fonts/IBMPlexMono/IBMPlexMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  fallback: [
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "Monoplex KR Nerd",
    "Monoplex KR",
    "JetBrainsMono Nerd Font",
    "JetBrains Mono",
    "Pretendard Variable",
    "monospace",
  ],
  preload: true,
});

export const NotoSerifKRVariable = localFont({
  src: "../../../app/fonts/NotoSerifKR-Variable.woff2",
  variable: "--font-noto-serif-kr",
  display: "swap",
  weight: "100 900",
  fallback: [
    "Noto Serif KR",
    "Noto Serif CJK KR",
    "Source Han Serif KR",
    "Batang",
    "Apple Myungjo",
    "Nanum Myeongjo",
    "Droid Serif",
    "Times New Roman",
    "Times",
    "serif",
  ],
  preload: true,
});
