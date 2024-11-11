import { AAAPlus } from '@/components/shared/AAAPlus';

export default function Services() {
  return (
    <section className='container mx-auto text-neutral-300'>
      <div className='md:w-2/3'>
        <h2 className='text-4xl py-6 font-bold text-orange-300'>
          Our Services:
        </h2>
        <p>
          With <AAAPlus />, you gain more than just a service provider—you gain
          a dedicated partner in your financial success. Explore our
          comprehensive services, and let us help you achieve your financial
          goals with confidence and clarity. Reach out today to learn more about
          how we can support your journey.
        </p>

        <section id='tax-prep' className='flex flex-col gap-2'>
          <h3 className='text-2xl pt-4 font-bold text-orange-300'>
            Tax Preparation
          </h3>
          <p>
            Maximize compliance and minimize stress with our tailored tax
            services. At <AAAPlus />, we offer comprehensive tax preparation
            solutions for individuals, businesses, and nonprofits, designed to
            streamline the process from start to finish. Our team takes a
            proactive approach, identifying opportunities for deductions and
            credits that align with your unique financial situation, all while
            ensuring you meet every regulatory requirement.
          </p>
          <p>
            We understand that tax laws change frequently, which is why our CPAs
            stay current with the latest updates and codes. This allows us to
            provide accurate guidance that minimizes liability and supports
            long-term tax planning. With our expertise, you can rest assured
            that you are taking full advantage of all available tax benefits.
          </p>
          <p>
            For many, tax preparation can be a source of stress and uncertainty,
            but our transparent approach helps you feel informed and prepared.
            We break down complex tax concepts into actionable steps, keeping
            you in control and confident in your tax outcomes. Whether you are
            filing simple individual returns or complex organizational taxes, we
            are here to support you with precision and care.
          </p>
        </section>

        <section id='book-keeping' className='flex flex-col gap-2'>
          <h3 className='text-2xl pt-4 font-bold text-orange-300'>
            Bookkeeping
          </h3>
          <p>
            Keep your finances organized and accessible with our meticulous
            bookkeeping services. We focus on providing accurate, consistent
            record-keeping to help you stay on top of transactions, expenses,
            and financial summaries. This means you have reliable data at your
            fingertips, allowing you to make informed decisions for your
            business or personal finances.
          </p>
          <p>
            Our bookkeeping services include transaction tracking,
            reconciliation, and financial reporting to give you a clear picture
            of your financial health. We use advanced digital solutions to
            ensure your records are secure and accessible, giving you the
            ability to view reports and data in real time. Our goal is to
            simplify the bookkeeping process, enabling you to focus on other
            priorities with confidence.
          </p>
          <p>
            With <AAAPlus /> as your bookkeeping partner, you benefit from our
            commitment to accuracy and transparency. We take the time to
            understand your specific needs and deliver reports that are both
            detailed and easy to understand. Let us help you maintain organized
            financial records that set the foundation for sustainable growth and
            financial well-being.
          </p>
        </section>

        <section id='npo' className='flex flex-col gap-2'>
          <h3 className='text-2xl pt-4 font-bold text-orange-300'>
            Nonprofit Accounting
          </h3>
          <p>
            As specialists in nonprofit accounting, we understand the distinct
            requirements and challenges of managing tax-exempt organizations.
            Our services are designed to handle everything from grant management
            and donor reporting to fund accounting, ensuring your organization
            remains compliant and accountable to your stakeholders. We take
            pride in offering accounting solutions that align with the values
            and goals of nonprofits.
          </p>
          <p>
            Transparency and accuracy are critical in nonprofit accounting, as
            financial data supports your mission and builds donor trust. Our
            team provides detailed reports and financial insights tailored to
            the nonprofit sector, helping you demonstrate the responsible use of
            funds. We keep you informed of any regulatory changes that may
            impact your reporting and compliance requirements.
          </p>
          <p>
            With <AAAPlus />, you have a partner dedicated to the success of
            your mission. Our experience in nonprofit finance allows us to guide
            you in optimizing resources and managing funds effectively. You can
            rely on us to provide a foundation of financial stability that
            allows you to focus on driving positive change within your
            community.
          </p>
        </section>

        <section id='consult' className='flex flex-col gap-2'>
          <h3 className='text-2xl pt-4 font-bold text-orange-300'>
            Consultation Services
          </h3>
          <p>
            Empower your organization with expert financial consultation
            services tailored to your specific needs. Our consultations are
            designed to provide actionable insights and custom solutions for
            improving financial strategies, operational efficiency, and
            compliance. With years of experience in both nonprofit and business
            finance, we bring a wealth of knowledge to guide your
            decision-making.
          </p>
          <p>
            Our approach to consultation goes beyond traditional advice. We take
            the time to assess your current financial landscape, understand your
            goals, and identify opportunities for growth and improvement.
            Whether you are facing challenges in budgeting, planning, or
            financial compliance, we offer practical solutions that help you
            achieve lasting success.
          </p>
          <p>
            At <AAAPlus />, our goal is to equip you with the tools and insights
            you need to make informed financial decisions. We believe that a
            strong financial foundation leads to sustainable growth, and we are
            here to support you every step of the way. Trust our experienced
            consultants to provide the strategic guidance necessary for
            navigating today&apos;s financial complexities.
          </p>
        </section>
      </div>
    </section>
  );
}
