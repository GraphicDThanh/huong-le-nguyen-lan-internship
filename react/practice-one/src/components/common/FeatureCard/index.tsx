import { Image, ImageProps } from '../Image';
import './index.css';

interface Props extends Pick<ImageProps, 'image'> {
  title?: string;
  text?: string;
}

const FeatureCard = ({ image, title, text }: Props) => {
  return (
    <div className='feature-card'>
      <Image image={image} size='xxxl' />
      <div className='card-description'>
        <p className='card-title'>{title}</p>
        <p className='card-text'>{text}</p>
      </div>
    </div>
  );
};

export { FeatureCard };
