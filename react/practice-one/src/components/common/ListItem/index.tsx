import { Image, ImageProps } from 'components/common/Image';
import './index.css';
import { ReactNode } from 'react';

interface ListItemProps extends Pick<ImageProps, 'image' | 'size' | 'href'> {
  tagName?: 'p' | 'a';
  classListItem?: 'hover-link';
  href?: string;
  title?: string;
  weight?: 'semiBold' | 'medium';
}

const ListItem = ({
  tagName = 'a',
  weight = 'semiBold',
  classListItem,
  href,
  title,
  image,
  size,
}: ListItemProps) => {
  const TagName = tagName;

  return (
    <li className={`list-item item-${weight} ${classListItem}`}>
      {image && <Image image={image} size={size} href={href} />}
      <TagName href={href} className='item'>
        {title}
      </TagName>
    </li>
  );
};

export { ListItem };
export type { ListItemProps };
