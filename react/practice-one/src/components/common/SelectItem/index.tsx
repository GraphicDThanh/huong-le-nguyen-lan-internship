import './index.css';

interface Props {
  value: string | number;
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}

const SelectItem = ({ value, text, onClick }: Props) => {
  return (
    <span className='option' data-option={value} onClick={onClick}>
      {text}
    </span>
  );
};

export { SelectItem };
