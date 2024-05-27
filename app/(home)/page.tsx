import ClientStories from '@/components/client-stories';
import BrandStories from '@/pages/home-page/brand-stories';
import CaseStudy from '@/pages/home-page/case-study';
import Hero from '@/pages/home-page/hero';
import SuccessfulBrands from '@/pages/home-page/successful-brands';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Home',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

export default function Home() {
  return (
    <main className=''>
      <div className='absolute right-0 top-0 z-[-1]'>
        <Image
          alt='stroke'
          height={440}
          src='/images/stroke.webp'
          width={640}
        />
      </div>
      <Hero />
      <CaseStudy />
      <ClientStories />
      <BrandStories />
      <SuccessfulBrands />
    </main>
  );
}
