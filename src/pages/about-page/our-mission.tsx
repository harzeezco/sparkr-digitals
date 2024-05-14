import { cn } from '@/lib/cn';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const OurMission = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <h1
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
    </h1>

    <p className='mx-auto mt-2 max-w-2xl text-center'>
      We are storytellers, weaving narratives that resonate. Our
      mission is to bring your ideas to life and make them shine in
      the digital landscape. With a blend of creativity, strategy, and
      technical expertise, we are committed to exceeding your
      expectations.
    </p>

    <div className='mt-16 grid grid-cols-2 items-center rounded-[12px] bg-green-100'>
      {MISSIONS.map(({ desc, icon, title }, idx) => (
        <div
          className='p-8'
          style={{
            borderBottom: idx === 0 || idx === 1 ? '1px' : '0px',
            borderLeft: idx === 1 || idx === 3 ? '1px' : '0px',
            borderStyle: 'solid',
            borderColor: '#0a0e0e',
          }}
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
        </div>
      ))}
    </div>
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
    title: 'Unwavering Integrity',
    desc: 'We believe in transparency, honesty, and accountability. We uphold the highest ethical standards in every interaction, ensuring trust and credibility with our clients and partners.',
  },
  {
    icon: 'rocket.svg',
    title: 'Unwavering Integrity',
    desc: 'We believe in transparency, honesty, and accountability. We uphold the highest ethical standards in every interaction, ensuring trust and credibility with our clients and partners.',
  },
  {
    icon: 'user.svg',
    title: 'Unwavering Integrity',
    desc: 'We believe in transparency, honesty, and accountability. We uphold the highest ethical standards in every interaction, ensuring trust and credibility with our clients and partners.',
  },
];

export default OurMission;
