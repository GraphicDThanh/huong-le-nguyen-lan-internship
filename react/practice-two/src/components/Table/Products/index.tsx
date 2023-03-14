import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { SelectItemProps } from 'components/SelectItem';
import { ChangeEvent } from 'react';
import { Table } from '..';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { DataProduct, ProductRow, ProductRowProps } from './ProductRow';

interface DataFilter {
  product: string;
  status: string;
  type: string;
  quantity: string;
  brand: string;
  price: string;
}

interface ProductsTableProps extends Pick<ProductRowProps, 'handleDelete' | 'handleEdit'> {
  dataFilter: DataFilter;
  listStatus: SelectItemProps[];
  listType: SelectItemProps[];
  data: DataProduct[];
  handleSearch: (e: ChangeEvent) => void;
}

const ProductsTable = ({
  dataFilter,
  listStatus,
  listType,
  data,
  handleSearch,
  handleDelete,
  handleEdit,
}: ProductsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow classTableRow='header'>
          <TableCell title='Product' tagName='th'>
            <Input
              name='product'
              value={dataFilter.product}
              placeholder='Search'
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Status' tagName='th'>
            <Select
              name='status'
              options={listStatus}
              valueSelected={dataFilter.status}
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Type' tagName='th'>
            <Select
              name='type'
              options={listType}
              valueSelected={dataFilter.type}
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Quantity' tagName='th'>
            <Input
              name='quantity'
              value={String(dataFilter.quantity)}
              placeholder='Search'
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Brand' tagName='th'>
            <Input
              name='brand'
              value={dataFilter.brand}
              placeholder='Search'
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Price' tagName='th'>
            <Input
              name='price'
              value={String(dataFilter.price)}
              placeholder='Search'
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Action' tagName='th' />
        </TableRow>
      </TableHeader>

      <TableBody>
        {data &&
          data.map((item) => (
            <ProductRow
              key={item.id}
              id={item.id}
              productImage={item.productImage}
              productName={item.productName}
              status={item.status}
              type={item.type}
              quantity={item.quantity}
              brandImage={item.brandImage}
              brandName={item.brandName}
              price={item.price}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          ))}
      </TableBody>
    </Table>
  );
};

export { ProductsTable };
