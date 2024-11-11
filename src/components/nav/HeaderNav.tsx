'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const HeaderNav = () => {
  const path = usePathname();

  console.log('path', path);

  return (
    <nav className='flex gap-4 items-center max-md:py-4 select-none'>
      <Link href='/' className={path === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link href='/about' className={path === '/about' ? 'active' : ''}>
        About
      </Link>
      <Link href='/services' className={path === '/services' ? 'active' : ''}>
        Services
      </Link>
      <Link href='/contact' className={path === '/contact' ? 'active' : ''}>
        Contact
      </Link>
    </nav>
  );
};
