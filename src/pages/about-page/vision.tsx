'use client';

import MotionContainer from '@/components/motion-container';
import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/lib/cn';
import { childVariants } from '@/lib/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const VISION = [
  {
    src: 'ceo.webp',
    title: 'Quadri Ismail',
    desc: 'Co-founder & CEO',
  },
  {
    src: 'co-founder.webp',
    title: 'Farihan Sodiq',
    desc: 'Operation Manager',
  },
];

const Vision = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <SlideInAnimation
      as='h1'
      className={cn(
        'mx-auto max-w-xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      With a bold vision, the journey began in 2019.
    </SlideInAnimation>

    <MotionContainer className='mt-16 grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2'>
      {VISION.map(({ desc, src, title }) => (
        <motion.div
          className='relative w-full cursor-pointer overflow-hidden transition-all duration-500'
          variants={childVariants}
        >
          <Image
            alt={title}
            className='rounded-[12px] transition-all duration-300 hover:scale-105'
            height={500}
            src={`/images/${src}`}
            width={550}
          />

          <div className='flex-col'>
            <h2
              className={cn(
                'mt-4 font-bricolage text-2xl font-semibold',
                bricolage.className,
              )}
            >
              {title}
            </h2>
            <p className='text-lg opacity-70'>{desc}</p>
          </div>
        </motion.div>
      ))}
    </MotionContainer>
  </section>
);

export default Vision;
