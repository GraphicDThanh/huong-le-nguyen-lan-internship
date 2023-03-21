import { ChangeEvent } from 'react';

// Components
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Input,
  Select,
  SelectItemProps,
  DataProduct,
  ProductRow,
  ProductRowProps,
} from '@components';

interface Filters {
  productName: string;
  statusesId: string;
  typesId: string;
  quantity: string;
  brandName: string;
  price: string;
}

interface ProductsTableProps extends Pick<ProductRowProps, 'onDelete' | 'onEdit'> {
  filters: Filters;
  listStatus: SelectItemProps[];
  listType: SelectItemProps[];
  products: DataProduct[];
  onSearch: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ProductsTable = ({
  filters,
  listStatus,
  listType,
  products,
  onSearch,
  onDelete,
  onEdit,
}: ProductsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow classTableRow='header'>
          <TableCell title='Product' tagName='th'>
            <Input
              name='productName'
              value={filters.productName}
              placeholder='Search'
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Status' tagName='th'>
            <Select
              name='statusesId'
              options={listStatus}
              optionAll={true}
              valueSelected={filters.statusesId}
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Type' tagName='th'>
            <Select
              name='typesId'
              options={listType}
              optionAll={true}
              valueSelected={filters.typesId}
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Quantity' tagName='th'>
            <Input
              name='quantity'
              value={String(filters.quantity)}
              placeholder='Search'
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Brand' tagName='th'>
            <Input
              name='brandName'
              value={filters.brandName}
              placeholder='Search'
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Price' tagName='th'>
            <Input
              name='price'
              value={String(filters.price)}
              placeholder='Search'
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Action' tagName='th' />
        </TableRow>
      </TableHeader>
      <TableBody>
        {Array.isArray(products) &&
          products.map((item) => (
            <ProductRow
              key={item.id}
              id={item.id}
              productImage={item.productImage}
              productName={item.productName}
              status={item.statuses ? item.statuses.name : ''}
              type={item.types ? item.types.name : ''}
              quantity={item.quantity}
              brandImage={item.brandImage}
              brandName={item.brandName}
              price={item.price}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
      </TableBody>
    </Table>
  );
};

export default ProductsTable;
