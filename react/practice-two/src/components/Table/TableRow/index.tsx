import { ReactNode } from 'react';

// Styles
import './index.css';

interface TableRowProps {
  children: ReactNode;
  classTableRow?: 'header';
}

const TableRow = ({ children, classTableRow }: TableRowProps) => {
  return (
    <tr className={`table-row ${classTableRow ? `table-row-${classTableRow}` : ''}`}>{children}</tr>
  );
};

export default TableRow;
