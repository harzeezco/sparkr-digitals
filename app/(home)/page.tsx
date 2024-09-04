import Hero from '@/pages/home-page/hero-v2';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Home',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
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
      {/* <CaseStudy /> */}
      {/* <ClientStories /> */}
      {/* <BrandStories /> */}
      {/* <SuccessfulBrands /> */}
    </main>
  );
}
