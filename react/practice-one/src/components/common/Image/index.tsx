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

const Image = (props: ImageProps) => {
  const { pointer = false } = props;

  return (
    <figure
      className={`image image-${props.size} ${pointer && 'cursor-pointer'}`}
      onClick={(e) => props.onClick?.(e)}
      onMouseLeave={(e) => props.onMouseLeave?.(e)}
      onMouseEnter={(e) => props.onMouseEnter?.(e)}
    >
      {props.href ? (
        <a href={props.href}>
          <img src={props.image} alt={props.alt} />
        </a>
      ) : (
        <img src={props.image} alt={props.alt} />
      )}
    </figure>
  );
};

export { Image };
export type { ImageProps };
