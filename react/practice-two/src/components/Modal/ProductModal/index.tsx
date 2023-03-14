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

interface ModalProps {
  showHideModal: () => void;
  dataStatus: SelectItemProps[];
  dataTypes: SelectItemProps[];
  product: DataProduct;
}

const ProductModal = ({ product, showHideModal, dataStatus, dataTypes }: ModalProps) => {
  const [data, setData] = useState(product);

  const handleOnChange = (e: ChangeEvent) => {
    const name = (e.target as HTMLInputElement).name;
    const value = (e.target as HTMLInputElement).value;
    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const handleChangeInputFile = async (e: ChangeEvent) => {
    const name = (e.target as HTMLInputElement).name;
    const file = (e.target as HTMLInputElement).files![0];
    const image = await convertBase64(file);

    setData(() => {
      return {
        ...data,
        [name]: image,
      };
    });
  };

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showHideModal();
  };

  const onDelete = () => {
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
              <Input
                title="Product's Name"
                name='productName'
                variant='primary'
                value={data.productName}
                onChange={handleOnChange}
              />
            </div>
            <div className='form-group'>
              <Input
                title='Quantity'
                name='quantity'
                variant='primary'
                value={String(data.quantity)}
                onChange={handleOnChange}
              />
            </div>
            <div className='form-group form-group-split'>
              <Input
                title="Brand's Name"
                name='brandName'
                variant='primary'
                value={data.brandName}
                onChange={handleOnChange}
              />
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
              <Input
                title='Price'
                name='price'
                variant='primary'
                value={String(data.price)}
                onChange={handleOnChange}
              />
              <Select
                title='Status'
                options={dataStatus}
                name='status'
                valueSelected={data.status}
                onChange={handleOnChange}
              />
              <Select
                title='Types'
                options={dataTypes}
                name='type'
                valueSelected={data.type}
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
