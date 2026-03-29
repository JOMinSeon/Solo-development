'use client';

import { useEffect, useRef } from 'react';

export interface TimelineItem {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  tags?: string[];
  isCurrent?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
  variant?: 'career' | 'milestone' | 'education';
}

export default function Timeline({ items }: TimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <div ref={sectionRef} className="relative">
      <div className="absolute left-0 md:left-4 top-0 bottom-0 w-px bg-[var(--color-border)]" />

      <div className="space-y-8 md:pl-8">
        {items.map((item, index) => (
          <div
            key={index}
            className={`scroll-reveal relative ${item.isCurrent ? 'pl-8 md:pl-0' : 'pl-8 md:pl-0'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`absolute left-0 md:left-4 top-1 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                item.isCurrent
                  ? 'bg-[var(--color-accent)] shadow-[0_0_8px_var(--color-accent)]'
                  : 'bg-[var(--color-background)] border-2 border-[var(--color-border)]'
              }`}
            />

            <div className="md:ml-8 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-4 md:p-6 hover:bg-[var(--color-surface-hover)] transition-colors duration-150">
              <span className="text-xs text-[var(--color-muted-foreground)] font-medium mb-2 block">
                {item.date}
              </span>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              {item.subtitle && (
                <p className="text-sm text-[var(--color-muted-foreground)] mb-2">
                  {item.subtitle}
                </p>
              )}
              {item.description && (
                <p className="text-sm text-[var(--color-foreground)] mb-3">
                  {item.description}
                </p>
              )}
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono bg-[var(--color-subtle)] text-[var(--color-subtle-foreground)] rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
