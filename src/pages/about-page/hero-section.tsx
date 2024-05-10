import { cn } from '@/lib/cn';

import { bricolage } from '../../../app/font';
import { InfiniteMovingCardsDemo } from './sliding-images';

const HeroSection = () => (
  <section className='mt-32'>
    <div className='container space-y-4'>
      <h1
        className={cn(
          'text-center text-4xl mx-auto max-w-2xl font-light md:text-4xl lg:text-6xl',
          bricolage.className,
        )}
      >
        Sparkr isn&apos;t merely a{' '}
        <span className='text-primary'>group for creativity</span>{' '}
      </h1>

      <p className='mx-auto max-w-2xl text-center text-lg lg:text-xl'>
        Sparkr Digitals, a renowned agency known for its expertise in
        digital and AI enhancements, supports B2B companies in
        captivating their client base and maintaining an unparalleled
        leadership stance within their particular fields.
      </p>
    </div>

    <div className='mx-auto mt-12 flex max-w-6xl'>
      <InfiniteMovingCardsDemo />
    </div>
  </section>
);

export default HeroSection;
