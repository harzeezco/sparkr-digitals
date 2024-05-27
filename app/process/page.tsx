import HeroSection from '@/pages/process-page/hero-section';
import Roadmap from '@/pages/process-page/roadmap-section';
import ClientStories from '@/pages/process-page/stories';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Process',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

const ServicePage = () => (
  <main>
    <HeroSection />
    <Roadmap />
    <ClientStories />
  </main>
);

export default ServicePage;
