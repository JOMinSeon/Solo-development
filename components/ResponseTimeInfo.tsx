'use client';

import { useState, useEffect } from 'react';
import { Clock, CheckCircle } from 'lucide-react';

const responseTimes = [
  { type: '채용 상담', time: '12시간', note: '(우선 처리)', icon: '🚀' },
  { type: '협업 문의', time: '24시간', note: '', icon: '🤝' },
  { type: '외주 의뢰', time: '2-3일', note: '(상세 검토 필요)', icon: '💼' },
  { type: '기타 문의', time: '24-48시간', note: '', icon: '💬' },
];

export default function ResponseTimeInfo() {
  const [isOnline, setIsOnline] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const checkOnlineStatus = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minute = now.getMinutes();

      const isWeekday = day >= 1 && day <= 5;
      const isWorkingHour = hour >= 9 && hour < 18;
      const isOnlineStatus = isWeekday && isWorkingHour;

      setIsOnline(isOnlineStatus);

      if (isOnlineStatus) {
        setCurrentTime('빠른 응답 가능');
      } else {
        const nextWorkingDay = day === 0 ? 1 : day === 6 ? 1 : day + 1;
        const nextDate = new Date(now);
        if (day === 0 || day === 6) {
          nextDate.setDate(nextDate.getDate() + (day === 0 ? 1 : 2));
        } else if (hour >= 18) {
          nextDate.setDate(nextDate.getDate() + 1);
        }
        setCurrentTime(`내일 오전 9시 이후`);
      }
    };

    checkOnlineStatus();
  }, []);

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-5">
      <div className="flex items-center gap-2 mb-4">
        <Clock size={18} className="text-[var(--color-primary)]" />
        <h3 className="font-semibold">평균 응답 시간</h3>
      </div>

      <div className="space-y-2 mb-4">
        {responseTimes.map((item) => (
          <div key={item.type} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span>{item.icon}</span>
              <span className="text-[var(--color-foreground)]">{item.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="font-medium text-[var(--color-primary)]">{item.time}</span>
              {item.note && (
                <span className="text-xs text-[var(--color-muted-foreground)]">
                  {item.note}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-3 border-t border-[var(--color-border)]">
        <div className="flex items-center gap-2 text-sm">
          <CheckCircle
            size={16}
            className={isOnline ? 'text-[var(--color-success)]' : 'text-[var(--color-muted-foreground)]'}
          />
          <span className={isOnline ? 'text-[var(--color-success)]' : 'text-[var(--color-muted-foreground)]'}>
            {isOnline ? '🟢 온라인' : '🔴 오프라인'}
          </span>
          <span className="text-[var(--color-muted-foreground)]">
            ({currentTime})
          </span>
        </div>
      </div>

      <p className="mt-3 text-xs text-[var(--color-muted-foreground)]">
        * 긴급한 사항은 메시지에 &quot;긴급&quot;을 포함해 주세요.
      </p>
    </div>
  );
}
