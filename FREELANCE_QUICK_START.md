# 외주 페이지 구현 - 빠른 시작 가이드 (Quick Start)

**대상**: 개발자
**소요 시간**: 3~3.5주 (콘텐츠 작성 + 개발 + 배포)
**난이도**: 중간 (기존 products 페이지를 참고하면 쉬움)

---

## Phase 1: 준비 (1~2일)

### 1.1 콘텐츠 최종 확인 및 수집
```
필요한 정보:
□ Calendly URL (상담 예약용)
□ 이메일 주소 (freelance@...@)
□ 전화번호 / 카톡 아이디
□ 포트폀리오 프로젝트 이미지 (3~4개)
□ 팀 사진 또는 프로필 이미지

기획서 참고:
- FREELANCE_PAGE_PLAN.md (섹션 구조)
- FREELANCE_DATA_STRUCTURE.md (데이터 구조)
```

### 1.2 기존 products 페이지 분석
```bash
# 기존 구조 확인
cat app/products/page.tsx

# 재사용 가능한 요소:
- Button 컴포넌트
- CSS 변수 (--color-primary, --color-surface 등)
- 레이아웃 구조 (max-w-[1024px], px-4 md:px-6)
- 탭 네비게이션 패턴 (FAQ 아코디언에 활용 가능)
```

---

## Phase 2: 폴더 및 파일 생성 (1일)

### 2.1 디렉토리 구조 생성
```bash
# 1. 데이터 파일
mkdir -p data
touch data/freelance.ts

# 2. 타입 정의
mkdir -p types
touch types/freelance.ts

# 3. 페이지 레이아웃
mkdir -p app/freelance
touch app/freelance/page.tsx

# 4. 섹션 컴포넌트
mkdir -p components/sections
touch components/sections/FLHero.tsx
touch components/sections/FLDifferentiators.tsx
touch components/sections/FLServices.tsx
touch components/sections/FLProcess.tsx
touch components/sections/FLPricing.tsx
touch components/sections/FLSuccessStories.tsx
touch components/sections/FLFAQ.tsx
touch components/sections/FLCTA.tsx

# 5. UI 컴포넌트 (기존 ui/ 디렉토리에 추가)
touch components/ui/DifferentiatorCard.tsx
touch components/ui/ServiceCard.tsx
touch components/ui/ProcessTimeline.tsx
touch components/ui/FAQAccordion.tsx
touch components/ui/CTACard.tsx
```

### 2.2 파일 복사
```bash
# FREELANCE_DATA_STRUCTURE.md의 내용을 복사하여 파일에 붙여넣기
# - data/freelance.ts
# - types/freelance.ts
```

---

## Phase 3: 컴포넌트 개발 (1주)

### 3.1 개발 순서 (의존성 고려)
1. **types/freelance.ts** - 모든 타입 정의 (다른 파일의 기초)
2. **data/freelance.ts** - 데이터 소스
3. **components/ui/** - 기본 UI 컴포넌트 (카드, 타임라인 등)
4. **components/sections/** - 각 섹션 컴포넌트
5. **app/freelance/page.tsx** - 메인 페이지

### 3.2 각 섹션별 개발 핵심 포인트

#### FLHero.tsx (가장 쉬움)
```typescript
// 기존 products/page.tsx의 Hero 섹션 참고
// 변경 사항:
// - heroData 가져오기
// - 텍스트만 동적으로 교체

소요 시간: 1시간
```

#### FLDifferentiators.tsx
```typescript
// 3개 카드 그리드
// 각 카드: 아이콘 + 제목 + 설명 + 포인트 리스트
// Lucide 아이콘 매핑: icon 문자열 → 실제 컴포넌트

소요 시간: 2시간
팁: 아이콘 매핑을 위해 icon 문자열 → 컴포넌트 변환 함수 작성
```

#### FLServices.tsx
```typescript
// 4개 서비스 카드 (서로 다른 색상 배경)
// 각 카드: 제목, 설명, 범위(리스트), 기간, 가격

소요 시간: 3시간
팁: color 필드 활용하여 각 카드 배경색 다르게 표현
```

#### FLProcess.tsx
```typescript
// 수직 타임라인 (5단계)
// 각 단계: 번호 + 제목 + 설명 + 기간 + 산출물 + 커뮤니케이션

소요 시간: 3시간
팁: CSS Flex/Grid로 타임라인 시각화
option: 반응형 - 모바일은 가로 스크롤 가능한 카드
```

#### FLPricing.tsx
```typescript
// 1. 프로젝트형 vs 시간제 비교표
// 2. 가격 예시 3단계 카드
// 3. 추가 서비스 리스트

소요 시간: 3시간
팁: 가격대 부분은 굵은 텍스트 또는 primary 색상으로 강조
```

#### FLSuccessStories.tsx
```typescript
// 3개 프로젝트 카드 또는 슬라이더
// 각 카드: 이미지 + 프로젝트명 + 설명 + 결과 + 기술 스택 + 링크

소요 시간: 2시간
팁: 이미지가 없으면 프로젝트명만 큼 텍스트로 표현
```

#### FLFAQ.tsx
```typescript
// 아코디언 형식 또는 탭 형식
// 카테고리(5개): timeline, cost, communication, technical, security
// 각 카테고리에 Q&A 나열

소요 시간: 3시간
팁: 기존 products의 탭 네비게이션 패턴 재활용
또는 아코디언 라이브러리 (radix-ui/accordion 등) 고려
```

#### FLCTA.tsx
```typescript
// 3개 채널 카드 (캘린더, 이메일, 전화)
// 각 카드: 아이콘 + 제목 + 설명 + 버튼

소요 시간: 1시간
```

---

## Phase 4: 통합 및 배포 (3~4일)

### 4.1 메인 페이지 (page.tsx)
```typescript
// app/freelance/page.tsx
// 모든 섹션을 순서대로 import하여 렌더링
// 메타데이터 설정

소요 시간: 1시간
```

### 4.2 네비게이션 업데이트
```typescript
// components/Navigation.tsx 수정
// 기존: "/products" → "상품" (PetCare)
// 새로: "/freelance" → "외주" 또는 "서비스"

// 변경 예시:
{
  href: '/freelance',
  label: '외주'
}
```

### 4.3 메타데이터 및 SEO
```typescript
// app/freelance/page.tsx의 metadata 설정
export const metadata: Metadata = {
  title: '웹 개발 외주 | 풀스택 개발자 조민성',
  description: '...',
  keywords: ['웹 개발', '외주', '프리랜서', ...],
  openGraph: { /* ... */ },
  twitter: { /* ... */ }
};
```

### 4.4 이전 /products 페이지 처리
```typescript
// Option 1: Redirect
// app/products/page.tsx
// redirect('/freelance');

// Option 2: Keep PetCare (별도 관리)
// app/products 유지
// 네비게이션에서 "/freelance"로 변경
```

### 4.5 테스트
```bash
# 로컬 개발 서버
npm run dev

# 확인 사항:
□ 모든 섹션이 올바르게 렌더링되는가?
□ 반응형 디자인 (모바일/태블릿/데스크탑)
□ 링크가 올바른 목표로 연결되는가? (Calendly, mailto:, etc.)
□ 모든 이미지가 로드되는가?
□ 아이콘이 올바르게 표시되는가?
□ 색상이 일관되는가?
```

### 4.6 배포
```bash
# 빌드
npm run build

# 배포 (Vercel, Netlify 등)
# git push → 자동 배포
```

---

## Phase 5: 모니터링 및 최적화 (1주)

### 5.1 분석 설정
```typescript
// Google Analytics 이벤트
// - CTA 클릭 추적
// - 섹션별 스크롤 추적
// - 링크 클릭 (Calendly, 이메일, 포트폴리오)
```

### 5.2 성능 최적화
```bash
# Lighthouse 스코어 확인
# - Performance
# - Accessibility
# - SEO

# 목표: 모두 90점 이상
```

### 5.3 첫 2주 모니터링
```
모니터링 항목:
□ 페이지 방문 수
□ 평균 체류 시간
□ CTA 클릭 수
□ 문의 접수 수 (이메일, Calendly)

데이터 기반 개선:
- 가장 많이 클릭되는 CTA 파악
- 가장 많이 본 섹션 확인
- 자주 받는 문의 → FAQ 추가
```

---

## 빠른 체크리스트

### 개발 시작 전
- [ ] FREELANCE_PAGE_PLAN.md 읽음
- [ ] FREELANCE_DATA_STRUCTURE.md 읽음
- [ ] Calendly 계정 생성 및 URL 확보
- [ ] 이메일 주소 정함
- [ ] 포트폴리오 프로젝트 3~4개 선정

### 개발 중
- [ ] types/freelance.ts 작성 완료
- [ ] data/freelance.ts 작성 완료
- [ ] UI 컴포넌트 5개 개발 완료
- [ ] 섹션 컴포넌트 8개 개발 완료
- [ ] page.tsx 통합 완료
- [ ] 반응형 디자인 확인
- [ ] 모든 링크 동작 확인

### 배포 전
- [ ] 메타데이터 확인
- [ ] SEO 키워드 최적화
- [ ] Lighthouse 점수 90+ 달성
- [ ] 모바일 테스트 완료
- [ ] 네비게이션 업데이트

### 배포 후
- [ ] Google Analytics 이벤트 추적 설정
- [ ] Calendly 예약 테스트
- [ ] 이메일 수신 테스트
- [ ] 첫 2주 모니터링 및 개선

---

## 자주 나오는 문제 (FAQ for Developers)

### Q: 아이콘이 표시되지 않습니다.
**A**: Lucide React 아이콘 이름 확인
```typescript
// 틀린 예:
icon: 'Zap'

// 맞는 예:
import { Zap } from 'lucide-react';
<Zap size={24} />

// 또는 icon 문자열을 컴포넌트로 변환:
const iconMap = {
  'Zap': Zap,
  'Users': Users,
  // ...
};
```

### Q: CSS 변수가 적용되지 않습니다.
**A**: globals.css 확인
```css
/* globals.css에 다음이 정의되어 있는지 확인 */
:root {
  --color-primary: ...;
  --color-surface: ...;
  --color-border: ...;
  /* ... */
}
```

### Q: 반응형 디자인이 깨집니다.
**A**: Tailwind 반응형 클래스 사용
```typescript
// 기본 구조
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 모바일: 1열, 태블릿: 2열, 데스크탑: 3열 */}
</div>
```

### Q: 페이지 로딩이 느립니다.
**A**: 이미지 최적화
```typescript
import Image from 'next/image';

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 50vw"
  priority={false} // hero 제외한 섹션
/>
```

### Q: Calendly 링크가 안 열립니다.
**A**: URL 형식 확인
```typescript
// 맞는 형식:
// https://calendly.com/username
// https://calendly.com/username/15min

// page에서:
actionHref: 'https://calendly.com/your-username'
```

---

## 추천 개발 일정

```
Week 1:
  Day 1-2: 타입 및 데이터 작성
  Day 3-4: UI 컴포넌트 개발
  Day 5: 섹션 컴포넌트 1~3개 (Hero, Differentiators, Services)

Week 2:
  Day 1-3: 섹션 컴포넌트 4~8개 (Process, Pricing, Stories, FAQ, CTA)
  Day 4-5: 통합 및 테스트

Week 3:
  Day 1-2: 반응형 디자인 최적화
  Day 3: 메타데이터 및 SEO
  Day 4-5: 배포 및 모니터링
```

---

## 도움이 되는 리소스

### 기술 문서
- [Next.js 공식 문서](https://nextjs.org)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [Lucide React 아이콘](https://lucide.dev)
- [TypeScript 핸드북](https://www.typescriptlang.org/docs)

### 참고할 기존 파일
- `app/products/page.tsx` - Hero, 탭, 카드 패턴
- `components/ui/Button.tsx` - 버튼 컴포넌트 재사용
- `globals.css` - 색상 시스템

### 성능 도구
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [Next.js Analytics](https://vercel.com/analytics)
- [Web.dev Measure](https://web.dev/measure)

---

## 문의 및 피드백

개발 중 질문이 생기면:
1. FREELANCE_PAGE_PLAN.md의 해당 섹션 재확인
2. FREELANCE_DATA_STRUCTURE.md의 예제 코드 참고
3. 기존 products/page.tsx와 비교 검토

---

**이 가이드를 따르면 3~3.5주 내에 완벽한 외주 페이지를 구현할 수 있습니다!**

Good luck! 🚀
