import { ComponentStory, ComponentMeta } from '@storybook/react';

// Images
import Product from 'assets/images/product.jpg';
import Avatar from 'assets/images/avatar.jpg';

// Components
import ProductModal from '.';

export default {
  title: 'PracticeTwo/Modal/ProductModal',
  component: ProductModal,
} as ComponentMeta<typeof ProductModal>;

const Template: ComponentStory<typeof ProductModal> = () => {
  const product = {
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

  const status = [
    { id: '1', name: 'Available' },
    { id: '2', name: 'Sold out' },
  ];

  const types = [
    { id: '1', name: 'TV' },
    { id: '2', name: 'Smart Phone' },
  ];

  const fragProductUpdate = () => {
    console.log('product update');
  };

  return (
    <ProductModal
      productItem={product}
      status={status}
      types={types}
      fragProductUpdate={fragProductUpdate}
    />
  );
};

export const Default = Template.bind({});
