import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from './index';

export default {
  title: 'PracticeOne/ListItem',
  component: ListItem,
  decorators: [
    (Story) => {
      return <Story />;
    },
  ],
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const listItem = Template.bind({});
listItem.args = {};
