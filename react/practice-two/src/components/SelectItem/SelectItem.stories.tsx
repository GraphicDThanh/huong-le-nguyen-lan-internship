import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import { SelectItem } from './index';

export default {
  title: 'PracticeTwo/SelectItem',
  component: SelectItem,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof SelectItem>;

const Template: ComponentStory<typeof SelectItem> = (args) => <SelectItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: '1',
  name: 'Available',
};
