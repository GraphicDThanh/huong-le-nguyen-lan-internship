import { forwardRef, MouseEvent } from 'react';

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

const Image = forwardRef<HTMLElement, ImageProps>(function Image(
  { image, variant, alt, size, cursorPointer, onClick },
  ref,
) {
  return (
    <figure
      className={`image-wrapper ${size ? `image-size-${size}` : ''} ${
        cursorPointer ? 'image-cursor-pointer' : ''
      }`}
      onClick={onClick}
      ref={ref}
    >
      <img className={`image image-${variant}`} src={image} alt={alt} />
    </figure>
  );
});

export { Image };
export type { ImageProps };
