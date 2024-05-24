import AnimatedLink from '@/components/animated-text';
import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const BrandStories = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <SlideInAnimation
      as='h1'
      className={cn(
        'mx-auto max-w-2xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      At Sparkr Digitals, We{' '}
      <span className='text-green-500'>Craft Stories</span> and{' '}
      <span className='text-green-500'>Elevate Brands</span>
    </SlideInAnimation>

    <SlideInAnimation
      as='p'
      className='mx-auto mt-2 max-w-2xl text-center'
    >
      We are storytellers, weaving narratives that resonate. Our
      mission is to bring your ideas to life and make them shine in
      the digital landscape. With a blend of creativity, strategy, and
      technical expertise, we are committed to exceeding your
      expectations.
    </SlideInAnimation>

    <SlideInAnimation
      as={Link}
      className='mt-6 font-medium'
      href='/case-study'
    >
      <AnimatedLink
        className='transition duration-200 hover:text-green-500'
        title='See More Case Studies'
      />
      <hr className='border border-[#121718]/70' />
    </SlideInAnimation>

    <div className='mt-16 grid grid-cols-[1.3fr_0.7fr] gap-4'>
      <Image
        alt='brand'
        className='max-h-[550px] w-full'
        height={500}
        src='/images/brand1.webp'
        width={650}
      />
      <Image
        alt='brand'
        className='max-h-[550px] w-full'
        height={300}
        src='/images/brand2.webp'
        width={450}
      />
    </div>
  </section>
);

export default BrandStories;
