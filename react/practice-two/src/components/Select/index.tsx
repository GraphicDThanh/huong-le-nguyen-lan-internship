import { SelectItem, SelectItemProps } from 'components/SelectItem';
import { ChangeEvent } from 'react';
import './index.css';

interface SelectProps {
  valueSelected: string;
  name: string;
  options: SelectItemProps[];
  title?: string;
  onChange?: (e: ChangeEvent) => void;
}

const Select = ({ valueSelected, onChange, title, name, options }: SelectProps) => {
  return (
    <>
      {title ? (
        <div className='select-box'>
          <label htmlFor=''>{title}</label>
          <select className='select-wrapper' name={name} value={valueSelected} onChange={onChange}>
            {options && options.map((item) => <SelectItem name={item.name} key={item.id} />)}
          </select>
        </div>
      ) : (
        <select className='select-wrapper' name={name} value={valueSelected} onChange={onChange}>
          {options && options.map((item) => <SelectItem name={item.name} key={item.id} />)}
        </select>
      )}
    </>
  );
};

export { Select };
