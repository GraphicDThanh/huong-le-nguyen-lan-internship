import './index.css';
import ImageProps from 'interface/image';

const Image = (props: ImageProps) => {
  const { pointer = false } = props;

  return (
    <figure
      className={`image image-${props.size} ${pointer && 'cursor-pointer'} ${props.classes}`}
      onClick={(e) => props.onClick?.(e)}
      onMouseLeave={(e) => props.onMouseLeave?.(e)}
      onMouseEnter={(e) => props.onMouseEnter?.(e)}
      data-index={props.index}
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
