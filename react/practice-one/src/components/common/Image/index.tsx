import './index.css';

const Image = (props) => {
  return (
    <figure
      className={`image image-${props.size}`}
      onClick={props.onClick}
      data-index={props.index}
    >
      <img src={props.image} alt='' />
    </figure>
  );
};

export { Image };
