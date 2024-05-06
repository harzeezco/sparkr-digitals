'use client';

import { motion } from 'framer-motion';
import React from 'react';

const AnimatedLetter = ({
  animation,
  character,
}: {
  animation: any;
  character: string;
}) => (
  <motion.span
    className='relative inline-block whitespace-nowrap'
    variants={animation}
  >
    {character}
  </motion.span>
);

const AnimatedWord = ({
  animation,
  isHovered,
  title,
}: {
  animation: any;
  isHovered: boolean;
  title: any;
}) => (
  <motion.span
    animate={isHovered ? 'hover' : 'rest'}
    className='relative whitespace-nowrap'
    initial='rest'
    variants={titleAnimation}
  >
    {title
      .split('')
      .map((character: string, i: number) =>
        character === ' ' ? (
          <span key={i}>&nbsp;</span>
        ) : (
          <AnimatedLetter
            animation={animation}
            character={character}
          />
        ),
      )}
  </motion.span>
);

export default function AnimatedLink({ title }: { title: string }) {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className='relative cursor-pointer overflow-hidden'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatedWord
        animation={letterAnimation}
        isHovered={isHovered}
        title={title}
      />
      <div className='absolute top-0'>
        <AnimatedWord
          animation={letterAnimationTwo}
          isHovered={isHovered}
          title={title}
        />
      </div>
    </motion.div>
  );
}

const titleAnimation = {
  rest: {
    transition: {
      staggerChildren: 0.003,
    },
  },
  hover: {
    transition: {
      staggerChildren: 0.003,
    },
  },
};

const letterAnimation = {
  rest: {
    y: 0,
  },
  hover: {
    y: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};

const letterAnimationTwo = {
  rest: {
    y: 30,
  },
  hover: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: 'tween',
    },
  },
};
