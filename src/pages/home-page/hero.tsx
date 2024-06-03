'use client';

import AnimatedImage from '@/components/animated-image';
import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
      <Link href='/works'>
        <Button variant='default'>
          <AnimatedLink
            className='h-11 w-72 items-center justify-center rounded-[8px] bg-primary font-medium uppercase text-white transition-all hover:bg-green-600 active:bg-green-600'
            title='Discover our works'
            type='button'
          />
        </Button>
      </Link>
    </div>

    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='mx-auto mt-12 flex max-w-5xl max-lg:hidden'
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <AnimatedImage
        alt='team meeting'
        className='max-h-[550px]'
        height={620}
        src='/images/hero.webp'
        width={1200}
      />
    </motion.div>
  </section>
);

export default HeroSection;
