import './index.css';
import { Banner } from 'components/layouts/Banner';
import { Testimonial } from 'components/layouts/Testimonial';
import { Feature } from 'components/layouts/Feature';
import { Industry } from 'components/layouts/Industry';
import { Pricing } from 'components/layouts/Pricing';
import { Contact } from 'components/layouts/Contact';
import { NewLetter } from 'components/layouts/NewLetter';
import { Footer } from 'components/layouts/Footer';

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
