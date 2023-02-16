import { Icon } from 'components/common/Icon';
import './index.css';

const ListItem = (props) => {
  return (
    <li className='list-item'>
      {props.icon && <Icon icon={props.icon} size={props.size} />}
      <a href='javascript:void(0)'>{props.title}</a>
    </li>
  );
};

export { ListItem };
