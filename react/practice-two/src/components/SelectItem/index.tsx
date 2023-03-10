import './index.css';

interface SelectItemProps {
  id?: string;
  value: string;
  text: string;
}

const SelectItem = ({ value, text }: SelectItemProps) => {
  return (
    <option className='select-item' value={value}>
      {text}
    </option>
  );
};

export { SelectItem };
export type { SelectItemProps };
