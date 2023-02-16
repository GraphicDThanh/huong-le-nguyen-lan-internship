import { Image } from '../Image';
import users from 'assets/icons/users.svg';
import './index.css';

const FeatureCard = () => {
  return (
    <div className='feature-card'>
      <Image image={users} size='xxxl' />
      <div className='card-description'>
        <p className='card-title'>100% Satisfaction</p>
        <p className='card-text'>So it really behaves like neither. Now we have given up. </p>
      </div>
    </div>
  );
};

export { FeatureCard };
