import { cn } from '@/lib/cn';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const HeroSection = () => (
  <section className='mt-32'>
    <div className='container space-y-4'>
      <h1
        className={cn(
          'text-center text-4xl mx-auto max-w-3xl font-light md:text-4xl lg:text-6xl',
          bricolage.className,
        )}
      >
        Pioneering your <span className='text-primary'>sucess</span>{' '}
        through <span className='text-primary'>creativity</span>{' '}
      </h1>

      <p className='mx-auto max-w-2xl text-center text-lg lg:text-xl'>
        At Sparkr studio, we&apos;re trailblazers in providing
        creative solutions that deeply connect with your target
        audience, resulting in impactful, measurable success.
      </p>
    </div>

    <div className='mt-16'>
      <Image
        alt='meeting'
        className='mx-auto max-h-[500px] object-cover'
        height={500}
        src='/images/service-hero.webp'
        width={1100}
      />
    </div>
  </section>
);

export default HeroSection;
