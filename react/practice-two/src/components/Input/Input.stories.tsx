import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';
import { Input } from './index';

export default {
  title: 'PracticeTwo/Input',
  component: Input,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [data, setData] = useState('');
  const handleSetData = (e: ChangeEvent) => {
    if (e.target instanceof HTMLInputElement) {
      setData(e.target.value);
    }
  };
  const { name = 'name', value = data, onChange = handleSetData, ...rest } = args;

  return <Input name={name} value={value} onChange={onChange} {...rest} />;
};

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Full Name',
  variant: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Full Name',
  variant: 'default',
  title: 'Full Name',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Full Name',
  variant: 'primary',
  title: 'Full Name',
};
