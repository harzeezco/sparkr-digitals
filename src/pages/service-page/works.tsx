import AnimatedLink from '@/components/animated-text';
import { cn } from '@/lib/cn';
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
];

const Works = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <h1
      className={cn(
        'mx-auto max-w-xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      Works that we proud of
    </h1>

    <div className='mt-16 grid max-w-6xl grid-cols-1 gap-7 md:grid-cols-2'>
      {CASESTUDY.map(({ desc, src, title, type }) => (
        <div className='group relative w-full cursor-pointer overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:z-30 before:size-full before:transition before:duration-300 hover:transition-all before:hover:bg-black/70'>
          <Image
            alt={type}
            className='max-h-[550px] transition-all duration-300 group-hover:scale-105'
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
            <p className='text-xl font-medium text-white'>{desc}</p>
          </div>
        </div>
      ))}
    </div>

    <Link className='mt-14 font-medium' href='/case-study'>
      <AnimatedLink
        className='transition duration-200 hover:text-green-500'
        title='See More Case Studies'
      />
      <hr className='border border-[#121718]/70' />
    </Link>
  </section>
);

export default Works;
