import { Image } from 'components/common/Image';
import ListItemProps from 'interface/listItem';
import './index.css';

const ListItem = (props: ListItemProps) => {
  const { tagName = 'a' } = props;
  const TagName = tagName;

  return (
    <li className='list-item'>
      {props.image && <Image image={props.image} size={props.size} />}
      <TagName className='item'>{props.title}</TagName>
    </li>
  );
};

export { ListItem };
