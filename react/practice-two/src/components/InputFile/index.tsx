import { ChangeEvent } from 'react';

// Styles
import './index.css';

interface InputFileProps {
  accept?: 'image/png, image/jpeg';
  name: string;
  id: string;
  text: string;
  variant?: 'primary' | 'secondary';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputFile = ({
  name,
  id,
  accept = 'image/png, image/jpeg',
  variant = 'primary',
  text,
  onChange,
}: InputFileProps) => {
  return (
    <label htmlFor={id} className={`input-file-wrapper input-file-${variant}`}>
      {text}
      <input type='file' name={name} id={id} accept={accept} onChange={onChange} />
    </label>
  );
};

export default InputFile;
