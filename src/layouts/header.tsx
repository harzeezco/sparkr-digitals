'use client';

import AnimatedLink from '@/components/animated-text';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from '@/components/ui/drawer';
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
    name: 'Works',
    href: '/works',
  },
  {
    name: 'Blog',
    href: '/blog',
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
    url: 'https://www.linkedin.com/',
    brand: 'linkedin',
  },
  {
    id: 2,
    icon: <FaInstagram size={24} />,
    label: 'Instagram',
    url: 'https://www.instagram.com/',
    brand: 'instagram',
  },
  {
    id: 3,
    icon: <FaSquareXTwitter size={24} />,
    label: 'Twitter',
    url: 'https://twitter.com/Wkhayzed',
    brand: 'twitter',
  },
  {
    id: 4,
    icon: <FaGithub size={24} />,
    label: 'GitHub',
    url: 'https://github.com/harzeezco/',
    brand: 'github',
  },
];

export function DrawerBar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <Drawer>
      <DrawerTrigger asChild className='cursor-pointer'>
        {children}
      </DrawerTrigger>
      <DrawerContent className='bg-white'>
        <div className='px-6'>
          <div className='flex flex-col gap-4'>
            {NAVLINKS.map(({ href, name }) => {
              const isActive = href === pathname;

              return (
                <Link key={href} href={href}>
                  <DrawerClose asChild>
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
                  </DrawerClose>
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
          <DrawerFooter>
            <DrawerClose asChild>
              <Button>Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

const Header = () => {
  const pathname = usePathname();

  return (
    <header className='fixed inset-x-0 top-0 z-[9999] bg-[#EDF5F4]'>
      <div className='container flex items-center justify-between py-3'>
        <Logo />

        <nav className='max-lg:hidden'>
          <ul className='flex items-center gap-x-10'>
            {NAVLINKS.map(({ href, name }) => {
              const isActive = pathname === href;

              return (
                <Link key={name} href={href}>
                  <li
                    className={cn(
                      'text-[#000F06] transition-all duration-200 hover:text-green-500 active:text-green-500',
                      isActive ? 'text-green-500' : '',
                    )}
                  >
                    <AnimatedLink title={name} />
                  </li>
                </Link>
              );
            })}
          </ul>
        </nav>

        <div className='lg:hidden'>
          <DrawerBar>
            <button className='bg-[#DFFDE0] p-2' type='button'>
              <Image
                alt='hamburger'
                height={25}
                src='/icons/icon-hamburger.svg'
                width={25}
              />
            </button>
          </DrawerBar>
        </div>

        <div className='max-lg:hidden'>
          <Button variant='default'>
            <AnimatedLink
              className='h-9 w-28 items-center justify-center rounded-[8px] bg-primary text-white transition-all hover:bg-green-600 active:bg-green-600'
              title="Let's Talk"
              type='button'
            />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
