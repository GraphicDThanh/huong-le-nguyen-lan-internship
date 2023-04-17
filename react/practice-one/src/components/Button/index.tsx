import { ReactNode } from 'react';
import './index.css';

interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'quaternary';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
  title?: string;
  href?: string;
  as?: 'button' | 'a';
  onClick?: (e: React.MouseEvent) => void;
}

const Button = ({
  variant = 'primary',
  type = 'button',
  as: Component = 'button',
  children,
  title,
  size,
  ...rest
}: Props) => {
  return (
    <Component type={type} className={`btn btn-${variant} btn-${size}`} {...rest}>
      {children || title}
    </Component>
  );
};

export { Button };
