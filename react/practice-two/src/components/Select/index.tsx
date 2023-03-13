import { SelectItem, SelectItemProps } from 'components/SelectItem';
import { ChangeEvent } from 'react';
import './index.css';

interface SelectProps {
  valueSelected: string;
  name: string;
  options: SelectItemProps[];
  onChange?: (e: ChangeEvent) => void;
}

const Select = ({ valueSelected, onChange, name, options }: SelectProps) => {
  return (
    <select className='select-wrapper' name={name} value={valueSelected} onChange={onChange}>
      {options && options.map((item) => <SelectItem name={item.name} key={item.id} />)}
    </select>
  );
};

export { Select };
