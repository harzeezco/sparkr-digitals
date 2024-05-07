import HeroSection from '@/pages/home-page/hero-section';
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
      <HeroSection />
    </main>
  );
}
