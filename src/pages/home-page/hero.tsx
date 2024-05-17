import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const HeroSection = () => (
  <section className='container mt-32'>
    <div className='mx-auto max-w-4xl space-y-4'>
      <h1
        className={cn(
          'text-center text-4xl font-light md:text-5xl lg:text-6xl',
          bricolage.className,
        )}
      >
        Be the Brand that{' '}
        <span className='text-primary'>Customers</span>{' '}
        <span className='text-primary'>want</span> and{' '}
        <span className='text-primary'>Competitors Envy.</span>
      </h1>
      <p className='mx-auto max-w-2xl text-center text-lg lg:text-xl'>
        With best-in-class design and engineering, our work maximizes
        value by putting your customers at the center of everything we
        do.
      </p>
    </div>

    <div className='mx-auto mt-12 flex max-w-5xl'>
      <Image
        alt='sample'
        className='-mr-20 h-[530px] flex-1'
        height={420}
        src='/images/sample.webp'
        width={340}
      />
      <div className='-ml-24 flex-1'>
        <Button className='float-end mb-3 bg-primary !py-4 px-24 transition-all hover:bg-green-600 active:bg-green-600'>
          <AnimatedLink
            className='font-bricolage text-xl font-light'
            title='Discover Our Work'
          />
        </Button>
        <div>
          <Image
            alt='sample'
            className='w-full'
            height={720}
            src='/images/dots.webp'
            width={340}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
