export const FooterCopyrights = () => {
  return (
    <div className='mt-8 text-center text-xs'>
      <p>
        &copy; {new Date().getFullYear()} AAA Plus Financial Services. Developed
        by
        <a
          href='https://alybadawy.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Aly Badawy
        </a>
        .
      </p>
    </div>
  );
};
