import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

// Images
import Product from 'assets/images/product.jpg';
import Avatar from 'assets/images/avatar.jpg';

// Components
import ProductsTable, { Filters } from '.';

export default {
  title: 'PracticeTwo/HomePage/TableProducts',
  component: ProductsTable,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ProductsTable>;

const Template: ComponentStory<typeof ProductsTable> = () => {
  const [filter, setFilter] = useState<Filters>({
    productName: '',
    statusesId: '',
    typesId: '',
    quantity: '',
    brandName: '',
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

  const products = [
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

  const handleSearch = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFilter((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSetProductItem = () => {
    console.log('handle set product item');
  };

  const handleEdit = () => {
    console.log('edit');
  };

  return (
    <ProductsTable
      filters={filter}
      products={products}
      status={listStatus}
      types={listType}
      onSearch={handleSearch}
      onEdit={handleEdit}
      handleSetProductItem={handleSetProductItem}
    />
  );
};

export const Default = Template.bind({});
