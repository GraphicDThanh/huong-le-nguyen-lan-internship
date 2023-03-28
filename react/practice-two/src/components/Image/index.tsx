import { MouseEvent } from 'react';

// Styles
import './index.css';

interface ImageProps {
  image: string;
  variant?: 'circle';
  alt?: string;
  size: 'normal' | 'small' | 'large';
  cursorPointer?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const Image = ({ image, variant, alt, size, cursorPointer, onClick }: ImageProps) => {
  return (
    <figure
      className={`image-wrapper ${size ? `image-size-${size}` : ''} ${
        cursorPointer ? 'image-cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      <img className={`image image-${variant}`} src={image} alt={alt} />
    </figure>
  );
};

export { Image };
export type { ImageProps };
