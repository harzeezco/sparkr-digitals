import ClientStories from '@/components/client-stories';
import HeroSection from '@/pages/service-page/hero-section';
import ServiceSection from '@/pages/service-page/service-section';
import Works from '@/pages/service-page/works';

const ServicePage = () => (
  <main>
    <HeroSection />
    <ServiceSection />
    <ClientStories />
    <Works />
  </main>
);

export default ServicePage;
