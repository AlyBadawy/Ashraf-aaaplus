import { CTA } from '@/components/shared/CTA';
import HomeHeroImage from '../../public/home-hero.svg';
import Image from 'next/image';

export const HomeHero = () => {
  return (
    <section className='bg-orange-300 w-full my-6 max-md:py-12 pt-24 pb-12 text-zinc-700 -px-'>
      <div className='container flex max-lg:flex-col gap-8 md:gap-6 mx-auto align-middle items-center h-full'>
        <div className='md:w-1/2 mx-auto max-md:px-4'>
          <h1 className='text-4xl md:text-6xl font-bold mb-4'>
            Your trusted partner for{' '}
            <span className='italic text-emerald-800'>Simple</span> and{' '}
            <span className='italic text-emerald-800'>Stress-Free</span>{' '}
            financial solutions
          </h1>
          <p className='text-lg md:text-2xl mb-8 max-w-2xl'>
            From tax filing and bookkeeping to nonprofit accounting and
            financial services, we handle the complexities so you can focus on
            what matters most.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mb-8'>
            <CTA />
            <button className='bg-transparent border border-zinc-900 text-zinc-900 px-6 py-3 rounded-md font-medium hover:bg-emerald-800 hover:text-white transition duration-300'>
              Learn About Our Services
            </button>
          </div>
        </div>
        <div className='md:w-1/2 max-md:px-4 mx-auto'>
          <Image src={HomeHeroImage} className='w-2/3 mx-auto' alt='' />
        </div>
      </div>
      <div className='flex max-md:hidden gap-4 text-sm md:text-base justify-center mt-8 italic'>
        <div>
          <p className='font-semibold '>Trusted Local Expertise</p>
        </div>
        <div>
          <p>&bull;</p>
        </div>
        <div>
          <p className='font-semibold'>Certified, Experienced Professionals</p>
        </div>
        <div>
          <p>&bull;</p>
        </div>
        <div>
          <p className='font-semibold'>Personalized Tax Solutions</p>
        </div>
      </div>
      <div className='flex max-md:hidden gap-4 text-sm md:text-base justify-center mt-1 italic'>
        <div>
          <p className='font-bold '>We speak Arabic</p>
        </div>
        <div>
          <p>&bull;</p>
        </div>
        <div>
          <p className='font-bold'>نتحدث العربية</p>
        </div>
      </div>
    </section>
  );
};
