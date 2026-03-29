'use client';

import { ExternalLink } from 'lucide-react';
import { successStories } from '@/data/freelance';
import type { SuccessStory } from '@/types/freelance';

export default function FLSuccessStories() {
  return (
    <section className="py-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            성공 사례
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            실제 프로젝트에서 검증된 경험입니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {successStories.map((story: SuccessStory) => (
            <div
              key={story.id}
              className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold mb-1">{story.projectName}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[var(--color-muted-foreground)]">
                      {story.clientName}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-[var(--color-subtle)] rounded-full">
                      {story.clientType}
                    </span>
                  </div>
                </div>
                {story.link && (
                  <a
                    href={story.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:underline"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>

              <p className="text-sm text-[var(--color-muted-foreground)] mb-4 flex-grow">
                {story.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">달성 결과</h4>
                <ul className="space-y-1">
                  {story.results.map((result, index) => (
                    <li key={index} className="text-xs text-[var(--color-muted-foreground)] flex items-start gap-2">
                      <span className="text-[var(--color-success)]">✓</span>
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2">사용 기술</h4>
                <div className="flex flex-wrap gap-1">
                  {story.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs bg-[var(--color-subtle)] text-[var(--color-subtle-foreground)] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--color-border)] text-xs text-[var(--color-muted-foreground)]">
                {story.period}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}