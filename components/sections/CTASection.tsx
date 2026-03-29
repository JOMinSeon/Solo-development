'use client';

import { useEffect, useRef } from 'react';
import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
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
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              연락하기
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
