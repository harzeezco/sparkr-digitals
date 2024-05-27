'use client';

import { cn } from '@/lib/cn';
import { motion } from 'framer-motion';

import { bricolage } from '../font';

const Header = () => (
  <>
    <motion.h1
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'text-center text-4xl mb-4 mx-auto max-w-3xl font-light md:text-4xl lg:text-6xl',
        bricolage.className,
      )}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      Discover our exceptional projects
    </motion.h1>

    <motion.p
      animate={{ opacity: 1, y: 0 }}
      className='mx-auto mb-16 max-w-2xl text-center text-lg lg:text-xl'
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      Every project embodies our fervor for creating indelible brand
      encounters. Delve into our portfolio below and uncover the
      narratives of triumph, ingenuity, and teamwork that characterize
      our agency.
    </motion.p>
  </>
);

export default Header;
