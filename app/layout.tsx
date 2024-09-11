import Footer from '@/layouts/footer';
import Header from '@/layouts/header-v2';

import { local } from './font';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className='no-visible-scrollbar' lang='en'>
      <body className={`${local.className} relative text-[#181818]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
