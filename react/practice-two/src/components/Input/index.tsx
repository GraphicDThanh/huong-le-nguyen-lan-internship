import { ChangeEvent } from 'react';
import './index.css';

interface InputProps {
  name: string;
  value: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent) => void;
}

const Input = ({ name, value, placeholder, onChange }: InputProps) => {
  return (
    <input
      className='text-input'
      type='text'
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export { Input };
