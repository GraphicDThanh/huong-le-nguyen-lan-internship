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

const Select = (props: Props) => {
  const [options, setOptions] = useState(false);

  const clickOpenOptions = () => {
    setOptions((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className='select-dropdown'>
      <div className='input-select' onClick={() => clickOpenOptions()}>
        <span className='placeholder'>{props.data.text}</span>
        <span className='arrow-select'></span>
      </div>
      {options && (
        <div className='select-options'>
          {props.selectItems.map((item, index) => (
            <SelectItem
              key={index}
              text={item.text}
              value={item.value}
              onClick={(e) => {
                props.onClick?.(e);
                setOptions(false);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export { Select };
