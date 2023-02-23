import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Textarea } from './index';

export default {
  title: 'PracticeOne/Common/Textarea',
  component: Textarea,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'message',
  placeholder: 'Message',
};
