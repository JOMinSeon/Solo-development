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