'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--color-section-alt)] py-20 md:py-24 px-4 md:px-6"
    >
      <div className="max-w-[1024px] mx-auto w-full text-center">
        <div className="scroll-reveal">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            함께 무언가를 만들어 볼까요?
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-xl mx-auto mb-8">
            개발자 생산성에 관심이 있거나 협력하고 싶으시면 언제든지 연락주세요.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-11 px-5 text-[0.875rem] md:h-12 md:px-6 md:text-[0.9375rem] font-medium bg-[var(--color-foreground)] text-[var(--color-background)] hover:opacity-85 rounded-lg transition-all duration-150 gap-2"
          >
            연락하기
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
