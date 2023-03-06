import { useState } from 'react';
import { SelectItem } from '../SelectItem';
import './index.css';

interface SelectItems {
  text: string;
  value: string;
}

interface Props {
  data: SelectItems;
  selectItems: SelectItems[];
  onChange: (value: string, text: string) => void;
}

const Select = ({ data, selectItems, onChange }: Props) => {
  const [options, setOptions] = useState(false);

  const clickOpenOptions = () => {
    setOptions((prevState) => {
      return !prevState;
    });
  };

  const handleClickItem = (value: string, text: string) => {
    setOptions(false);
    onChange?.(value, text);
  };

  return (
    <div className='select-dropdown'>
      <div className='input-select' onClick={clickOpenOptions}>
        <span className='placeholder'>{data.text}</span>
        <span className='arrow-select'></span>
      </div>
      {options && (
        <div className='select-options'>
          {selectItems.map((item, index) => (
            <SelectItem key={index} text={item.text} value={item.value} onClick={handleClickItem} />
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
