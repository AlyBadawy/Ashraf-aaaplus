import { FooterNav } from '../nav/FooterNav';
import { NameAndLogo } from '../shared/NameAndLogo';
import { FooterAddress } from './FooterAddress';
import { FooterCopyrights } from './FooterCopyrights';

export const Footer = () => {
  return (
    <footer className='bg-zinc-800 text-neutral-300 py-8 mt-20'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-wrap justify-between items-start'>
          <NameAndLogo footer />
          <FooterAddress />
          <FooterNav />
        </div>

        <FooterCopyrights />
      </div>
    </footer>
  );
};
