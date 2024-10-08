export const containerVariants = {
  hidden: {
    scale: 0,
    transition: {
      staggerChildren: 0.3,
    },
  },
  visible: {
    scale: 1,
    transition: {
      type: 'spring',
      mass: 0.4,
      damping: 8,
      staggerChildren: 0.4,
      when: 'beforeChildren',
    },
  },
};

export const childVariants = {
  hidden: {
    translateY: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
