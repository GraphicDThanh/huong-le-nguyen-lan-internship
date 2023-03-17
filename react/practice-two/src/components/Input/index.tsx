import { ChangeEvent } from 'react';

// Styles
import './index.css';

interface InputProps {
  name: string;
  value: string;
  variant?: 'default' | 'primary';
  placeholder?: string;
  title?: string;
  onChange?: (e: ChangeEvent) => void;
}

const Input = ({ name, value, placeholder, variant = 'default', title, onChange }: InputProps) => {
  return (
    <>
      {title ? (
        <div className='text-wrapper'>
          <label htmlFor=''>{title}</label>
          <input
            className={`text-input text-input-${variant}`}
            type='text'
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          className={`text-input text-input-${variant}`}
          type='text'
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

export { Input };
