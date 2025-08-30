import type { Metadata } from "next";

import { ThemeProvider } from "@/lib/theme/theme.provider";
import { ThemeScript } from "@/lib/theme/theme.script";
import { metadata as siteMetadata } from "@/config";
import {
  cn,
  IBMPlexMono,
  NanumSquareNeoVariable,
  NotoSerifKRVariable,
  PretendardVariable,
} from "@/utils";

import "./globals.css";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      suppressHydrationWarning
      className={cn(
        PretendardVariable.variable,
        NanumSquareNeoVariable.variable,
        IBMPlexMono.variable,
        NotoSerifKRVariable.variable
      )}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
