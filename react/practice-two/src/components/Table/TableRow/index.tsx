import './index.css';
import { ReactNode } from 'react';

interface TableRowProps {
  children: ReactNode;
  classTableRow?: 'header';
}

const TableRow = ({ children, classTableRow }: TableRowProps) => {
  return <tr className={`table-row table-row-${classTableRow}`}>{children}</tr>;
};

export { TableRow };
