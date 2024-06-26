import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import { cn } from '@/lib/cn';
import Image from 'next/image';

import { bricolage } from '../../../app/font';

const ClientStories = () => (
  <section className='mt-24'>
    <h1
      className={cn(
        'mx-auto max-w-2xl text-center text-3xl font-light sm:text-4xl lg:text-5xl',
        bricolage.className,
      )}
    >
      Stories are best told by the people who have lived them.
    </h1>

    <div className='relative mt-12 flex flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
      <InfiniteMovingCards direction='right' speed='slow'>
        {TESTIMONIALS.map(({ alt, job, name, src, text }) => (
          <div className='w-full max-w-[450px] rounded-[12px] bg-white p-4 md:p-10'>
            <div className='grid grid-cols-[auto_1fr] place-items-center gap-3'>
              <Image
                alt={alt}
                height={80}
                src={`/images/${src}`}
                width={70}
              />

              <div>
                <h2 className='text-xl font-medium'>{name}</h2>
                <p className='text-[#333333]'>{job}</p>
              </div>
            </div>

            <p className='mt-7 md:text-lg'>{text}</p>
          </div>
        ))}
      </InfiniteMovingCards>
    </div>
  </section>
);

export const TESTIMONIALS = [
  {
    src: 'anna.webp',
    text: 'Working with Sparkr was a game-changer for us. Their innovative approach and attention to detail helped us boost our online presence and reach our target audience effectively.',
    name: 'Luca Rossi',
    job: 'Chief Technology Officer, CyberSecure Global',
    alt: 'first',
  },
  {
    src: 'ruth.webp',
    text: 'Sparkr exceeded our expectations in every way. Their team not only delivered outstanding results but also provided valuable insights and guidance throughout the project. Highly recommend!',
    name: 'Amara Okafor,',
    job: 'Head of Digital Strategy, E-Comm Universe',
    alt: 'second',
  },
  {
    src: 'paul.webp',
    text: "Sparkr's digital marketing strategies delivered tangible results for our business. Their dedication and creativity helped us stay ahead of the competition and drive meaningful engagement with our audience.",
    name: 'Mia Wong',
    job: 'Marketing Director, EcoHealth Worldwide',
    alt: 'third',
  },
  {
    src: 'ruth.webp',
    text: "Sparkr truly understands the digital landscape. Their tailored approach helped us develop a strong brand identity and connect with our customers on a deeper level. Couldn't be happier with the results!",
    name: 'Aarav Patel',
    job: 'Co-Founder, FinSolutions International',
    alt: 'fourth',
  },
  {
    src: 'anna.webp',
    text: 'Sparkr digitals team are just amazing. We have had some personal websites and dashboards. The team always delivered on time. The best quality with endless iterations. Good Job!',
    name: 'Liam Murphy',
    job: 'Product Manager, SmartHome International',
    alt: 'fifth',
  },
];

export default ClientStories;
