import { Image } from 'components/common/Image';
import ListItemProps from 'interface/listItem';
import './index.css';

const ListItem = (props: ListItemProps) => {
  const { tagName = 'a', weight = 'semiBold' } = props;
  const TagName = tagName;

  return (
    <li className={`list-item item-${weight} ${props.classListItem}`}>
      {props.image && <Image image={props.image} size={props.size} href={props.href} />}
      <TagName href={props.href} className='item'>
        {props.title}
      </TagName>
    </li>
  );
};

export { ListItem };
