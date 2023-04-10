// Styles
import './index.css';

interface SelectItemProps {
  value?: string;
  name: string;
}

const SelectItem = ({ value, name }: SelectItemProps) => {
  return (
    <option className='select-item' value={value}>
      {name}
    </option>
  );
};

export { SelectItem };
export type { SelectItemProps };
