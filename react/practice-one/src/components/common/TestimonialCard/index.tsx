import { Icon } from '../Icon';
import './index.css';
import Star from 'assets/icons/star.svg';
import StarFill from 'assets/icons/star-fill.svg';
import AvatarWoman from 'assets/images/avatar-woman.png';
import { useState } from 'react';

const TestimonialCard = () => {
  const [stars, setState] = useState({
    click: Array(5).fill(false),
    mouseOver: Array(5).fill(false),
  });

  const getCurrentIndex = (event: Event) => {
    stars.mouseOver.fill(false);
    const img = event.target as HTMLImageElement;
    const currentIndex = parseInt(img.getAttribute('data-index') || '0');

    return currentIndex;
  };

  const handleClick = (event: Event) => {
    const index = getCurrentIndex(event);
    setState({ ...stars, click: [...stars.mouseOver.fill(true, 0, index + 1)] });
  };

  const handleMouseOver = (event: MouseEvent) => {
    const index = getCurrentIndex(event);
    setState({ ...stars, mouseOver: [...stars.mouseOver.fill(true, 0, index + 1)] });
  };

  const handleMouseLeave = () => {
    setState({ ...stars, mouseOver: [...stars.mouseOver.fill(false)] });
  };

  return (
    <div className='testimonial-card'>
      <div className='card-header'>
        <p className='card-name'>Regina Miles</p>
        <p className='card-job'>Design</p>
      </div>
      <div className='card-avatar'>
        <Icon icon={AvatarWoman} size='lg' />
      </div>
      <div className='rate'>
        {stars.mouseOver.map((star, index) => {
          return (
            <Icon
              icon={star ? StarFill : Star}
              onClick={handleClick}
              onMouseOver={handleMouseOver}
              onMouseLeave={handleMouseLeave}
              index={index}
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
