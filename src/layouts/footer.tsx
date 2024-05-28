'use client';

import AnimatedLink from '@/components/animated-text';
import MotionContainer from '@/components/motion-container';
import SlideInAnimation from '@/components/slide-in-animation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { childVariants } from '@/lib/motion';
import { motion } from 'framer-motion';
import Link from 'next/link';

import { bricolage } from '../../app/font';

const Footer = () => (
  <footer className='mt-24 bg-[#2F2F2F] pt-10'>
    <div className='container'>
      <div className='mx-auto flex max-w-[1050px] justify-between gap-y-10 py-10 max-lg:flex-col'>
        <div>
          <SlideInAnimation
            as='h1'
            className={cn(
              'max-w-xl text-white text-3xl font-medium sm:text-4xl lg:text-6xl mb-7',
              bricolage.className,
            )}
          >
            Have an idea? Tell us about it
          </SlideInAnimation>

          <SlideInAnimation as={Link} href='/contact'>
            <Button variant='default'>
              <AnimatedLink
                className='h-11 w-60 items-center justify-center rounded-[8px] bg-primary font-medium text-white transition-all hover:bg-green-600 active:bg-green-600'
                title="Let's Talk"
                type='button'
              />
            </Button>
          </SlideInAnimation>
        </div>

        <FooterNav />
      </div>

      <hr className='border-t border-solid text-gray-100 opacity-30' />

      <div className='mx-auto flex max-w-[1050px] justify-between gap-y-6 py-5 text-lg tracking-wide max-md:flex-col-reverse'>
        <p className='text-sm text-gray-100 opacity-30'>
          Copyright © {new Date().getFullYear()} Sparkr Studio
        </p>

        <ul className='flex items-center gap-4 uppercase'>
          {SOCIALS.map(({ href, label }) => (
            <Link key={href} href={href}>
              <li className='text-sm font-semibold tracking-wide text-gray-100 opacity-30 transition-all duration-200 hover:text-white hover:opacity-100 active:text-white'>
                <AnimatedLink title={label} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);

function FooterNav() {
  return (
    <nav className='mb-10 mt-5'>
      <MotionContainer className='flex flex-col gap-x-20 gap-y-6 md:flex-row lg:justify-between'>
        {FOOTER_LINKS.map((details) => (
          <motion.li
            key={details.id}
            className='list-none'
            variants={childVariants}
          >
            <h1 className='mb-6 text-xl font-bold text-white'>
              {details.title}
            </h1>
            <ul className='grid gap-3'>
              {details.links.map((link) => (
                <Link key={link.id} href={link.href}>
                  <li className='text-lg font-semibold tracking-wide text-gray-100 opacity-30 transition-all duration-200 hover:text-white hover:opacity-100 active:text-white'>
                    <AnimatedLink title={link.label} />
                  </li>
                </Link>
              ))}
            </ul>
          </motion.li>
        ))}
      </MotionContainer>
    </nav>
  );
}

const SOCIALS = [
  {
    label: 'Instagram',
    href: '',
  },
  {
    label: 'linkedin',
    href: '',
  },
  {
    label: 'Twitter',
    href: '',
  },
];

export const FOOTER_LINKS = [
  {
    id: 0,
    title: 'Company',
    links: [
      {
        id: 0,
        label: 'Home',
        href: '/',
      },
      {
        id: 1,
        label: 'About Us',
        href: '/about-us',
      },
      {
        id: 2,
        label: 'Services',
        href: '/services',
      },
      {
        id: 3,
        label: 'Process',
        href: '/process',
      },
      {
        id: 4,
        label: 'Works',
        href: '/works',
      },
    ],
  },
  {
    id: 1,
    title: 'Discover',
    links: [
      {
        id: 0,
        label: 'Pricing',
        href: '/pricing',
      },
      {
        id: 1,
        label: 'Careers',
        href: '/career',
      },
      {
        id: 2,
        label: 'Blogs',
        href: '/blog',
      },
      {
        id: 3,
        label: 'Contact',
        href: '/contact',
      },
      {
        id: 4,
        label: 'FAQs',
        href: '/faq',
      },
    ],
  },
];

export default Footer;
