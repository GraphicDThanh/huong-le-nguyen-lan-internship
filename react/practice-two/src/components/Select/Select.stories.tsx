import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

// Components
import Select from '.';

export default {
  title: 'PracticeTwo/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = () => {
  const [data, setData] = useState('');
  const listOption = [
    { id: '1', name: 'Available' },
    { id: '2', name: 'Sold out' },
  ];
  const handleSetData = (e: ChangeEvent<HTMLSelectElement>) => {
    setData(e.target.value);
  };

  return (
    <Select name='status' options={listOption} valueSelected={data} onChange={handleSetData} />
  );
};

export const Default = Template.bind({});
