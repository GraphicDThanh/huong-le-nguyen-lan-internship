import { ListItem } from '../ListItem';
import ListItemProps from 'interface/listItem';
import './index.css';

interface Props extends ListItemProps {
  listTitle?: string;
  classes?: 'list-column' | 'list-row' | 'list-menu';
  listItem: ListItemProps[];
}

const List = (props: Props) => {
  const { classes = 'list-column' } = props;

  return (
    <ul className={`list ${classes}`}>
      {props.listTitle && <p className='title'>{props.listTitle}</p>}
      {props.listItem.map((item, index) => (
        <ListItem
          image={item.image}
          size={props.size}
          title={item.title}
          tagName={props.tagName}
          key={index}
          href={item.href}
        />
      ))}
    </ul>
  );
};

export { List };
