import './index.css';

interface Props {
  value: string;
  text: string;
  onClick?: (value: string, text: string) => void;
}

const SelectItem = ({ value, text, onClick }: Props) => {
  const handleOnClick = () => {
    onClick?.(value, text);
  };

  return (
    <span className='option' data-option={value} onClick={handleOnClick}>
      {text}
    </span>
  );
};

export { SelectItem };
