import { MouseEvent } from 'react';

// Styles
import './index.css';

interface ButtonProps {
  id?: string;
  text: string;
  variant: 'primary' | 'secondary';
  type?: 'button' | 'submit';
  color?: 'success' | 'warning' | 'default' | 'light';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({
  text,
  variant,
  id,
  color = 'default',
  type = 'button',
  onClick,
}: ButtonProps) => {
  return (
    <button
      id={id}
      type={type}
      className={`btn btn-${variant} btn-color-${color}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { Button };
