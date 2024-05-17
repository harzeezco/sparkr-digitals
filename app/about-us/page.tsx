import HeroSection from '@/pages/about-page/hero-section';
import OpenPosition from '@/pages/about-page/open-position';
import OurMission from '@/pages/about-page/our-mission';
import Vision from '@/pages/about-page/vision';
import Image from 'next/image';

const AboutPage = () => (
  <main>
    <HeroSection />
    <Vision />
    <OurMission />
    <div className='mt-24'>
      <Image
        alt='meeting'
        className='mx-auto max-h-[500px] object-cover'
        height={500}
        src='/images/meeting.webp'
        width={1100}
      />
    </div>
    <OpenPosition />
  </main>
);

export default AboutPage;
