'use client';

import { InfiniteMovingCardsDemo } from '@/components/sliding-images';
import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';

import { bricolage } from '../../../app/font';

const HeroSection = () => (
  <section className='mt-32'>
    <div className='container space-y-4'>
      <motion.h1
        animate={{ opacity: 1, y: 0 }}
        className={cn(
          'text-center text-4xl mx-auto max-w-2xl font-light md:text-4xl lg:text-6xl',
          bricolage.className,
        )}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Sparkr isn&apos;t merely a{' '}
        <span className='text-primary'>group for creativity</span>{' '}
      </motion.h1>

      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className='mx-auto max-w-2xl text-center text-lg lg:text-xl'
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        Sparkr Digitals, a renowned agency known for its expertise in
        digital and AI enhancements, supports B2B companies in
        captivating their client base and maintaining an unparalleled
        leadership stance within their particular fields.
      </motion.p>
    </div>

    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className='mx-auto mt-12 flex max-w-6xl'
      initial={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <InfiniteMovingCardsDemo />
    </motion.div>
  </section>
);

export default HeroSection;
