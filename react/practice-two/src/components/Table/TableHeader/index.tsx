import { ReactNode } from 'react';
import './index.css';

interface TableHeaderProps {
  children: ReactNode;
}

const TableHeader = ({ children }: TableHeaderProps) => {
  return <thead className='table-header'>{children}</thead>;
};

export { TableHeader };
