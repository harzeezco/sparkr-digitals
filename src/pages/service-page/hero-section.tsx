'use client';

import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const HeroSection = () => (
  <section className='mt-32'>
    <div className='container space-y-4'>
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'text-center text-4xl mx-auto max-w-3xl font-light md:text-4xl lg:text-6xl',
          bricolage.className,
        )}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Pioneering your <span className='text-primary'>sucess</span>{' '}
        through <span className='text-primary'>creativity</span>{' '}
      </motion.h1>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className='mx-auto max-w-2xl text-center text-lg lg:text-xl'
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        At Sparkr studio, we&apos;re trailblazers in providing
        creative solutions that deeply connect with your target
        audience, resulting in impactful, measurable success.
      </motion.p>
    </div>

    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='mt-16'
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <Image
        alt='meeting'
        className='mx-auto max-h-[500px]'
        height={500}
        src='/images/service-hero.webp'
        width={1100}
      />
    </motion.div>
  </section>
);

export default HeroSection;
