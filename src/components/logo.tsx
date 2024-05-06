import Image from 'next/image';
import Link from 'next/link';

const Logo = () => (
  <Link href='/'>
    <Image
      alt='Sparkr Digitals Logo'
      height={36}
      src='/icons/icon-logo.svg'
      width={138}
    />
  </Link>
);

export default Logo;
