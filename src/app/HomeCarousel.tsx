import { useState, useEffect } from 'react';

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  'https://example.com/image4.jpg',
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className='relative w-full max-w-3xl mx-auto'>
      {/* Image */}
      <div className='overflow-hidden rounded-lg shadow-lg'>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className='w-full h-64 object-cover'
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition'
      >
        &larr;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition'
      >
        &rarr;
      </button>

      {/* Dots */}
      <div className='flex justify-center mt-4'>
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? 'bg-orange-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
