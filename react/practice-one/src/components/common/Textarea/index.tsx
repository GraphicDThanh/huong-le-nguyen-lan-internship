import { TextareaHTMLAttributes } from 'react';
import './index.css';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
  value?: string;
}

const Textarea = (props: Props) => {
  return (
    <textarea
      className='form-input form-textarea'
      placeholder={props.placeholder}
      value={props.value}
      {...props}
    ></textarea>
  );
};

export { Textarea };
