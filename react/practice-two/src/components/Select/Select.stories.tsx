import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { Select } from './index';

export default {
  title: 'PracticeTwo/Select',
  component: Select,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
  const [data, setData] = useState('');
  const listOption = [
    { id: '1', text: 'All', value: 'all' },
    { id: '2', text: 'Available', value: 'avail' },
    { id: '3', text: 'Sold out', value: 'sold' },
  ];
  const handleSetData = (e: ChangeEvent) => {
    setData((e.target as HTMLInputElement).value);
  };

  return (
    <Select name='status' options={listOption} valueSelected={data} onChange={handleSetData} />
  );
};

export const Default = Template.bind({});
