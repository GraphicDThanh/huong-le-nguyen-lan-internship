// Styles
import './index.css';

interface SelectItemProps {
  id?: string;
  name: string;
}

const SelectItem = ({ id, name }: SelectItemProps) => {
  return (
    <option className='select-item' value={id}>
      {name}
    </option>
  );
};

export { SelectItem };
export type { SelectItemProps };
