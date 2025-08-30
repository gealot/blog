/** @type {import('cz-git').UserConfig} */
export default {
  // commitlint 확장 (기존 설정 유지)
  extends: ["@commitlint/config-conventional"],
  // commitlint 규칙 (기존 @commitlint/config-conventional 사용)
  rules: {
    // commitlint 규칙은 그대로 유지
  },

  // cz-git 프롬프트 설정
  prompt: {
    // 커밋 타입 설정
    types: [
      {
        value: "feat",
        name: "✨ feat:     새로운 기능 추가",
        emoji: "✨",
      },
      {
        value: "fix",
        name: "🐛 fix:      버그 수정",
        emoji: "🐛",
      },
      {
        value: "docs",
        name: "📚 docs:     문서 변경",
        emoji: "📚",
      },
      {
        value: "style",
        name: "💎 style:    코드 포매팅, 세미콜론 누락 등 (로직 변경 없음)",
        emoji: "💎",
      },
      {
        value: "refactor",
        name: "📦 refactor: 코드 리팩토링 (기능 변경 없음)",
        emoji: "📦",
      },
      {
        value: "perf",
        name: "🚀 perf:     성능 개선",
        emoji: "🚀",
      },
      {
        value: "test",
        name: "🚨 test:     테스트 추가/수정",
        emoji: "🚨",
      },
      {
        value: "build",
        name: "🛠  build:    빌드 시스템 또는 외부 의존성 변경",
        emoji: "🛠",
      },
      {
        value: "ci",
        name: "⚙️  ci:       CI 설정 파일 및 스크립트 변경",
        emoji: "⚙️",
      },
      {
        value: "chore",
        name: "♻️  chore:    기타 변경사항 (프로덕션 코드 변경 없음)",
        emoji: "♻️",
      },
      {
        value: "revert",
        name: "🗑  revert:   이전 커밋 되돌리기",
        emoji: "🗑",
      },
    ],

    // 스코프 설정
    scopes: [
      { name: "components", description: "컴포넌트 관련" },
      { name: "pages", description: "페이지 관련" },
      { name: "lib", description: "라이브러리/유틸리티" },
      { name: "styles", description: "스타일링 관련" },
      { name: "config", description: "설정 파일" },
      { name: "deps", description: "의존성 관련" },
    ],

    // 커스텀 스코프 허용
    allowCustomScopes: true,
    allowEmptyScopes: true,

    // Breaking changes 허용할 타입
    allowBreakingChanges: ["feat", "fix"],

    // 제목 길이 제한
    subjectLimit: 100,
    subjectSeparator: ": ",

    // 메시지 커스터마이징
    messages: {
      type: "커밋할 변경사항의 타입을 선택하세요:",
      scope: "변경된 범위를 선택하세요 (선택사항):",
      customScope: "변경된 범위를 직접 입력하세요:",
      subject: "변경사항에 대한 간단한 설명을 작성하세요:",
      body: '상세한 설명을 작성하세요 (선택사항). "|"를 사용해서 줄바꿈하세요:',
      breaking: "Breaking Changes를 나열하세요 (선택사항):",
      footer: "관련된 이슈를 입력하세요. 예: #31, #34 (선택사항):",
      confirmCommit: "위 커밋 메시지로 진행하시겠습니까?",
    },

    // 단축키 설정
    alias: {
      fd: "docs: fix typos",
    },

    // 이모지 표시
    useEmoji: true,
    emojiAlign: "center",

    // 빈 스코프 허용
    allowCustomScopes: true,
    allowEmptyScopes: true,

    // 스킵할 질문들
    skipQuestions: [],

    // 대소문자 강제
    upperCaseSubject: false,

    // 마침표 허용
    markBreakingChangeMode: false,

    // Breaking change 접두사
    breaklineNumber: 100,
    breaklineChar: "|",
    footerPrefix: "ISSUES CLOSED:",

    // 확인 단계
    confirmCommit: true,
  },
};
