'use client';

import { useEffect, useRef } from 'react';
import { Palette, Heart, Cpu, Award } from 'lucide-react';

const cards = [
  {
    icon: Palette,
    value: '1년',
    title: '사용자 친화적인 UX/UI 설계 경험',
    description: '1년의 웹디자인 경력을 \'사용자가 가장 쓰기 편한 환경을 만드는 밑거름\'으로 단단하게 표현합니다.',
  },
  {
    icon: Heart,
    value: '100%',
    title: '맞춤형 체중 및 칼로리 밀착 관리',
    description: '개발 연차나 사용자 수 같은 규모를 자랑하는 대신, 서비스가 제공하는 확실한 가치와 꼼꼼함을 수치로 보여줍니다.',
  },
  {
    icon: Cpu,
    value: '∞',
    title: '스마트한 AI 사료 분석과 데이터 확장',
    description: '기술적인 기대감을 심어주는 카드입니다. 1인 개발이지만 AI를 활용해 고도화된 서비스를 제공한다는 점을 어필합니다.',
  },
  {
    icon: Award,
    value: '1순위',
    title: '반려인과 반려동물의 건강한 일상',
    description: '이 서비스를 만드는 가장 중요한 목적을 배치하여, 서비스에 대한 창업가의 진정성과 신뢰감을 줍니다.',
  },
];

export default function FeaturedSection() {
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
      id="featured"
      ref={sectionRef}
      className="bg-[var(--color-section-alt)] py-20 md:py-24 px-4 md:px-6"
    >
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="scroll-reveal mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            경력카드
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            반려동물 관리 솔루션
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="scroll-reveal bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <card.icon size={32} className="mx-auto mb-4 text-[var(--color-primary)]" />
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-foreground)] mb-2">
                {card.value}
              </div>
              <h3 className="text-sm font-semibold text-[var(--color-foreground)] mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-[var(--color-muted-foreground)] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}