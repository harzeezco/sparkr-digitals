'use client';

import { InfiniteMovingCards } from '@/components/infinite-moving-cards';

export function InfiniteMovingCardsDemo() {
  return (
    <div className='relative flex flex-col items-center justify-center overflow-hidden rounded-md antialiased'>
      <InfiniteMovingCards
        direction='right'
        items={testimonials}
        speed='slow'
      />
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
