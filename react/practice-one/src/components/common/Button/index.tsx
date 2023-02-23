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

const Button = (props: Props) => {
  const { variant = 'primary', type = 'button', as: Component = 'button', ...rest } = props;

  return (
    <Component type={type} className={`btn btn-${variant} btn-${props.size}`} {...rest}>
      {props.children || props.title}
    </Component>
  );
};

export { Button };
