'use client';

import MotionContainer from '@/components/motion-container';
import SlideInAnimation from '@/components/slide-in-animation';
import { cn } from '@/lib/cn';
import { childVariants } from '@/lib/motion';
import { motion } from 'framer-motion';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const OurMission = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <SlideInAnimation
      as='h1'
      className={cn(
        'mx-auto max-w-4xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      We work with companies that{' '}
      <span className='text-green-500'>
        mean the world to their people
      </span>{' '}
      but need our help to{' '}
      <span className='text-green-500'>
        mean something to the world.
      </span>
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

    <MotionContainer className='mt-16 grid grid-cols-1 items-center rounded-[12px] bg-[#F7FFF9] md:grid-cols-2'>
      {MISSIONS.map(({ desc, icon, title }, idx) => (
        <motion.div
          className='p-8'
          style={{
            borderBottom: idx === 0 || idx === 1 ? '1px' : '0px',
            borderLeft: idx === 1 || idx === 3 ? '1px' : '0px',
            borderStyle: 'solid',
            borderColor: '#e2e2e2',
          }}
          variants={childVariants}
        >
          <Image
            alt='icon'
            height={45}
            src={`/icons/${icon}`}
            width={45}
          />

          <h2 className='mb-2 mt-4 font-bricolage text-2xl font-semibold'>
            {title}
          </h2>
          <p>{desc}</p>
        </motion.div>
      ))}
    </MotionContainer>
  </section>
);

const MISSIONS = [
  {
    icon: 'academic.svg',
    title: 'Unwavering Integrity',
    desc: 'We believe in transparency, honesty, and accountability. We uphold the highest ethical standards in every interaction, ensuring trust and credibility with our clients and partners.',
  },
  {
    icon: 'academic.svg',
    title: 'Boundless Innovation',
    desc: 'By wholeheartedly embracing emerging technologies and staying at the forefront of design trends, we deliver solutions that not only shine but also make a mark in a digital world.',
  },
  {
    icon: 'rocket.svg',
    title: 'Synergistic Collaboration',
    desc: 'We work hand-in-hand with our clients, cherishing their invaluable insights and seamlessly blending them with our expertise to create solutions that resonate on a profound level.',
  },
  {
    icon: 'user.svg',
    title: 'Relentless Pursuit of Excellence',
    desc: "Excellence isn't just a goal, it's a relentless pursuit. From the minutest details to the grandest visions, we leave no stone unturned in our quest for perfection.",
  },
];

export default OurMission;
