import ProductsTable from 'components/Table/Products';
import { Typography } from 'components/Typography';
import './index.css';
import { ChangeEvent, useEffect, useState } from 'react';
import { deleteData, getAllData } from 'services/fetchAPI';
import URL_API from 'constants/apiUrl';
import { SelectItemProps } from 'components/SelectItem';
import { ProductModal } from 'components/Modal/ProductModal';
import { DataProduct } from 'components/Table/Products/ProductRow';
import { CustomError } from 'helpers/handleErrors';

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
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;

    setFilter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  /**
   * @description function delete item with id
   *
   * @param {String} id is id of item which is selected
   */
  const handleDelete = async (id: string) => {
    const data = await deleteData(URL_API.PRODUCTS, id);
    if ((data as CustomError).messageError) {
      alert((data as CustomError).messageError);
    } else {
      handleProductUpdate();
    }
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
   * @description function show hide modal
   */
  const showHideModal = () => {
    setModal((prev) => !prev);
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

      if ((types as CustomError).messageError || (status as CustomError).messageError) {
        alert(((types as CustomError) || (status as CustomError)).messageError);
      } else {
        setDataStatus(status as SelectItemProps[]);
        setDataTypes(types as SelectItemProps[]);
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

      if ((data as CustomError).messageError) {
        alert((data as CustomError).messageError);
      } else {
        setProducts(data as DataProduct[]);
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
