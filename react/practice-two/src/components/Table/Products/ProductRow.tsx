import { Identity } from 'components/Identity';
import { Image } from 'components/Image';
import { Label } from 'components/Label';
import { Typography } from 'components/Typography';
import { useState } from 'react';
import { TableCell } from '../TableCell';
import { TableRow } from '../TableRow';
import More from 'assets/icons/more.svg';
import { ActionMenu } from 'components/ActionMenu';
import { SelectItemProps } from 'components/SelectItem';
import { getDataById } from 'services/fetchAPI';
import URL_API from 'constants/apiUrl';
import { CustomError } from 'helpers/handleErrors';

interface DataProduct {
  id?: string;
  productImage: string;
  productName: string;
  status?: string;
  type?: string;
  quantity: number | string;
  brandImage: string;
  brandName: string;
  price: number | string;
  statusesId?: string;
  typesId?: string;
  statuses?: SelectItemProps;
  types?: SelectItemProps;
}

interface ProductRowProps extends DataProduct {
  handleDelete: (id: string) => void;
  handleEdit: (item: DataProduct) => void;
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

  /**
   * @description function show hide popup menu
   */
  const handleShowHidePopup = () => {
    setMenuPopup((prev) => !prev);
  };

  /**
   * @description function set state to modal after click open modal
   *
   * @param {MouseEvent} e is event of onClick
   */
  const handleModalEdit = async (e: React.MouseEvent) => {
    const idItem = (e.target as HTMLInputElement).id;
    const data = await getDataById<DataProduct>(URL_API.PRODUCTS, idItem);

    if ((data as CustomError).messageError) {
      alert((data as CustomError).messageError);
    } else {
      handleEdit(data as DataProduct);
    }
    setMenuPopup(false);
  };

  /**
   * @description function delete item with id
   */
  const onDelete = () => {
    handleDelete(id!);
    setMenuPopup(false);
  };

  return (
    <TableRow>
      <TableCell tagName='td'>
        <Identity image={productImage} text={productName} />
      </TableCell>
      <TableCell tagName='td'>
        {status === '1' ? (
          <Label text='Available' variant='success' />
        ) : (
          <Label text='Sold out' variant='warning' />
        )}
      </TableCell>
      <TableCell tagName='td'>
        <Typography text={type!} weight='regular' />
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
        {menuPopup && <ActionMenu id={id} handleDelete={onDelete} handleEdit={handleModalEdit} />}
      </TableCell>
    </TableRow>
  );
};

export { ProductRow };
export type { DataProduct, ProductRowProps };
