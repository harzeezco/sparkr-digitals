import HeroSection from '@/pages/career-page/hero-section';
import JobSection from '@/pages/career-page/job';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Career',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

const CareerPage = () => (
  <main>
    <HeroSection />
    <JobSection />
  </main>
);

export default CareerPage;
