import type { Metadata } from "next";

export const siteConfig = {
  name: "ChoboDev의 기술 블로그",
  description: "ChoboDev의 기술 블로그입니다. 개발 관련 글을 작성합니다.",
  author: "ChoboDev",
  url: "https://chobo.dev",
  ogImage: "/og-image.png",
  links: {
    github: "https://github.com/gealot",
  },
};

// 메타데이터 정의
export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};
