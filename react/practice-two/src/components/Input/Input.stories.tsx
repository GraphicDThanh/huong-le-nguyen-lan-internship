import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

// Components
import Input from '.';

export default {
  title: 'PracticeTwo/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [data, setData] = useState('');
  const handleSetData = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
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
