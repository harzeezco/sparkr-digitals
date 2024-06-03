import AnimatedLink from '@/components/animated-text';
import { InfiniteMovingCardsDemo } from '@/components/sliding-images';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const HeroSection = () => (
  <section className='mt-32'>
    <div className='container flex flex-col items-center justify-center space-y-4'>
      <h1
        className={cn(
          'text-center text-4xl mb-10 mx-auto max-w-3xl font-light md:text-4xl lg:text-6xl',
          bricolage.className,
        )}
      >
        Build the future of creative with Sparkr
      </h1>

      <Link href='#list'>
        <Button variant='default'>
          <AnimatedLink
            className='h-11 w-72 items-center justify-center rounded-[8px] bg-primary font-medium text-white transition-all hover:bg-green-600 active:bg-green-600'
            title='Discover Our Work'
            type='button'
          />
        </Button>
      </Link>
    </div>

    <div className='mx-auto mt-12 flex max-w-6xl'>
      <InfiniteMovingCardsDemo />
    </div>
  </section>
);

export default HeroSection;
