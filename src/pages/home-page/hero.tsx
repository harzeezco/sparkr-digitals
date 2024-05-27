'use client';

import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const HeroSection = () => (
  <section className='container mt-36'>
    <div className='mx-auto flex max-w-4xl flex-col items-center justify-center space-y-4'>
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'text-center text-4xl font-light md:text-5xl lg:text-6xl',
          bricolage.className,
        )}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Be the Brand that{' '}
        <span className='text-primary'>Customers</span>{' '}
        <span className='text-primary'>want</span> and{' '}
        <span className='text-primary'>Competitors Envy.</span>
      </motion.h1>
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className='mx-auto max-w-2xl text-center text-lg lg:text-xl'
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        With best-in-class design and engineering, our work maximizes
        value by putting your customers at the center of everything we
        do.
      </motion.p>

      <Button className='mb-3 bg-primary px-20 py-4 transition-all hover:bg-green-600 active:bg-green-600 lg:hidden'>
        <AnimatedLink
          className='font-bricolage text-xl font-light'
          title='Drop us an email'
        />
      </Button>
    </div>

    <div className='mt-16 lg:hidden'>
      <Image
        alt='hero small'
        height={500}
        src='/images/hero.webp'
        width={750}
      />
    </div>

    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='mx-auto mt-12 flex max-w-5xl max-lg:hidden'
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
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
    </motion.div>
  </section>
);

export default HeroSection;
