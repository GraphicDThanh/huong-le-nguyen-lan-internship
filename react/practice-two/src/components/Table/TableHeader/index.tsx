import { ReactNode } from 'react';

// Styles
import './index.css';

interface TableHeaderProps {
  children: ReactNode;
}

const TableHeader = ({ children }: TableHeaderProps) => {
  return <thead className='table-header'>{children}</thead>;
};

export default TableHeader;
