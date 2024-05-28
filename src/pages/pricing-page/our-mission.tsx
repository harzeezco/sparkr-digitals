/* eslint-disable unicorn/no-negated-condition */
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
      Membership benefits
    </h1>

    <p className='mx-auto mt-2 max-w-2xl text-center'>
      Perks so good you&apos;ll never need to go anywhere else for
      your design. Seriously.
    </p>

    <div className='mt-16 grid grid-cols-1 items-center rounded-[12px] bg-white sm:grid-cols-2 lg:grid-cols-3'>
      {MISSIONS.map(({ desc, icon, title }, idx) => (
        <div
          className='p-8'
          style={{
            borderBottom:
              idx === 0 || idx === 1 || idx === 2 ? '1px' : '0px',
            borderLeft: idx === 0 || idx === 3 ? '0px' : '1px',
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
    title: 'Unlimited Requests',
    desc: "Add as many design requests as you'd like to your canvas.",
  },
  {
    icon: 'academic.svg',
    title: 'Designs in Days',
    desc: 'Get design delivered one at a time, on average, within just a few days.',
  },
  {
    icon: 'rocket.svg',
    title: 'Fixed pricing',
    desc: 'Enjoy the peace of mind with a consistent — no unexpected costs.',
  },
  {
    icon: 'user.svg',
    title: 'Top-notch Design',
    desc: 'Access unparalleled design quality whenever you need it.',
  },
  {
    icon: 'rocket.svg',
    title: 'Flexible and scalable',
    desc: 'You can scale up or down, pause, or cancel at any time.',
  },
  {
    icon: 'user.svg',
    title: 'Crafted Just for You',
    desc: 'Every design is exclusively tailored to you, ensuring it remains 100% yours.',
  },
];

export default OurMission;
