import { FeatureCard } from 'components/common/FeatureCard';
import './index.css';

import Frame from 'assets/icons/frame.svg';
import Map from 'assets/icons/map.svg';
import Users from 'assets/icons/users.svg';

const Feature = () => {
  return (
    <div className='feature-wrapper'>
      <div className='container'>
        <FeatureCard
          image={Frame}
          title='Peace of Mind'
          text='So it really behaves like neither. Now we have given up.'
        />
        <FeatureCard
          image={Map}
          title='Set For Life'
          text='They were used to create the machines that launched.'
        />
        <FeatureCard
          image={Users}
          title='100% Satisfaction'
          text='So it really behaves like neither. Now we have given up.'
        />
      </div>
    </div>
  );
};

export { Feature };
