'use client';

import * as React from 'react';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../font';

const CASESTUDY = [
  {
    type: 'education',
    src: 'mockup1.webp',
    title: 'Academify',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'food & drinks',
    src: 'mockup2.webp',
    title: 'InnoSolve Technologies',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'technology',
    src: 'mockup3.webp',
    title: 'HealthInsight Solutions',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'sport',
    src: 'mockup4.webp',
    title: 'Zenify Studios',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'Education',
    src: 'mockup5.webp',
    title: 'Future Learning',
    desc: 'Inspiring Lifelong Learners',
  },
  {
    type: 'sport',
    src: 'mockup6.webp',
    title: 'Future Learning',
    desc: 'Inspiring Lifelong Learners',
  },
];

const TABS = [
  'all',
  'technology',
  'sport',
  'food & drinks',
  'education',
];

const HeroSection = () => {
  const [active, setActive] = React.useState('all');

  const filteredTab =
    active === 'all'
      ? CASESTUDY
      : CASESTUDY.filter(
          (item) => item.type.toLowerCase() === active.toLowerCase(),
        );

  return (
    <section className='mt-32'>
      <div className='container'>
        <h1
          className={cn(
            'text-center text-4xl mb-4 mx-auto max-w-3xl font-light md:text-4xl lg:text-6xl',
            bricolage.className,
          )}
        >
          Discover our exceptional projects
        </h1>

        <p className='mx-auto mb-16 max-w-2xl text-center text-lg lg:text-xl'>
          Every project embodies our fervor for creating indelible
          brand encounters. Delve into our portfolio below and uncover
          the narratives of triumph, ingenuity, and teamwork that
          characterize our agency.
        </p>

        <div className='no-visible-scrollbar relative mx-auto flex w-full  max-w-full flex-row items-center justify-start gap-x-5 overflow-auto [perspective:1000px] sm:overflow-visible md:justify-center'>
          {TABS.map((tab) => (
            <button
              className={cn(
                'rounded-md text-sm font-medium border-[1.5px] border-solid hover:text-white hover:bg-green-600 border-green-600 px-6 py-2 capitalize text-nowrap text-green-600 transition-all duration-300',
                tab === active ? 'bg-green-600 text-white' : '',
              )}
              type='button'
              onClick={() => {
                setActive(tab);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className='mx-auto mt-10 grid max-w-[1050px] grid-cols-1 gap-7 md:grid-cols-2'>
          {filteredTab.map(({ desc, src, title, type }) => (
            <Link href={`/works/${title}`}>
              <div className='group relative w-full cursor-pointer overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:z-30 before:size-full before:transition before:duration-300 hover:transition-all before:hover:bg-black/70'>
                <Image
                  alt={type}
                  className='max-h-[450px] rounded-[12px] transition-all duration-300 group-hover:scale-105'
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
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
