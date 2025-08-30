import { Button } from "@/primitives";

export default function Home() {
  return (
    <div className="min-h-screen p-8 dark:bg-black dark:text-white">
      {/* 폰트 테스트 섹션 */}
      <div className="mb-8 space-y-4">
        <h1 className="font-display-800 text-xl">NanumSquareNeo Display: 안녕하세요 Hello World</h1>
        <p className="text-md">Pretendard Sans: 안녕하세요 Hello World</p>
        <p className="text-md font-mono">
          IBM Plex Mono: 나는 고정폭 폰트 console.log(&quot;Hello World&quot;);
        </p>
        <p className="text-md font-mono italic">
          IBM Plex Mono: 나는 고정폭 이탤릭 폰트 console.log(&quot;Hello World&quot;);
        </p>
        {/* 추가 테스트 */}
        <div className="space-y-2">
          <p className="font-sans font-ultra-thin">Ultra Thin (45)</p>
          <p className="font-sans font-350">Custom 350</p>
          <p className="font-400 font-sans">Regular (400)</p>
          <p className="font-sans font-650">Custom 650</p>
          <p className="font-sans font-ultra-bold">Ultra Bold (920)</p>
        </div>

        <div className="space-y-2">
          <p className="font-display font-350">Custom 350</p>
          <p className="font-display font-400">Regular (400)</p>
          <p className="font-display font-650">Custom 650</p>
        </div>
        {/* Monospace 테스트 */}
        <div className="space-y-2">
          <p className="font-mono-100">Mono 100</p>
          <p className="font-mono-400">Mono 400</p>
          <p className="font-mono-700">Mono 700</p>
          <p className="font-mono-italic">Mono Italic</p>
        </div>
        <div className="space-y-2">
          <p className="font-serif-100">명조체 100</p>
          <p className="font-serif-400">명조체 400</p>
          <p className="font-serif-700">명조체 700</p>
        </div>
        {/* 인라인 스타일로 테스트 */}
        <p style={{ fontFamily: "var(--font-pretendard)" }}>
          Inline Pretendard: Hello World 안녕하세요
        </p>
        <p style={{ fontFamily: "var(--font-nanum-square-neo)" }}>
          Inline NanumSquareNeo: Hello World 안녕하세요
        </p>
        <p style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          Inline IBM Plex Mono: Hello World 안녕하세요
        </p>
        <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontStyle: "italic" }}>
          Inline IBM Plex Mono: Hello World //안녕하세요
        </p>
        <p style={{ fontFamily: "var(--font-noto-serif-kr)" }}>
          Inline Noto Serif KR: Hello World 안녕하세요
        </p>
        <p style={{ fontFamily: "var(--font-noto-serif-kr)", fontStyle: "italic" }}>
          Inline Noto Serif KR: Hello World //안녕하세요
        </p>
        {/* <Input /> */}
        <Button variant="outline" className="font-display-500 hover:bg-blue-100">
          클릭하기
        </Button>
      </div>
    </div>
  );
}
