import { ReactNode } from 'react';
import './index.css';

interface TableProps {
  children: ReactNode;
}

const Table = ({ children }: TableProps) => {
  return <table className='table-wrapper'>{children}</table>;
};

export { Table };
