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
        A process with{' '}
        <span className='text-primary'>you in mind</span>
      </h1>

      <p className='mx-auto max-w-2xl text-center text-lg lg:text-xl'>
        People choose to partner with us because of our proven
        processes, industry expertise, and intangible lessons learned
        through half a decade of successful B2B brand and product
        development.
      </p>
    </div>

    <div className='mt-16'>
      <Image
        alt='meeting'
        className='mx-auto max-h-[500px] rounded-[12px] object-cover'
        height={500}
        src='/images/process-hero.webp'
        width={1000}
      />
    </div>
  </section>
);

export default HeroSection;
