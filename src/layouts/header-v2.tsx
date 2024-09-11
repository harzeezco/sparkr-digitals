'use client';

import Logo from '@/components/logo';
import Button from '@/components/ui/button-v2';
import Image from 'next/image';
import Link from 'next/link';

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
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
];

const Header = () => (
  //   const pathname = usePathname();

  //   useLenisScroll();

  <header className='container   fixed inset-x-0  top-0 z-[9999] pt-8 '>
    <div className=' flex items-center justify-between rounded-2xl py-2 pr-3  ring-gray-200 lg:bg-white lg:ring-1'>
      <Logo />

      <nav className='max-lg:hidden'>
        <ul className='flex items-center  gap-x-10 text-black'>
          {NAVLINKS.map(({ href, name }) => (
            //   const isActive = pathname === href;
            <Link key={name} href={href}>
              <li>{name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      <div className='flex items-center  gap-x-5  max-[430px]:gap-x-2'>
        <Button className='flex shrink-0 cursor-pointer  items-center justify-center gap-x-4 rounded-full p-[6px] pr-2 text-black ring-2 ring-gray-200 max-[430px]:gap-x-2  max-[430px]:p-1 max-[430px]:pr-3 lg:hidden'>
          <div className='flex size-9  shrink-0 items-center justify-center overflow-hidden rounded-full   ring-2 ring-gray-200'>
            <video autoPlay loop src='gesture.mp4'>
              <track
                default
                kind='captions'
                label='English captions'
                src='captions.vtt'
              />
            </video>
          </div>
          <p>Let&apos;s talk</p>
        </Button>
        <Button className='min-w-12 rounded-full  bg-[#DFFDE0] p-4 ring-1 ring-primary  lg:hidden'>
          <Image
            alt='hamburger'
            height={20}
            src='/icons/icon-hamburger.svg'
            width={20}
          />
        </Button>
      </div>

      <Button className='flex items-center  justify-center gap-x-2 rounded-full bg-primary  px-5 py-[10px] text-white max-lg:hidden'>
        <Image
          alt='phone icon'
          className='size-6'
          height={20}
          src='/icons/phone.svg'
          width={20}
        />
        <p>Book a call</p>
      </Button>
    </div>
  </header>
);

export default Header;
