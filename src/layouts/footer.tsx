import AnimatedLink from '@/components/animated-text';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';

import { bricolage } from '../../app/font';

const Footer = () => (
  <footer className='mt-24 bg-[#2F2F2F] pt-10'>
    <div className='mx-auto flex max-w-[1100px] justify-between py-10'>
      <div>
        <h1
          className={cn(
            'mx-auto max-w-xl text-white text-3xl font-medium sm:text-4xl lg:text-6xl mb-7',
            bricolage.className,
          )}
        >
          Have an idea? Tell us about it
        </h1>

        <Link href='/contact'>
          <Button
            className='bg-primary px-8 transition-all hover:bg-green-600 active:bg-green-600'
            size='lg'
          >
            <AnimatedLink className='' title="Let's Talk" />
          </Button>
        </Link>
      </div>

      <FooterNav />
    </div>

    <hr className='border-t border-solid text-gray-100 opacity-30' />

    <div className='mx-auto flex max-w-[1100px] justify-between py-5 text-lg tracking-wide'>
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
  </footer>
);

function FooterNav() {
  return (
    <nav className='mb-10 mt-5'>
      <ul className='flex flex-col justify-between gap-x-20 gap-y-6 md:flex-row'>
        {FOOTER_LINKS.map((details) => (
          <li key={details.id}>
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
          </li>
        ))}
      </ul>
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
        href: '',
      },
      {
        id: 1,
        label: 'About Us',
        href: '',
      },
      {
        id: 2,
        label: 'Services',
        href: '',
      },
      {
        id: 3,
        label: 'Process',
        href: '/process',
      },
      {
        id: 4,
        label: 'Works',
        href: '',
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
        href: '',
      },
      {
        id: 1,
        label: 'Careers',
        href: '',
      },
      {
        id: 2,
        label: 'Blogs',
        href: '',
      },
      {
        id: 3,
        label: 'Contact',
        href: '',
      },
      {
        id: 3,
        label: 'FAQs',
        href: '',
      },
    ],
  },
];

export default Footer;
