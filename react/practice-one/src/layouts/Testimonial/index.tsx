import './index.css';
import { TestimonialCard } from 'components/TestimonialCard';
import { Typography } from 'components/Typography';
import { listTestimonial } from 'constants/listData';

const Testimonial = () => {
  return (
    <div className='testimonial-wrapper'>
      <div className='container'>
        <div className='testimonial-title'>
          <Typography
            text='What Clients Say'
            tagName='h2'
            size='xl'
            weight='bold'
            classTypography='section-title'
            statusText='primary-text'
          />
          <Typography
            text='Industry'
            tagName='h2'
            size='xl'
            weight='bold'
            classTypography='section-title'
            statusText='secondary-text'
          />

          <Typography
            text='Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics '
            classTypography='section-text'
            size='nor'
            weight='medium'
          />
        </div>
        <div className='testimonial-content'>
          {listTestimonial.map((item) => (
            <TestimonialCard
              key={item.id}
              image={item.image}
              rate={item.rate}
              description={item.description}
              job={item.job}
              name={item.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
