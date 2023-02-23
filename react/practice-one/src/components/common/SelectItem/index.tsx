import './index.css';

interface Props {
  value: string | number;
  text: string;
  onClick?: (e: React.MouseEvent) => void;
}

const SelectItem = (props: Props) => {
  return (
    <span
      className='option'
      data-option={props.value}
      onClick={(e: React.MouseEvent) => props.onClick?.(e)}
    >
      {props.text}
    </span>
  );
};

export { SelectItem };
