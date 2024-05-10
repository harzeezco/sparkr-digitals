import { cn } from '@/lib/cn';
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
    <h1
      className={cn(
        'mx-auto max-w-xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      With a bold vision, the journey began in 2019.
    </h1>

    <div className='mt-16 grid max-w-6xl  grid-cols-2 gap-7'>
      {VISION.map(({ desc, src, title }) => (
        <div className='relative w-full cursor-pointer overflow-hidden transition-all duration-500'>
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
        </div>
      ))}
    </div>
  </section>
);

export default Vision;
