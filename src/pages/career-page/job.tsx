import AnimatedLink from '@/components/animated-text';
import { cn } from '@/lib/cn';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const JobSection = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <h1
      className={cn(
        'mx-auto max-w-2xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      We’re hiring and can’t wait to meet you.
    </h1>

    <Link className='mt-6 text-sm font-medium' href='/case-study'>
      <AnimatedLink
        className='transition duration-200 hover:text-green-500'
        title='Drop Us An Email'
      />
      <hr className='border border-[#121718]/70' />
    </Link>

    <div className='mx-auto mt-16 w-full max-w-4xl space-y-4'>
      {MISSIONS.map(({ icon, title }) => (
        <div className='flex w-full cursor-pointer items-center justify-between rounded-[12px] bg-white px-4 py-2'>
          <div className='flex items-center gap-3'>
            <Image
              alt='icon'
              height={35}
              src={`/icons/${icon}`}
              width={35}
            />

            <h2 className='mb-5 mt-4 font-bricolage text-xl font-semibold'>
              {title}
            </h2>
          </div>

          <ArrowRight />
        </div>
      ))}
    </div>
  </section>
);

const MISSIONS = [
  {
    icon: 'academic.svg',
    title: 'Copywriter',
    desc: 'Craft a standout brand identity with a memorable logo, colors, etc. that resonate with your audience and set you apart.',
  },
  {
    icon: 'trophy.svg',
    title: 'Creative Director',
    desc: 'Create intuitive, visually captivating interfaces that guide users seamlessly through a delightful digital experience.',
  },
  {
    icon: 'rocket.svg',
    title: 'Art Director',
    desc: 'Build high-performing, responsive websites that not only look stunning but also drive results and enhance user engagement.',
  },
  {
    icon: 'date.svg',
    title: 'Project Manager',
    desc: 'Elevate your business with AI automation: streamline processes, enhance efficiency, and unlock innovation, all while transforming your operational landscape.',
  },
  {
    icon: 'academic.svg',
    title: 'Graphic Designer',
    desc: 'Our expert content strategists work closely with you to develop a tailored plan that aligns with your brand and your audience.',
  },
  {
    icon: 'web.svg',
    title: 'UX/UI Designer',
    desc: 'Our social media experts handle everything from content creation and scheduling to engagement and analytics. ',
  },
];

export default JobSection;
