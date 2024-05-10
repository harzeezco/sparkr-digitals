import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Link href='/'>
    <Image
      alt='Sparkr Digitals Logo'
      className='max-h-[40px]'
      height={36}
      src='/icons/icon-logo.svg'
      width={138}
    />
  </Link>
);

export default Logo;
