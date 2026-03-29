'use client';

import { useState } from 'react';
import { Users, Handshake, Briefcase, HelpCircle, ChevronDown } from 'lucide-react';

type ContactIntent = 'recruitment' | 'collaboration' | 'freelance' | 'other' | null;

interface IntentOption {
  id: ContactIntent;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const intentOptions: IntentOption[] = [
  {
    id: 'recruitment',
    label: '채용 상담',
    description: '채용 연계, 경력 제안',
    icon: <Users size={20} />,
  },
  {
    id: 'collaboration',
    label: '협업 문의',
    description: '기술 협력, 프로젝트 공동작업',
    icon: <Handshake size={20} />,
  },
  {
    id: 'freelance',
    label: '외주 의뢰',
    description: '프로젝트 의뢰, 비용 문의',
    icon: <Briefcase size={20} />,
  },
  {
    id: 'other',
    label: '기타',
    description: '기술 질문, 네트워킹',
    icon: <HelpCircle size={20} />,
  },
];

const faqData: Record<Exclude<ContactIntent, null>, { question: string; answer: string }[]> = {
  recruitment: [
    {
      question: '현재 취업 중인가요? 언제부터 가능한가요?',
      answer: '현재 프리랜서로 활동 중이며, 즉시 협업 가능합니다. 정규직 전환도 고려하고 있습니다.',
    },
    {
      question: '어떤 기술 스택에 전문성이 있나요?',
      answer: '주요 기술: Next.js, React, TypeScript, Node.js, PostgreSQL, React Native. 풀스택 개발 가능합니다.',
    },
    {
      question: '원격/오프라인 근무 중 선호는?',
      answer: '원격 위주로 활동하며, 필요시 서울 지역 오프라인 미팅 가능합니다.',
    },
    {
      question: '연봉 협상 범위는?',
      answer: '프로젝트 형태에 따라 유연하게 협의 가능합니다. 상세한 내용은 상담을 통해 확인해주세요.',
    },
  ],
  collaboration: [
    {
      question: '어떤 규모의 팀과 협력했나요?',
      answer: '스타트업부터 중견기업까지 4개 이상의 서비스 런칭 경험이 있습니다. 2~5명 규모의 팀 협업이 가장 익숙합니다.',
    },
    {
      question: '특정 기술 분야에 전문가인가요?',
      answer: '웹/모바일 앱 개발 전반에 능숙하며, 특히 사용자 경험(UX) 중심의 풀스택 개발에 강점이 있습니다.',
    },
    {
      question: '협업 일정은 얼마나 유연한가요?',
      answer: '프로젝트 성격에 따라 유연하게 대응 가능합니다. 주 10~20시간 이상 투입 가능하며 일정은 함께 정합시다.',
    },
    {
      question: '기존 팀과의 협력 사례가 있나요?',
      answer: 'PetCare 앱 개발 당시 외부 디자이너, 마케팅 팀과 협업한 경험이 있습니다. 원활한 커뮤니케이션을 중시합니다.',
    },
  ],
  freelance: [
    {
      question: '어떤 종류의 프로젝트를 주로 하나요?',
      answer: '웹 서비스, 모바일 앱, 랜딩페이지 등을 대응합니다. 특히 MVP 구축과 Launch에 강점이 있습니다.',
    },
    {
      question: '평균 프로젝트 기간과 비용대는?',
      answer: '소규모(랜딩페이지): 2~3주, 150~250만원 / 중규모(웹 앱): 6~10주, 300~800만원 / 대규모: 3개월+, 1,000만원~',
    },
    {
      question: '사후 유지보수는 어떻게 되나요?',
      answer: '런칭 후 1개월 무료 버그 수정 제공. 이후 월 50~200만원의 유지보수 계약으로 대응 가능합니다.',
    },
    {
      question: 'NDA/계약서는 어떤 방식으로 진행하나요?',
      answer: '표준 계약서 사용 가능하며, 필요시 고객 측 계약서 형태에도 호환 가능합니다. 계약금 30% + 중기 35% + 최종 35% 결제方式进行.',
    },
  ],
  other: [
    {
      question: '특정 기술에 대한 멘토링/자문을 받을 수 있나요?',
      answer: '네, 가능합니다. 시간당 15만원에 기술 컨설팅/멘토링을 제공하고 있습니다.',
    },
    {
      question: '오픈소스 프로젝트 협력 가능한가요?',
      answer: '네, 관심 있는 프로젝트가 있다면 기꺼이 참여하겠습니다. GitHub에서 확인 가능하며, 활발히 기여 중입니다.',
    },
    {
      question: '기술 블로그나 레퍼런스가 있나요?',
      answer: '프로젝트 페이지를 통해 주요 작업물을 확인하실 수 있습니다. 기술 블로그는 준비 중입니다.',
    },
    {
      question: '이전 프로젝트 소스코드는 공개되나요?',
      answer: '클라이언트 동의 없이 공개는 어렵습니다. 대신 GitHub에서 전반적인 코드 스타일을 확인하실 수 있습니다.',
    },
  ],
};

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-[var(--color-border)] last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-3 flex items-center justify-between text-left hover:bg-[var(--color-surface-hover)] transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-sm pr-4">{question}</span>
        <ChevronDown
          size={16}
          className={`text-[var(--color-muted-foreground)] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-3 text-sm text-[var(--color-muted-foreground)] leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

interface ContactIntentSelectorProps {
  selectedIntent: ContactIntent;
  onSelect: (intent: ContactIntent) => void;
}

export function ContactIntentSelector({ selectedIntent, onSelect }: ContactIntentSelectorProps) {
  return (
    <div className="mb-8">
      <p className="text-sm text-[var(--color-muted-foreground)] mb-4">
        어떤 내용으로 연락하시나요?
      </p>
      <div className="grid grid-cols-2 gap-3">
        {intentOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`p-4 rounded-lg border text-left transition-all ${
              selectedIntent === option.id
                ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/5 ring-2 ring-[var(--color-primary)]/20'
                : 'border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-muted-foreground)]'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <span className={selectedIntent === option.id ? 'text-[var(--color-primary)]' : 'text-[var(--color-muted-foreground)]'}>
                {option.icon}
              </span>
              <span className="font-medium text-sm">{option.label}</span>
            </div>
            <p className="text-xs text-[var(--color-muted-foreground)]">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

interface ContactFAQProps {
  intent: Exclude<ContactIntent, null>;
}

export function ContactFAQ({ intent }: ContactFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = faqData[intent];

  const intentLabel = intentOptions.find((o) => o.id === intent)?.label || '';

  return (
    <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg overflow-hidden">
      <div className="p-4 border-b border-[var(--color-border)]">
        <h3 className="font-semibold text-sm">
          {intentLabel} 자주 묻는 질문
        </h3>
      </div>
      <div className="p-2">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
}

export { intentOptions, faqData };
export type { ContactIntent };
