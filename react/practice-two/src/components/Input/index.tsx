import { ChangeEvent } from 'react';

// Styles
import './index.css';

interface InputProps {
  name: string;
  value: string;
  variant?: 'default' | 'primary';
  type?: 'text' | 'number';
  placeholder?: string;
  title?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  name,
  value,
  placeholder,
  variant = 'default',
  title,
  type = 'text',
  onChange,
}: InputProps) => {
  return (
    <>
      {title ? (
        <div className='text-wrapper'>
          <label htmlFor=''>{title}</label>
          <input
            className={`text-input text-input-${variant}`}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
        </div>
      ) : (
        <input
          className={`text-input text-input-${variant}`}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </>
  );
};

export default Input;
