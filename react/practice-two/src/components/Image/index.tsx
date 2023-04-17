import { forwardRef, MouseEvent } from 'react';

// Styles
import './index.css';

interface ImageProps {
  image: string;
  alt?: string;
  size: 'sm' | 'md' | 'lg';
  isCircle?: boolean;
  isCursorPointer?: boolean;
  onClick?: (e: MouseEvent) => void;
}

const Image = forwardRef<HTMLElement, ImageProps>(function Image(
  { image, isCircle, alt = 'image', size, isCursorPointer, onClick },
  ref,
) {
  return (
    <figure
      className={`image-wrapper ${size ? `image-size-${size}` : ''} ${
        isCursorPointer ? 'image-cursor-pointer' : ''
      }`}
      onClick={onClick}
      ref={ref}
    >
      <img className={`image ${isCircle ? 'image-circle' : ''}`} src={image} alt={alt} />
    </figure>
  );
});

export { Image };
export type { ImageProps };
