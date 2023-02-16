import { Image } from 'components/common/Image';
import './index.css';

const ListItem = (props) => {
  const TagName = props.tagName;

  return (
    <li className='list-item'>
      {props.image && <Image image={props.image} size={props.size} />}
      <TagName href='#' className='item'>
        {props.title}
      </TagName>
    </li>
  );
};

export { ListItem };
