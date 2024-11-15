import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John D.',
      role: 'Small Business Owner',
      text: 'AAA Plus Financial Services has been a game changer for my business. Their expertise in bookkeeping and tax preparation saved me countless hours and headaches. Highly recommended!',
      image: '/t1.jpg',
    },
    {
      name: 'Sarah L.',
      role: 'Nonprofit Director',
      text: 'The team at AAA Plus understands the unique challenges of nonprofit accounting. Their insights and attention to detail have helped us stay compliant and focus on our mission.',
      image: '/t2.jpg',
    },
    {
      name: 'Ahmed M.',
      role: 'Individual Client',
      text: 'As an Arabic-speaking client, I truly appreciated their ability to explain complex tax issues in a way I understood. They are professional, patient, and knowledgeable.',
      image: '/t3.jpg',
    },
  ];

  return (
    <section className='my-8 pt-12'>
      <div className='container mx-auto text-center'>
        <h2 className='text-4xl font-bold mb-6'>What Our Clients Say</h2>
        <div className='flex flex-wrap justify-center gap-8'>
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='bg-emerald-800 rounded-xl shadow-md shadow-emerald-300/20 p-6 max-w-sm flex flex-col items-center text-center'
            >
              <div className='w-24 h-24 mb-4'>
                <Image
                  src={testimonial.image}
                  alt={`Photo of ${testimonial.name}`}
                  width={96}
                  height={96}
                  className='rounded-full object-cover'
                />
              </div>
              <h4 className='text-xl font-semibold'>{testimonial.name}</h4>
              <p className='text-sm text-gray-300 mb-4'>{testimonial.role}</p>
              <p className='text-white italic'>{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
