import { ReactNode } from 'react';
import ImageProps from './image';

interface ListItemProps extends ImageProps {
  tagName?: 'p' | 'a';
  href?: string;
  title?: string;
  children?: ReactNode;
}

export default ListItemProps;
