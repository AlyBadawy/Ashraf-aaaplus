import { FooterAddress } from '@/components/footer/FooterAddress';
import { ContactUsForm } from './ContactUsForm';

export default function Contact() {
  return (
    <section className='container mx-auto'>
      <div className='md:w-2/3'>
        <h2 className='text-4xl py-6 font-bold'>Contact us:</h2>
        <p className='pb-4 text-neutral-300'>
          We are here to help you with all your tax, bookkeeping, and financial
          planning needs. Whether you have questions, need advice, or want to
          schedule an appointment, please do not hesitate to reach out. Complete
          the form below to send us a message, request a call, or book a time to
          meet with us. Our team is committed to providing timely, personalized
          support to help you achieve your financial goals.
        </p>
        <ContactUsForm />

        <hr className='my-4 border border-orange-300/20' />

        <div className='mb-4'>
          <h4 className='mb-1'>You may also contact us directly:</h4>
          <div className='text-neutral-300 text-sm italic'>
            <FooterAddress />
          </div>
        </div>

        <div className='mb-4'>
          <h4 className='mb-1'>Business Hours:</h4>
          <div className='text-neutral-300 text-sm italic'>
            <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            <p>Saturday: By appointment only</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
