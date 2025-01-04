import Logo from '../../../public/logo.png';
import LogoFooter from '../../../public/logo-footer.jpg';
import Image from 'next/image';

export const NameAndLogo = ({ footer }: { footer?: boolean }) => {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-28'>
        <Image src={footer ? LogoFooter : Logo} alt='AAA Plus Logo' />
      </div>
      <div className='flex flex-col'>
        <div className='text-3xl font-bold'>AAA Plus</div>
        <div className='text-xl'>Financial Services</div>
        <div className='h-1 bg-emerald-800 rounded' />
        <p>Tax &bull; Accounting &bull; NPOs</p>
      </div>
    </div>
  );
};
