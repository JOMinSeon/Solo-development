'use client';

import { Zap, Users, Code, TrendingUp } from 'lucide-react';
import { differentiators } from '@/data/freelance';
import type { Differentiator } from '@/types/freelance';

const iconMap = {
  Zap,
  Users,
  Code,
  Lightbulb: TrendingUp,
  TrendingUp,
};

export default function FLDifferentiators() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            왜 저와 함께 일해야 할까요?
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            단순한 개발자가 아닌, 파트너가 되어드립니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentiators.map((item: Differentiator) => {
            const IconComponent = iconMap[item.icon];
            return (
              <div
                key={item.id}
                className="bg-[var(--color-surface)] border border-[var(--color-secondary)] rounded-xl p-6 hover:shadow-lg hover:border-[var(--color-primary)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                  {item.description}
                </p>
                <ul className="space-y-2">
                  {item.keyPoints.map((point, index) => (
                    <li key={index} className="text-sm text-[var(--color-muted-foreground)] flex items-start gap-2">
                      <span className="text-[var(--color-primary)]">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>


      </div>
    </section>
  );
}