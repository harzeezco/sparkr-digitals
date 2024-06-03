import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const AnimatedImage = ({
  alt,
  className,
  height,
  src,
  width,
}: {
  alt: string;
  className?: string;
  height?: number;
  src: string;
  width?: number;
}) => {
  const image = useRef(null);

  const { scrollYProgress } = useScroll({
    target: image,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.65, 1],
    [1, 1, 0],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.6, 0.8, 0.9],
    [1, 0.8, 0.8, 0],
  );

  return (
    <motion.div
      ref={image}
      className='mx-auto w-full max-w-[100vw]'
      style={{
        opacity,
        scale,
      }}
    >
      <Image
        alt={alt}
        className={className}
        height={height}
        src={src}
        width={width}
      />
    </motion.div>
  );
};

export default AnimatedImage;
