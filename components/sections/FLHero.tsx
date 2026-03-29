'use client';

import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { heroData } from '@/data/freelance';

export default function FLHero() {
  return (
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-success)] animate-pulse" />
            <span className="text-[var(--color-primary)]">{heroData.badge}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {heroData.title}
          </h1>

          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-8">
            {heroData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={heroData.ctaPrimary.href}>
              <Button size="lg" className="gap-2">
                {heroData.ctaPrimary.text}
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href={heroData.ctaSecondary.href}>
              <Button variant="outline" size="lg">
                {heroData.ctaSecondary.text}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}