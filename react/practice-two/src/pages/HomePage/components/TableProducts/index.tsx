import { ChangeEvent, memo } from 'react';

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
  Typography,
} from '@components';

// Components of pages
import { ProductRow, DataProduct, ProductRowProps } from '@pages';

interface Filters {
  productName: string;
  statusesId: string;
  typesId: string;
  quantity: string;
  brandName: string;
  price: string;
}

interface ProductsTableProps extends Pick<ProductRowProps, 'onEdit' | 'handleSetProductItem'> {
  filters: Filters;
  status: SelectItemProps[];
  types: SelectItemProps[];
  products: DataProduct[];
  onSearch: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const ProductsTable = ({
  filters,
  status,
  types,
  products,
  onSearch,
  onEdit,
  handleSetProductItem,
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
              options={status}
              optionAll={true}
              valueSelected={filters.statusesId}
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Type' tagName='th'>
            <Select
              name='typesId'
              options={types}
              optionAll={true}
              valueSelected={filters.typesId}
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Quantity' tagName='th'>
            <Input
              name='quantity'
              type='number'
              value={filters.quantity}
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
              type='number'
              value={filters.price}
              placeholder='Search'
              onChange={onSearch}
            />
          </TableCell>
          <TableCell title='Action' tagName='th' />
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.length > 0 ? (
          products.map((item) => (
            <ProductRow
              key={item.id}
              id={item.id}
              productImage={item.productImage}
              productName={item.productName}
              status={item.statuses ? item.statuses.name : ''}
              type={item.types ? item.types.name : ''}
              statusesId={item.statuses ? item.statuses.id : ''}
              typesId={item.types ? item.types.id : ''}
              quantity={item.quantity}
              brandImage={item.brandImage}
              brandName={item.brandName}
              price={item.price}
              onEdit={onEdit}
              handleSetProductItem={handleSetProductItem}
            />
          ))
        ) : (
          <TableRow classTableRow='message'>
            <TableCell tagName='td'>
              <Typography text='No products to display' weight='semiBold' />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default memo(ProductsTable);
export type { Filters };
