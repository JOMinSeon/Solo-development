'use client';

import { CheckCircle, Calendar, Clock, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function ScheduleSuccess() {
  return (
    <div className="text-center py-8">
      <CheckCircle size={64} className="mx-auto mb-6 text-[var(--color-success)]" />
      <h2 className="text-2xl font-bold mb-3">상담 예약이 완료되었습니다!</h2>
      <p className="text-[var(--color-muted-foreground)] mb-8 max-w-md mx-auto">
        신청해 주셔서 감사합니다. 24시간 이내에 이메일로 연락드리겠습니다.
      </p>

      <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 text-left max-w-md mx-auto mb-8">
        <h3 className="font-semibold mb-4">다음 단계</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <Calendar size={18} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
            <span className="text-sm">이메일에서 희망 상담 날짜/시간을 확인해주세요</span>
          </li>
          <li className="flex items-start gap-3">
            <Clock size={18} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
            <span className="text-sm">일반적으로 15~30분 내에 상담이 진행됩니다</span>
          </li>
          <li className="flex items-start gap-3">
            <MessageCircle size={18} className="text-[var(--color-primary)] mt-0.5 shrink-0" />
            <span className="text-sm">추가 질문이 있으시면 이메일로 편하게 연락주세요</span>
          </li>
        </ul>
      </div>

      <Link href="/freelance">
        <Button variant="outline">외주 페이지로 돌아가기</Button>
      </Link>
    </div>
  );
}
