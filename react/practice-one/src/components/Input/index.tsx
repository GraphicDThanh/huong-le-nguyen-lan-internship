import { InputHTMLAttributes } from 'react';
import './index.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  type: 'text' | 'password' | 'email';
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

const Input = (props: Props) => {
  return <input className='form-input' {...props} />;
};

export { Input };
