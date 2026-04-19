import ContactForm from '@/components/ContactForm';
import ResponseTimeInfo from '@/components/ResponseTimeInfo';

export default function Contact() {
  return (
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            연락하기
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            협업, 투자, 기술 관련 질문 — 무엇이든 환영합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <ContactForm />
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-4">다른 연락 방법</h2>
              <div className="space-y-4">
                <a
                  href="mailto:fjkg33@gmail.com"
                  className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <div className="p-3 bg-[var(--color-subtle)] rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-muted-foreground)]">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">이메일</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">
                      fjkg33@gmail.com
                    </div>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <div className="p-3 bg-[var(--color-subtle)] rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[var(--color-muted-foreground)]">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">
                      @username
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.threads.net/@fjkg123?hl=ko"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <div className="p-3 bg-[var(--color-subtle)] rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[var(--color-muted-foreground)]">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8.5 12.5c0-1.5 1-3 3.5-3s3.5 1.5 3.5 3-1 3-3.5 3-3.5-1.5-3.5-3z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="17" cy="7" r="1" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium">Threads</div>
                    <div className="text-sm text-[var(--color-muted-foreground)]">
                      @fjkg123
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <ResponseTimeInfo />
          </div>
        </div>
      </div>
    </section>
  );
}
