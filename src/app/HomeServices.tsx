import { FaFileInvoiceDollar } from 'react-icons/fa';
import { AiOutlineBook } from 'react-icons/ai';
import { GiReceiveMoney } from 'react-icons/gi';
import { MdOutlineSupportAgent } from 'react-icons/md';
import { HomeSection } from './HomeSection';

export const HomeServices = () => {
  return (
    <section className='flex flex-wrap max-md:flex-col justify-around gap-8 container mx-auto h-auto pt-12 px-4'>
      <HomeSection title='Tax Preparation' icon={FaFileInvoiceDollar}>
        Maximize compliance and minimize stress with our tailored tax services.
        Whether you are an individual or organization, we streamline tax
        preparation, filing, and planning to ensure accuracy and efficiency. Our
        experienced CPAs stay up-to-date with the latest tax codes, offering
        insights that align with your unique needs.
      </HomeSection>
      <HomeSection title='Bookkeeping' icon={AiOutlineBook}>
        Keep your finances organized and accessible with our professional
        bookkeeping services. We provide meticulous record-keeping, transaction
        tracking, and reconciliation, ensuring a clear picture of your financial
        health. Our digital solutions allow real-time access and reporting,
        keeping you informed and confident in your finances.
      </HomeSection>
      <HomeSection title='Nonprofit Accounting' icon={GiReceiveMoney}>
        As specialists in nonprofit accounting, we understand the unique needs
        and requirements of tax-exempt organizations. From grant management to
        fund accounting, we ensure compliance, transparency, and accountability,
        enabling your organization to focus on impact and growth. With our
        expertise, you can trust that your mission is backed by sound financial
        practices.
      </HomeSection>
      <HomeSection title='Consultation Services' icon={MdOutlineSupportAgent}>
        Empower your organization with expert financial consultation services.
        Whether you are looking to streamline operations, improve financial
        strategies, or enhance compliance, our consultations are designed to
        provide actionable insights and custom solutions. With years of
        experience in nonprofit finance, we guide you to make informed,
        strategic decisions.
      </HomeSection>
    </section>
  );
};
