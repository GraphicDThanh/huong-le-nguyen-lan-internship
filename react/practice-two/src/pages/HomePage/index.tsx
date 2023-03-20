import { ProductsTable } from 'components/Table/Products';
import { Typography } from 'components/Typography';
import './index.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { deleteData, getAllData } from 'services/fetchAPI';
import { URL_API } from 'constants/apiUrl';
import { SelectItemProps } from 'components/SelectItem';
import { ProductModal } from 'components/Modal/ProductModal';
import { DataProduct } from 'components/Table/Products/ProductRow';

const HomePage = () => {
  const [dataStatus, setDataStatus] = useState<SelectItemProps[]>([]);
  const [dataTypes, setDataTypes] = useState<SelectItemProps[]>([]);
  const [products, setProducts] = useState<DataProduct[]>([]);
  const [isProductUpdate, setIsProductUpdate] = useState(false);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState({
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
    status: '',
    type: '',
    price: 0,
  });

  /**
   * @description function get value when input change value
   *
   * @param {ChangeEvent} e is event of input
   */
  const handleSearch = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const name = e.target.name;
      const value = e.target.value;

      setFilter((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  };

  /**
   * @description function delete item with id
   *
   * @param {String} id is id of item which is selected
   */
  const handleDelete = async (id: string) => {
    const data = await deleteData<DataProduct>(URL_API.PRODUCTS, id);
    if ('messageError' in data) {
      alert(data.messageError);
    } else {
      handleProductUpdate();
    }
  };

  /**
   * @description function show hide modal
   */
  const showHideModal = () => {
    setModal((prev) => !prev);
  };

  /**
   * @description function set state to get data to modal
   *
   * @param {Object} item is data item after call api
   */
  const handleDataModal = (item: DataProduct) => {
    setProductItem(item);
    showHideModal();
  };

  /**
   * @description flags to check if the data after
   * editing and deleting has been changed or not
   */
  const handleProductUpdate = () => {
    setIsProductUpdate((prev) => !prev);
  };

  useEffect(() => {
    const fetchData = async () => {
      const types = await getAllData<SelectItemProps>(URL_API.TYPES);
      const status = await getAllData<SelectItemProps>(URL_API.STATUSES);

      if ('messageError' in types && !Array.isArray(types)) {
        alert(types.messageError);
      } else {
        setDataTypes(types);
      }

      if ('messageError' in status && !Array.isArray(status)) {
        alert(status.messageError);
      } else {
        setDataStatus(status);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    let param = '&';
    for (const [key, value] of Object.entries(filter)) {
      if (value) {
        param += `${key}=${value}&`;
      }
    }

    const fetchData = async () => {
      const data = await getAllData<DataProduct>(
        `${URL_API.PRODUCTS}?_expand=statuses&_expand=types${param}`,
      );

      if ('messageError' in data) {
        alert(data.messageError);
      } else {
        setProducts(data);
      }
    };

    fetchData();
  }, [isProductUpdate, filter]);

  return (
    <div className='container'>
      <header className='header-wrapper'>
        <Typography text='Management' tagName='h1' weight='bold' color='tertiary' size='lg' />
      </header>
      <main>
        <ProductsTable
          dataFilter={filter}
          data={products}
          listStatus={dataStatus}
          listType={dataTypes}
          handleSearch={handleSearch}
          handleDelete={handleDelete}
          handleEdit={handleDataModal}
        />
      </main>
      {modal && (
        <ProductModal
          product={productItem}
          dataStatus={dataStatus}
          dataTypes={dataTypes}
          isProductUpdate={handleProductUpdate}
          showHideModal={showHideModal}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export { HomePage };
