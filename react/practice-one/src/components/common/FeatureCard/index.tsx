import { Image, ImageProps } from '../Image';
import './index.css';

interface Props extends Pick<ImageProps, 'image'> {
  title?: string;
  text?: string;
}

const FeatureCard = (props: Props) => {
  return (
    <div className='feature-card'>
      <Image image={props.image} size='xxxl' />
      <div className='card-description'>
        <p className='card-title'>{props.title}</p>
        <p className='card-text'>{props.text}</p>
      </div>
    </div>
  );
};

export { FeatureCard };
