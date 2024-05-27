import type { Metadata } from 'next';

import Header from './header';
import Projects from './works';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Works',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

const HeroSection = () => (
  <section className='mt-32'>
    <div className='container'>
      <Header />

      <Projects />
    </div>
  </section>
);

export default HeroSection;
