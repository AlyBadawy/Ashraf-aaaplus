import { AAAPlus } from '@/components/shared/AAAPlus';
import { CTA } from '@/components/shared/CTA';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section className='container mx-auto'>
      <div className='md:w-2/3'>
        <h2 className='text-4xl py-6 font-bold'>About AAA Plus:</h2>
        <p className='pb-4 text-neutral-400'>
          Based in the heart of Orlando, FL, <AAAPlus /> was founded in 2024 to
          serve the unique financial needs of individuals, small businesses, and
          not-for-profit organizations in our local community. With a focus on
          tax preparation, bookkeeping, and financial consulting, we bring the
          latest expertise in tax codes, regulations, and financial strategies
          to ensure our clients have the tools they need to succeed.
        </p>
        <p className='pb-4 text-neutral-400'>
          Our commitment to staying up-to-date with the ever-evolving financial
          landscape means that whether you are navigating complex tax laws or
          looking to grow your business, <AAAPlus /> has the knowledge and
          dedication to help you thrive. We are proud to be part of the Orlando
          community and look forward to helping our neighbors achieve financial
          peace of mind.
        </p>

        <h4 className='text-2xl py-4 font-bold'>
          Meet Our Founder: Ashraf Abeltawab
        </h4>
        <div className='flex flex-col md:flex-row-reverse items-center gap-6'>
          {/* Ashraf's Picture */}
          <div className='w-full md:w-1/3'>
            <Image
              src='/ashraf.jpg' // Replace with the actual image path
              alt='Ashraf Abeltawab, CPA'
              width={300}
              height={300}
              className='rounded-lg object-cover border-2 border-orange-300/80'
            />
          </div>

          {/* Ashraf's Bio */}
          <div className='flex-1'>
            <p className='pb-4 text-neutral-400'>
              Ashraf Abeltawab, CPA, brings over two decades of dedicated
              experience to <AAAPlus />. He passed the rigorous CPA exams
              through the California Board of Accountancy in 2008, achieving his
              CPA license in North Dakota in 2016. With a strong foundation in
              Generally Accepted Accounting Principles (GAAP), financial
              accounting, and strategic budgeting, planning, and forecasting,
              Ashraf combines his professional expertise with a passion for
              helping clients achieve their financial goals.
            </p>
            <p className='pb-4 text-neutral-400'>
              With this robust skill set, Ashraf has a proven record of
              enhancing and managing the financial operations of organizations
              both large and small. He applies this knowledge to help
              individuals and businesses across Orlando make informed decisions,
              ensuring they meet compliance standards while positioning
              themselves for growth. At <AAAPlus />, Ashraf is dedicated to
              building client relationships that prioritize trust, accuracy, and
              long-term financial health.
            </p>
          </div>
        </div>

        <h4 className='text-2xl py-4 font-bold'>Our Commitment to You</h4>
        <p className='pb-4 text-neutral-400'>
          At <AAAPlus />, our mission is to provide personalized, accurate, and
          insightful financial services that empower our clients to make sound
          financial decisions with confidence. We believe in building strong,
          lasting relationships founded on trust, integrity, and a
          client-focused approach. By combining a hands-on, individualized
          service model with deep expertise in tax laws, financial planning, and
          compliance, we are committed to helping Orlando’s individuals and
          small businesses reach their full financial potential.
        </p>
        <p className='pb-4 text-neutral-400'>
          As we look toward the future, <AAAPlus /> is excited to grow alongside
          our community. Our goal is to expand our team, extend our services,
          and continually adapt to meet the evolving needs of our clients. With
          each year, we aim to deepen our impact in Orlando, helping more
          neighbors navigate the complexities of tax, bookkeeping, and financial
          management.
        </p>

        <h4 className='text-2xl py-4 font-bold'>Ready to Get Started?</h4>
        <p className='pb-4 text-neutral-400'>
          We invite you to <Link href='/contact'>reach out</Link> and discover
          the difference that personalized, professional financial guidance can
          make. Whether you are seeking assistance with taxes, managing your
          books, or planning for the future, <AAAPlus /> is here to support you
          every step of the way.
        </p>
        <p>
          <CTA dark />
        </p>
      </div>
    </section>
  );
}
