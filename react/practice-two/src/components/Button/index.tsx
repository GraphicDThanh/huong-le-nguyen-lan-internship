import { MouseEvent } from 'react';

// Styles
import './index.css';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  color?: 'success' | 'warning' | 'default';
  isDisable?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  text,
  variant,
  color = 'default',
  type = 'button',
  onClick,
  isDisable,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn ${variant ? `btn-${variant}` : ''} btn-color-${color} ${
        isDisable ? 'btn-disable' : ''
      }`}
      onClick={onClick}
      disabled={isDisable}
    >
      {text}
    </button>
  );
};

export default Button;
