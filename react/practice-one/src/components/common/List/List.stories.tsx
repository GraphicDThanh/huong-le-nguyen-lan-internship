import { ComponentStory, ComponentMeta } from '@storybook/react';
import { List } from './index';

export default {
  title: 'PracticeOne/List',
  component: List,
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '3em' }}>
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
  classes: 'list-row',
};

export const Title = Template.bind({});
Title.args = {
  listTitle: 'Home',
  classes: 'list-column',
};
