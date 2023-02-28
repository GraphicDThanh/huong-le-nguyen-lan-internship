import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './index';

export default {
  title: 'PracticeOne/Common/Input',
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'fullName',
  placeholder: 'Full Name',
};
