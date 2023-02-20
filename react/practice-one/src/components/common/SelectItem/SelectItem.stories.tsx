import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectItem } from './index';

export default {
  title: 'PracticeOne/SelectItem',
  component: SelectItem,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof SelectItem>;

const Template: ComponentStory<typeof SelectItem> = (args) => <SelectItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Ho Chi Minh',
  value: 'hcm',
};
