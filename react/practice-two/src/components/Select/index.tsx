import { ChangeEvent } from 'react';

// Styles
import './index.css';

// Components
import { SelectItem, SelectItemProps } from '@components';

interface SelectProps {
  valueSelected: string;
  name: string;
  options: SelectItemProps[];
  optionAll?: boolean;
  title?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ valueSelected, optionAll, onChange, title, name, options }: SelectProps) => {
  return (
    <>
      {title ? (
        <div className='select-box'>
          <label htmlFor=''>{title}</label>
          <select className='select-wrapper' name={name} value={valueSelected} onChange={onChange}>
            {optionAll && <SelectItem id='' name='All' />}
            {Array.isArray(options) &&
              options.map((item) => <SelectItem id={item.id} name={item.name} key={item.id} />)}
          </select>
        </div>
      ) : (
        <select className='select-wrapper' name={name} value={valueSelected} onChange={onChange}>
          {optionAll && <SelectItem id='' name='All' />}
          {Array.isArray(options) &&
            options.map((item) => <SelectItem id={item.id} name={item.name} key={item.id} />)}
        </select>
      )}
    </>
  );
};

export default Select;
