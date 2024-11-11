import Link from 'next/link';

export const NoPage = () => {
  return (
    <div className='container mt-8 mx-auto'>
      <div className='flex flex-col justify-center align-middle p-12'>
        <h3 className='text-3xl mb-6'>Error 404 - Page Not Found!</h3>
        <p className='text-lg'>The page you are looking for does not exist.</p>
        <p>
          Please go back to the <Link href='/'>Home Page</Link>.
        </p>
      </div>
    </div>
  );
};
