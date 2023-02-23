import { ListItem, ListItemProps } from '../ListItem';
import './index.css';

interface Props extends Pick<ListItemProps, 'tagName' | 'weight' | 'size'> {
  listTitle?: string;
  classList?: 'list-column' | 'list-row' | 'list-menu';
  listItem: ListItemProps[];
}

const List = (props: Props) => {
  const { classList = 'list-column' } = props;

  return (
    <ul className={`list ${classList}`}>
      {props.listTitle && <p className='title'>{props.listTitle}</p>}
      {props.listItem.map((item, index) => (
        <ListItem
          image={item.image}
          size={props.size}
          title={item.title}
          tagName={props.tagName}
          key={index}
          classListItem='hover-link'
          href={item.href}
          weight={props.weight}
        />
      ))}
    </ul>
  );
};

export { List };
