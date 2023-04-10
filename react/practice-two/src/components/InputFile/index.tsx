import { ChangeEvent } from 'react';

// Styles
import './index.css';

interface InputFileProps {
  name: string;
  id: string;
  text: string;
  variant?: 'primary' | 'secondary';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile = ({ name, id, variant = 'primary', text, onChange }: InputFileProps) => {
  return (
    <label htmlFor={id} className={`input-file-wrapper input-file-${variant}`}>
      {text}
      <input type='file' name={name} id={id} accept='image/png, image/jpeg' onChange={onChange} />
    </label>
  );
};

export default InputFile;
