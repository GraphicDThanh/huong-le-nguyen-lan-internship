import { Image, ImageProps } from 'components/Image';
import './index.css';

interface ListItemProps extends Pick<ImageProps, 'image' | 'size' | 'href'> {
  tagName?: 'p' | 'a';
  classListItem?: 'hover-link';
  primaryImage?: string;
  secondaryImage?: string;
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
  primaryImage,
  secondaryImage,
  size,
}: ListItemProps) => {
  const TagName = tagName;

  return (
    <li className={`list-item item-${weight} ${classListItem} ${secondaryImage && `item-image`}`}>
      {primaryImage && <Image image={primaryImage} size={size} href={href} />}
      {secondaryImage && (
        <>
          <Image image={secondaryImage} size={size} href={href} />
        </>
      )}
      <TagName href={href} className='item'>
        {title}
      </TagName>
    </li>
  );
};

export { ListItem };
export type { ListItemProps };
