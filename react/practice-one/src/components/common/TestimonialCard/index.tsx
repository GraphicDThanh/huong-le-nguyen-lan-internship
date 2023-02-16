import { Image } from '../Image';
import './index.css';
import Star from 'assets/icons/star.svg';
import StarFill from 'assets/icons/star-fill.svg';
import AvatarWoman from 'assets/images/avatar-woman.png';
import { useState } from 'react';

const TestimonialCard = () => {
  const [starsClick, setsStarsClick] = useState(1);
  const stars = Array(5).fill(0);

  const handleClick = (value: number) => {
    setsStarsClick(value);
  };

  return (
    <div className='testimonial-card'>
      <div className='card-header'>
        <p className='card-name'>Regina Miles</p>
        <p className='card-job'>Design</p>
      </div>
      <div className='card-avatar'>
        <Image image={AvatarWoman} size='xxl' />
      </div>
      <div className='rate'>
        {stars.map((_, index) => {
          return (
            <Image
              image={starsClick > index ? StarFill : Star}
              onClick={() => handleClick(index + 1)}
              index={index}
              key={index}
            />
          );
        })}
      </div>
      <div className='card-description'>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione inventore saepe, numquam
          architecto commodi maxime nihil quam sapiente qui nisi, voluptatem nulla? Ipsam sint
          facere animi ab doloremque amet tempora!
        </p>
      </div>
    </div>
  );
};

export { TestimonialCard };
