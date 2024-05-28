import FAQ from '@/pages/pricing-page/faq';
import OurMission from '@/pages/pricing-page/our-mission';
import PriceSection from '@/pages/pricing-page/price-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Pricing',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

export default function Pricing() {
  return (
    <main className='mt-28'>
      <PriceSection />
      <OurMission />
      <FAQ />
    </main>
  );
}
