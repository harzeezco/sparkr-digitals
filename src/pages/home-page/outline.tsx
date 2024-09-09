'use client';

import {
  MotionValue,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import React, { useRef } from 'react';

interface ParagraphProps {
  paragraph: string;
}

export default function Outline({ paragraph }: ParagraphProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.4', 'start 0.15'],
  });

  const words = paragraph.split(' ');

  return (
    <div className='bg-black'>
      <p
        ref={container}
        className='flex max-w-screen-xl flex-wrap items-center justify-center p-10 text-center text-6xl leading-none text-white'
      >
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;

          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: React.FC<WordProps> = ({ children, progress, range }) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;

  return (
    <span className='relative mr-3 mt-3'>
      {children.split('').map((char, i) => {
        const start = range[0] + i * step;
        const end = range[0] + (i + 1) * step;

        return (
          <Char
            key={`c_${i}`}
            progress={progress}
            range={[start, end]}
          >
            {char}
          </Char>
        );
      })}
    </span>
  );
};

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  console.log(opacity);

  return (
    <>
      <span className='absolute opacity-20'>{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </>
  );
};
