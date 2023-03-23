import { ChangeEvent, FormEvent, useState } from 'react';

// Styles
import './index.css';

// Components
import {
  Modal,
  Button,
  Image,
  Input,
  Select,
  SelectItemProps,
  DataProduct,
  InputFile,
} from '@components';

// Services
import { updateData } from '@services';

// Constants
import { URL_API } from '@constants';

// Helpers
import { validation, convertBase64 } from '@helpers';

interface ModalProps {
  status: SelectItemProps[];
  types: SelectItemProps[];
  productItem: DataProduct;
  showHideModal: () => void;
  fragProductUpdate: () => void;
  onDelete: (id: string) => void;
}

type ErrorMessage = Pick<DataProduct, 'productName' | 'quantity' | 'brandName' | 'price'>;

const ProductModal = ({
  productItem,
  status,
  types,
  fragProductUpdate,
  showHideModal,
  onDelete,
}: ModalProps) => {
  const [product, setProduct] = useState(productItem);
  const [errorsMessage, setErrorsMessage] = useState<ErrorMessage>({
    productName: '',
    quantity: '',
    brandName: '',
    price: '',
  });

  /**
   * @description function get value when input change their value
   *
   * @param {ChangeEvent} e is event of input
   */
  const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name) {
      setProduct(() => {
        return {
          ...product,
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
  const handleChangeInputFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const [file] = e.target.files || [];

    if (file) {
      const image = await convertBase64(file);

      setProduct(() => ({
        ...product,
        [name]: image,
      }));
    }
  };

  /**
   * @description function save data after edit
   *
   * @param {SubmitEvent} e is submit event of form
   */
  const handleSave = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validation<DataProduct, ErrorMessage>(product, ['price', 'quantity']);

    if (Object.values(errors).every((value) => !value) && product.id) {
      const item = await updateData<DataProduct>(product.id, product, URL_API.PRODUCTS);

      if ('messageError' in item) {
        alert(item.messageError);
      } else {
        fragProductUpdate();
        showHideModal();
      }
    } else {
      setErrorsMessage(errors);
    }
  };

  /**
   * @description function delete item with id
   */
  const handleDelete = () => {
    if (product.id) {
      onDelete(product.id);
      showHideModal();
    }
  };

  return (
    <Modal showHideModal={showHideModal}>
      <form className='form-wrapper' onSubmit={handleSave}>
        <div className='form-body'>
          <div className='form-aside'>
            <Image image={product.productImage} size='large' />
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
                  value={product.productName}
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
                  value={String(product.quantity)}
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
                  value={product.brandName}
                  onChange={handleOnChange}
                />
                <span className='error-message'>{errorsMessage.brandName}</span>
              </div>

              <div className='group-image'>
                <Image size='small' variant='circle' image={product.brandImage} />
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
                  value={String(product.price)}
                  onChange={handleOnChange}
                />
                <span className='error-message'>{errorsMessage.price}</span>
              </div>

              <Select
                title='Status'
                options={status}
                name='statusesId'
                valueSelected={product.statusesId || ''}
                onChange={handleOnChange}
              />

              <Select
                title='Types'
                options={types}
                name='typesId'
                valueSelected={product.typesId || ''}
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
            onClick={handleDelete}
          />
        </div>
      </form>
    </Modal>
  );
};

export default ProductModal;
