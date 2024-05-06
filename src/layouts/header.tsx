import AnimatedLink from '@/components/aninated-text';
import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
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
    name: 'Works',
    href: '/works',
  },
  {
    name: 'Blog',
    href: '/blog',
  },
  {
    name: 'Contact Us',
    href: '/contact-us',
  },
];

const Header = () => (
  <header>
    <div className='container flex items-center justify-between py-4'>
      <Logo />

      <nav className='max-lg:hidden'>
        <ul className='flex items-center gap-x-10'>
          {NAVLINKS.map(({ href, name }) => (
            <Link key={name} href={href}>
              <li>
                <AnimatedLink title={name} />
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      <button className='bg-[#DFFDE0] p-3 lg:hidden' type='button'>
        <Image
          alt='hamburger'
          height={25}
          src='/icons/icon-hamburger.svg'
          width={25}
        />
      </button>

      <div className='max-lg:hidden'>
        <Button
          className='bg-primary transition-all hover:bg-green-600 active:bg-green-600'
          size='sm'
        >
          <AnimatedLink title="Let's Talk" />
        </Button>
      </div>
    </div>
  </header>
);

export default Header;
