import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SelectItem } from './index';

export default {
  title: 'PracticeTwo/SelectItem',
  component: SelectItem,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof SelectItem>;

const Template: ComponentStory<typeof SelectItem> = (args) => <SelectItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'All',
  value: 'all',
};
