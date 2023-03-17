import { ChangeEvent } from 'react';

// Components
import { Table } from '..';
import { TableBody } from '../TableBody';
import { TableCell } from '../TableCell';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { SelectItemProps } from 'components/SelectItem';
import { DataProduct, ProductRow, ProductRowProps } from './ProductRow';

interface DataFilter {
  productName: string;
  statusesId: string;
  typesId: string;
  quantity: string;
  brandName: string;
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
              name='productName'
              value={dataFilter.productName}
              placeholder='Search'
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Status' tagName='th'>
            <Select
              name='statusesId'
              options={listStatus}
              optionAll={true}
              valueSelected={dataFilter.statusesId}
              onChange={handleSearch}
            />
          </TableCell>
          <TableCell title='Type' tagName='th'>
            <Select
              name='typesId'
              options={listType}
              optionAll={true}
              valueSelected={dataFilter.typesId}
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
              name='brandName'
              value={dataFilter.brandName}
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
        {Array.isArray(data) &&
          data.map((item) => (
            <ProductRow
              key={item.id}
              id={item.id}
              productImage={item.productImage}
              productName={item.productName}
              status={item.statuses!.id!}
              type={item.types!.name}
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
