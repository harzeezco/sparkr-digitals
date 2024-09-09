import BrandStories from '@/pages/home-page/brand-stories';
import Outline from '@/pages/home-page/outline';
import SuccessfulBrands from '@/pages/home-page/successful-brands';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Home',
  description:
    'Sparkr digitals is a UI/UX agency based in Lagos. We specialize in UI/UX design, branding, web, mobile development',
};

export default function Home() {
  return (
    <main className=''>
      {/* <div className='absolute right-0 top-0 z-[-1]'>
        <Image
          alt='stroke'
          height={440}
          src='/images/stroke.webp'
          width={640}ss
        />
      </div> */}
      {/* <Hero />
      <CaseStudy />
      <ClientStories /> */}
      <BrandStories />
      <SuccessfulBrands />
      <Outline paragraph='We combine strategy, creativity, and technology to exceed your expectations at every step. Our polite, detail-oriented, and creative team works tirelessly to capture your vision and elevate your brand’s online presence.' />
    </main>
  );
}
