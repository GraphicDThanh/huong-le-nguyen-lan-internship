import './index.css';
import AvatarWoman from 'assets/images/avatar-woman.png';
import AvatarMan from 'assets/images/avatar-man.png';

import { TestimonialCard } from 'components/TestimonialCard';
import { Typography } from 'components/Typography';

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
          <TestimonialCard
            image={AvatarWoman}
            description='This proved to be impossible using the traditional concepts of space and time. Einstein
            developed a new view of time first and then space. This proved to be impossible
            using the traditional concepts of space and time. Einstein developed a
            new view of time first and then space.'
            job='Designer'
            name='Regina Miles'
          />
          <TestimonialCard
            image={AvatarMan}
            description='This proved to be impossible using the traditional concepts of space and time. Einstein
            developed a new view of time first and then space. This proved to be impossible
            using the traditional concepts of space and time. Einstein developed a
            new view of time first and then space.'
            job='Designer'
            name='Regina Miles'
          />
        </div>
      </div>
    </div>
  );
};

export { Testimonial };
