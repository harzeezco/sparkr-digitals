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

const VISION = [
  {
    src: 'staff1.webp',
    title: 'Quadri Ismail',
    desc: 'Co-founder & CEO',
  },
  {
    src: 'staff2.webp',
    title: 'Farihan Sodiq',
    desc: 'Operation Manager',
  },
  {
    src: 'staff3.webp',
    title: 'Quadri Ismail',
    desc: 'Co-founder & CEO',
  },
  {
    src: 'staff4.webp',
    title: 'Farihan Sodiq',
    desc: 'Operation Manager',
  },
  {
    src: 'staff1.webp',
    title: 'Quadri Ismail',
    desc: 'Co-founder & CEO',
  },
  {
    src: 'staff2.webp',
    title: 'Farihan Sodiq',
    desc: 'Operation Manager',
  },
  {
    src: 'staff3.webp',
    title: 'Quadri Ismail',
    desc: 'Co-founder & CEO',
  },
  {
    src: 'staff4.webp',
    title: 'Farihan Sodiq',
    desc: 'Operation Manager',
  },
];

const OurStaff = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <SlideInAnimation
      as='h1'
      className={cn(
        'mx-auto max-w-4xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      Our talented and diverse team works together for one purpose—to
      unlock the potential of those around us.
    </SlideInAnimation>

    <SlideInAnimation
      as={Link}
      className='mt-6 font-medium'
      href='/case-study'
    >
      <AnimatedLink
        className='transition duration-200 hover:text-green-500'
        title='JOIN OUR TEAM'
      />
      <hr className='border border-[#121718]/70' />
    </SlideInAnimation>

    <MotionContainer className='mt-16 grid max-w-6xl grid-cols-2 gap-7 sm:grid-cols-3 lg:grid-cols-4 lg:px-7'>
      {VISION.map(({ desc, src, title }) => (
        <motion.div
          className='relative w-full cursor-pointer overflow-hidden transition-all duration-500'
          variants={childVariants}
        >
          <Image
            alt={title}
            className='rounded-[12px] transition-all duration-300 hover:scale-105'
            height={300}
            src={`/images/${src}`}
            width={280}
          />

          <div className='flex-col'>
            <h2
              className={cn(
                'mt-4 font-bricolage text-xl md:text-2xl font-semibold',
                bricolage.className,
              )}
            >
              {title}
            </h2>
            <p className='opacity-70 md:text-lg'>{desc}</p>
          </div>
        </motion.div>
      ))}
    </MotionContainer>
  </section>
);

export default OurStaff;
