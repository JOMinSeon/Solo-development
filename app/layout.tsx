import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://petcare.pe.kr'),
  title: "코어넥스트 조민성 | 개발자 & 창업자",
  description: "AI 시대에 개발자들이 진정으로 중요한 것에 집중할 수 있도록 돕는 도구를 만드는 개발자이자 창업자입니다. 반려동물 건강 관리 솔루션 PetCare를 운영합니다.",
  keywords: ["개발자", "창업자", "AI", "PetCare", "반려동물", "펫헬스"],
  authors: [{ name: "조민성" }],
  openGraph: {
    title: "코어넥스트 조민성 | 개발자 & 창업자",
    description: "AI 시대에 개발자들이 진정으로 중요한 것에 집중할 수 있도록 돕는 도구를 만드는 개발자이자 창업자입니다.",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "코어넥스트",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "코어넥스트 조민성 | 개발자 & 창업자",
    description: "AI 시대에 개발자들이 진정으로 중요한 것에 집중할 수 있도록 돕는 도구를 만드는 개발자이자 창업자입니다.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col">
        <Navigation />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
