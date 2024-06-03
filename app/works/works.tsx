'use client';

import * as React from 'react';
import MotionContainer from '@/components/motion-container';
import { cn } from '@/lib/cn';
import { childVariants } from '@/lib/motion';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../font';

const CASESTUDY = [
  {
    type: 'marketing',
    src: 'mockup1.webp',
    title: 'Docker',
    desc: 'Redefining Marketing tools',
    href: 'docker',
  },
  {
    type: 'education',
    src: 'mockup2.webp',
    title: 'Academify',
    desc: "Academify's Learning Revolution",
    href: 'academify',
  },
  {
    type: 'health care',
    src: 'mockup5.webp',
    title: 'nutxer',
    desc: ' Navigating Inner Peace with NutXer',
    href: 'nutxer',
  },
  {
    type: 'health care',
    src: 'mockup6.webp',
    title: 'zatum',
    desc: "Zatum's Health Breakthrough",
    href: 'zatum',
  },
];

const TABS = ['all', 'education', 'health care', 'marketing'];
const Projects = () => {
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });
  const [active, setActive] = React.useState('all');

  const filteredTab =
    active === 'all'
      ? CASESTUDY
      : CASESTUDY.filter(
          (item) => item.type.toLowerCase() === active.toLowerCase(),
        );

  return (
    <div ref={container}>
      {isInView && (
        <MotionContainer className='no-visible-scrollbar relative mx-auto flex w-full  max-w-full flex-row items-center justify-start gap-x-5 overflow-auto [perspective:1000px] sm:overflow-visible md:justify-center'>
          {TABS.map((tab) => (
            <motion.button
              className={cn(
                'rounded-md text-sm font-medium border-[1.5px] border-solid hover:text-white hover:bg-green-600 border-green-600 px-6 py-2 capitalize text-nowrap text-green-600 transition-all duration-300',
                tab === active ? 'bg-green-600 text-white' : '',
              )}
              type='button'
              variants={childVariants}
              onClick={() => {
                setActive(tab);
              }}
            >
              {tab}
            </motion.button>
          ))}
        </MotionContainer>
      )}

      <MotionContainer className='mx-auto mt-10 grid max-w-[1050px] grid-cols-1 gap-7 md:grid-cols-2'>
        {filteredTab.map(({ desc, href, src, title, type }) => (
          <Link href={`/works/${href}`}>
            <motion.div
              className='group relative w-full cursor-pointer overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:z-30 before:size-full before:transition before:duration-300 hover:transition-all before:hover:bg-black/70'
              variants={childVariants}
            >
              <Image
                alt={type}
                className='max-h-[450px] rounded-[12px] transition-all duration-300 group-hover:scale-105'
                height={500}
                src={`/images/${src}`}
                width={550}
              />

              <div className='invisible absolute bottom-8 left-16 z-50 flex-col opacity-0 transition duration-500 group-hover:visible group-hover:opacity-100'>
                <button
                  className='rounded-md border border-solid border-green-500 px-5 py-1 capitalize text-white'
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
          </Link>
        ))}
      </MotionContainer>
    </div>
  );
};

export default Projects;
