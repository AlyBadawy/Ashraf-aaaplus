import Link from 'next/link';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type HomeSectionProps = {
  title: string;
  sectionId: string;
  icon: IconType;
  children: ReactNode;
};

export const HomeSection = ({
  title,
  icon: Icon,
  sectionId,
  children,
}: HomeSectionProps) => {
  return (
    <section className='w-full md:w-[45%] lg:w-[22%] border border-orange-200/20 shadow-md shadow-orange-600/15 rounded-xl p-6'>
      <div className='flex flex-col justify-between h-full'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex flex-col items-center min-h-32'>
            <Icon className='text-orange-300 text-4xl mb-6' />
            <h3 className='text-3xl text-center font-semibold'>{title}</h3>
          </div>
          <p className='text-center text-neutral-400'>{children}</p>
        </div>
        <Link href={`/services#${sectionId}`} className='self-end'>
          Read mode...
        </Link>
      </div>
    </section>
  );
};
