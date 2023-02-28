import './index.css';
import { Banner } from 'layouts/Banner';
import { Testimonial } from 'layouts/Testimonial';
import { Feature } from 'layouts/Feature';
import { Industry } from 'layouts/Industry';
import { Pricing } from 'layouts/Pricing';
import { Contact } from 'layouts/Contact';
import { NewLetter } from 'layouts/NewLetter';
import { Footer } from 'layouts/Footer';

const HomePage = () => {
  return (
    <div className='home-page'>
      <Banner />
      <body className='main-content'>
        <Testimonial />
        <Feature />
        <Industry />
        <Pricing />
        <Contact />
        <NewLetter />
      </body>
      <Footer />
    </div>
  );
};

export { HomePage };
