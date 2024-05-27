import HeroSection from '@/pages/about-page/hero-section';
import OpenPosition from '@/pages/about-page/open-position';
import OurMission from '@/pages/about-page/our-mission';
import OurStaff from '@/pages/about-page/our-staff';
import Vision from '@/pages/about-page/vision';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - About Us',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

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
    <OurStaff />
    <OpenPosition />
  </main>
);

export default AboutPage;
