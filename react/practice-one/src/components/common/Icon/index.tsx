import './index.css';

const Icon = (props) => {
  return (
    <figure
      className={`icon icon-${props.size}`}
      onClick={props.onClick}
      onMouseMove={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      data-index={props.index}
    >
      <img src={props.icon} alt='' data-index={props.index} />
    </figure>
  );
};

export { Icon };
