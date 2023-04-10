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
    <div className={title && 'select-box'}>
      {title ?? <label>{title}</label>}
      <select className='select-wrapper' name={name} value={valueSelected} onChange={onChange}>
        {optionAll && <SelectItem value='' name='All' />}
        {options.length > 0 &&
          options.map((item) => <SelectItem value={item.id} name={item.name} key={item.id} />)}
      </select>
    </div>
  );
};

export default Select;
