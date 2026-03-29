'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '@/data/freelance';
import type { FAQItem } from '@/types/freelance';

const categoryLabels: Record<FAQItem['category'], string> = {
  timeline: '일정',
  cost: '비용',
  communication: '소통',
  technical: '기술',
  security: '보안',
};

export default function FLFAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<FAQItem['category'] | 'all'>('all');

  const categories = ['all', 'timeline', 'cost', 'communication', 'technical', 'security'] as const;

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-16 px-4 md:px-6 bg-[var(--color-section-alt)]">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            자주 묻는 질문
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            프로젝트에 대한 궁금증을 해결해 드립니다
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  activeCategory === category
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-[var(--color-surface)] text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
                }`}
              >
                {category === 'all' ? '전체' : categoryLabels[category]}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq: FAQItem) => (
            <div
              key={faq.id}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium pr-4">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openId === faq.id && (
                <div className="px-6 pb-4">
                  <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}