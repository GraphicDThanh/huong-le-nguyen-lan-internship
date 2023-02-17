import { InputHTMLAttributes } from 'react';
import './index.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value?: string;
  type: 'text' | 'password' | 'date' | 'checkbox' | 'radio' | 'submit' | 'file' | 'email';
  placeholder?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

const Input = (props: Props) => {
  return <input value={props.value} className='form-input' {...props} />;
};

export { Input };
