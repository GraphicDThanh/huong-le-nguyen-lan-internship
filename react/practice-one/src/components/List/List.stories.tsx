import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './index';

export default {
  title: 'PracticeOne/Common/List',
  component: List,
  decorators: [
    (Story) => {
      return (
        <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
  const listMenu = [
    { title: 'Home', href: '#home' },
    { title: 'Product', href: '#product' },
    { title: 'Pricing', href: '#pricing' },
    { title: 'Contact', href: '#contact' },
  ];

  return <List {...args} listItem={listMenu} />;
};

export const Default = Template.bind({});
Default.args = {
  classList: 'list-row',
};

export const ListMenu = Template.bind({});
ListMenu.args = {
  classList: 'list-menu',
};

export const Title = Template.bind({});
Title.args = {
  listTitle: 'Home',
  classList: 'list-column',
};
