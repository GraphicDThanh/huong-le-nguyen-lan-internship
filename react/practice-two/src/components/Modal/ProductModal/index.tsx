import { Button } from 'components/Button';
import { Image } from 'components/Image';
import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { SelectItemProps } from 'components/SelectItem';
import { DataProduct } from 'components/Table/Products/ProductRow';
import { ChangeEvent, useState } from 'react';
import { Modal } from '..';
import { InputFile } from 'components/InputFile';
import './index.css';
import { convertBase64 } from 'helpers/convert';
import { updateData } from 'services/fetchAPI';
import { URL_API } from 'constants/apiUrl';
import { validation } from 'helpers/validation';

interface ModalProps {
  dataStatus: SelectItemProps[];
  dataTypes: SelectItemProps[];
  product: DataProduct;
  showHideModal: () => void;
  isProductUpdate: () => void;
  handleDelete: (id: string) => void;
}

const ProductModal = ({
  product,
  showHideModal,
  handleDelete,
  dataStatus,
  isProductUpdate,
  dataTypes,
}: ModalProps) => {
  const [data, setData] = useState(product);
  const [errorsMessage, setErrorsMessage] = useState<DataProduct>({
    productImage: '',
    productName: '',
    status: '',
    type: '',
    quantity: '',
    brandImage: '',
    brandName: '',
    price: '',
  });

  /**
   * @description function get value when input change their value
   *
   * @param {ChangeEvent} e is event of input
   */
  const handleOnChange = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const name = e.target.name;
      const value = e.target.value;

      setData(() => {
        return {
          ...data,
          [name]: value,
        };
      });
    }
  };

  /**
   * @description function get file when value of input file change
   *
   * @param {ChangeEvent} e is event of input file
   */
  const handleChangeInputFile = async (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      const name = e.target.name;
      const file = e.target.files![0];
      const image = await convertBase64(file);

      setData(() => {
        return {
          ...data,
          [name]: image,
        };
      });
    }
  };

  /**
   * @description function save data after edit
   *
   * @param {SubmitEvent} e is submit event of form
   */
  const onSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validation(data);

    if (errors.isValid) {
      const item = await updateData<DataProduct>(data.id!, data, URL_API.PRODUCTS);

      if ('messageError' in item) {
        alert(item.messageError);
      } else {
        isProductUpdate();
        showHideModal();
      }
    } else {
      setErrorsMessage(errors.result);
    }
  };

  /**
   * @description function delete item with id
   */
  const onDelete = () => {
    handleDelete(data.id!);
    showHideModal();
  };

  return (
    <Modal showHideModal={showHideModal}>
      <form className='form-wrapper' onSubmit={onSave}>
        <div className='form-body'>
          <div className='form-aside'>
            <Image image={data.productImage} size='large' />
            <InputFile
              id='productImage'
              name='productImage'
              text='Choose File ... '
              onChange={handleChangeInputFile}
            />
          </div>
          <div className='form-content'>
            <div className='form-group'>
              <div className='form-control'>
                <Input
                  title="Product's Name"
                  name='productName'
                  variant='primary'
                  value={data.productName}
                  onChange={handleOnChange}
                />
                <span className='error-message'>{errorsMessage.productName}</span>
              </div>
            </div>
            <div className='form-group'>
              <div className='form-control'>
                <Input
                  title='Quantity'
                  name='quantity'
                  variant='primary'
                  value={String(data.quantity)}
                  onChange={handleOnChange}
                />
                <span className='error-message'>{errorsMessage.quantity}</span>
              </div>
            </div>
            <div className='form-group form-group-split'>
              <div className='form-control'>
                <Input
                  title="Brand's Name"
                  name='brandName'
                  variant='primary'
                  value={data.brandName}
                  onChange={handleOnChange}
                />
                <span className='error-message'>{errorsMessage.brandName}</span>
              </div>

              <div className='group-image'>
                <Image size='small' variant='circle' image={data.brandImage} />
                <InputFile
                  id='brandImage'
                  name='brandImage'
                  text='Choose File ...'
                  variant='secondary'
                  onChange={handleChangeInputFile}
                />
              </div>
            </div>
            <div className='form-group form-group-split'>
              <div className='form-control'>
                <Input
                  title='Price'
                  name='price'
                  variant='primary'
                  value={String(data.price)}
                  onChange={handleOnChange}
                />
                <span className='error-message'>{errorsMessage.price}</span>
              </div>

              <Select
                title='Status'
                options={dataStatus}
                name='statusesId'
                valueSelected={data.statusesId!}
                onChange={handleOnChange}
              />

              <Select
                title='Types'
                options={dataTypes}
                name='typesId'
                valueSelected={data.typesId!}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </div>
        <div className='form-cta'>
          <Button variant='secondary' color='success' text='Save' type='submit' />
          <Button
            variant='secondary'
            color='warning'
            text='Delete'
            type='button'
            onClick={onDelete}
          />
        </div>
      </form>
    </Modal>
  );
};

export { ProductModal };
