import { ComponentStory, ComponentMeta } from '@storybook/react';

// Images
import Product from 'assets/images/product.jpg';
import Avatar from 'assets/images/avatar.jpg';

// Components
import { ProductModal } from '.';

export default {
  title: 'PracticeTwo/Modal/ProductModal',
  component: ProductModal,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof ProductModal>;

const Template: ComponentStory<typeof ProductModal> = () => {
  const data = {
    id: '1',
    productImage: Product,
    productName: 'Louis Vuitton',
    quantity: 123,
    brandImage: Avatar,
    brandName: 'Evan Flores',
    status: '2',
    type: '3',
    price: 200,
  };

  const dataStatus = [
    { id: '1', name: 'Available' },
    { id: '2', name: 'Sold out' },
  ];

  const dataTypes = [
    { id: '1', name: 'TV' },
    { id: '2', name: 'Smart Phone' },
  ];

  const showHideModal = () => {
    console.log('open');
  };

  const handleDelete = () => {
    console.log('handle delete');
  };

  const isProductUpdate = () => {
    console.log('product update');
  };

  return (
    <ProductModal
      handleDelete={handleDelete}
      isProductUpdate={isProductUpdate}
      product={data}
      dataStatus={dataStatus}
      dataTypes={dataTypes}
      showHideModal={showHideModal}
    />
  );
};

export const Default = Template.bind({});
