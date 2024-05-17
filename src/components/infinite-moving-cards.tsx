'use client';

import { cn } from '@/lib/cn';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  className,
  direction = 'left',
  items,
  pauseOnHover = true,
  speed = 'fast',
}: {
  className?: string;
  direction?: 'left' | 'right';
  items: {
    alt: string;
    size: number;
    src: string;
  }[];
  pauseOnHover?: boolean;
  speed?: 'fast' | 'normal' | 'slow';
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(
        scrollerRef.current.children,
      );

      for (const item of scrollerContent) {
        const duplicatedItem = item.cloneNode(true);

        if (scrollerRef.current) {
          scrollerRef.current.append(duplicatedItem);
        }
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse',
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '20s',
        );
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '40s',
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-duration',
          '80s',
        );
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-7xl overflow-hidden ',
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]',
        )}
      >
        {items.map(({ alt, size, src }) => (
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
      </ul>
    </div>
  );
};
