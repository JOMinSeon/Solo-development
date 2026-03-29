'use client';

import { Globe, Smartphone, Link, Lightbulb, Layers } from 'lucide-react';
import { services } from '@/data/freelance';
import type { Service } from '@/types/freelance';

const iconMap = {
  Globe,
  Smartphone,
  Link,
  Lightbulb,
  Layers,
};

export default function FLServices() {
  return (
    <section className="py-16 px-4 md:px-6 bg-[var(--color-section-alt)]">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            외주 서비스
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            프로젝트에 맞는 최적의 솔루션을 제공합니다
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center max-w-2xl mx-auto">
          {services.map((service: Service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mb-4">
                  <IconComponent size={24} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
                <p className="text-sm text-[var(--color-primary)] mb-3">{service.subtitle}</p>
                <p className="text-sm text-[var(--color-muted-foreground)] mb-4 flex-grow">
                  {service.description}
                </p>

                <div className="space-y-2 mb-4">
                  {service.scope.map((item, index) => (
                    <div key={index} className="text-xs text-[var(--color-muted-foreground)] flex items-start gap-2">
                      <span className="text-[var(--color-success)]">✓</span>
                      {item}
                    </div>
                  ))}
                  {service.notIncluded?.map((item, index) => (
                    <div key={index} className="text-xs text-[var(--color-muted-foreground)] flex items-start gap-2">
                      <span className="text-[var(--color-error)]">✗</span>
                      {item}
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-[var(--color-border)]">
                  <div className="text-sm font-semibold text-[var(--color-foreground)] mb-1">
                    {service.startingPrice}
                  </div>
                  <div className="text-xs text-[var(--color-muted-foreground)]">
                    {service.estimatedDuration}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}