import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';

import { bricolage } from '../font';

const BlogPage = () => (
  <section className='container mt-36'>
    <div className='mx-auto flex max-w-4xl flex-col items-center justify-center space-y-4'>
      <h1
        className={cn(
          'text-center text-4xl font-light md:text-5xl lg:text-6xl',
          bricolage.className,
        )}
      >
        Our Latest Blog
      </h1>
      <p className='mx-auto max-w-2xl text-center text-lg lg:text-xl'>
        This is under development. We will make sure we give you the
        best update when completed. We apologize for the delay. You
        can check our works by clicking below.
      </p>

      <Link href='/works'>
        <Button className='mb-3 bg-primary px-20 py-4 transition-all hover:bg-green-600 active:bg-green-600 lg:hidden'>
          <AnimatedLink
            className='font-bricolage text-xl font-light'
            title='Our Works'
          />
        </Button>
      </Link>
    </div>
  </section>
);

export default BlogPage;
