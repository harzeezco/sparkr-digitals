import Footer from '@/layouts/footer';
import Header from '@/layouts/header';

import { local } from './font';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='no-visible-scrollbar' lang='en'>
      <body
        className={`${local.className} relative bg-[#EDF5F4] text-[#00542D]`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
