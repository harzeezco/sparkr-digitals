
import Hero from '@/pages/home-page/hero-v2';
import LogoSection from '@/pages/home-page/logosection';
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
    <main className='relative bg-white'>
      <div className='absolute  inset-0  z-50 h-screen w-screen  '>
        <Image
          alt='grid'
          className=' w-full object-cover'
          height={36}
          src='/images/grid.png'
          width={118}
        />
      </div>

      <Hero />
      <LogoSection />
      <BrandStories />
      <SuccessfulBrands />
      <Outline paragraph='We combine strategy, creativity, and technology to exceed your expectations at every step. Our polite, detail-oriented, and creative team works tirelessly to capture your vision and elevate your brand’s online presence.' />
    </main>
  );
}
