import { ListItem } from '../ListItem';
import ListItemProps from 'interface/listItem';
import './index.css';

interface Props extends ListItemProps {
  listTitle?: string;
  classesList?: 'list-column' | 'list-row' | 'list-menu' | 'list-link';
  listItem: ListItemProps[];
}

const List = (props: Props) => {
  const { classesList = 'list-column' } = props;

  return (
    <ul className={`list ${classesList}`}>
      {props.listTitle && <p className='title'>{props.listTitle}</p>}
      {props.listItem.map((item, index) => (
        <ListItem
          image={item.image}
          size={item.size}
          title={item.title}
          tagName={props.tagName}
          key={index}
          href={item.href}
          weight={props.weight}
        />
      ))}
    </ul>
  );
};

export { List };
