'use client';

import useCarouselSlide from '@/hooks/use-carousel-slide';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Slider from 'react-slick';

import { bricolage } from '../../../app/font';

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const ClientStories = () => {
  const { activeSlide, goToSlide, settings, sliderRef } =
    useCarouselSlide();

  return (
    <section className='mt-24'>
      <h1
        className={cn(
          'mx-auto max-w-2xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
          bricolage.className,
        )}
      >
        Words of appreciation: <br /> Our client&apos;s successful
        stories
      </h1>

      <div className='mt-14 w-full overflow-x-hidden bg-[#D1FFDE] py-10'>
        <div className='relative mx-auto max-w-5xl'>
          <Slider {...settings} ref={sliderRef} aria-live='polite'>
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                className='cursor-pointer p-4'
              >
                <div className='grid justify-start p-4 md:grid-cols-[120px_1fr]'>
                  <div className='flex size-20 items-center justify-center rounded-full bg-[#B4FFC9] p-2'>
                    <Image
                      alt='Image of the testimonial quote icon'
                      className='size-6'
                      height={24}
                      loading='lazy'
                      src='/icons/blockquote.svg'
                      width={24}
                    />
                  </div>

                  <article className='mt-6 md:mt-0'>
                    <h1 className='text-3xl text-green-600 sm:pb-5 sm:text-[30px] lg:text-[40px] lg:leading-[60px]'>
                      {testimonial.text}
                    </h1>
                    <div className='pt-6'>
                      <h2 className='text-[20px] font-bold leading-[30px] text-green-600 lg:leading-9'>
                        {testimonial.name}
                      </h2>
                      <p className='leading-6 text-[#121418] opacity-[70%]'>
                        {testimonial.address}
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            ))}
          </Slider>
          <div className='right-10 flex items-center gap-x-4 pl-5 sm:absolute sm:bottom-[40px] sm:justify-center md:pl-0'>
            {TESTIMONIALS.map((items, index) => (
              <button
                key={index}
                aria-controls='carousel'
                aria-label='next slide'
                className={`${
                  activeSlide === index
                    ? 'h-7 bg-primary'
                    : 'h-5 bg-primary px-2 opacity-[50%] hover:bg-primary hover:opacity-[100%]'
                } rounded-full p-2 transition-all`}
                type='button'
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const TESTIMONIALS = [
  {
    id: 0,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!',
    name: 'Luca Rossi',
    address: 'Chief Technology Officer, CyberSecure Global',
    alt: 'first',
  },
  {
    id: 1,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!',
    name: 'Amara Okafor,',
    address: 'Head of Digital Strategy, E-Comm Universe',
    alt: 'second',
  },
  {
    id: 2,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!',
    name: 'Mia Wong',
    address: 'Marketing Director, EcoHealth Worldwide',
    alt: 'third',
  },
  {
    id: 3,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!',
    name: 'Aarav Patel',
    address: 'Co-Founder, FinSolutions International',
    alt: 'fourth',
  },
  {
    id: 4,
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!',
    name: 'Liam Murphy',
    address: 'Product Manager, SmartHome International',
    alt: 'fifth',
  },
];

export default ClientStories;
