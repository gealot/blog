# 블로그 프로젝트

## 🎯 프로젝트 목표

- 이 프로젝트는 바닥부터 블로그를 만들어서 단순 구현을 넘어 웹 서비스 전체
  사이클에서 마주할 수 있는 과제들을 직접 부딛혀 해결하는 데 그 목적이 있습니다.

## 🛠 기술 스택

### Frontend Framework

- **Next.js 15 (App Router)** - React 기반 풀스택 프레임워크

### Styling & UI

- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **shadcn/ui** - Radix UI와 Tailwind CSS 기반의 컴포넌트 컬렉션

### Development Tools

- **ESLint** - 코드 품질 관리
- **Prettier** - 코드 포맷팅
- **pnpm** - 패키지 매니저
- **TypeScript** - 정적 타입 지원

### Architecture

- **Feature-Sliced Design** - 기능 기반 폴더 구조
- **Barrel Exports** - 깔끔한 import/export 패턴

## 📁 프로젝트 구조

```tree
blog/
  ├── src/
  │   ├── app/                    # App Router - 페이지, 레이아웃, 글로벌 스타일
  │   │   ├── layout.tsx         # 루트 레이아웃 컴포넌트
  │   │   ├── page.tsx           # 홈페이지
  │   │   ├── globals.css        # 글로벌 CSS 스타일
  │   │   └── favicon.ico        # 파비콘
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
  │   │   │   ├── button.tsx     # 버튼 컴포넌트
  │   │   │   ├── card.tsx       # 카드 컴포넌트
  │   │   │   ├── input.tsx      # 입력 컴포넌트
  │   │   │   ├── badge.tsx      # 뱃지 컴포넌트
  │   │   │   ├── separator.tsx  # 구분선 컴포넌트
  │   │   │   └── index.ts       # UI 컴포넌트 통합 export
  │   │   ├── lib/               # 공통 라이브러리
  │   │   │   ├── utils/         # 유틸리티 함수
  │   │   │   │   ├── cn.ts      # 클래스명 조합 유틸리티
  │   │   │   │   └── index.ts   # 유틸리티 통합 export
  │   │   │   └── types/         # 공통 타입 정의
  │   │   │       └── index.ts   # 타입 통합 export
  │   │   └── hooks/             # 공통 React 훅
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
  ├── eslint.config.mjs         # ESLint 설정
  ├── postcss.config.mjs        # PostCSS 설정
  ├── components.json           # shadcn/ui 설정
  ├── commitlint.config.mjs     # Commitlint 설정
  ├── .prettierrc               # Prettier 설정
  ├── .prettierignore           # Prettier 무시 파일
  ├── .eslintignore             # ESLint 무시 파일
  ├── .editorconfig             # 에디터 설정
  ├── .gitignore                # Git 무시 파일
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

- 재사용 가능한 컴포넌트 라이브러리
- 반응형 디자인
- 다크/라이트 테마 지원

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

- Next.js Image 컴포넌트 활용
- Tailwind CSS JIT 컴파일러
- TypeScript strict 모드
- ESLint 규칙 강화
- Tree-shaking 적극 활용

## 🔗 배포 링크

## 📝 학습 내용

## 📄 License

- This project is licensed under the [BSD 3-Clause Clear License](LICENSE).

### 🤝 Contributing

- Contributions are welcome! Please feel free to submit a Pull Request.

### 💼 Commercial Use

- This project can be used for commercial purposes. See the [LICENSE](LICENSE)
  file for details.
