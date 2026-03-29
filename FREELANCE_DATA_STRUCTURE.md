# 외주 페이지 - 구현용 데이터 구조 & 컴포넌트 가이드

**작성일**: 2026-03-27
**대상**: 개발자 (TypeScript 구현 기준)

---

## 1. 전체 데이터 모델 (TypeScript)

```typescript
// types/freelance.ts

// 1. Hero Section
export interface Hero {
  badge: string;
  title: string;
  description: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  imageUrl?: string;
}

// 2. Differentiator Card
export interface Differentiator {
  id: string;
  icon: 'Zap' | 'Users' | 'Code' | 'Lightbulb' | 'TrendingUp';
  title: string;
  description: string;
  keyPoints: string[];
}

// 3. Proof Stat
export interface ProofStat {
  value: string;
  label: string;
  context?: string;
}

// 4. Service Offering
export interface Service {
  id: string;
  icon: 'Globe' | 'Smartphone' | 'Link' | 'Lightbulb' | 'Layers';
  title: string;
  subtitle: string;
  description: string;
  scope: string[];
  notIncluded?: string[];
  estimatedDuration: string;
  startingPrice: string;
  examples?: string[];
}

// 5. Process Step
export interface ProcessStep {
  step: number;
  phase: string;
  description: string;
  duration: string;
  deliverables: string[];
  communication: string;
}

// 6. Pricing Model
export interface PricingModel {
  type: 'project-based' | 'hourly';
  description: string;
  pros: string[];
  cons: string[];
}

export interface PriceExample {
  projectType: string;
  scope: string;
  estimatedCost: string;
  duration: string;
  example: string;
}

export interface AdditionalService {
  service: string;
  price: string;
  description: string;
}

// 7. Success Story
export interface SuccessStory {
  id: string;
  projectName: string;
  clientName: string;
  clientType: string;
  description: string;
  results: string[];
  tech: string[];
  period: string;
  link?: string;
  imageUrl?: string;
}

// 8. FAQ Item
export interface FAQItem {
  id: string;
  category: 'timeline' | 'cost' | 'communication' | 'technical' | 'security';
  question: string;
  answer: string;
}

// 9. CTA Channel
export interface CTAChannel {
  id: string;
  icon: 'Calendar' | 'Mail' | 'MessageSquare' | 'Phone';
  title: string;
  description: string;
  actionText: string;
  actionHref: string;
}
```

---

## 2. 데이터 파일 (data/freelance.ts)

```typescript
// data/freelance.ts

import type {
  Hero,
  Differentiator,
  ProofStat,
  Service,
  ProcessStep,
  PricingModel,
  PriceExample,
  AdditionalService,
  SuccessStory,
  FAQItem,
  CTAChannel,
} from '@/types/freelance';

// ===== HERO SECTION =====
export const heroData: Hero = {
  badge: '현재 외주 가능',
  title: '웹 개발의 모든 단계를 혼자 마스터한 풀스택 개발자',
  description:
    '기획부터 런칭까지 통합 관리. 신뢰할 수 있는 개발자와 함께 복잡한 프로젝트도 명확하게 완성하세요.',
  ctaPrimary: { text: '상담 예약하기', href: '#schedule' },
  ctaSecondary: { text: '포트폴리오 보기', href: '/projects' },
};

// ===== WHY ME SECTION =====
export const differentiators: Differentiator[] = [
  {
    id: 'unified-responsibility',
    icon: 'Zap',
    title: '기획부터 런칭까지 단일 책임',
    description:
      '한 명의 개발자가 프로젝트 전 과정을 관리하므로 커뮤니케이션 손실 최소화, 일관된 비전 유지.',
    keyPoints: [
      '스타트업 4개 서비스 기획 & 런칭 경험',
      '사용자 피드백 → 개선 사이클 경험',
      '기획 문제는 개발 전에 해결',
    ],
  },
  {
    id: 'ux-first',
    icon: 'Users',
    title: 'UX-First 개발 접근',
    description:
      '기술 구현보다 사용자 경험을 우선시. 아름다움과 기능성의 완벽한 균형.',
    keyPoints: [
      '디자인 시스템 구축 (Tailwind 마스터)',
      '반응형 디자인 필수 (모바일/태블릿/데스크탑)',
      '성능 최적화 (웹 바이탈 개선)',
    ],
  },
  {
    id: 'long-term-maintenance',
    icon: 'Code',
    title: '장기 유지보수를 고려한 개발',
    description:
      '깔끔한 코드 구조, 명확한 문서화, 미래 확장을 염두에 둔 아키텍처.',
    keyPoints: [
      'TypeScript 타입 안정성',
      '재사용 가능한 컴포넌트 설계',
      '명확한 주석 & 개발 문서 제공',
    ],
  },
];

export const proofStats: ProofStat[] = [
  { value: '15+', label: '완료 프로젝트', context: '스타트업 ~ 중견기업' },
  { value: '98%', label: '고객 만족도', context: '프로젝트 완료율' },
  { value: '4개', label: '런칭 서비스', context: '활발한 운영 중' },
  { value: '10년', label: '개발 경력', context: '웹 & 앱 풀스택' },
];

// ===== SERVICE OFFERINGS =====
export const services: Service[] = [
  {
    id: 'web-development',
    icon: 'Globe',
    title: '웹 애플리케이션 개발',
    subtitle: '풀스택 웹 서비스 구축',
    description:
      'Next.js, React 기반의 모던 웹 애플리케이션 개발. MVP부터 복잡한 엔터프라이즈 솔루션까지.',
    scope: [
      '반응형 UI/UX 디자인',
      '백엔드 API 구축 (Node.js, Python 등)',
      '데이터베이스 설계 및 최적화',
      '배포 및 서버 설정',
      '성능 최적화 및 모니터링',
    ],
    estimatedDuration: '2주 ~ 3개월',
    startingPrice: '₩2,000,000~',
    examples: [
      'PetCare (반려동물 건강 관리 앱)',
      'B2B SaaS 대시보드',
      '커머스 플랫폼',
    ],
  },
  {
    id: 'mobile-app',
    icon: 'Smartphone',
    title: '모바일 앱 개발',
    subtitle: 'iOS / Android 네이티브 또는 크로스 플랫폼',
    description:
      'React Native, Flutter를 활용한 크로스 플랫폼 앱 또는 네이티브 개발. 성능과 UX를 모두 만족시키는 앱.',
    scope: [
      '앱 기획 및 프로토타입',
      '네이티브/크로스 플랫폼 개발',
      '백엔드 연동',
      '앱스토어/플레이스토어 배포',
      '운영 및 업데이트 지원',
    ],
    notIncluded: ['iOS/Android 서명 및 배포비 (별도)'],
    estimatedDuration: '4주 ~ 4개월',
    startingPrice: '₩3,000,000~',
    examples: [
      'PetCare 모바일 앱',
      '헬스케어 애플리케이션',
      'O2O 서비스 앱',
    ],
  },
  {
    id: 'integration',
    icon: 'Link',
    title: '시스템 통합 & API 개발',
    subtitle: '기존 시스템 연동 및 자동화',
    description:
      '레거시 시스템, 외부 서비스(결제, SMS, 이메일 등), 데이터 마이그레이션 등의 통합 개발.',
    scope: [
      'API 설계 및 구축',
      '외부 서비스 연동 (결제, 인증, 마케팅)',
      '데이터 마이그레이션',
      '성능 최적화 및 캐싱 전략',
      '모니터링 및 에러 핸들링',
    ],
    estimatedDuration: '2주 ~ 2개월',
    startingPrice: '₩1,500,000~',
  },
  {
    id: 'consulting',
    icon: 'Lightbulb',
    title: '기술 컨설팅 & 코드 리뷰',
    subtitle: '아키텍처 설계 및 기술 의사결정 지원',
    description:
      '프로젝트 초기 기술 스택 검증, 아키텍처 설계, 팀의 코드 리뷰 및 개선 방향 제시.',
    scope: [
      '기술 스택 선정 및 비교 분석',
      '아키텍처 설계 컨설팅',
      '코드 리뷰 및 리팩토링 제안',
      '성능 최적화 전략',
      'DevOps & 배포 전략',
    ],
    estimatedDuration: '1회 ~ 월간 지원',
    startingPrice: '시간제 ₩150,000/시간',
  },
];

// ===== PROCESS SECTION =====
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    phase: '상담 & 요구사항 분석',
    description:
      '프로젝트의 목표, 타겟 사용자, 예산, 일정을 명확히 합니다. 가능성 검토 및 기술 검증.',
    duration: '1~2일',
    deliverables: [
      '요구사항 정의서',
      '기술 스택 검증',
      '프로젝트 일정 및 예산 제안',
    ],
    communication: '화상 통화 + 문서 공유',
  },
  {
    step: 2,
    phase: '기획 & 설계',
    description:
      '화면 설계, 사용자 흐름, 데이터베이스 구조, API 명세 등을 작성합니다.',
    duration: '3~7일',
    deliverables: [
      '와이어프레임 & 프로토타입',
      '사용자 흐름 (User Flow)',
      '데이터베이스 설계',
      'API 명세서',
    ],
    communication: '주 1회 진행 회의',
  },
  {
    step: 3,
    phase: '개발',
    description:
      '기획된 사항을 기반으로 본격적인 개발을 진행합니다. 마일스톤별 진행 상황 공유.',
    duration: '2~8주',
    deliverables: [
      'GitHub 레포지토리 (읽기 권한 제공)',
      '주간 진행률 리포트',
      '중간 테스트 빌드',
    ],
    communication: '주 2회 진행 회의 + Slack/이메일 일일 업데이트',
  },
  {
    step: 4,
    phase: '테스트 & 개선',
    description:
      '기능 테스트, 성능 최적화, 보안 검사, 사용자 피드백 반영.',
    duration: '1~2주',
    deliverables: [
      '테스트 결과 보고서',
      '성능 최적화 리포트',
      '버그 수정 완료',
    ],
    communication: '주 2회 스크리닝',
  },
  {
    step: 5,
    phase: '런칭 & 모니터링',
    description: '본격 배포, 모니터링 설정, 초기 운영 지원.',
    duration: '1주 ~ 지속',
    deliverables: [
      '배포 완료',
      '모니터링 대시보드 설정',
      '런칭 이후 1개월 운영 지원',
    ],
    communication: '수시 연락 가능',
  },
];

// ===== PRICING SECTION =====
export const pricingModels: PricingModel[] = [
  {
    type: 'project-based',
    description: '프로젝트 전체 범위에 대한 고정 가격 제시',
    pros: [
      '예산 확정으로 인한 안심',
      '명확한 납기일 설정',
      '전체 비용 계획 용이',
    ],
    cons: [
      '초기 기획이 철저해야 함',
      '요구사항 변경 시 추가 논의 필요',
    ],
  },
  {
    type: 'hourly',
    description: '시간당 요금 기준 (₩150,000/시간)',
    pros: [
      '유동적인 요구사항 대응',
      '소규모/단기 프로젝트에 적합',
      '정확한 투입 시간 기반 청구',
    ],
    cons: ['전체 비용 예측 어려움', '장기 프로젝트는 비효율적'],
  },
];

export const priceExamples: PriceExample[] = [
  {
    projectType: '소규모: 랜딩페이지 + 간단한 기능',
    scope: '반응형 웹사이트, 문의 폼, 기본 SEO',
    estimatedCost: '₩1,500,000 ~ ₩2,500,000',
    duration: '2~3주',
    example: '스타트업 서비스 소개 페이지, 개인 포트폴리오 사이트',
  },
  {
    projectType: '중규모: 웹 애플리케이션',
    scope: '회원 가입/로그인, 대시보드, 데이터 관리, 결제 연동',
    estimatedCost: '₩3,000,000 ~ ₩8,000,000',
    duration: '6~10주',
    example: 'B2B 관리 도구, SaaS 기본 버전, O2O 플랫폼',
  },
  {
    projectType: '대규모: 복잡한 시스템',
    scope: '다중 사용자 역할, 복잡한 비즈니스 로직, 고성능, 보안 고려',
    estimatedCost: '₩10,000,000 ~ ₩30,000,000+',
    duration: '3개월 이상',
    example: '핀테크 플랫폼, 의료 관리 시스템, 복잡한 커머스',
  },
];

export const additionalServices: AdditionalService[] = [
  {
    service: '유지보수 & 운영 지원',
    price: '월 ₩500,000 ~ ₩2,000,000',
    description:
      '버그 수정, 기능 추가, 성능 모니터링, 보안 패치',
  },
  {
    service: '기술 컨설팅',
    price: '시간제 ₩150,000/시간',
    description: '아키텍처 설계, 기술 스택 선정, 코드 리뷰',
  },
  {
    service: '긴급 지원',
    price: '시간제 ₩200,000/시간',
    description: '야간/주말 긴급 대응, 서비스 복구',
  },
];

// ===== SUCCESS STORIES =====
export const successStories: SuccessStory[] = [
  {
    id: 'petcare',
    projectName: 'PetCare',
    clientName: '코어넥스트',
    clientType: '자체 서비스',
    description:
      '반려동물 건강 관리 올인원 플랫폼. 기획부터 런칭까지 통합 진행.',
    results: [
      '1,000+ 활성 사용자 확보',
      'App Store & Play Store 배포',
      '월 50% 성장률 달성',
      '매월 정기 기능 업데이트 운영 중',
    ],
    tech: [
      'Next.js',
      'React Native',
      'TypeScript',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    period: '2023.01 ~ 현재',
    link: 'https://petcare.pe.kr',
  },
  {
    id: 'b2b-saas',
    projectName: 'B2B 관리 대시보드',
    clientName: '스타트업 A',
    clientType: '스타트업',
    description: '영업/마케팅 팀의 캠페인 관리 및 성과 분석 플랫폼.',
    results: [
      '기획 2주 → 개발 6주 → 런칭 완료',
      '팀 내 수작업 시간 70% 감소',
      '데이터 기반 의사결정 가능',
      '분기별 신규 기능 추가 운영 중',
    ],
    tech: [
      'Next.js',
      'TypeScript',
      'TailwindCSS',
      'PostgreSQL',
      'API 설계',
    ],
    period: '2022.09 ~ 현재',
  },
  {
    id: 'healthcare',
    projectName: '헬스케어 예약 시스템',
    clientName: '헬스케어 센터 B',
    clientType: '중견기업',
    description: '환자 예약, 의료진 스케줄 관리, 전자차트 통합 시스템.',
    results: [
      '예약 프로세스 자동화',
      '월 300+ 환자 관리',
      'HIPAA 규정 준수 달성',
      '90% 이상 의료진 만족도',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'MySQL', 'Docker', 'AWS'],
    period: '2021.04 ~ 2022.08',
  },
];

// ===== FAQ SECTION =====
export const faqs: FAQItem[] = [
  // Timeline
  {
    id: 'faq-timeline-1',
    category: 'timeline',
    question: '프로젝트 일정은 어떻게 결정되나요?',
    answer:
      '초기 상담에서 기능 범위, 복잡도, 팀 규모 등을 고려하여 현실적인 일정을 제시합니다. 일반적으로 프로토타입은 1주 내, 중규모 프로젝트는 6~10주 정도 소요됩니다.',
  },
  {
    id: 'faq-timeline-2',
    category: 'timeline',
    question: '일정 지연 시 어떻게 되나요?',
    answer:
      '체계적인 프로젝트 관리로 일정을 맞추려고 노력합니다. 예상치 못한 상황 발생 시 즉시 알리고 새로운 일정을 협의합니다. 계약에 따라 지연 시 할인이나 추가 기능 제공 등의 보상이 있을 수 있습니다.',
  },
  {
    id: 'faq-timeline-3',
    category: 'timeline',
    question: '여러 프로젝트를 동시에 진행할 수 있나요?',
    answer:
      '한 번에 1~2개 프로젝트만 진행합니다. 이는 각 프로젝트에 충분한 집중력을 보장하고 품질을 유지하기 위함입니다. 선착순 기준으로 일정을 정해집니다.',
  },

  // Cost
  {
    id: 'faq-cost-1',
    category: 'cost',
    question: '예산이 정해져 있는데, 이 범위 내에서 가능할까요?',
    answer:
      '네, 가능합니다. 초기 상담에서 예산을 말씀해주시면, 그 범위 내에서 최대 가치를 제공할 수 있는 기능 범위를 함께 정의합니다. 유연한 협상이 가능합니다.',
  },
  {
    id: 'faq-cost-2',
    category: 'cost',
    question: '프로젝트 중간에 요구사항이 늘어나면?',
    answer:
      '요구사항 변경은 자연스러운 일입니다. 변경사항의 규모에 따라 추가 비용과 일정을 협의합니다. 모든 변경사항은 문서화되어 투명하게 처리됩니다.',
  },
  {
    id: 'faq-cost-3',
    category: 'cost',
    question: '지불 일정은 어떻게 되나요?',
    answer:
      '일반적으로 3회 분할입니다: (1) 계약금 30%, (2) 중간 결제 35% (개발 시작 시), (3) 최종 결제 35% (납기 완료 시). 큰 프로젝트는 더 세분화할 수 있습니다.',
  },

  // Communication
  {
    id: 'faq-comm-1',
    category: 'communication',
    question: '주간 리포트는 어떻게 받나요?',
    answer:
      '매주 월요일 또는 금요일에 진행률 리포트를 이메일/Slack으로 발송합니다. 리포트에는 완료한 기능, 다음주 계획, 발생한 이슈, GitHub 커밋 내역이 포함됩니다.',
  },
  {
    id: 'faq-comm-2',
    category: 'communication',
    question: '개발 과정에 피드백을 주고 싶어요.',
    answer:
      '물론입니다. 주간 진행 회의 때 피드백을 받습니다. 또한 개발 과정 중 중간 테스트 빌드를 제공하여 실시간 피드백을 받을 수 있습니다.',
  },
  {
    id: 'faq-comm-3',
    category: 'communication',
    question: '응답 속도는 어느 정도인가요?',
    answer:
      '평일 업무 시간(09:00~18:00) 내에는 24시간 이내 응답을 목표합니다. 급할 경우 전화/카톡으로 즉시 연락 가능합니다.',
  },

  // Technical
  {
    id: 'faq-tech-1',
    category: 'technical',
    question: '기술 스택을 지정할 수 있나요?',
    answer:
      '네, 가능합니다. 다만 프로젝트의 성격에 맞는 스택인지 검토하고 조언해드립니다. 예를 들어, 빠른 프로토타입이 필요하면 Next.js를 추천하고, 고성능 시스템이면 다른 스택을 제안할 수 있습니다.',
  },
  {
    id: 'faq-tech-2',
    category: 'technical',
    question: '코드를 제공받을 수 있나요?',
    answer:
      '네, 개발 완료 후 모든 소스코드를 제공합니다. GitHub 레포지토리 접근 권한도 드립니다. 코드에는 명확한 주석과 개발 문서가 포함됩니다.',
  },
  {
    id: 'faq-tech-3',
    category: 'technical',
    question: '런칭 후 유지보수는?',
    answer:
      '런칭 후 1개월은 무료로 버그 수정 및 긴급 지원을 제공합니다. 이후 월간 유지보수 계약(₩500,000~)을 통해 정기적인 모니터링, 보안 패치, 기능 추가를 지원합니다.',
  },

  // Security
  {
    id: 'faq-sec-1',
    category: 'security',
    question: '보안은 어떻게 처리하나요?',
    answer:
      'OWASP Top 10 기준으로 보안을 고려합니다. SQL injection, XSS, CSRF 방지, 암호화, 권한 관리 등의 보안 최적화가 포함됩니다. 추가 보안 감사가 필요하면 전문가 리뷰를 권장합니다.',
  },
  {
    id: 'faq-sec-2',
    category: 'security',
    question: '사용자 데이터는 안전한가요?',
    answer:
      '데이터베이스는 암호화되고, 데이터 전송은 HTTPS를 통해 이루어집니다. 데이터 백업 및 복구 계획도 포함됩니다. 필요 시 클라우드 보안(AWS, GCP) 인증을 갖춘 서버 운영을 제안합니다.',
  },
];

// ===== FINAL CTA =====
export const ctaChannels: CTAChannel[] = [
  {
    id: 'cta-calendar',
    icon: 'Calendar',
    title: '상담 예약하기',
    description:
      '캘린더에서 편한 시간을 선택하고 상담을 진행하세요. (15~30분)',
    actionText: '일정 예약',
    actionHref: 'https://calendly.com/your-calendar', // Replace with actual Calendly URL
  },
  {
    id: 'cta-email',
    icon: 'Mail',
    title: '이메일로 문의하기',
    description:
      '프로젝트 개요를 이메일로 보내주시면 빠르게 연락드립니다.',
    actionText: '이메일 보내기',
    actionHref: 'mailto:freelance@corenext.co.kr',
  },
  {
    id: 'cta-message',
    icon: 'MessageSquare',
    title: '카톡 / 전화로 문의',
    description: '빠른 상담이 필요하시면 직접 연락주세요.',
    actionText: '연락처 보기',
    actionHref: '#contact',
  },
];
```

---

## 3. 컴포넌트 구조 예시

### 3.1 폴더 구조
```
app/
├── freelance/
│   ├── page.tsx          # 메인 페이지
│   └── layout.tsx        # 레이아웃 (선택)
│
components/
├── sections/
│   ├── FLHero.tsx           # Hero Section
│   ├── FLDifferentiators.tsx # Why Me Section
│   ├── FLServices.tsx        # Service Offerings
│   ├── FLProcess.tsx         # My Process
│   ├── FLPricing.tsx         # Pricing
│   ├── FLSuccessStories.tsx  # Success Stories
│   ├── FLFAQ.tsx             # FAQ
│   └── FLCTA.tsx             # Final CTA
│
├── ui/
│   ├── DifferentiatorCard.tsx
│   ├── ServiceCard.tsx
│   ├── ProcessTimeline.tsx
│   ├── FAQAccordion.tsx
│   └── CTACard.tsx
│
types/
└── freelance.ts

data/
└── freelance.ts
```

### 3.2 페이지 기본 구조 (page.tsx)
```typescript
// app/freelance/page.tsx

import { Metadata } from 'next';
import FLHero from '@/components/sections/FLHero';
import FLDifferentiators from '@/components/sections/FLDifferentiators';
import FLServices from '@/components/sections/FLServices';
import FLProcess from '@/components/sections/FLProcess';
import FLPricing from '@/components/sections/FLPricing';
import FLSuccessStories from '@/components/sections/FLSuccessStories';
import FLFAQ from '@/components/sections/FLFAQ';
import FLCTA from '@/components/sections/FLCTA';

export const metadata: Metadata = {
  title: '웹 개발 외주 | 풀스택 개발자 조민성',
  description:
    'PetCare, 헬스케어 시스템 등 4개 서비스 런칭 경험의 웹 개발자. 기획부터 배포까지 통합 관리. 합리적인 가격, 투명한 커뮤니케이션.',
  keywords: [
    '웹 개발',
    '외주',
    '프리랜서',
    '풀스택',
    'Next.js',
    'React',
    '스타트업 개발',
  ],
};

export default function FreelancePage() {
  return (
    <>
      <FLHero />
      <FLDifferentiators />
      <FLServices />
      <FLProcess />
      <FLPricing />
      <FLSuccessStories />
      <FLFAQ />
      <FLCTA />
    </>
  );
}
```

### 3.3 컴포넌트 샘플 (FLHero.tsx)
```typescript
// components/sections/FLHero.tsx

'use client';

import Button from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { heroData } from '@/data/freelance';

export default function FLHero() {
  return (
    <section className="pt-24 pb-16 px-4 md:px-6">
      <div className="max-w-[1024px] mx-auto w-full">
        <div className="text-center mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] mb-6">
            <span className="text-[var(--color-primary)]">{heroData.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            {heroData.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-[var(--color-muted-foreground)] max-w-2xl mx-auto mb-8">
            {heroData.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={heroData.ctaPrimary.href}>
              <Button size="lg" className="gap-2">
                {heroData.ctaPrimary.text}
                <ArrowRight size={18} />
              </Button>
            </a>
            <a href={heroData.ctaSecondary.href}>
              <Button variant="outline" size="lg">
                {heroData.ctaSecondary.text}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 4. 스타일 클래스 참고

기존 products 페이지와 동일한 스타일 유지:

```css
/* Hero Section */
.badge: inline-flex, px-3 py-1, text-sm font-medium, rounded-full, bg-[var(--color-surface)], border

.title: text-3xl md:text-4xl lg:text-5xl, font-bold, tracking-tight

.description: text-lg, text-[var(--color-muted-foreground)], max-w-2xl mx-auto

/* Card */
.card: bg-[var(--color-surface)], border, border-[var(--color-border)], rounded-lg, p-6, hover:bg-[var(--color-surface-hover)]

/* Button */
.btn-primary: bg-[var(--color-primary)], text-white, rounded, gap-2
.btn-outline: border, border-[var(--color-border)], text-[var(--color-foreground)]

/* Section Container */
.section: py-16 px-4 md:px-6
.container: max-w-[1024px] mx-auto w-full
```

---

## 5. 주의사항

1. **라우팅**: 기존 `/products`에서 새 페이지로 전환 시, 레디렉션 설정 고려
2. **네비게이션**: 네비게이션 메뉴에서 "상품" → "외주" 또는 "서비스"로 변경
3. **SEO**: 메타데이터 검색 키워드 최적화 필수
4. **Calendly**: 실제 캘린더 URL 설정 필수
5. **이메일**: `mailto:` 링크 설정 필수

---

이 데이터 구조와 컴포넌트 가이드를 바탕으로 개발하면,
**FREELANCE_PAGE_PLAN.md에서 정의한 모든 기능을 빠짐없이 구현**할 수 있습니다.
