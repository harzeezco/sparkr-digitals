import ClientStories from '@/components/client-stories';
import HeroSection from '@/pages/service-page/hero-section';
import ServiceSection from '@/pages/service-page/service-section';
import Works from '@/pages/service-page/works';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Services',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

const ServicePage = () => (
  <main>
    <HeroSection />
    <ServiceSection />
    <ClientStories />
    <Works />
  </main>
);

export default ServicePage;
