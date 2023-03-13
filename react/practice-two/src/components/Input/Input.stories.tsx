import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { Input } from './index';

export default {
  title: 'PracticeTwo/Input',
  component: Input,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = () => {
  const [data, setData] = useState('');
  const handleSetData = (e: ChangeEvent) => {
    console.log('a');

    setData((e.target as HTMLInputElement).value);
  };

  return <Input name='name' value={data} onChange={handleSetData} placeholder='Search' />;
};

export const Default = Template.bind({});
