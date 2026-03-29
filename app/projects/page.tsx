'use client';

import CTASection from '@/components/sections/CTASection';

export default function Projects() {
  return (
    <>
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            프로젝트
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)] mb-8">
            제가 만들고 기여한 것들
          </p>

          <div className="text-center py-20">
            <p className="text-[var(--color-muted-foreground)]">
              준비 중입니다.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
