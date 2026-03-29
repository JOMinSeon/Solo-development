'use client';

import { Calendar, Mail, MessageSquare } from 'lucide-react';
import { ctaChannels } from '@/data/freelance';
import type { CTAChannel } from '@/types/freelance';

const iconMap = {
  Calendar,
  Mail,
  MessageSquare,
  Phone: MessageSquare,
};

export default function FLCTA() {
  return (
    <section id="schedule" className="py-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
            프로젝트를 시작할 준비가 되셨나요?
          </h2>
          <p className="text-[var(--color-muted-foreground)]">
            간단한 상담으로 프로젝트의 가능성을 함께 살펴봅시다. 상담은 완전히 무료입니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {ctaChannels.map((channel: CTAChannel) => {
            const IconComponent = iconMap[channel.icon];
            return (
              <a
                key={channel.id}
                href={channel.actionHref}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-200 block"
              >
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-4">
                  <IconComponent size={24} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{channel.title}</h3>
                <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
                  {channel.description}
                </p>
                <span className="inline-block px-4 py-2 text-sm font-medium bg-[var(--color-primary)] text-white rounded-lg">
                  {channel.actionText}
                </span>
              </a>
            );
          })}
        </div>

        <p className="text-center text-sm text-[var(--color-muted-foreground)]">
          24시간 이내 응답을 목표합니다.
        </p>
      </div>
    </section>
  );
}