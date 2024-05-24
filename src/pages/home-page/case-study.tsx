'use client';

import * as React from 'react';
import AnimatedLink from '@/components/animated-text';
import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/lib/cn';
import { childVariants, containerVariants } from '@/lib/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const CASESTUDY = [
  {
    type: 'Education',
    src: 'mockup1.webp',
    title: 'Future Learning',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'Education',
    src: 'mockup2.webp',
    title: 'Future Learning',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'Education',
    src: 'mockup3.webp',
    title: 'Future Learning',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'Education',
    src: 'mockup4.webp',
    title: 'Future Learning',
    desc: 'Inspiring Lifelong Learners',
  },
];

const CaseStudy = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <section className='container mt-24 flex flex-col items-center'>
      <SlideInAnimation
        as='h1'
        className={cn(
          'mx-auto max-w-xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
          bricolage.className,
        )}
      >
        Where Imagination Intersects with{' '}
        <span className='text-green-500'>Planning</span> &{' '}
        <span className='text-green-500'>Novelty</span>
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

      <div ref={container}>
        {isInView && (
          <motion.div
            animate='visible'
            className='mt-16 grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2'
            exit='exit'
            initial='hidden'
            variants={containerVariants}
          >
            {CASESTUDY.map(({ desc, src, title, type }) => (
              <motion.div
                className='group relative w-full cursor-pointer overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:z-30 before:size-full before:transition before:duration-300 hover:transition-all before:hover:bg-black/70'
                variants={childVariants}
              >
                <Image
                  alt={type}
                  className='rounded-[12px] transition-all duration-300 group-hover:scale-105'
                  height={500}
                  src={`/images/${src}`}
                  width={550}
                />

                <div className='invisible absolute bottom-8 left-16 z-50 flex-col opacity-0 transition duration-500 group-hover:visible group-hover:opacity-100'>
                  <button
                    className='rounded-md border border-solid border-green-500 px-5 py-1 text-white'
                    type='button'
                  >
                    {type}
                  </button>

                  <h1
                    className={cn(
                      'mb-2 mt-4 font-bricolage text-3xl font-semibold text-white',
                      bricolage.className,
                    )}
                  >
                    {title}
                  </h1>
                  <p className='text-xl font-medium text-white'>
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudy;
