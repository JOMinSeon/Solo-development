'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { ArrowRight, ChevronDown } from 'lucide-react';

const typingTexts = {
  en: ['builds AI tools.', 'ships products.', 'writes clean code.', 'innovates daily.'],
  ko: ['아이디어를 만듭니다.', '시각을 현실로.', '문제를 해결합니다.', '매일 성장합니다.'],
};

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const texts = typingTexts.ko;

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isTyping) {
      if (displayedText.length < currentText.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, 80);
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        timeoutRef.current = setTimeout(() => {
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
          setIsTyping(true);
        }, 500);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [displayedText, isTyping, currentTextIndex, texts]);

  return (
    <section className="min-h-[100svh] flex flex-col justify-center pt-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="animate-fade-in flex flex-col lg:flex-row lg:items-center lg:gap-16">

          {/* 텍스트 영역 */}
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-border)] bg-[var(--color-subtle)] text-[var(--color-subtle-foreground)] mb-6">
              <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
              협력 환영
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              <span className="text-[var(--color-foreground)]">개발자이자 창업자,</span>
              <br />
              <span className="text-[var(--color-foreground)]">
                {displayedText}
                <span className="animate-blink">|</span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-[var(--color-muted-foreground)] max-w-2xl leading-relaxed mb-8">
              <span className="block">아이디어에서 Launch까지,</span>
              <span className="block">함께 만들어가는 파트너</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-5 text-[0.875rem] md:h-12 md:px-6 md:text-[0.9375rem] font-medium bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] rounded-lg transition-all duration-150 gap-2"
              >
                문의하기
                <ArrowRight size={18} />
              </a>
              <Button variant="secondary" size="lg">
                내 이야기 보기
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-muted-foreground)] pb-10 lg:pb-12">
              <span>함께 만드는 것의 가치를 믿습니다. 당신의 비전을 실현하세요</span>
            </div>
          </div>

          {/* 코어넥스트 C3 헥사곤 로고 */}
          <div className="flex flex-shrink-0 items-center justify-center mb-10 lg:mb-0">
            <div className="relative">
              {/* 글로우 */}
              <div
                className="absolute rounded-full blur-3xl opacity-25"
                style={{
                  inset: '-20%',
                  background: '#FF6D00',
                }}
              />
              {/* 헥사곤 — 모바일 120px / 태블릿 160px / 데스크탑 240px */}
              <div
                className="relative w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] lg:w-[240px] lg:h-[240px]"
                style={{
                  background: 'conic-gradient(from 30deg, #FF6D00 0deg 120deg, #FFD600 120deg 240deg, #1A237E 240deg 360deg)',
                  clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                }}
              >
                {/* 내부 입체감 레이어 — 항상 50% 크기 */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-white/20"
                  style={{
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                  }}
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="flex justify-center pb-8">
        <a
          href="#featured"
          className="p-3 rounded-full hover:bg-[var(--color-surface-hover)] transition-colors animate-bounce-subtle"
          aria-label="Scroll to content"
        >
          <ChevronDown size={24} className="text-[var(--color-muted-foreground)]" />
        </a>
      </div>
    </section>
  );
}
