import { memo, useContext, useEffect, useMemo, useState } from 'react';

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

// Services
import { getDataById } from '@services';

// Constants
import { URL_API } from '@constants';

// Contexts
import { ModalContext } from '@contexts';

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
  onEdit,
  handleSetProductItem,
}: ProductRowProps) => {
  const { showHideNotificationModal } = useContext(ModalContext);
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
  const handleModalEdit = async (id: string) => {
    const data = await getDataById<DataProduct>(URL_API.PRODUCTS, id);

    if ('messageError' in data) {
      alert(data.messageError);
    } else {
      onEdit(data); /// Because of this
    }
    setMenuPopup(false);
  };

  /**
   * @description function show confirm and set id for confirm popup
   */
  const handleDelete = () => {
    if (id) {
      showHideNotificationModal(); /// Because of this
      handleSetProductItem({
        id,
        productImage,
        productName,
        type,
        quantity,
        status,
        brandImage,
        brandName,
        price,
      });
      setMenuPopup(false);
    }
  };

  return (
    <TableRow>
      <TableCell tagName='td'>
        <Identity image={productImage} text={productName} />
      </TableCell>
      <TableCell tagName='td'>
        <Label
          text={status ? status : ''}
          variant={`${status === 'Available' ? 'success' : 'warning'}`}
        />
      </TableCell>
      <TableCell tagName='td'>
        <Typography text={type ? type : ''} weight='regular' />
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
        {menuPopup && <ActionMenu id={id} onDelete={handleDelete} onEdit={handleModalEdit} />}
      </TableCell>
    </TableRow>
  );
};

export default memo(ProductRow);
export type { DataProduct, ProductRowProps };
