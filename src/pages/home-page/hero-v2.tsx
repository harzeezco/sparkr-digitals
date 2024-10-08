'use client';

import AnimatedLink from '@/components/animated-text';
import Button from '@/components/ui/button-v2';
import { cn } from '@/lib/cn';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { FaStar } from 'react-icons/fa6';

import { bricolage } from '../../../app/font';
import AnimatedVideo from './animated-video';
import CaseStudy from './case-study-v2';

const services = [
  'Web Design',
  'UI/UX',
  'Web Dev',
  'App Dev',
  'Branding',
  'Social media',
  'SEO',
  'Motion Design',
  'Pitch Deck',
];

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Transform values for scaling and opacity

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5],
    [1, 0.2, 0.1, 0],
  ); // fade out and back in

  return (
    <motion.section className='relative z-50 min-h-screen w-full pb-24 '>
      <motion.div ref={ref} style={{ opacity }}>
        <div className='container pt-32'>
          <Button className='flex max-w-fit items-center justify-center gap-x-2 rounded-full px-3 py-2 ring-1 ring-gray-200'>
            <FaStar className='text-yellow-300' />
            <p className='text-sm font-bold text-black'>
              Award Winning Design Agency
            </p>
          </Button>
          <h1
            className={cn(
              'text-black text-4xl font-light md:text-5xl mt-2 lg:text-6xl font-bricolage',
              bricolage.className,
            )}
          >
            We craft innovative design solutions that scale brands
            globally
          </h1>
        </div>

        <div className=' hiddenScroll overflow-x-auto '>
          <ul className='my-6 flex items-center  gap-x-2 lg:container max-lg:ml-4 max-sm:justify-start'>
            {services.map((item) => (
              <li
                key={item}
                className='max-w-fit  rounded-full px-5 py-2  font-medium text-black ring-1 ring-gray-200 max-[1111px]:shrink-0  max-sm:px-3 max-sm:text-xs  '
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className='container flex items-center justify-start gap-x-4 max-[430px]:w-full max-[430px]:flex-col max-[430px]:gap-y-5'>
          <Button className='flex items-center justify-center gap-x-2 rounded-full bg-primary px-4 py-3 text-white max-[430px]:w-full'>
            <Image
              alt='icon'
              height={24}
              src='/icons/schedule.svg'
              width={24}
            />
            <AnimatedLink title=' Schedule a meet' />
          </Button>
          <Button className='flex items-center justify-center gap-x-2 rounded-full bg-green-100 px-4 py-3 ring-1 ring-primary max-[430px]:w-full'>
            <Image
              alt='icon'
              height={24}
              src='/icons/discover.svg'
              width={24}
            />{' '}
            <AnimatedLink title='Discover Services' />
          </Button>
        </div>
      </motion.div>

      <AnimatedVideo />
      <div className='container relative mt-40 lg:mt-56'>
        <div className='mx-auto max-w-[700px] text-center text-black max-xl:text-2xl max-sm:text-xl xl:text-3xl'>
          <div>
            <h1>At Sparkr Digitals,</h1>
            <p>
              We take the time to truly listen and understand your
              needs, ensuring crystal clear guidance and
              lightning-fast results.
            </p>
          </div>
          <div className='mb-10 mt-4 text-[#A3A3A3]'>
            <p>
              We consistently exceed expectations, delivering projects
              that look like they’re coming straight from Silicon
              Valley.
            </p>
          </div>
        </div>

        <CaseStudy />
      </div>
    </motion.section>
  );
};

export default HeroSection;
