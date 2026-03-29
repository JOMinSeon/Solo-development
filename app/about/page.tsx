import Logo from '@/components/Logo';
import CTASection from '@/components/sections/CTASection';
import { Palette, Scale, Cpu, Heart, Sparkles, Zap, HeartHandshake } from 'lucide-react';

const achievements = [
  { icon: Palette, value: '1년', label: '사용자 친화적인 UX/UI 설계 경험' },
  { icon: Scale, value: '100%', label: '맞춤형 체중 및 칼로리 밀착 관리' },
  { icon: Cpu, value: '∞', label: '스마트한 AI 사료 분석과 데이터 확장' },
  { icon: Heart, value: '1순위', label: '반려인과 반려동물의 건강한 일상' },
];

const coreValues = [
  {
    category: 'CORE',
    subtitle: '변하지 않는 본질에 집중합니다',
    items: [
      {
        title: '타협할 수 없는 가장 기본의 데이터',
        description: '수많은 부가 기능의 유혹 속에서도 우리는 반려동물 삶의 중심인 \'건강\'이라는 본질에 집중합니다. 매일 먹는 사료의 영양 성분, 미세한 체중 변화와 칼로리 등 가장 기본적이지만 타협할 수 없는 핵심(Core) 데이터만을 투명하게 다룹니다.',
      },
      {
        title: '기술의 본질은 \'쉬운 문제 해결\'',
        description: '아무리 뛰어난 AI 기술도 보호자가 쓰기 어렵다면 의미가 없습니다. 웹 디자이너의 집요한 시선으로 복잡한 건강 정보를 누구나 직관적으로 이해할 수 있게 번역합니다. 화려한 기술 자랑보다는, 당장 보호자의 막막함을 덜어주는 \'우아한 쓰임새\'를 최우선으로 고민합니다.',
      },
    ],
  },
  {
    category: 'NEXT',
    subtitle: '기술로 건강한 내일을 연결합니다',
    items: [
      {
        title: '감을 넘어선 펫 헬스케어의 다음 세대',
        description: '인터넷 검색과 막연한 직관에 의존하던 과거의 관리 방식을 끝냅니다. 1인 개발사 특유의 기민한 실행력으로 꼭 필요한 솔루션을 빠르게 구현하여, 데이터 기반의 스마트한 관리가 당연해지는 펫 헬스케어의 새로운 표준(Next)을 개척합니다.',
      },
      {
        title: '일상이 모여 만드는 더 긴 내일',
        description: '코어넥스트가 코드를 짜고 서비스를 만드는 궁극적인 목적은 하나입니다. 1인 가구 보호자들의 무거운 짐을 덜어주고 흔들림 없는 일상을 지켜내어, 말 못 하는 우리 아이들과 함께할 더 길고 행복한 내일(Next)을 든든하게 연결하는 것입니다.',
      },
    ],
  },
];

export default function About() {
  return (
    <>
      <section className="pt-24 pb-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                안녕하세요, 코어넥스트 조민성입니다.
              </h1>
              <p className="text-base md:text-lg text-[var(--color-muted-foreground)] leading-relaxed mb-6">
                단지 상상에 머물던 아이디어를 현실로 만들기 위해, 웹 디자이너에서 1인 개발자로 도전을 시작한 창업가입니다.
                정통 개발 경력의 빈자리는 사용자의 불편함을 가장 먼저 캐치하는 디자이너 특유의 공감 능력과 집요한 실행력으로 채우고 있습니다.
                &apos;완벽한 코드&apos; 이전에 &apos;완벽한 쓰임새&apos;를 고민하며, 복잡한 사료 성분과 체중 관리라는 과제를
                가장 쉽고 따뜻한 형태의 웹 서비스 &apos;PetCare&apos;로 풀어내고 있습니다.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://blog.naver.com/taxai1004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                  aria-label="네이버 블로그 프로필"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#2DB400">
                    <path d="M17.411 6.034c.585.595.585 1.57 0 2.165l-4.646 4.646c-.595.595-1.57.595-2.165 0s-.595-1.57 0-2.165l4.646-4.646c.595-.595 1.57-.595 2.165 0zM5.67 11.683c-.595.595-.595 1.57 0 2.165l7.878 7.878c.595.595 1.57.595 2.165 0s.595-1.57 0-2.165L7.835 11.683c-.595-.595-1.57-.595-2.165 0zM10.19 6.79c-.595.595-.595 1.57 0 2.165l2.51 2.51c.595.595 1.57.595 2.165 0s.595-1.57 0-2.165l-2.51-2.51c-.595-.595-1.57-.595-2.165 0z"/>
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                  aria-label="인스타그램 프로필"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a
                  href="mailto:fjkg33@gmail.com"
                  className="p-2 rounded-lg hover:bg-[var(--color-surface-hover)] transition-colors"
                  aria-label="Email"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-[var(--color-primary)]/20 to-[var(--color-accent)]/20 flex items-center justify-center">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-border)] flex items-center justify-center">
                  <Logo className="w-24 h-24 md:w-32 md:h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {achievements.map((item, index) => (
              <div
                key={index}
                className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6 text-center"
              >
                <item.icon size={24} className="mx-auto mb-3 text-[var(--color-primary)]" />
                <div className="text-2xl md:text-3xl font-bold text-[var(--color-foreground)] mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-[var(--color-muted-foreground)]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section-alt)] py-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            창업 스토리
          </h2>
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl md:text-2xl font-semibold text-[var(--color-foreground)] leading-relaxed mb-6">
              기억 속 작은 아쉬움에서 시작된 펫 헬스케어의 내일
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">[1] 보호자로서의 뼈저린 경험</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  &quot;강아지는 아프다는 말을 하지 못하니까요.&quot; 어릴 적 강아지를 키우며 겪었던 건강 관리의 막막함은 제 마음속에 늘 깊은 아쉬움으로 남아있었습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">[2] 해결책을 찾기 위한 첫걸음</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  그 아쉬움을 직접 풀고자 개발을 공부하기 시작했고, 제가 만든 첫 포트폴리오의 주제는 자연스럽게 &apos;반려동물 헬스케어&apos;를 향했습니다. 복잡한 데이터를 누구나 이해하기 쉬운 UI로 다듬는 데 집중했습니다.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--color-foreground)] mb-2">[3] 1인 가구 시대, 세상에 나온 &apos;펫헬스&apos;</h3>
                <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                  1인 가구가 급증하며 과거의 저와 같은 고민을 홀로 짊어진 보호자들이 많아졌다는 것을 알게 되었습니다. 포트폴리오 속 아이디어는 이제 &apos;펫헬스&apos;라는 정식 서비스가 되어, 세상의 수많은 반려 가족들의 흔들림 없는 일상을 지켜내고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            핵심 가치
          </h2>
          <div className="space-y-12">
            {coreValues.map((group, groupIndex) => (
              <div key={groupIndex}>
                <div className="mb-6">
                  <span className="inline-block px-4 py-1.5 text-lg font-bold bg-[var(--color-primary)] text-white rounded-full mb-2">
                    {group.category}
                  </span>
                  <p className="text-lg text-[var(--color-muted-foreground)]">
                    {group.subtitle}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  {group.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg p-6"
                    >
                      <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                      <p className="text-sm text-[var(--color-muted-foreground)] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-section-alt)] py-16 px-4 md:px-6">
        <div className="max-w-[1024px] mx-auto w-full">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            경력의 길이보다 중요한 것, 코어넥스트를 움직이는 3가지 무기
          </h2>
          <p className="text-lg text-[var(--color-muted-foreground)] mb-8">
            시간의 축적보다 밀도 있는 실행력으로, 펫 헬스케어의 진짜 문제를 해결해 나갑니다.
          </p>

          <div className="space-y-6">
            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <Sparkles size={24} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">1. 데이터를 번역하는 '디자이너의 직관'</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                    1년간 웹 디자이너로 일하며 쌓은 감각은 '펫헬스'의 가장 강력한 무기입니다. 아무리 정교한 AI 사료 분석과 체중 데이터라도 보호자가 한눈에 이해할 수 없다면 무용지물입니다. 저는 복잡하고 파편화된 건강 지표들을 누구나 직관적으로 파악할 수 있도록, 가장 쉽고 우아한 사용자 경험(UX)으로 설계합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <Zap size={24} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">2. 아이디어를 현실로 만드는 '개발자의 기민함'</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                    상상을 현실로 만들기 위해 직접 코드를 잡았습니다. 외주에 의존하거나 복잡한 의사결정 단계를 거치지 않기에 그 누구보다 빠릅니다. 보호자님들이 느끼는 불편함과 소중한 피드백을 가장 기민하게 캐치하여 즉각 서비스로 구현해 냅니다. 문제를 발견하면 곧바로 해결책을 화면에 띄우는 1인 개발사만의 압도적인 속도를 증명합니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <HeartHandshake size={24} className="text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">3. 기술의 방향을 잡는 '보호자의 공감'</h3>
                  <p className="text-[var(--color-muted-foreground)] leading-relaxed">
                    코드를 짜기 전에 먼저 보호자의 마음에 공감합니다. 어릴 적 반려견의 건강을 챙기며 느꼈던 막막함, 그리고 1인 가구 보호자로서 홀로 감당해야 하는 책임의 무게를 누구보다 깊이 이해하고 있습니다. 기술을 위한 기술이 아닌, '우리 아이의 건강한 일상'이라는 단 하나의 뚜렷한 목적을 향해 서비스를 깎아나갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}