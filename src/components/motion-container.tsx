import * as React from 'react';
import { containerVariants } from '@/lib/motion';
import { motion, useInView } from 'framer-motion';

const MotionContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const container = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { once: true });

  return (
    <div ref={container}>
      {isInView && (
        <motion.div
          animate='visible'
          className={className}
          exit='exit'
          initial='hidden'
          variants={containerVariants}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
};

export default MotionContainer;
