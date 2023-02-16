import { ListItem } from '../ListItem';
import './index.css';

const List = (props) => {
  return (
    <ul className='list list-column'>
      {props.title && <p className='title'>{props.title}</p>}
      {props.listItem.map((item) => (
        <ListItem icon={item.icon} size={props.size} title={item.title} />
      ))}
    </ul>
  );
};

export { List };
