import AnimatedLink from '@/components/animated-text';
import { cn } from '@/lib/cn';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { bricolage } from '../../font';
import { WORKS } from './data';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - Works',
  description:
    'Sparkr digitals is a UI/UX agency based in Lagos. We specialize in UI/UX design, branding, web, mobile development',
};

const WorkPage = ({ params }: { params: { work: string } }) => {
  const filtered = WORKS.find(
    (item) => item.productLink === params.work,
  );

  return (
    <main className='container mt-36 lg:px-6'>
      <h1
        className={cn(
          'text-4xl font-light md:text-5xl lg:text-6xl',
          bricolage.className,
        )}
      >
        {filtered?.title}
      </h1>

      <div className='my-10 flex justify-between gap-y-7 max-md:flex-col md:items-center'>
        <div>
          <div>
            <span className='opacity-70'>Client</span>
            <p className='mt-1'>{filtered?.client}</p>
          </div>

          <div className='mt-3'>
            <span className='opacity-70'>Year</span>
            <p className='mt-1'>{filtered?.year}</p>
          </div>
        </div>

        <div>
          <div>
            <span className='opacity-70'>Service</span>

            <div className='mt-1 space-y-1'>{filtered?.service}</div>
          </div>

          <div className='mt-4'>
            <span className='opacity-70'>Product Link</span>

            <Link
              className='flex w-fit flex-col font-medium'
              href='/contact'
            >
              <AnimatedLink
                className='capitalize transition duration-200 hover:text-green-500'
                title={filtered?.productLink as string}
              />
              <hr className='border border-[#121718]/70' />
            </Link>
          </div>
        </div>

        <div>
          <span className='opacity-70'>{filtered?.descHeader}</span>
          <p className='mt-1 max-w-[500px]'>{filtered?.desc}</p>
        </div>
      </div>

      <Image
        alt='dashboard'
        className=''
        height={500}
        src={`/images/${filtered?.imgSrc}`}
        width={1200}
      />

      <div className='mt-14'>
        <span className='opacity-70'>
          {filtered?.firstContentHeader}
        </span>
        <p className='mt-1 max-w-[700px]'>
          {filtered?.firstContentDesc}
        </p>

        <div className='mt-10 grid grid-cols-2'>
          {filtered?.firstContentImgs.map((src) => (
            <Image
              key={src}
              alt='docker'
              className='w-full'
              height={450}
              src={`/images/${src}`}
              width={450}
            />
          ))}
        </div>
      </div>

      <div className='mt-10'>
        <span className='opacity-70'>
          {filtered?.secondContentHeader}
        </span>
        <p className='mt-1 max-w-[700px]'>
          {filtered?.secondContentDesc}
        </p>

        <div className='mt-10'>
          <Image
            alt='academify product'
            height={400}
            src={`/images/${filtered?.secondImgSrc}`}
            width={1200}
          />
        </div>
      </div>

      <div className='mt-10'>
        <span className='opacity-70'>
          {filtered?.thirdContentHeader}
        </span>
        <p className='mb-10 mt-1 max-w-[700px]'>
          {filtered?.thirdContentDesc}
        </p>

        <Image
          alt='academify product'
          height={400}
          src={`/images/${filtered?.thirdImgSrc}`}
          width={1200}
        />
      </div>

      <div className='my-10'>
        <span className='opacity-70'>
          {filtered?.fourthContentHeader}
        </span>

        <p className='mb-10 max-w-[700px]'>
          {filtered?.fourthContentDesc}
        </p>

        <Image
          alt='academify product'
          height={400}
          src={`/images/${filtered?.fourthImgSrc}`}
          width={1200}
        />
      </div>

      <div className='my-10'>
        <span className='opacity-70'>
          {filtered?.fifthContentHeader}
        </span>
        <p className='mb-10 max-w-[700px]'>
          {filtered?.fifthContentDesc}
        </p>

        <div>
          {filtered?.fifthContentImgs.map((src) => (
            <Image
              key={src}
              alt='docker'
              className='w-full'
              height={450}
              src={`/images/${src}`}
              width={1200}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default WorkPage;
