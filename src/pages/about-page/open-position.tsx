import AnimatedLink from '@/components/animated-text';
import SlideInAnimation from '@/components/slide-in-animation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const OpenPosition = () => (
  <section className='container mt-24 flex flex-col gap-y-24'>
    <div className='grid grid-cols-1 place-items-center gap-x-20 gap-y-10 md:grid-cols-2'>
      <div className='flex flex-col gap-y-5'>
        <SlideInAnimation
          as='h1'
          className={cn(
            'text-green-600 text-3xl font-light sm:text-4xl lg:text-5xl',
            bricolage.className,
          )}
        >
          Join Sparkr studio for impactful change.
        </SlideInAnimation>

        <SlideInAnimation as='p' className='mt-2 max-w-2xl'>
          Sparkr stands tall among top branding agencies, fostering a
          culture that places people at its core. Our actions are
          grounded in core values, driven by the aspiration to create
          positive change daily.
        </SlideInAnimation>

        <SlideInAnimation as={Link} href='/contact'>
          <Button variant='default'>
            <AnimatedLink
              className='h-11 w-60 items-center justify-center rounded-[8px] bg-primary font-medium text-white transition-all hover:bg-green-600 active:bg-green-600'
              title='See all open positions'
              type='button'
            />
          </Button>
        </SlideInAnimation>
      </div>

      <SlideInAnimation as='div'>
        <Image
          alt='open position'
          className='max-h-[550px] rounded-[12px] object-cover'
          height={450}
          src='/images/open-position2.webp'
          width={440}
        />
      </SlideInAnimation>
    </div>

    <div className='grid grid-cols-1 place-items-center gap-x-20 gap-y-10 md:grid-cols-2'>
      <SlideInAnimation as='div'>
        <Image
          alt='open position'
          className='max-h-[550px] rounded-[12px] object-cover max-md:order-2'
          height={450}
          src='/images/open-position1.webp'
          width={440}
        />
      </SlideInAnimation>

      <div className='flex flex-col gap-y-5 max-md:order-1'>
        <SlideInAnimation
          as='h1'
          className={cn(
            'text-green-600 text-3xl font-light sm:text-4xl lg:text-5xl',
            bricolage.className,
          )}
        >
          Elevate success with Sparkr studio
        </SlideInAnimation>

        <SlideInAnimation as='p' className='mt-2 max-w-2xl'>
          Our collaborative team embraces challenges and listens
          intently to our clients, forming meaningful connections with
          their audiences. With unwavering dedication to excellence,
          we infuse exceptional craftsmanship into every project.
        </SlideInAnimation>

        <SlideInAnimation as={Link} href='/contact'>
          <Button variant='default'>
            <AnimatedLink
              className='h-11 w-60 items-center justify-center rounded-[8px] bg-primary font-medium text-white transition-all hover:bg-green-600 active:bg-green-600'
              title='See all open positions'
              type='button'
            />
          </Button>
        </SlideInAnimation>
      </div>
    </div>
  </section>
);

export default OpenPosition;
