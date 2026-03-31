# Next.js Font Preload Warning 해결 기록

## 문제

### 에러 메시지
```
The resource https://taxai-web.kr/_next/static/media/93f479601ee12b01-s.p.woff2 was preloaded using link preload but not used within a few seconds from the window's load event.
```

### 원인

`next/font/google`로 import한 폰트는 자동으로 `<head>`에 `<link rel="preload">`가 추가된다.

**preload된 폰트가 실제 CSS에서 사용되지 않으면 브라우저가 폰트를 다운로드만 하고 렌더링에 사용하지 않아 경고가 발생한다.**

---

## 발생 상황

### 1차: DesignCard.tsx (삭제된 파일)

```typescript
// components/DesignCard.tsx (사용되지 않던 컴포넌트)
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});
```

- `DesignCard` 컴포넌트가 어디에도 import되지 않음
- `Noto_Sans_KR` 폰트만 preload됨
- **해결:** 파일 삭제

### 2차: Geist_Mono (layout.tsx)

```typescript
// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
```

- `geistMono` 변수가 생성되었지만 아무 데에도 사용되지 않음
- `--font-geist-mono` CSS 변수가 어디에도 적용되지 않음
- **해결:** `Geist_Mono` import 제거

### 3차: Geist (근본 원인)

```typescript
// app/layout.tsx - 변수 생성
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

```css
/* app/globals.css - 실제 폰트 지정 */
--font-sans: 'Geist', 'Pretendard', -apple-system, ...;
```

- `--font-geist-sans` CSS 변수는 생성되었지만, `font-family`에 적용되지 않음
- `globals.css`에서 `'Geist'` 문자열을 직접 사용
- preload된 폰트와 실제 적용 폰트가 다름
- **해결:** CSS 변수 사용으로 변경

---

## 최종 수정

### app/layout.tsx

```typescript
import { Geist } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className={`${geistSans.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
```

### app/globals.css

```css
:root {
  --font-sans: var(--font-geist-sans), 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
}
```

---

## 핵심 원리

### next/font/google 동작 방식

1. `import { FontName } from 'next/font/google'` → 폰트 파일 다운로드
2. `FontName({ variable: "--font-css-var" })` → CSS 변수 생성 + `<link rel="preload">` 자동 추가
3. **`${fontName.variable}`** → HTML 요소에 CSS 변수 적용
4. **CSS에서 `var(--font-css-var)`** → 실제 `font-family`에 적용

### preload 경고가 발생하는 경우

| 상태 | preload | 실제 사용 | 경고 |
|------|---------|----------|------|
| 폰트만 import, 미사용 | ✅ | ❌ | ✅ 발생 |
| CSS 변수 생성, 미적용 | ✅ | ❌ | ✅ 발생 |
| CSS 변수 생성, 정상 적용 | ✅ | ✅ | ❌ 없음 |

---

## 규칙

**`next/font/google` 사용 시 반드시 지켜야 할 것:**

1. `variable`로 생성한 CSS 변수는 **무조건** CSS에서 `var()`로 사용해야 함
2. `next/font` 폰트를 import했으면 **어디에선가 반드시 사용**해야 함
3. 사용하지 않는 폰트는 import하지 말 것
4. `variable`을 생성했으면 해당 CSS 변수를 HTML에 적용(className)하고, CSS에서 var()로 참조할 것

### 올바른 예

```typescript
// layout.tsx
const pretendard = Pretendard({
  variable: "--font-pretendard",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

return <html className={pretendard.variable}>...</html>
```

```css
/* globals.css */
body {
  font-family: var(--font-pretendard), sans-serif;
}
```

### 잘못된 예

```typescript
// import만 하고 사용 안 함 - 경고 발생!
const someFont = SomeFont({ variable: "--font-x" });
```

```css
/* CSS 변수를 사용하지 않고 문자열로 직접 지정 - 경고 발생! */
body {
  font-family: 'Some Font', sans-serif; /* next/font와 무관 */
}
```
