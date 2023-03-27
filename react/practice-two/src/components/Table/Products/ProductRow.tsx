import { memo, useState } from 'react';

// Images
import More from 'assets/icons/more.svg';

// Component
import {
  TableCell,
  TableRow,
  Identity,
  Image,
  Label,
  Typography,
  ActionMenu,
  SelectItemProps,
} from '@components';

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
  onEdit: (item: DataProduct) => void;
  handleSetProductItem: (item: DataProduct) => void;
  showHideErrorsModal: (message?: string) => void;
  showHideNotificationModal: () => void;
}

const ProductRow = ({
  id,
  productImage,
  productName,
  type,
  typesId,
  quantity,
  status,
  statusesId,
  brandImage,
  brandName,
  price,
  onEdit,
  handleSetProductItem,
  showHideNotificationModal,
}: ProductRowProps) => {
  const [menuPopup, setMenuPopup] = useState(false);

  /**
   * @description function show hide popup menu
   */
  const handleShowHidePopup = () => {
    setMenuPopup((prev) => !prev);
  };

  /**
   * @description function calls the API to get the product's data by id.
   *  And show the data to the form
   */
  const handleModalEdit = async () => {
    onEdit({
      id,
      productImage,
      productName,
      type,
      typesId,
      quantity,
      status,
      statusesId,
      brandImage,
      brandName,
      price,
    });
    setMenuPopup(false);
  };

  /**
   * @description function show confirm and set id for confirm popup
   */
  const handleDelete = () => {
    showHideNotificationModal();
    handleSetProductItem({
      id,
      productImage,
      productName,
      type,
      typesId,
      quantity,
      status,
      statusesId,
      brandImage,
      brandName,
      price,
    });
    setMenuPopup(false);
  };

  return (
    <TableRow>
      <TableCell tagName='td'>
        <Identity image={productImage} text={productName} alt={productName} />
      </TableCell>
      <TableCell tagName='td'>
        <Label text={status || ''} variant={`${status === 'Available' ? 'success' : 'warning'}`} />
      </TableCell>
      <TableCell tagName='td'>
        <Typography text={type || ''} weight='regular' />
      </TableCell>
      <TableCell tagName='td'>
        <Label text={String(quantity)} variant='primary' />
      </TableCell>
      <TableCell tagName='td'>
        <Identity image={brandImage} text={brandName} variant='circle' alt={brandName} />
      </TableCell>
      <TableCell tagName='td'>
        <Typography text={`$${String(price)}`} weight='regular' />
      </TableCell>
      <TableCell tagName='td'>
        <Image
          image={More}
          size='small'
          alt='icon more'
          cursorPointer={true}
          onClick={handleShowHidePopup}
        />
        {menuPopup && <ActionMenu id={id} onDelete={handleDelete} onEdit={handleModalEdit} />}
      </TableCell>
    </TableRow>
  );
};

export default memo(ProductRow);
export type { DataProduct, ProductRowProps };
