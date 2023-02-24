import { ListItem, ListItemProps } from '../ListItem';
import './index.css';

interface Props extends Pick<ListItemProps, 'tagName' | 'weight' | 'size'> {
  listTitle?: string;
  classList?: 'list-column' | 'list-row' | 'list-menu';
  listItem: ListItemProps[];
}

const List = ({ listItem, classList = 'list-column', listTitle, size, tagName, weight }: Props) => {
  return (
    <ul className={`list ${classList}`}>
      {listTitle && <p className='title'>{listTitle}</p>}
      {listItem.map((item, index) => (
        <ListItem
          image={item.image}
          size={size}
          title={item.title}
          tagName={tagName}
          key={index}
          classListItem='hover-link'
          href={item.href}
          weight={weight}
        />
      ))}
    </ul>
  );
};

export { List };
