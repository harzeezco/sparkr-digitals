import { Bricolage_Grotesque } from 'next/font/google';
import localFont from 'next/font/local';

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const local = localFont({
  src: '../public/font/Satoshi-Regular.woff',
  display: 'swap',
  variable: '--font-satoshi',
});
