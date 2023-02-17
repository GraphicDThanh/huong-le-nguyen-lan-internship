import { Image } from '../Image';
import ImageProps from 'interface/image';
import './index.css';

interface Props extends ImageProps {
  title?: string;
  text?: string;
}

const FeatureCard = (props: Props) => {
  return (
    <div className='feature-card'>
      <Image image={props.image} size={props.size} />
      <div className='card-description'>
        <p className='card-title'>{props.title}</p>
        <p className='card-text'>{props.text}</p>
      </div>
    </div>
  );
};

export { FeatureCard };
