import React from 'react';
import { Noto_Sans_KR } from 'next/font/google';

// Next.js 폰트 최적화 적용
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export default function DesignCard() {
  return (
    // 배경 및 전체 컨테이너 정렬
    <main
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-[#e0e5ec] to-[#ffffff] text-[#222] ${notoSansKR.className}`}
    >
      {/* 메인 카드 (Glassmorphism 효과 적용) */}
      <div className="w-[400px] bg-white/60 backdrop-blur-md border border-white/80 rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden pt-10 pb-5">

        {/* 로고 영역 — conic-gradient / clip-path 인라인 스타일로 안정 렌더링 */}
        <div
          className="w-[120px] h-[120px] mx-auto mb-[30px] relative"
          style={{
            background: 'conic-gradient(from 30deg, #FF6D00 0deg 120deg, #FFD600 120deg 240deg, #1A237E 240deg 360deg)',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          }}
        >
          {/* 로고 내부 입체감 */}
          <div
            className="absolute top-1/2 left-1/2 w-[60px] h-[60px] bg-white/20 -translate-x-1/2 -translate-y-1/2"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          ></div>
        </div>

        {/* 구분선 */}
        <div className="h-[2px] bg-white w-full"></div>

        {/* 첫 번째 텍스트 */}
        <div className="text-center text-[1.1rem] font-bold py-[15px] tracking-[-0.5px]">
          &apos;혁신&apos; 중심 기하학적 모자이크 심볼
        </div>

        {/* 구분선 */}
        <div className="h-[2px] bg-white w-full"></div>

        {/* 컬러 팔레트 */}
        <div className="flex justify-center items-center gap-5 py-[15px]">
          <div className="flex items-center gap-[6px] text-base font-medium">
            <span className="w-[18px] h-[18px] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] bg-[#1A237E]"></span>
            #1A237E
          </div>
          <div className="flex items-center gap-[6px] text-base font-medium">
            <span className="w-[18px] h-[18px] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] bg-[#FF6D00]"></span>
            #FF6D00
          </div>
          <div className="flex items-center gap-[6px] text-base font-medium">
            <span className="w-[18px] h-[18px] rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.2)] bg-[#FFD600]"></span>
            #FFD600
          </div>
        </div>

        {/* 구분선 */}
        <div className="h-[2px] bg-white w-full"></div>

        {/* 두 번째 텍스트 */}
        <div className="text-center text-[1.1rem] font-bold py-[15px] tracking-[-0.5px]">
          대담한 기하학적 산세리프
        </div>

      </div>
    </main>
  );
}
