import { FeatureCard } from 'components/FeatureCard';
import { listFeature } from 'constants/listData';
import './index.css';

const Feature = () => {
  return (
    <div className='feature-wrapper'>
      <div className='container'>
        {listFeature.map((item) => (
          <FeatureCard key={item.id} image={item.image} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
};

export { Feature };
