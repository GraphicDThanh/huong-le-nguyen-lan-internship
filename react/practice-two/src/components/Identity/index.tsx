// Styles
import './index.css';

// Components
import { Image, ImageProps } from '@components';

interface IdentityProps extends Pick<ImageProps, 'image' | 'variant'> {
  text: string;
}

const Identity = ({ text, image, variant }: IdentityProps) => {
  return (
    <div className='identity-wrapper'>
      <Image image={image} size={variant ? 'small' : 'normal'} variant={variant} />
      <span>{text}</span>
    </div>
  );
};

export default Identity;
