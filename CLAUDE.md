# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Development Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm dev:webpack` - Start development server with Webpack (fallback)
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm lint:strict` - Run ESLint with no warnings allowed
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm format:imports` - Format imports with Prettier
- `pnpm check:imports` - Check import formatting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm quality` - Run all quality checks (type-check + lint:strict +
  format:check)
- `pnpm quality:fix` - Run quality checks with fixes (type-check + lint:fix +
  format)
- `pnpm commit` - Use Commitizen for conventional commits
- `pnpm prepare` - Setup Husky git hooks

## Architecture Overview

This is a Next.js 15 blog project using Feature-Sliced Design (FSD) architecture
with App Router, TypeScript, and shadcn/ui components. The Korean README
indicates this is a learning project focused on experiencing the full web
service development cycle.

### Tech Stack

- **Framework**: Next.js 15 with App Router and Turbopack
- **Language**: TypeScript with strict configuration (ES2022+ target)
- **Styling**: Tailwind CSS v4 with PostCSS
- **Components**: shadcn/ui (new-york style) with Radix UI primitives
- **Icons**: Lucide React
- **Content**: MDX support with gray-matter, rehype plugins
- **Search**: Fuse.js for client-side search
- **Theme**: next-themes for dark/light mode support
- **Typography**: Variable fonts (Pretendard, Noto Serif KR, JetBrains Mono,
  etc.)
- **Date Handling**: date-fns for date utilities
- **Package Manager**: pnpm with workspace setup
- **Code Quality**: ESLint, Prettier, Husky, lint-staged, Commitlint

### Key Configurations

- **TypeScript**: Ultra-strict configuration with modern ES2022+ features,
  comprehensive path aliases for FSD layers
- **ESLint**: Comprehensive rules including TypeScript, React, accessibility,
  and import ordering
- **shadcn/ui**: New-york style variant, zinc base color, CSS variables enabled
- **Next.js**: Turbopack enabled, optimized images, SVG support, strict
  TypeScript/ESLint enforcement
- **Git Hooks**: Pre-commit hooks for linting and formatting, conventional
  commit enforcement

### FSD Architecture

The project follows Feature-Sliced Design with these layers:

- `src/app/` - App Router pages, layouts, and global styles
- `src/widgets/` - Complex UI blocks (header, footer, post-list)
- `src/features/` - User-facing functionality (search)
- `src/entities/` - Business entities (post)
- `src/shared/` - Reusable code across layers
  - `config/` - Application configuration (site.ts)
  - `ui/` - shadcn/ui components (components/, primitives/)
  - `lib/` - Utilities and types
    - `theme/` - Theme system (config, provider, store, utils)
    - `utils/` - Utility functions (cn.ts, fonts.ts)
    - `types/` - Type definitions (theme.ts)
  - `hooks/` - React hooks (useTheme.ts)
- `src/posts/` - MDX blog posts

### Path Aliases

The TypeScript configuration includes comprehensive path aliases:

- `@/*` → `src/*` (general)
- `@/shared/*` → `src/shared/*`
- `@/entities/*` → `src/entities/*`
- `@/features/*` → `src/features/*`
- `@/widgets/*` → `src/widgets/*`
- `@/app/*` → `src/app/*`
- `@/posts/*` → `src/posts/*`
- `@/ui/*` → `src/shared/ui/*`
- `@/types/*` → `src/shared/lib/types/*`
- `@/utils/*` → `src/shared/lib/utils/*`
- `@/types` → `src/shared/lib/types`
- `@/utils` → `src/shared/lib/utils`

### Typography System

- **Variable Fonts**: Modern web font optimization
  - Pretendard Variable - Primary Korean font
  - Noto Serif KR Variable - Serif Korean font
  - NanumSquare Neo Variable - Display Korean font
  - JetBrains Mono Variable - Code font with italic support
  - IBM Plex Mono - Alternative monospace font family
- Font files located in `src/app/fonts/`
- Font utilities in `src/shared/lib/utils/fonts.ts`

### Content Management

- Blog posts are written in MDX format in `src/posts/`
- MDX processing includes syntax highlighting (rehype-highlight), auto-linking
  headings, and slug generation
- Site configuration is centralized in `src/shared/config/site.ts`

### Theme System

- Dark/light mode support with `next-themes`
- Theme configuration in `src/shared/lib/theme/`
  - `theme.config.ts` - Theme settings
  - `theme.provider.tsx` - Context provider
  - `theme.store.ts` - State management
  - `theme.script.tsx` - SSR-safe theme script
  - `theme.utils.ts` - Theme utilities
- Custom theme hook: `useTheme` in `src/shared/hooks/`

### Code Quality

- Ultra-strict TypeScript configuration with modern ES2022+ features and
  comprehensive safety checks
- ESLint v9 with comprehensive rules: TypeScript, React, accessibility, import
  ordering, and code quality
- Prettier with Tailwind CSS plugin and import sorting
- Husky + lint-staged for pre-commit quality enforcement across JS, TS, JSON,
  MD, CSS files
- Conventional commits with Commitizen (cz-git) and Commitlint
- Pre-commit hooks automatically fix linting and formatting issues

### Development Requirements

- **Node.js**: >=24
- **pnpm**: >=10
- **Package Manager**: Must use pnpm (workspace configured)

## Important Notes

- Always use pnpm instead of npm/yarn due to workspace configuration
- Follow Feature-Sliced Design principles when adding new features
- Use the comprehensive path aliases for imports to maintain clean code
  organization
- Run quality checks before committing: `pnpm quality` or `pnpm quality:fix`
- Use `pnpm commit` for conventional commits with emoji support
- The project enforces strict TypeScript rules - handle all edge cases and null
  checks
- Imports are automatically organized by Prettier according to FSD layer
  hierarchy
