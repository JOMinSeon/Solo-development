'use client';

import { Check, X } from 'lucide-react';
import { pricingModels, priceExamples, additionalServices } from '@/data/freelance';

export default function FLPricing() {
  return (
    <section className="py-16 px-4 md:px-6 bg-[var(--color-section-alt)]">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            요금 체계
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            명확하고 투명한 가격을 제시합니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pricingModels.map((model) => (
            <div
              key={model.type}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold mb-2">
                {model.type === 'project-based' ? '프로젝트형' : '시간제'}
              </h3>
              <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                {model.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-[var(--color-success)]">장점</h4>
                  <ul className="space-y-1">
                    {model.pros.map((item, index) => (
                      <li key={index} className="text-xs text-[var(--color-muted-foreground)] flex items-start gap-2">
                        <Check size={14} className="text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-[var(--color-error)]">단점</h4>
                  <ul className="space-y-1">
                    {model.cons.map((item, index) => (
                      <li key={index} className="text-xs text-[var(--color-muted-foreground)] flex items-start gap-2">
                        <X size={14} className="text-[var(--color-error)] flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6 text-center">가격 예시</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {priceExamples.map((example, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 text-center"
              >
                <h4 className="text-lg font-semibold mb-2">{example.projectType}</h4>
                <div className="text-2xl font-bold text-[var(--color-primary)] mb-1">
                  {example.estimatedCost}
                </div>
                <div className="text-sm text-[var(--color-muted-foreground)] mb-3">
                  {example.duration}
                </div>
                <p className="text-xs text-[var(--color-muted-foreground)] mb-3">
                  {example.scope}
                </p>
                <p className="text-xs text-[var(--color-muted-foreground)] italic">
                  예: {example.example}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-6 text-center">추가 서비스</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6"
              >
                <h4 className="text-base font-semibold mb-1">{service.service}</h4>
                <div className="text-lg font-bold text-[var(--color-primary)] mb-2">
                  {service.price}
                </div>
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}