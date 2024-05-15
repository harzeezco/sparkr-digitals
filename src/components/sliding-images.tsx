'use client';

import { InfiniteMovingCards } from '@/components/infinite-moving-cards';
import Image from 'next/image';

export function InfiniteMovingCardsDemo() {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
      <InfiniteMovingCards direction='right' speed='slow'>
        {testimonials.map(({ alt, size, src }) => (
          <li
            key={alt}
            className='relative max-w-full shrink-0 rounded-2xl border border-b-0'
          >
            <Image
              alt={alt}
              className='h-full max-h-[450px] rounded-[12px]'
              height={450}
              src={`/images/${src}`}
              width={size}
            />
          </li>
        ))}
      </InfiniteMovingCards>
    </div>
  );
}

const testimonials = [
  {
    src: 'creative1.webp',
    alt: 'Charles Dickens',
    size: 306,
  },
  {
    src: 'creative2.webp',
    alt: 'William Shakespeare',
    size: 596,
  },
  {
    src: 'creative3.webp',
    alt: 'Edgar Allan Poe',
    size: 306,
  },
  {
    src: 'creative4.webp',
    alt: 'Jane Austen',
    size: 596,
  },
  {
    src: 'creative5.webp',
    alt: 'Herman Melville',
    size: 350,
  },
  {
    src: 'creative6.webp',
    alt: 'Herman Melville',
    size: 596,
  },
];
