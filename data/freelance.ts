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

export const heroData: Hero = {
  badge: '현재 외주 가능',
  title: '웹 개발의 모든 단계를 혼자 마스터한 풀스택 개발자',
  description:
    '기획부터 런칭까지 통합 관리. 신뢰할 수 있는 개발자와 함께 복잡한 프로젝트도 명확하게 완성하세요.',
  ctaPrimary: { text: '상담 예약하기', href: '/schedule' },
  ctaSecondary: { text: '포트폴리오 보기', href: '/projects' },
};

export const differentiators: Differentiator[] = [
  {
    id: 'unified-responsibility',
    icon: 'Zap',
    title: '기획부터 런칭까지 단일 책임',
    description:
      '한 명의 개발자가 프로젝트 전 과정을 직접 관리하여 의사결정이 빠르고 커뮤니케이션 손실이 없습니다.',
    keyPoints: [
      'PetCare 기획부터 App Store/Play Store 런칭까지',
      '사용자 피드백 → 개선 사이클 직접 경험',
      '기획 단계에서 기술 구현까지 통합 관리',
    ],
  },
  {
    id: 'ux-first',
    icon: 'Users',
    title: '반려동물 보호자 관점의 UX',
    description:
      '나 자신도 반려동물 보호자입니다. 실제 사용자의 눈높이에서 서비스를 설계합니다.',
    keyPoints: [
      '디자인 시스템 구축 (Tailwind CSS)',
      '반응형 디자인 (모바일/태블릿/데스크탑)',
      '성능 최적화 (Core Web Vitals 개선)',
    ],
  },
  {
    id: 'long-term-maintenance',
    icon: 'Code',
    title: 'AI 시대에 맞는 기술 선택',
    description:
      '새로운 AI 도구들을 적극 활용하여 생산성을 높이고, 깔끔한 코드 구조를 유지합니다.',
    keyPoints: [
      'TypeScript 타입 안정성',
      'AI 도구 활용 (Claude Code, MiniMax-M2.7)',
      '재사용 가능한 컴포넌트 설계',
    ],
  },
];

export const proofStats: ProofStat[] = [
  { value: 'PetCare', label: '직접 기획/런칭', context: '반려동물 건강 관리' },
  { value: '1인', label: '풀스택 개발', context: ' 기획부터 배포까지' },
  { value: 'AI', label: '사료 분석 기능', context: '반려동물 건강 관리' },
  { value: '모바일', label: 'React Native', context: 'iOS & Android' },
];

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
    title: '최신 하이브리드 앱 개발',
    subtitle: 'iOS / Android + 최신 하이브리드 개발 방식',
    description:
      'React Native를 활용한 크로스 플랫폼 앱 또는 네이티브 개발. 성능과 UX를 모두 만족시키는 앱.',
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
  ];

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

export const successStories: SuccessStory[] = [
  {
    id: 'petcare',
    projectName: 'PetCare',
    clientName: '코어넥스트',
    clientType: '자체 서비스',
    description:
      '반려동물 건강 관리 올인원 플랫폼. 반려동물 보호자가 직접 기획부터 런칭까지 진행한 1인 개발 프로젝트입니다.',
    results: [
      'AI 사료 분석 기능 개발',
      '반려동물 체중/칼로리 관리 기능',
      'App Store & Play Store 배포 완료',
      '지속적인 기능 업데이트 및 운영 중',
    ],
    tech: [
      'Next.js',
      'React Native',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
    ],
    period: '2024.01 ~ 현재',
    link: 'https://petcare.pe.kr',
  },
];

export const faqs: FAQItem[] = [
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

export const ctaChannels: CTAChannel[] = [
  {
    id: 'cta-calendar',
    icon: 'Calendar',
    title: '상담 예약하기',
    description:
      '캘린더에서 편한 시간을 선택하고 상담을 진행하세요. (15~30분)',
    actionText: '일정 예약',
    actionHref: '/schedule',
  },
  {
    id: 'cta-email',
    icon: 'Mail',
    title: '이메일로 문의하기',
    description:
      '프로젝트 개요를 이메일로 보내주시면 빠르게 연락드립니다.',
    actionText: '이메일 보내기',
    actionHref: 'mailto:fjkg33@gmail.com',
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