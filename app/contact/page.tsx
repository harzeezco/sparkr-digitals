import AnimatedLink from '@/components/animated-text';
import { cn } from '@/lib/cn';
import type { Metadata } from 'next';
import Link from 'next/link';

import { bricolage } from '../font';
import { ContactForm } from './form';

export const metadata: Metadata = {
  title: 'Sparkr Digitals - About',
  description:
    'Sparkr digitals is a UI/UX agency based. We specialize in UI/UX design, branding, web, mobile development',
};

const FAQPage = () => (
  <main>
    <section className='mt-32'>
      <div className='container'>
        <h1
          className={cn(
            'mb-5 text-4xl max-w-3xl font-light md:text-4xl lg:text-6xl',
            bricolage.className,
          )}
        >
          Do you have a project you need help with? Contact us!
        </h1>

        <div className='mb-20 flex gap-x-24 max-sm:flex-col sm:items-center'>
          <Link className='mt-6 w-fit font-medium' href='/contact'>
            <AnimatedLink
              className='transition duration-200 hover:text-green-500'
              title='hello@sparkrstudio.com'
            />
            <hr className='border border-[#121718]/70' />
          </Link>

          <Link className='mt-6 w-fit font-medium' href='/contact'>
            <AnimatedLink
              className='transition duration-200 hover:text-green-500'
              title='+234 818 255 319 55'
            />
            <hr className='border border-[#121718]/70' />
          </Link>
        </div>

        <hr className='my-5 border-t border-solid border-green-600 opacity-10' />

        <ContactForm />
      </div>
    </section>
  </main>
);

export default FAQPage;
