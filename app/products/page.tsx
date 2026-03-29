'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { Check, ArrowRight, Star, Users, Zap } from 'lucide-react';

const tabs = ['개요', '기능', '가격'];

const features = [
  {
    icon: '⚡',
    title: '건강 기록 관리',
    description: '반려동물의vaccination, 진료 이력을 손쉽게 기록하고 관리합니다.',
  },
  {
    icon: '🧪',
    title: '진료 예약',
    description: '동물병원 예약을 온라인에서 진행하고 알림을 받아보세요.',
  },
  {
    icon: '📄',
    title: '영양 관리',
    description: '사료 성분 분석과 맞춤 영양 추천을 받아보세요.',
  },
  {
    icon: '🚀',
    title: '체중 모니터링',
    description: '적정 체중을 유지할 수 있도록 체중 변화 그래프로 관리합니다.',
  },
  {
    icon: '🌍',
    title: '커뮤니티',
    description: '반려동물 lovers와 경험을 나누고 정보를 공유하세요.',
  },
  {
    icon: '🔌',
    title: '성장 추적',
    description: '반려동물의 성장 과정을 사진과 함께 기록하세요.',
  },
];

const plans = [
  {
    name: '무료',
    price: '₩0',
    period: '/월',
    description: '시작하기 완벽',
    features: [
      '건강 기록 무제한',
      '커뮤니티 접근',
      '기본 기능',
      '1개 반려동물',
    ],
    cta: '시작하기',
    highlighted: false,
  },
{
    name: '프리미엄',
    price: '₩30,000',
    period: '/월',
    description: '가정용',
    features: [
      'PetAI 상담 무제한',
      '상세 건강 기록 + 차트',
      '수의사 원격 상담 3회/월',
      '증상 사진 AI 분석',
      '건강 리포트 PDF 월 1회',
      '체중/식이 관리',
    ],
    cta: '무료 체험 시작',
    highlighted: true,
  },
  {
    name: '병원용',
    price: '₩99,000',
    period: '/월',
    description: '동물병원 의사용',
    features: [
      '반려동물 무제한 등록',
      'EMR 연동',
      '수의사 원격 상담 무제한',
      '건강 리포트 PDF 무제한',
    ],
    cta: '영업에 문의',
    highlighted: false,
  },
];

const stats = [
  { value: '1,000+', label: '사용자', icon: Users },
  { value: '50+', label: '언어', icon: Zap },
  { value: '98%', label: '정확도', icon: Star },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState('개요');

  return (
    <>
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-6">
              <span className="text-[var(--color-primary)]">PetCare</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              반려동물 건강 관리
            </h1>
            <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-8">
              반려동물 건강과 행복을 위한 올인원 관리 솔루션. 건강 기록,
              진료 예약, 영양 관리까지 하나의 플랫폼에서 해결하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="https://petcare.pe.kr/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="gap-2">
                  입장하기
                  <ArrowRight size={18} />
                </Button>
              </a>
              <Button variant="outline" size="lg">
                문서 보기
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-[var(--color-muted-foreground)]">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <stat.icon size={16} className="text-[var(--color-primary)]" />
                  <span className="font-semibold text-[var(--color-foreground)]">{stat.value}</span>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="border-b border-[var(--color-border)]">
        <div className="max-w-[1024px] mx-auto px-4 md:px-6">
          <nav className="flex gap-8" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? 'border-[var(--color-primary)] text-[var(--color-primary)]'
                    : 'border-transparent text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]'
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <section className="py-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full">
          {activeTab === '개요' && (
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8">
                <div className="aspect-video rounded-lg overflow-hidden mb-6 relative">
                  <Image
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                    alt="반려동물 건강케어"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-white mb-2">
                        PetCare
                      </div>
                      <p className="text-sm text-white/80">
                        반려동물 건강 관리
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">우리를 다르게 만드는 것은?</h3>
                <p className="text-[var(--color-muted-foreground)] mb-4">
다른 반려동물 관리 앱과 달리, PetCare는 보호자가 진짜 필요한 것 —
                  건강 기록, 맞춤 영양 관리, 편리한 예약 시스템 — 을 한눈에 관리할 수 있게 해줍니다.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-[var(--color-success)]" />
                    <span>건강 기록 70% 감소</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-[var(--color-success)]" />
                    <span>항상 건강한 반려동물</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Check size={16} className="text-[var(--color-success)]" />
                    <span>전문가 추천 사료</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">
                  반려동물을 사랑하는 보호자를 위한
                </h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed mb-6">
                  말 못 하는 아이들의 건강을 지켜주고 싶지만, 무엇이 가장 좋은지 막막한 보호자분들의 마음을 이해합니다.
                  PetCare는 수백만 개의 사료 데이터와 수의학적 데이터를 기반으로 반려동물에게 적절한 영양과 관리를 추천해 드립니다.
                </p>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  우리의 목표는 모든 보호자가 자신감 있게 반려동물을 관리할 수 있는 세상을 만드는 것입니다.
                </p>
              </div>
            </div>
          )}

          {activeTab === '기능' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 hover:bg-[var(--color-surface-hover)] transition-colors"
                >
                  <span className="text-3xl mb-4 block">{feature.icon}</span>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-[var(--color-muted-foreground)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === '가격' && (
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-6 lg:p-8 ${
                    plan.highlighted
                      ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                      : 'bg-[var(--color-surface)] border border-[var(--color-border)]'
                  }`}
                >
                  {plan.highlighted && (
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)] text-[var(--color-foreground)] mb-4">
                      가장 인기
                    </span>
                  )}
                  <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-3xl lg:text-4xl font-bold">{plan.price}</span>
                    <span className={`text-sm ${plan.highlighted ? 'text-[var(--color-background)]/70' : 'text-[var(--color-muted-foreground)]'}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-sm mb-6 ${plan.highlighted ? 'text-[var(--color-background)]/70' : 'text-[var(--color-muted-foreground)]'}`}>
                    {plan.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-2 text-sm">
                        <Check size={16} className={plan.highlighted ? 'text-[var(--color-accent)]' : 'text-[var(--color-success)]'} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlighted ? 'ghost' : 'outline'}
                    className={`w-full ${
                      plan.highlighted
                        ? 'bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-[var(--color-background)]/90'
                        : ''
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="fixed bottom-0 left-0 right-0 bg-[var(--color-foreground)] text-[var(--color-background)] p-4 md:hidden z-40">
        <div className="flex items-center justify-between max-w-[1024px] mx-auto">
          <div>
            <span className="font-semibold">PetCare</span>
            <span className="text-sm opacity-70 ml-2">반려동물 건강 관리</span>
          </div>
          <a href="https://petcare.pe.kr/" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-[var(--color-background)]/90 gap-1">
              입장하기
              <ArrowRight size={14} />
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}