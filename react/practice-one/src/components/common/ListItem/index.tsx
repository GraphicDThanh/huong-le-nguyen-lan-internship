import { Icon } from 'components/common/Icon';
import './index.css';

const ListItem = (props) => {
  return (
    <div className='list-item'>
      {props.icon && <Icon icon={props.icon} size={props.size} />}
      <a href='javascript:void(0)'>(480) 555-0103</a>
    </div>
  );
};

export { ListItem };
