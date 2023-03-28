import { ChangeEvent, FormEvent, useCallback, useContext, useMemo, useState } from 'react';

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

// Contexts
import { ModalContext } from '@contexts';

interface ModalProps {
  status: SelectItemProps[];
  types: SelectItemProps[];
  productItem: DataProduct;
  fragProductUpdate: () => void;
}

type ErrorMessage = Pick<DataProduct, 'productName' | 'quantity' | 'brandName' | 'price'>;

const ProductModal = ({ productItem, status, types, fragProductUpdate }: ModalProps) => {
  const { showHideNotificationModal, showHideItemModal, showHideErrorsModal } =
    useContext(ModalContext);
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
   * @param {ChangeEvent} e is event of input or select
   */
  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const name = e.target.name;
      const value = e.target.value;

      if (name) {
        setProduct({
          ...product,
          [name]: value,
        });
      }
    },
    [product],
  );

  /**
   * @description function get file when value of input file change
   *
   * @param {ChangeEvent} e is event of input file
   */
  const handleChangeInputFile = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      const name = e.target.name;
      const [file] = e.target.files || [];

      if (file) {
        const image = await convertBase64(file);

        setProduct({
          ...product,
          [name]: image,
        });
      }
    },
    [product],
  );

  /**
   * @description function that saves the data taken from the inputs
   *  and calls the API after pressing submit of the modal form
   *
   * @param {SubmitEvent} e is submit event of form
   */
  const handleSave = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const errors = validation<ErrorMessage>(product, ['price', 'quantity']);

      if (Object.values(errors).every((value) => !value) && product.id && product !== productItem) {
        const item = await updateData<DataProduct>(product.id, product, URL_API.PRODUCTS);

        if ('messageError' in item) {
          showHideErrorsModal(item.messageError);
        } else {
          fragProductUpdate();
          showHideItemModal();
        }
      } else if (product === productItem) {
        showHideItemModal();
      } else {
        setErrorsMessage(errors);
      }
    },
    [product],
  );

  return useMemo(() => {
    return (
      <Modal showHideModal={showHideItemModal}>
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
              onClick={showHideNotificationModal}
            />
          </div>
        </form>
      </Modal>
    );
  }, [product, errorsMessage, status, types]);
};

export default ProductModal;
