'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function WhyWorkWithMe() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-24 px-4 md:px-6"
    >
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="scroll-reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-subtle)] rounded-full text-sm text-[var(--color-muted-foreground)] mb-4">
            <Sparkles size={14} />
            <span>Work with me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            코드가 아닌, 비즈니스의 본질을 디자인합니다.
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto">
            기술적 한계에 갇히지 않고, 오직 &apos;브랜드의 목적&apos;에만 100% 집중하는 웹디자인
          </p>
        </div>

        <div className="scroll-reveal bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8 lg:p-10 mb-8">
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-foreground)]">
            저에게는 화려한 개발 기술이나 수십 년의 경력은 없습니다. 하지만 그렇기에{' '}
            <span className="font-semibold text-[var(--color-primary)]">
              복잡한 코드나 기술적 제약에 얽매이지 않고, 오직 &apos;사용자의 시선&apos;과 &apos;대표님의 비즈니스 목표&apos;
            </span>
            에만 온전히 집중할 수 있습니다.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-foreground)] mt-4">
            기계적으로 찍어내는 공장형 작업이 아닙니다. 아이디어를 실제 서비스로 구현해 내는 과정이
            얼마나 치열한지 잘 알고 있기에, 대표님의 프로젝트를{' '}
            <span className="font-semibold">내 비즈니스처럼 치열하게 고민</span>합니다.
            지난 1년간 관습에 얽매이지 않고 가장 직관적인 디자인을 연구해 온 에너지를 모두 쏟겠습니다.
          </p>
        </div>

        <div className="scroll-reveal text-center">
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              막연한 아이디어를 시각적으로 완벽하게 번역해 내는 진짜 파트너, 지금 바로 만나보세요
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
