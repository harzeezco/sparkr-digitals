import ClientStories from '@/components/client-stories';
import BrandStories from '@/pages/home-page/brand-stories';
import CaseStudy from '@/pages/home-page/case-study';
import Hero from '@/pages/home-page/hero';
import SuccessfulBrands from '@/pages/home-page/successful-brands';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <Image
        alt='stroke'
        className='absolute right-0 top-0 z-[-1]'
        height={440}
        src='/images/stroke.webp'
        width={640}
      />
      <Hero />
      <CaseStudy />
      <ClientStories />
      <BrandStories />
      <SuccessfulBrands />
    </main>
  );
}
