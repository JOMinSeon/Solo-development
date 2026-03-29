import Hero from '@/components/sections/Hero';
import WhyWorkWithMe from '@/components/sections/WhyWorkWithMe';
import FeaturedSection from '@/components/sections/FeaturedSection';
import SkillsSection from '@/components/sections/SkillsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyWorkWithMe />
      <FeaturedSection />
      <SkillsSection />
      <CTASection />
    </>
  );
}
