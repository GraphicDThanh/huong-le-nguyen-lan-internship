import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ProductModal } from './index';
import Product from 'assets/images/product.jpg';
import Avatar from 'assets/images/avatar.jpg';

export default {
  title: 'PracticeTwo/Modal/ProductModal',
  component: ProductModal,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof ProductModal>;

const Template: ComponentStory<typeof ProductModal> = () => {
  const datas = {
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

  return (
    <ProductModal
      product={datas}
      dataStatus={dataStatus}
      dataTypes={dataTypes}
      showHideModal={showHideModal}
    />
  );
};

export const Default = Template.bind({});
