import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // 1. 커스텀 설정 (먼저)
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    settings: {
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
          // FSD 아키텍처 경로 지원
          paths: {
            "@/*": ["./src/*"],
            "@/shared/*": ["./src/shared/*"],
            "@/entities/*": ["./src/entities/*"],
            "@/features/*": ["./src/features/*"],
            "@/widgets/*": ["./src/widgets/*"],
            "@/app/*": ["./src/app/*"],
          },
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // 일반 JavaScript 규칙만 유지 (eslint-config-next에 없는 것들)
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "prefer-const": "error",
      "no-var": "error",
      eqeqeq: ["error", "always"],
      curly: ["error", "all"],
      "no-multiple-empty-lines": ["error", { max: 1, maxEOF: 0 }],
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],
    },
  },

  // 2. 특정 파일 패턴 규칙
  {
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    rules: {
      "no-console": "off",
    },
  },

  // 3. 설정 파일 규칙 완화
  {
    files: [
      "next.config.{js,mjs,ts}",
      "eslint.config.{js,mjs}",
      ".prettierrc.yml",
      "tailwind.config.{js,ts}",
      "postcss.config.{js,mjs}",
    ],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },

  // 4. MDX 파일 규칙
  {
    files: ["**/*.mdx"],
    rules: {
      // eslint-config-next에서 자동으로 처리
    },
  },

  // 5. Next.js 공식 설정 (마지막에 배치)
  ...compat.extends("next"),

  // 6. 파일 무시 설정
  {
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "coverage/",
      "*.d.ts.map",
      "tsconfig.tsbuildinfo",
      "tailwind.config.js.map",
      "commitlint.config.mjs",
      "eslint.config.mjs",
      ".prettierrc.yml",
      "public/sitemap.xml",
      "public/robots.txt",
      ".mdx-cache/",
      "storybook-static/",
    ],
  },
];

export default eslintConfig;
