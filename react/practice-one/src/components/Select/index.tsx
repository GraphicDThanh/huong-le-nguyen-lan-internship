import { useState } from 'react';
import { SelectItem } from '../SelectItem';
import './index.css';

interface SelectItems {
  text: string;
  value: string | number;
}

interface Props {
  data: SelectItems;
  selectItems: SelectItems[];
  onClick?: (e: React.MouseEvent) => void;
}

const Select = ({ data, selectItems, onClick }: Props) => {
  const [options, setOptions] = useState(false);

  const clickOpenOptions = () => {
    setOptions((prevState) => {
      return !prevState;
    });
  };

  const handleOnClick = (e: React.MouseEvent) => {
    onClick?.(e);
    setOptions(false);
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
            <SelectItem key={index} text={item.text} value={item.value} onClick={handleOnClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
