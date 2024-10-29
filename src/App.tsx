export const App = () => {
  return (
    <>
      <header className='container flex md:flex-row flex-col align-middle items-center justify-between py-6 mb-12 mx-auto border-b border-orange-200/20'>
        <div
          className='flex items-center select-none  w-full'
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

      <main>
        <section className='bg-orange-300 w-full h-64 md:h-96 my-6 py-4 text-zinc-900'>
          <div className='container flex max-md:flex-col gap-4 mx-auto align-middle items-center h-full'>
            <p className='w-1/2 mx-auto'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              iusto commodi voluptatum a libero totam necessitatibus repellendus
              at quae est, praesentium magnam? Temporibus doloremque fuga
              commodi accusamus minus inventore tenetur.
            </p>
            <p className='w-1/2 mx-auto'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus
              iusto commodi voluptatum a libero totam necessitatibus repellendus
              at quae est, praesentium magnam? Temporibus doloremque fuga
              commodi accusamus minus inventore tenetur.
            </p>
          </div>
        </section>
        <section className='flex max-md:flex-row justify-around gap-2 md:gap-4 container mx-auto h-80 pt-8'>
          <section className='w-1/4 h-full border border-orange-200/20 shadow-md shadow-orange-600/15 rounded-md p-2'>
            <div className='flex flex-col justify-between align-middle items-center gap-4'>
              <h3 className='text-3xl'>Tax preparation</h3>
              <p className='text-center text-neutral-400'>
                Maximize compliance and minimize stress with our tailored tax
                services. Whether you're an individual or organization, we
                streamline tax preparation, filing, and planning to ensure
                accuracy and efficiency. Our experienced CPAs stay up-to-date
                with the latest tax codes, offering insights that align with
                your unique needs
              </p>
            </div>
          </section>
          <section className='w-1/4 h-full border border-orange-200/20 shadow-md shadow-orange-600/15 rounded-md p-2'>
            <div className='flex flex-col justify-between align-middle items-center gap-4'>
              <h3 className='text-3xl'>Bookkeeping</h3>
              <p className='text-center text-neutral-400'>
                Keep your finances organized and accessible with our
                professional bookkeeping services. We provide meticulous
                record-keeping, transaction tracking, and reconciliation,
                ensuring a clear picture of your financial health. Our digital
                solutions allow real-time access and reporting, keeping you
                informed and confident in your finances
              </p>
            </div>
          </section>
          <section className='w-1/4 h-full border border-orange-200/20 shadow-md shadow-orange-600/15 rounded-md p-2'>
            <div className='flex flex-col justify-between align-middle items-center gap-4'>
              <h3 className='text-3xl'>Nonprofit Accounting</h3>
              <p className='text-center text-neutral-400'>
                As specialists in nonprofit accounting, we understand the unique
                needs and requirements of tax-exempt organizations. From grant
                management to fund accounting, we ensure compliance,
                transparency, and accountability, enabling your organization to
                focus on impact and growth. With our expertise, you can trust
                that your mission is backed by sound financial practices
              </p>
            </div>
          </section>
          <section className='w-1/4 h-full border border-orange-200/20 shadow-md shadow-orange-600/15 rounded-md p-2'>
            <div className='flex flex-col justify-between align-middle items-center gap-4'>
              <h3 className='text-3xl'>Consultation Services</h3>
              <p className='text-center text-neutral-400'>
                Empower your organization with expert financial consultation
                services. Whether you're looking to streamline operations,
                improve financial strategies, or enhance compliance, our
                consultations are designed to provide actionable insights and
                custom solutions. With years of experience in nonprofit finance,
                we guide you to make informed, strategic decisions
              </p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
