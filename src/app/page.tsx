import { HomeHero } from './HomeHero';
import { HomeServices } from './HomeServices';
import Testimonials from './HomeTestimonials';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeServices />
      <Testimonials />
    </main>
  );
}
