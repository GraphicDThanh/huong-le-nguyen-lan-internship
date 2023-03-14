import { Identity } from 'components/Identity';
import { Image } from 'components/Image';
import { Label } from 'components/Label';
import { Typography } from 'components/Typography';
import { useState } from 'react';
import { TableCell } from '../TableCell';
import { TableRow } from '../TableRow';
import More from 'assets/icons/more.svg';
import { ActionMenu } from 'components/ActionMenu';

interface DataProduct {
  id?: string;
  productImage: string;
  productName: string;
  status: string;
  type: string;
  quantity: number;
  brandImage: string;
  brandName: string;
  price: number;
}

interface ProductRowProps extends DataProduct {
  handleDelete: () => void;
  handleEdit: () => void;
}

const ProductRow = ({
  id,
  productImage,
  productName,
  type,
  quantity,
  status,
  brandImage,
  brandName,
  price,
  handleDelete,
  handleEdit,
}: ProductRowProps) => {
  const [menuPopup, setMenuPopup] = useState(false);
  const handleShowHidePopup = () => {
    setMenuPopup((prev) => !prev);
  };

  const onEdit = () => {
    handleEdit();
    setMenuPopup(false);
  };

  const onDelete = () => {
    handleDelete();
    setMenuPopup(false);
  };

  return (
    <TableRow>
      <TableCell tagName='td'>
        <Identity image={productImage} text={productName} />
      </TableCell>
      <TableCell tagName='td'>
        {status ? (
          <Label text='Available' variant='success' />
        ) : (
          <Label text='Sold out' variant='warning' />
        )}
      </TableCell>
      <TableCell tagName='td'>
        <Typography text={type} weight='regular' />
      </TableCell>
      <TableCell tagName='td'>
        <Label text={String(quantity)} variant='primary' />
      </TableCell>
      <TableCell tagName='td'>
        <Identity image={brandImage} text={brandName} variant='circle' />
      </TableCell>
      <TableCell tagName='td'>
        <Typography text={String(price)} weight='regular' />
      </TableCell>
      <TableCell tagName='td'>
        <Image
          image={More}
          size='small'
          alt='icon more'
          cursorPointer={true}
          onClick={handleShowHidePopup}
        />
        {menuPopup && <ActionMenu id={id} handleDelete={onDelete} handleEdit={onEdit} />}
      </TableCell>
    </TableRow>
  );
};

export { ProductRow };
export type { DataProduct, ProductRowProps };
