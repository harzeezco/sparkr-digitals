'use client';

import AnimatedLink from '@/components/animated-text';
import MotionContainer from '@/components/motion-container';
import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/lib/cn';
import { childVariants } from '@/lib/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const SUCESSFULBRANDS = [
  {
    type: 'branding',
    src: 'transfer1.webp',
    title:
      'The power of User-Centered Design: Crafting Institute Experiences',
  },
  {
    type: 'branding',
    src: 'transfer2.webp',
    title:
      'The power of User-Centered Design: Crafting Institute Experiences',
  },
];

const SuccessfulBrands = () => (
  <section className='container mt-24 flex flex-col items-center lg:px-6'>
    <SlideInAnimation
      as='h1'
      className={cn(
        'mx-auto max-w-xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      Behind Successful Brand Transformation
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

    <MotionContainer className='mt-16 grid max-w-[1100px] grid-cols-1 gap-5 md:grid-cols-2'>
      {SUCESSFULBRANDS.map(({ src, title, type }) => (
        <motion.div
          className='group relative w-full cursor-pointer overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:z-30 before:size-full before:transition before:duration-300 hover:transition-all before:hover:bg-black/70'
          variants={childVariants}
        >
          <Image
            alt={type}
            className='max-h-[500px] transition-all duration-300 group-hover:scale-105'
            height={500}
            src={`/images/${src}`}
            width={550}
          />

          <div className='invisible absolute bottom-8 left-10 z-50 flex-col opacity-0 transition duration-500 group-hover:visible group-hover:opacity-100'>
            <button
              className='rounded-md border border-solid border-green-500 px-5 py-1 text-sm uppercase text-white'
              type='button'
            >
              {type}
            </button>

            <h1
              className={cn(
                'mb-2 mt-4 text-xl text-white',
                bricolage.className,
              )}
            >
              {title}
            </h1>
          </div>
        </motion.div>
      ))}
    </MotionContainer>
  </section>
);

export default SuccessfulBrands;
