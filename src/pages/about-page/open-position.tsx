import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const OpenPosition = () => (
  <section className='container mt-24 flex flex-col gap-y-24'>
    <div className='grid grid-cols-1 place-items-center gap-x-20 gap-y-10 md:grid-cols-2'>
      <div className='flex flex-col gap-y-5'>
        <h1
          className={cn(
            'text-green-600 text-3xl font-light sm:text-4xl lg:text-5xl',
            bricolage.className,
          )}
        >
          Join Sparkr studio for impactful change.
        </h1>

        <p className='mt-2 max-w-2xl'>
          Sparkr stands tall among top branding agencies, fostering a
          culture that places people at its core. Our actions are
          grounded in core values, driven by the aspiration to create
          positive change daily.
        </p>

        <Link href='/contact'>
          <Button
            className='bg-primary px-8 transition-all hover:bg-green-600 active:bg-green-600'
            size='lg'
          >
            <AnimatedLink
              className=''
              title='See all open positions'
            />
          </Button>
        </Link>
      </div>

      <Image
        alt='open position'
        className='max-h-[550px] rounded-[12px] object-cover'
        height={450}
        src='/images/open-position2.webp'
        width={440}
      />
    </div>

    <div className='grid grid-cols-1 place-items-center gap-x-20 gap-y-10 md:grid-cols-2'>
      <Image
        alt='open position'
        className='max-h-[550px] rounded-[12px] object-cover max-md:order-2'
        height={450}
        src='/images/open-position1.webp'
        width={440}
      />

      <div className='flex flex-col gap-y-5 max-md:order-1'>
        <h1
          className={cn(
            'text-green-600 text-3xl font-light sm:text-4xl lg:text-5xl',
            bricolage.className,
          )}
        >
          Elevate success with Sparkr studio
        </h1>

        <p className='mt-2 max-w-2xl'>
          Our collaborative team embraces challenges and listens
          intently to our clients, forming meaningful connections with
          their audiences. With unwavering dedication to excellence,
          we infuse exceptional craftsmanship into every project.
        </p>

        <Link href='/contact'>
          <Button
            className='bg-primary px-8 transition-all hover:bg-green-600 active:bg-green-600'
            size='lg'
          >
            <AnimatedLink
              className=''
              title='See all open positions'
            />
          </Button>
        </Link>
      </div>
    </div>
  </section>
);

export default OpenPosition;
