// Styles
import './index.css';

// Components
import { Image, ImageProps } from '@components';

interface IdentityProps extends Pick<ImageProps, 'image' | 'variant' | 'alt'> {
  text: string;
}

const Identity = ({ text, image, variant, alt }: IdentityProps) => {
  return (
    <div className='identity-wrapper'>
      <Image image={image} size={variant ? 'small' : 'normal'} variant={variant} alt={alt} />
      <span>{text}</span>
    </div>
  );
};

export default Identity;
