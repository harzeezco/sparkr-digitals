import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../../app/font';

const Projects = () => (
  <section>
    <div className='container mb-10'>
      <button
        className='flex items-center justify-center gap-1 rounded-[100px] border border-[#e0e0e0] p-2 pr-4'
        type='button'
      >
        <Image
          alt='faq'
          height={25}
          src='/icons/star.svg'
          width={25}
        />

        <span className='font-medium capitalize text-[#181818]'>
          Our Top Picked Projects
        </span>
      </button>

      <div className='flex items-end justify-between max-sm:flex-col'>
        <h1
          className={cn(
            'text-black text-4xl max-w-lg font-light md:text-5xl mt-2 lg:text-6xl font-bricolage',
            bricolage.className,
          )}
        >
          Sparking Innovative Digital{' '}
          <span className='opacity-50'>Solutions</span>
        </h1>

        <Button className='flex items-center justify-center gap-x-2 rounded-full bg-primary px-4 py-[10px] text-white'>
          <Image
            alt='contact'
            height={20}
            src='/icons/bag.svg'
            width={20}
          />
          <span>Explore More</span>
        </Button>
      </div>
    </div>

    <div>
      <div className='flex h-dvh items-center justify-center bg-[#FFFAF5] py-10'>
        <Link href='/works/docker'>
          <Image
            alt=''
            height={456}
            src='/images/project1.png'
            width={665}
          />
        </Link>
      </div>

      <div className='flex h-dvh items-center justify-center bg-[#EDFFFE]'>
        <Link href='/works/academify'>
          <Image
            alt=''
            height={456}
            src='/images/project2.png'
            width={665}
          />
        </Link>
      </div>

      <div className='flex h-dvh items-center justify-center bg-[#E4E3FD]'>
        <Link href='/works/zatum'>
          <Image
            alt=''
            height={456}
            src='/images/project3.png'
            width={665}
          />
        </Link>
      </div>
    </div>
  </section>
);

export default Projects;
