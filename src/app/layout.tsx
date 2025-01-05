import './globals.css';
import type { Metadata } from 'next';
import { NameAndLogo } from '@/components/shared/NameAndLogo';
import { HeaderNav } from '@/components/nav/HeaderNav';
import { Footer } from '@/components/footer/Footer';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: 'AAA PLUS Financial Services',
  description:
    'AAA Plus Financial Services, based in Orlando, FL, offers expert tax preparation, bookkeeping, and financial consulting. Led by Ashraf Abeltawab, CPA, with over two decades of experience, we provide personalized, accurate, and client-focused financial solutions. Discover trustworthy financial guidance for individuals and small businesses in the Orlando area.',
  keywords: [
    'Tax Preparation Orlando',
    'Bookkeeping Services Orlando',
    'Financial Consultation Orlando',
    'Orlando CPA',
    'Nonprofit Accounting Orlando',
    'خدمات الضرائب أورلاندو',
    'خدمات المحاسبة أورلاندو',
    'استشارات مالية أورلاندو',
    'محاسب معتمد أورلاندو',
    'محاسبة الجمعيات غير الربحية أورلاندو',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='antialiased'>
        <div className='flex flex-col justify-between min-h-screen'>
          <div>
            <header className='container flex flex-col sm:flex-row align-middle items-center justify-between py-6 mb-8 mx-auto main-header px-2'>
              <Link href='/'>
                <NameAndLogo />
              </Link>
              <HeaderNav />
            </header>
            <div className='px-2'>{children}</div>
          </div>
          <Footer />
        </div>
      </body>
      <GoogleAnalytics gaId='G-FSZLV457E9' />
      <GoogleAnalytics gaId='AW-16787609825' />
    </html>
  );
}
