import Link from 'next/link';
import { ArrowLeft, Clock, FileText, Phone } from 'lucide-react';
import ScheduleForm from '@/components/schedule/ScheduleForm';
import ScheduleSuccess from '@/components/schedule/ScheduleSuccess';

export default async function SchedulePage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string }>;
}) {
  const params = await searchParams;
  const isSuccess = params.success === 'true';

  return (
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <Link
          href="/freelance"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          외주 페이지로 돌아가기
        </Link>

        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            상담 예약
          </h1>
          <p className="text-lg text-[var(--color-muted-foreground)]">
            무료 상담으로 프로젝트를 시작하세요
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            {isSuccess ? <ScheduleSuccess /> : <ScheduleForm />}
          </div>

          {!isSuccess && (
            <div className="space-y-6">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Clock size={18} className="text-[var(--color-primary)]" />
                  소요 시간 안내
                </h3>
                <ul className="space-y-2 text-sm text-[var(--color-muted-foreground)]">
                  <li>• 상담 시간: 15~30분</li>
                  <li>• 프로젝트 요구사항 정리</li>
                  <li>• 예산 및 일정 개요 확인</li>
                </ul>
              </div>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <FileText size={18} className="text-[var(--color-primary)]" />
                  상담 후 프로세스
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-subtle)] text-xs flex items-center justify-center font-medium">
                      1
                    </span>
                    <span className="text-[var(--color-muted-foreground)]">
                      이메일로 상담 일정 확정
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-subtle)] text-xs flex items-center justify-center font-medium">
                      2
                    </span>
                    <span className="text-[var(--color-muted-foreground)]">
                      화상/전화 미팅 진행
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--color-subtle)] text-xs flex items-center justify-center font-medium">
                      3
                    </span>
                    <span className="text-[var(--color-muted-foreground)]">
                      프로젝트 기획서 및 견적 제공
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Phone size={18} className="text-[var(--color-primary)]" />
                  연락 정보
                </h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-[var(--color-muted-foreground)]">이메일:</span>{' '}
                    <a
                      href="mailto:fjkg33@gmail.com"
                      className="text-[var(--color-foreground)] hover:text-[var(--color-primary)]"
                    >
                      fjkg33@gmail.com
                    </a>
                  </div>
                  <div className="text-[var(--color-muted-foreground)]">
                    응답 시간: 평일 24시간 이내
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
