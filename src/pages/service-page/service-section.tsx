import AnimatedLink from '@/components/animated-text';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const ServiceSection = () => (
  <section className='container mt-24 flex flex-col items-center'>
    <h1
      className={cn(
        'mx-auto max-w-4xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      Empowering your brand&apos;s success in a competitive world{' '}
    </h1>

    <Link className='mt-6 font-medium' href='/case-study'>
      <AnimatedLink
        className='transition duration-200 hover:text-green-500'
        title='Book a discovery call'
      />
      <hr className='border border-[#121718]/70' />
    </Link>

    <div className='mt-16 grid grid-cols-3 items-center bg-green-100'>
      {MISSIONS.map(({ desc, icon, title }) => (
        <div className='p-8'>
          <Image
            alt='icon'
            height={45}
            src={`/icons/${icon}`}
            width={45}
          />

          <h2 className='mb-5 mt-4 font-bricolage text-2xl font-semibold'>
            {title}
          </h2>

          <hr className='w-24 border-t border-solid border-[#333333] py-3' />

          <p>{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const MISSIONS = [
  {
    icon: 'scan.svg',
    title: 'Brand Identity',
    desc: 'Craft a standout brand identity with a memorable logo, colors, etc. that resonate with your audience and set you apart.',
  },
  {
    icon: 'uiux.svg',
    title: 'UX/UI Design',
    desc: 'Create intuitive, visually captivating interfaces that guide users seamlessly through a delightful digital experience.',
  },
  {
    icon: 'coding.svg',
    title: 'Website Development',
    desc: 'Build high-performing, responsive websites that not only look stunning but also drive results and enhance user engagement.',
  },
  {
    icon: 'academic.svg',
    title: 'Business AI Automation',
    desc: 'Elevate your business with AI automation: streamline processes, enhance efficiency, and unlock innovation, all while transforming your operational landscape.',
  },
  {
    icon: 'rocket.svg',
    title: 'Content Strategy',
    desc: 'Our expert content strategists work closely with you to develop a tailored plan that aligns with your brand and your audience.',
  },
  {
    icon: 'internet.svg',
    title: 'Social Media Management',
    desc: 'Our social media experts handle everything from content creation and scheduling to engagement and analytics. ',
  },
];

export default ServiceSection;
