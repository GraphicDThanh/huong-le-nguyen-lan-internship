import './index.css';

interface ImageProps {
  image?: string;
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'xxxl';
  index?: string | number;
  href?: string;
  alt?: string;
  pointer?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  onMouseEnter?: (e: React.MouseEvent) => void;
  onMouseLeave?: (e: React.MouseEvent) => void;
}

const Image = ({
  size,
  href,
  image,
  alt,
  pointer = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: ImageProps) => {
  return (
    <figure
      className={`image image-${size} ${pointer && 'cursor-pointer'}`}
      onClick={onClick}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {href ? (
        <a href={href}>
          <img src={image} alt={alt} />
        </a>
      ) : (
        <img src={image} alt={alt} />
      )}
    </figure>
  );
};

export { Image };
export type { ImageProps };
