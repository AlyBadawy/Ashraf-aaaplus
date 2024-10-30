import { Footer } from './footer/Footer';
import { HomeMain } from './home/HomeMain';

export const App = () => {
  return (
    <>
      <header className='container flex  flex-col sm:flex-row  align-middle items-center justify-between py-6 mb-8 mx-auto border-b border-orange-200/20'>
        <div
          className='flex items-center select-none'
          data-svelte-h='svelte-cequfd'
        >
          <a href='/' className='flex  flex-col gap-2'>
            <div className='text-4xl'>AAA Plus</div>
            <div className='flex items-center logotype '>
              Financial Services
            </div>
          </a>
        </div>
        <nav className='flex gap-4 items-center max-md:py-4 select-none'>
          <a href='/' className='active'>
            Home
          </a>
          <a href='/about'>About</a>
          <a href='/services'>Services</a>
          <a href='/contact'>Contact</a>
        </nav>
      </header>

      <HomeMain />

      <Footer />
    </>
  );
};
