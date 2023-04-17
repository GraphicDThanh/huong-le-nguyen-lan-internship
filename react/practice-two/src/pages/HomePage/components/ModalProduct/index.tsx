import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

// Styles
import './index.css';

// Components
import { Modal, Button, Image, Input, Select, SelectItemProps, InputFile } from '@components';

// Components of pages
import { DataProduct } from '@pages';

// Services
import { updateProduct } from '@services';

// Helpers
import { validation, convertBase64 } from '@helpers';

// Contexts
import { ModalContext } from '@contexts';

interface ModalProps {
  status: SelectItemProps[];
  types: SelectItemProps[];
  productItem: DataProduct;
  flagProductUpdate: () => void;
}

type ErrorMessage = Pick<DataProduct, 'productName' | 'quantity' | 'brandName' | 'price'>;

const ModalProduct = ({ productItem, status, types, flagProductUpdate }: ModalProps) => {
  const { showHideItemModal, showHideErrorsModal } = useContext(ModalContext);
  const [product, setProduct] = useState(productItem);
  const [isErrors, setIsErrors] = useState<boolean>(true);
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
  const handleOnSave = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // if have product's id and product has any change, we will call API to update product
      if (product.id && product !== productItem) {
        const item = await updateProduct<DataProduct>(product.id, product);

        // If in the process of calling the API, it returns an object containing an error,
        // an error message will be displayed
        if ('messageError' in item) {
          showHideErrorsModal(item.messageError);

          // if don't have any errors, list products will update
        } else {
          flagProductUpdate();
          showHideItemModal();
        }

        // if product doesn't have any change, the modal will close
      } else if (product === productItem) {
        showHideItemModal();
      }
    },
    [product, productItem],
  );

  /**
   * @description validation input onChange
   */
  useEffect(() => {
    const errors = validation<ErrorMessage>(product, ['price', 'quantity']);
    setErrorsMessage(errors);

    // if input still have any errors, isErrors will set to false to disable button save
    // if no more errors, isErrors will set to true and show button save
    if (Object.values(errors).every((value) => !value)) {
      setIsErrors(false);
    } else {
      setIsErrors(true);
    }
  }, [product]);

  return useMemo(() => {
    return (
      <Modal toggleModal={showHideItemModal}>
        <form className='form-wrapper' onSubmit={handleOnSave}>
          <div className='form-body'>
            <div className='form-aside'>
              <Image image={product.productImage} size='lg' />
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
                    type='number'
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
                  <Image size='sm' isCircle={true} image={product.brandImage} />
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
                    type='number'
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
            <Button
              variant='secondary'
              color='success'
              text='Save'
              type='submit'
              isDisable={isErrors}
            />
            <Button
              variant='secondary'
              color='default'
              text='Cancel'
              type='button'
              onClick={showHideItemModal}
            />
          </div>
        </form>
      </Modal>
    );
  }, [product, errorsMessage, status, types]);
};

export default ModalProduct;
