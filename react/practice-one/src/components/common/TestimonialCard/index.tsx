import { Image } from '../Image';
import './index.css';
import Star from 'assets/icons/star.svg';
import StarFill from 'assets/icons/star-fill.svg';
import { useState } from 'react';

interface Props {
  name?: string;
  job?: string;
  image?: string;
  description?: string;
}

const TestimonialCard = ({ name, job, image, description }: Props) => {
  const [starsClick, setsStarsClick] = useState(1);
  const stars = Array(5).fill(0);

  const handleClick = (value: number) => {
    setsStarsClick(value);
  };

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
        {stars.map((_, index) => {
          return (
            <Image
              image={starsClick > index ? StarFill : Star}
              onClick={() => handleClick(index + 1)}
              pointer={true}
              key={index}
            />
          );
        })}
      </div>
      <div className='card-description'>
        <p>{description}</p>
      </div>
    </div>
  );
};

export { TestimonialCard };
