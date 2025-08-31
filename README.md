# 블로그 프로젝트

## 🎯 프로젝트 목표

- 이 프로젝트는 바닥부터 블로그를 만들어서 단순 구현을 넘어 웹 서비스 전체
  사이클에서 마주할 수 있는 과제들을 직접 부딛혀 해결하는 데 그 목적이 있습니다.

## 🛠 기술 스택

### Frontend Framework

- **Next.js 15 (App Router)** - React 기반 풀스택 프레임워크

### Styling & UI

- **Tailwind CSS 4** - 유틸리티 기반 CSS 프레임워크
- **shadcn/ui** - Radix UI와 Tailwind CSS 기반의 컴포넌트 컬렉션

### Development Tools & Libraries

- **TypeScript** - 정적 타입 지원 (ES2022+ 타겟)
- **pnpm** - 패키지 매니저 (워크스페이스 지원)
- **ESLint** - 코드 품질 관리 (v9, 엄격한 규칙 적용)
- **Prettier** - 코드 포맷팅 (import 정렬 포함)
- **Husky** - Git 훅 관리
- **Commitlint** - 컨벤셔널 커밋 강제
- **lint-staged** - 스테이징된 파일 검사

### Content & Utilities

- **MDX** - Markdown 확장 지원
- **gray-matter** - Frontmatter 파싱
- **Fuse.js** - 클라이언트 사이드 검색
- **Lucide React** - 아이콘 라이브러리
- **date-fns** - 날짜 조작 유틸리티
- **class-variance-authority** - 컴포넌트 variant 관리
- **clsx** & **tailwind-merge** - 클래스명 조합
- **Rehype** - MDX 처리 플러그인 (하이라이팅, 슬러그, 헤딩 링크)
- **next-themes** - 다크/라이트 테마 지원

### Architecture

- **Feature-Sliced Design** - 기능 기반 폴더 구조
- **Barrel Exports** - 깔끔한 import/export 패턴

## 📁 프로젝트 구조

```tree
blog/
  ├── src/
  │   ├── app/                    # App Router - 페이지, 레이아웃, 글로벌 스타일
  │   │   ├── fonts/             # 웹폰트 파일
  │   │   ├── layout.tsx         # 루트 레이아웃 컴포넌트
  │   │   ├── page.tsx           # 홈페이지
  │   │   ├── globals.css        # 글로벌 CSS 스타일
  │   │   ├── favicon.ico        # 파비콘
  │   │   └── favicon.svg        # SVG 파비콘
  │   │
  │   ├── widgets/               # 복잡한 UI 블록 - 조합된 기능 단위
  │   │   ├── header/            # 헤더 위젯
  │   │   │   └── ui/
  │   │   ├── footer/            # 푸터 위젯
  │   │   │   └── ui/
  │   │   └── post-list/         # 포스트 목록 위젯
  │   │       └── ui/
  │   │
  │   ├── features/              # 사용자 중심 기능 - 비즈니스 로직
  │   │   └── search/            # 검색 기능
  │   │       ├── lib/           # 검색 로직
  │   │       ├── model/         # 검색 상태 관리
  │   │       └── ui/            # 검색 UI 컴포넌트
  │   │
  │   ├── entities/              # 비즈니스 엔티티 - 도메인 모델
  │   │   └── post/              # 포스트 엔티티
  │   │       ├── lib/           # 포스트 관련 유틸리티
  │   │       ├── model/         # 포스트 타입 정의
  │   │       └── ui/            # 포스트 UI 컴포넌트
  │   │
  │   ├── shared/                # 공유 코드 - 재사용 가능한 리소스
  │   │   ├── config/            # 애플리케이션 설정
  │   │   │   ├── site.ts        # 사이트 메타데이터 설정
  │   │   │   └── index.ts       # 설정 파일 통합 export
  │   │   ├── ui/                # shadcn/ui 컴포넌트
  │   │   │   ├── components/    # UI 컴포넌트 모음
  │   │   │   │   └── index.ts   # 컴포넌트 통합 export
  │   │   │   ├── primitives/    # 기본 UI 컴포넌트
  │   │   │   │   ├── button.tsx # 버튼 컴포넌트
  │   │   │   │   └── index.ts   # 프리미티브 통합 export
  │   │   │   └── index.ts       # UI 전체 통합 export
  │   │   ├── lib/               # 공통 라이브러리
  │   │   │   ├── theme/         # 테마 시스템
  │   │   │   │   ├── theme.config.ts    # 테마 설정
  │   │   │   │   ├── theme.provider.tsx # 테마 프로바이더
  │   │   │   │   ├── theme.script.tsx   # 테마 스크립트
  │   │   │   │   ├── theme.store.ts     # 테마 상태 관리
  │   │   │   │   ├── theme.utils.ts     # 테마 유틸리티
  │   │   │   │   └── index.ts           # 테마 통합 export
  │   │   │   ├── utils/         # 유틸리티 함수
  │   │   │   │   ├── cn.ts      # 클래스명 조합 유틸리티
  │   │   │   │   ├── fonts.ts   # 폰트 유틸리티
  │   │   │   │   └── index.ts   # 유틸리티 통합 export
  │   │   │   └── types/         # 공통 타입 정의
  │   │   │       ├── theme.ts   # 테마 관련 타입
  │   │   │       └── index.ts   # 타입 통합 export
  │   │   └── hooks/             # 공통 React 훅
  │   │       ├── useTheme.ts    # 테마 관리 훅
  │   │       └── index.ts       # 훅 통합 export
  │   │
  │   └── posts/                 # MDX 블로그 포스트 - 컨텐츠 디렉토리
  │
  ├── public/                    # 정적 파일 - 이미지, 아이콘 등
  │   └── images/                # 이미지 파일
  │
  ├── .husky/                    # Git 훅 설정
  ├── package.json               # 프로젝트 설정 및 의존성
  ├── pnpm-lock.yaml            # pnpm 의존성 잠금 파일
  ├── pnpm-workspace.yaml       # pnpm 워크스페이스 설정
  ├── tsconfig.json             # TypeScript 설정
  ├── next.config.ts            # Next.js 설정
  ├── next-env.d.ts             # Next.js 타입 정의
  ├── eslint.config.mjs         # ESLint 설정
  ├── postcss.config.mjs        # PostCSS 설정
  ├── components.json           # shadcn/ui 설정
  ├── commitlint.config.mjs     # Commitlint 설정
  ├── .prettierrc               # Prettier 설정
  ├── .prettierignore           # Prettier 무시 파일
  ├── .eslintignore             # ESLint 무시 파일
  ├── .editorconfig             # 에디터 설정
  ├── .gitignore                # Git 무시 파일
  ├── LICENSE.md                # BSD 3-Clause Clear 라이선스
  ├── CHANGELOG.md              # 변경 이력
  ├── CLAUDE.md                 # Claude Code 설정 파일
  └── README.md                 # 프로젝트 문서
```

## 🚀 주요 기능

### 📝 블로그 포스트 관리

- 포스트 생성, 수정, 삭제
- 마크다운/MDX 지원
- 포스트 메타데이터 관리

### 🔍 검색 기능

- 실시간 포스트 검색
- 태그 기반 필터링
- 제목/내용 기반 검색

### 🎨 UI 컴포넌트 시스템

- shadcn/ui 기반 컴포넌트 라이브러리
- Radix UI 프리미티브 활용
- 재사용 가능한 컴포넌트 시스템
- 반응형 디자인
- 다크/라이트 테마 지원 (next-themes 활용)

### 🔤 타이포그래피 시스템

- **Pretendard** - 메인 한글 폰트 (가변 폰트)
- **Noto Serif KR** - 세리프 한글 폰트
- **NanumSquare Neo** - 디스플레이용 한글 폰트
- **JetBrains Mono** - 코드용 영문 폰트 (가변 폰트)
- **IBM Plex Mono** - 대안 모노스페이스 폰트 (전체 패밀리)

### 📱 반응형 레이아웃

- 모바일 우선 디자인
- 헤더/푸터 컴포넌트
- 포스트 목록 위젯

## 📊 성능 지표

### 🎯 목표 성능

- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5초
- **Largest Contentful Paint**: < 2.5초
- **Cumulative Layout Shift**: < 0.1

### 📹 모니터링 계획

- Core Web Vitals 추적
- 번들 크기 최적화
- 이미지 최적화 (WebP, AVIF)
- 코드 스플리팅 및 지연 로딩

### 🚀 최적화 전략

- **Next.js 15** - App Router와 Turbopack 활용
- **Next.js Image** - 자동 이미지 최적화
- **Tailwind CSS 4** - JIT 컴파일러와 최신 기능
- **TypeScript Ultra-strict** - ES2022+ 타겟, 엄격한 타입 검사
- **ESLint v9** - 최신 규칙과 플러그인 적용
- **Barrel Exports** - 깔끔한 import/export 패턴
- **Tree-shaking** - 미사용 코드 제거
- **Variable Fonts** - 웹폰트 최적화
- **PostCSS** - CSS 후처리 및 최적화

## 🛠 개발 명령어

```bash
# 개발 서버 시작
pnpm dev                # Turbopack 사용
pnpm dev:webpack        # Webpack 사용 (대체)

# 빌드 및 배포
pnpm build              # 프로덕션 빌드
pnpm start              # 프로덕션 서버 시작

# 코드 품질 관리
pnpm lint               # ESLint 실행
pnpm lint:fix           # ESLint 자동 수정
pnpm lint:strict        # 경고 없는 엄격한 린트
pnpm format             # Prettier 포맷팅
pnpm format:check       # 포맷팅 확인
pnpm type-check         # TypeScript 타입 체크

# 통합 품질 검사
pnpm quality            # 모든 품질 검사 실행
pnpm quality:fix        # 품질 검사 + 자동 수정

# Git 및 커밋
pnpm commit             # Commitizen 사용한 컨벤셔널 커밋
```

## 🔗 배포 링크

TBD

## 📝 학습 내용

TBD

## 📄 License

- This project is licensed under the [BSD 3-Clause Clear License](/LICENSE.md).

### 🤝 Contributing

- Contributions are welcome! Please feel free to submit a Pull Request.

### 💼 Commercial Use

- This project can be used for commercial purposes. See the
  [LICENSE](/LICENSE.md) file for details.
