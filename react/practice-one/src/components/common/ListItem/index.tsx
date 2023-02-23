import { Image, ImageProps } from 'components/common/Image';
import './index.css';
import { ReactNode } from 'react';

interface ListItemProps extends Pick<ImageProps, 'image' | 'size' | 'href'> {
  tagName?: 'p' | 'a';
  classListItem?: 'hover-link';
  href?: string;
  title?: string;
  weight?: 'semiBold' | 'medium';
  children?: ReactNode;
}

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
export type { ListItemProps };
