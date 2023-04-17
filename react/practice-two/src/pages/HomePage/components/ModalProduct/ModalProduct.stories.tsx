import { ComponentStory, ComponentMeta } from '@storybook/react';

// Images
import Product from 'assets/images/product.jpg';
import Avatar from 'assets/images/avatar.jpg';

// Components
import ModalProduct from '.';

export default {
  title: 'PracticeTwo/HomePage/ModalProduct',
  component: ModalProduct,
} as ComponentMeta<typeof ModalProduct>;

const Template: ComponentStory<typeof ModalProduct> = () => {
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

  const flagProductUpdate = () => {
    console.log('product update');
  };

  return (
    <ModalProduct
      productItem={product}
      status={status}
      types={types}
      flagProductUpdate={flagProductUpdate}
    />
  );
};

export const Default = Template.bind({});
