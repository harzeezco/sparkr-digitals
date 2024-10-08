'use client';

import AnimatedLink from '@/components/animated-text';
import Logo from '@/components/logo';
import Button from '@/components/ui/button-v2';
import useLenisScroll from '@/hooks/use-lenis-scroll';
import { cn } from '@/lib/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
} from 'react-icons/fa6';

const NAVLINKS = [
  {
    name: 'About Us',
    href: '/about-us',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Our Work',
    href: '/works',
  },

  {
    name: 'Contact Us',
    href: '/contact',
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    icon: <FaLinkedin size={24} />,
    label: 'LinkedIn',
    url: '',
    brand: 'linkedin',
  },
  {
    id: 2,
    icon: <FaInstagram size={24} />,
    label: 'Instagram',
    url: '',
    brand: 'instagram',
  },
  {
    id: 3,
    icon: <FaSquareXTwitter size={24} />,
    label: 'Twitter',
    url: '',
    brand: 'twitter',
  },
  {
    id: 4,
    icon: <FaGithub size={24} />,
    label: 'GitHub',
    url: '',
    brand: 'github',
  },
];

function NavBar() {
  const pathname = usePathname();

  return (
    <div className='px-6'>
      <div className='flex flex-col gap-4 '>
        {NAVLINKS.map(({ href, name }) => {
          const isActive = href === pathname;

          return (
            <Link key={href} href={href}>
              <div
                className={cn(
                  isActive
                    ? 'bg-dark-400 font-semibold'
                    : 'bg-transparent font-medium',
                  'text-lg transition-all p-4 py-3 duration-200 hover:bg-dark-400 active:bg-dark-400 w-full rounded-2xl',
                )}
              >
                {name}
              </div>
            </Link>
          );
        })}
      </div>

      <ul className='mb-11 mt-3 flex gap-3'>
        {socialMediaLinks.map(
          ({ brand, icon, id, label, url }, idx) => (
            <Link
              key={url}
              className={cn(
                'border-dark-400/20 border flex size-[70px] flex-col items-center justify-center gap-3 rounded-[2vw] border-solid bg-dark-600 p-2 transition-all duration-200',
                brand,
              )}
              href={url}
              style={{
                backgroundColor: idx === id ? brand : '',
              }}
              target='_blank'
              title={label}
            >
              {icon}
            </Link>
          ),
        )}
      </ul>
    </div>
  );
}

const Header = () => {
  //   const pathname = usePathname();

  useLenisScroll();

  return (
    <header className='container   fixed inset-x-0  top-0 z-[9999] pt-8 '>
      <div className=' flex items-center justify-between rounded-2xl py-2 pr-3  ring-gray-200 '>
        <Logo />
        <NavBar />
        <div className='flex items-center  gap-x-5  max-[430px]:gap-x-2'>
          <Button className='flex shrink-0 cursor-pointer  items-center justify-center gap-x-4 rounded-full p-[6px] pr-2 text-black ring-1 ring-gray-200 max-[430px]:gap-x-2  max-[430px]:p-1 max-[430px]:pr-3 '>
            <div className='flex size-9  shrink-0 items-center justify-center overflow-hidden rounded-full   ring-1 ring-gray-200'>
              <video autoPlay loop muted src='gesture.mp4'>
                <track
                  default
                  kind='captions'
                  label='English captions'
                  src='captions.vtt'
                />
              </video>
            </div>
            <p className='pr-2 text-primary mix-blend-difference'>
              <AnimatedLink title="Let's talk" />
            </p>
          </Button>

          <button
            className='min-w-12 rounded-full  bg-[#DFFDE0] p-4 ring-1 ring-primary  '
            type='button'
          >
            <Image
              alt='hamburger'
              height={20}
              src='/icons/icon-hamburger.svg'
              width={20}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
