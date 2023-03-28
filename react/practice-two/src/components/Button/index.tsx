import { MouseEvent } from 'react';

// Styles
import './index.css';

interface ButtonProps {
  text: string;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  color?: 'success' | 'warning' | 'default';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, variant, color = 'default', type = 'button', onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`btn ${variant ? `btn-${variant}` : ''} btn-color-${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
