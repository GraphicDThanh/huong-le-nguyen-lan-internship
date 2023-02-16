import './index.css';

const Button = (props) => {
  return <button className={`btn btn-${props.variant} btn-${props.size}`}>Try for free</button>;
};

export { Button };
