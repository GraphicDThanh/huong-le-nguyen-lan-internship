import { ListItem } from '../ListItem';
import './index.css';

const List = (props) => {
  return (
    <ul className='list list-column'>
      {props.title && <p className='title'>{props.title}</p>}
      {props.listItem.map((item, index) => (
        <ListItem image={item.image} size={props.size} title={item.title} tagName='p' key={index} />
      ))}
    </ul>
  );
};

export { List };
