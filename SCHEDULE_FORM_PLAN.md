# 일정예약 폼 페이지 구현 플랜

## 개요

외주 페이지(`/freelance`)의 FLCTA 섹션 및 Hero 섹션에서 **"일정예약"** 버튼 클릭 시
`/schedule` 페이지로 이동, 상담 예약 전용 폼을 제공한다.

---

## 현재 상태 분석

| 항목 | 현재 상태 |
|------|-----------|
| 외주 페이지 | `/app/freelance/page.tsx` — 8개 섹션 완성 |
| FLCTA 버튼 | `ctaChannels` 데이터의 `actionHref`로 링크 (Calendar 아이콘 채널) |
| Hero CTA | `heroData.ctaPrimary.href`로 링크 |
| 기존 contact API | `/api/contact/route.ts` — 이름/이메일/메시지 처리 |
| 기존 ContactForm | 일반 문의용, 외주 상담에 특화되지 않음 |

---

## 구현 목표

- 외주 상담에 특화된 폼 필드 (프로젝트 유형, 예산, 희망 일정 등)
- 기존 `/contact`와 별도 분리 — UX 목적이 다름
- 서버 액션 또는 API Route로 폼 데이터 처리
- 제출 후 감사 메시지(성공 상태) 표시

---

## 생성/수정 파일 목록

### 신규 생성

```
app/schedule/
  page.tsx                          # 일정예약 페이지 라우트

app/api/schedule/
  route.ts                          # 상담 예약 API Route (POST)

components/schedule/
  ScheduleForm.tsx                  # 폼 컴포넌트 (Client Component)
  ScheduleFormField.tsx             # 재사용 폼 필드 래퍼 (선택)
  ScheduleSuccess.tsx               # 제출 완료 화면

types/
  schedule.ts                       # 폼 데이터 TypeScript 타입
```

### 수정

```
data/freelance.ts                   # ctaChannels[0].actionHref → '/schedule'
                                    # heroData.ctaPrimary.href → '/schedule'
```

---

## 폼 필드 설계

### 필수 항목

| 필드명 | 타입 | 설명 |
|--------|------|------|
| `name` | text | 이름 |
| `email` | email | 이메일 주소 |
| `projectType` | select | 프로젝트 유형 |
| `budget` | select | 예산 범위 |
| `message` | textarea | 프로젝트 설명 |

### 선택 항목

| 필드명 | 타입 | 설명 |
|--------|------|------|
| `phone` | tel | 연락처 |
| `preferredDate` | date | 희망 상담 날짜 |
| `consultMethod` | radio | 상담 방법 (화상/전화/카카오) |
| `timeline` | select | 희망 시작 시기 |

### 선택지 상수

```ts
// projectType
['랜딩페이지 / 소규모', '웹 서비스 / 중규모', '스타트업 MVP / 대규모', '기타']

// budget
['₩150만 ~ ₩250만', '₩300만 ~ ₩800만', '₩1,000만+', '미정']

// timeline
['즉시 시작', '1개월 이내', '3개월 이내', '미정']

// consultMethod
['화상 미팅 (Google Meet)', '전화 통화', '카카오톡']
```

---

## 데이터 흐름

```
사용자 폼 입력
    ↓
ScheduleForm (Client Component) — react useState로 폼 상태 관리
    ↓
POST /api/schedule  (fetch)
    ↓
route.ts — 유효성 검사 → console.log (추후 이메일 발송 연동 가능)
    ↓
{ success: true } 반환
    ↓
ScheduleSuccess 컴포넌트 렌더링 (폼 대체)
```

---

## 페이지 레이아웃 (`/schedule`)

```
┌─────────────────────────────────────────┐
│  ← 외주 페이지로 돌아가기 링크           │
│                                         │
│  h1: 상담 예약                          │
│  p:  무료 상담으로 프로젝트를 시작하세요  │
│                                         │
│  ┌──────────────┬──────────────────┐    │
│  │ ScheduleForm │ 사이드 안내 패널  │    │
│  │              │ - 소요 시간 안내  │    │
│  │  이름        │ - 상담 후 프로세스│    │
│  │  이메일      │ - 연락 정보       │    │
│  │  연락처      │                   │    │
│  │  프로젝트 유형│                  │    │
│  │  예산        │                   │    │
│  │  희망 시작   │                   │    │
│  │  상담 방법   │                   │    │
│  │  프로젝트 설명│                  │    │
│  │              │                   │    │
│  │  [예약 신청] │                   │    │
│  └──────────────┴──────────────────┘    │
└─────────────────────────────────────────┘
```

---

## 타입 정의 (`types/schedule.ts`)

```ts
export interface ScheduleFormData {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  consultMethod: string;
  preferredDate?: string;
  message: string;
}

export interface ScheduleApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}
```

---

## API Route (`app/api/schedule/route.ts`)

- 필수 필드: `name`, `email`, `projectType`, `budget`, `message`
- 이메일 형식 검증
- 성공 시 `console.log`로 데이터 출력 (추후 SendGrid / Nodemailer 연동 포인트)
- 응답: `{ success: true }` or `{ error: string }`

---

## 수정 사항 (`data/freelance.ts`)

```ts
// ctaChannels — Calendar 채널의 actionHref
{ actionHref: '/schedule' }

// heroData.ctaPrimary
{ href: '/schedule' }
```

---

## 구현 순서 (Phase)

### Phase 1 — 타입 & 데이터 링크 수정
1. `types/schedule.ts` 생성
2. `data/freelance.ts` href 수정 (`'/schedule'`)

### Phase 2 — API Route
3. `app/api/schedule/route.ts` 생성

### Phase 3 — 폼 컴포넌트
4. `components/schedule/ScheduleForm.tsx` 생성
5. `components/schedule/ScheduleSuccess.tsx` 생성

### Phase 4 — 페이지 라우트
6. `app/schedule/page.tsx` 생성

---

## 향후 확장 포인트

- **이메일 알림**: route.ts에서 SendGrid / Resend로 실제 메일 발송
- **캘린더 연동**: 희망 상담 날짜 필드에 react-datepicker 또는 Calendly 임베드
- **폼 유효성**: react-hook-form + zod 도입 (현재는 기본 useState)
- **스팸 방지**: reCAPTCHA 추가
