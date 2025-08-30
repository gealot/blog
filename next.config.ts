import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
    resolveExtensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".mjs", ".cjs"],
  },

  images: {
    formats: ["image/avif", "image/webp"], // 최신 이미지 포맷 우선
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], // 반응형 크기
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], // 작은 이미지 크기
    minimumCacheTTL: 31536000, // 캐싱 기간 (1년)
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  poweredByHeader: false,
  compress: true,
  generateEtags: false,
};

export default nextConfig;
