import { Image } from '../Image';
import './index.css';
import StarFill from 'assets/icons/star-fill.svg';
import { listStars } from 'constants/listData';

interface Props {
  name?: string;
  job?: string;
  rate?: number;
  image?: string;
  description?: string;
}

const TestimonialCard = ({ name, job, image, rate, description }: Props) => {
  const stars = listStars.fill(StarFill, 0, rate);

  return (
    <div className='testimonial-card'>
      <div className='card-header'>
        <p className='card-name'>{name}</p>
        <p className='card-job'>{job}</p>
      </div>
      <div className='card-avatar'>
        <Image image={image} size='xxl' />
      </div>
      <div className='rate'>
        {stars.map((item, index) => {
          return <Image image={item} key={index} />;
        })}
      </div>
      <div className='card-description'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { TestimonialCard };
