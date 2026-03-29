'use client';

import { useScrollReveal } from '@/hooks/useScrollReveal';

const skillCategories = [
  {
    title: '프론트엔드',
    skills: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: '백엔드',
    skills: ['Next.js API Routes', 'Server Actions', 'REST API', 'Node.js'],
  },
  {
    title: 'AI/ML',
    skills: ['Claude Code', 'MiniMax-M2.7', 'Gemini 3.0'],
  },
  {
    title: '인프라',
    skills: ['Vercel', 'Supabase'],
  },
];

export default function SkillsSection() {
  const sectionRef = useScrollReveal<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="scroll-reveal mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            기술 스택
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            현재 프로젝트를 개발하는 데 사용하는 기술들입니다
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="scroll-reveal"
              style={{ transitionDelay: `${categoryIndex * 80}ms` }}
            >
              <h3 className="text-sm font-semibold text-[var(--color-muted-foreground)] uppercase tracking-wider mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono bg-[var(--color-subtle)] text-[var(--color-subtle-foreground)] rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors duration-150 cursor-default"
                    style={{ transitionDelay: `${skillIndex * 40}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
