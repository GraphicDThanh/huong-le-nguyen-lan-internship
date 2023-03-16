import { ComponentStory, ComponentMeta } from '@storybook/react';
import ProductsTable from '.';
import Product from 'assets/images/product.jpg';
import Avatar from 'assets/images/avatar.jpg';
import { ChangeEvent, useState } from 'react';

export default {
  title: 'PracticeTwo/Table/Products',
  component: ProductsTable,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof ProductsTable>;

const Template: ComponentStory<typeof ProductsTable> = () => {
  const [filter, setFilter] = useState({
    product: '',
    statusesId: '',
    typesId: '',
    quantity: '',
    brand: '',
    price: '',
  });

  const listStatus = [
    { id: '1', name: 'Available' },
    { id: '2', name: 'Sold out' },
  ];

  const listType = [
    { id: '1', name: 'TV' },
    { id: '2', name: 'Smart Phone' },
  ];

  const data = [
    {
      id: '1',
      productImage: Product,
      productName: 'Louis Vuitton',
      statuses: {
        id: '1',
        name: 'Available',
      },
      types: {
        id: '1',
        name: 'TV',
      },
      quantity: 123,
      brandImage: Avatar,
      brandName: 'Evan Flores',
      price: 200,
    },
    {
      id: '2',
      productImage: Product,
      productName: 'Louis Vuitton',
      statuses: {
        id: '1',
        name: 'Available',
      },
      types: {
        id: '1',
        name: 'TV',
      },
      quantity: 123,
      brandImage: Avatar,
      brandName: 'Evan Flores',
      price: 200,
    },
    {
      id: '3',
      productImage: Product,
      productName: 'Louis Vuitton',
      statuses: {
        id: '1',
        name: 'Available',
      },
      types: {
        id: '1',
        name: 'TV',
      },
      quantity: 123,
      brandImage: Avatar,
      brandName: 'Evan Flores',
      price: 200,
    },
  ];

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

  const handleDelete = () => {
    console.log('delete');
  };

  const handleEdit = () => {
    console.log('edit');
  };

  return (
    <ProductsTable
      dataFilter={filter}
      data={data}
      listStatus={listStatus}
      listType={listType}
      handleSearch={handleSearch}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export const Default = Template.bind({});
