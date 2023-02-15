import { SelectItem } from '../SelectItem';
import './index.css';

const Select = () => {
  const selectItems = Array(5).fill(0);

  return (
    <div className='select-dropdown'>
      <div className='input-select'>
        <span className='placeholder'>123</span>
        <span className='arrow-select'></span>
      </div>
      <div className='select-options'>
        {selectItems.map(() => (
          <SelectItem />
        ))}
      </div>
    </div>
  );
};

export { Select };
