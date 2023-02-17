import ImageProps from './image';

interface ListItemProps extends ImageProps {
  tagName?: 'p' | 'a';
  href?: string;
  title?: string;
}

export default ListItemProps;
