'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const AnimatedVideo = () => {
  const windowWidth = window.innerWidth;
  const [windowSize, setWindowSize] = useState(windowWidth);
  const isLarge = windowSize >= 800;

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(windowWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Transform values for scaling and opacity
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 1],
    [1, 1, 1.5, 1],
  ); // scale up

  return (
    <section ref={ref} className='relative'>
      <div className='max-md:container md:h-[200vh]'>
        <motion.div
          className='top-0 mt-10 lg:sticky lg:mx-20 '
          style={{ scale: isLarge ? scale : 'auto' }}
        >
          <video
            autoPlay
            loop
            muted
            className='aspect-video rounded-3xl mix-blend-difference'
            src='/hero.mp4'
          >
            <track
              default
              kind='captions'
              label='English captions'
              src='/captions.vtt'
            />
          </video>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedVideo;
