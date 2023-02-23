import { TextareaHTMLAttributes } from 'react';
import './index.css';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent) => void;
}

const Textarea = (props: Props) => {
  return <textarea className='form-input form-textarea' {...props}></textarea>;
};

export { Textarea };
