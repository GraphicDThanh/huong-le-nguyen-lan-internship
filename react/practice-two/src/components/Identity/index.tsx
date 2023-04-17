// Styles
import './index.css';

// Components
import { Image, ImageProps } from '@components';

interface IdentityProps extends Pick<ImageProps, 'image' | 'isCircle' | 'alt'> {
  text: string;
}

const Identity = ({ text, image, isCircle, alt }: IdentityProps) => {
  return (
    <div className='identity-wrapper'>
      <Image image={image} size={isCircle ? 'sm' : 'md'} isCircle={isCircle} alt={alt} />
      <span>{text}</span>
    </div>
  );
};

export default Identity;
