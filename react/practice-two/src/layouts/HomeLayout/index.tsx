import { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';

// Styles
import './index.css';

// Components
import { SelectItemProps, ModalNotification } from '@components';

// Components of page
import { ProductsTable, ModalProduct, DataProduct } from '@pages';

// Services
import { getTypes, getStatuses, deleteProduct, getProductsByParam } from '@services';

// Contexts
import { ModalContext } from '@contexts';
import { useDebounce } from '@hooks';

interface Filter {
  productName: string;
  statusesId: string;
  typesId: string;
  quantity: string;
  brandName: string;
  price: string;
}

const HomeLayout = () => {
  const {
    itemModal,
    notificationModal,
    errorsModal,
    showHideNotificationModal,
    showHideItemModal,
    showHideErrorsModal,
  } = useContext(ModalContext);
  const [status, setStatus] = useState<SelectItemProps[]>([]);
  const [types, setTypes] = useState<SelectItemProps[]>([]);
  const [products, setProducts] = useState<DataProduct[]>([]);
  const [flagProductUpdate, setFlagProductUpdate] = useState<boolean>(false);
  const [filter, setFilter] = useState<Filter>({
    productName: '',
    statusesId: '',
    typesId: '',
    quantity: '',
    brandName: '',
    price: '',
  });
  const [productItem, setProductItem] = useState<DataProduct>({
    id: '',
    productImage: '',
    productName: '',
    quantity: 0,
    brandImage: '',
    brandName: '',
    statusesId: '',
    typesId: '',
    price: 0,
  });
  const debouncedSearchTerm = useDebounce<Filter>(filter, 500);

  /**
   * @description flags to check if the data after
   * editing and deleting has been changed or not
   */
  const handleProductUpdate = useCallback(() => {
    setFlagProductUpdate((prev) => !prev);
  }, []);

  /**
   * @description function set product to product state
   *
   * @param {Object} item is product item
   */
  const handleSetProductItem = useCallback((item: DataProduct) => {
    setProductItem(item);
  }, []);

  /**
   * @description function get value search when input change value
   *
   * @param {ChangeEvent} e is event of input
   */
  const handleSearch = useCallback((e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name) {
      setFilter((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  }, []);

  /**
   * @description function shows the product modal
   *  and set information of the product in it
   *
   * @param {Object} item is data item after call api
   */
  const handleDataModal = useCallback((item: DataProduct) => {
    showHideItemModal();
    handleSetProductItem(item);
  }, []);

  /**
   * @description function delete of confirm modal
   *
   * @param {String} id is id of product which is selected
   */
  const handleConfirm = useCallback(
    async (id: string) => {
      const product = await deleteProduct<DataProduct>(id);

      if ('messageError' in product) {
        showHideErrorsModal(product.messageError);
      } else if (itemModal) {
        showHideItemModal();
        showHideNotificationModal();
      } else {
        showHideNotificationModal();
      }
      handleProductUpdate();
    },
    [itemModal],
  );

  /**
   * @description function cancel/ close errors modal
   */
  const handleCancel = useCallback(() => {
    showHideErrorsModal();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const listTypes = await getTypes<SelectItemProps>();
      const listStatus = await getStatuses<SelectItemProps>();

      if ('messageError' in listTypes && !Array.isArray(listTypes)) {
        showHideErrorsModal(listTypes.messageError);
      } else {
        setTypes(listTypes);
      }

      if ('messageError' in listStatus && !Array.isArray(listStatus)) {
        showHideErrorsModal(listStatus.messageError);
      } else {
        setStatus(listStatus);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let param = '&';
    for (const [key, value] of Object.entries(debouncedSearchTerm)) {
      if (value) {
        param += `${key}_like=${value}&`;
      }
    }

    const fetchData = async () => {
      const listProduct = await getProductsByParam<DataProduct>(param);

      if ('messageError' in listProduct) {
        showHideErrorsModal(listProduct.messageError);
      } else {
        setProducts(listProduct);
      }
    };

    fetchData();
  }, [flagProductUpdate, debouncedSearchTerm]);

  return (
    <main className='main-wrapper'>
      <ProductsTable
        filters={filter}
        products={products}
        status={status}
        types={types}
        onSearch={handleSearch}
        onEdit={handleDataModal}
        handleSetProductItem={handleSetProductItem}
      />
      {itemModal && (
        <ModalProduct
          productItem={productItem}
          status={status}
          types={types}
          flagProductUpdate={handleProductUpdate}
        />
      )}
      {notificationModal && (
        <ModalNotification
          id={productItem.id || ''}
          description='Do you want to delete this ?'
          textButtonConfirm='Delete'
          isConfirm={true}
          onConfirm={handleConfirm}
          onCancel={showHideNotificationModal}
        />
      )}
      {errorsModal.status && (
        <ModalNotification description={errorsModal.message} onCancel={handleCancel} />
      )}
    </main>
  );
};

export default HomeLayout;
