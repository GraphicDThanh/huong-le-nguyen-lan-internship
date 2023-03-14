import './index.css';
import { ReactNode } from 'react';

interface TableCellProps {
  title?: string;
  tagName?: 'th' | 'td';
  children?: ReactNode;
}

const TableCell = ({ children, title, tagName = 'td' }: TableCellProps) => {
  const TagName = tagName;

  return (
    <TagName className='table-cell'>
      {title && <p className='title'>{title}</p>}
      {children}
    </TagName>
  );
};

export { TableCell };
