import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ListItem } from './index';
import Facebook from 'assets/icons/facebook.svg';

export default {
  title: 'PracticeOne/ListItem',
  component: ListItem,
  decorators: [
    (Story) => {
      return (
        <div style={{ margin: '3em' }}>
          <Story />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Home',
  tagName: 'p',
};

export const Link = Template.bind({});
Link.args = {
  title: 'Home',
  tagName: 'a',
  href: '#',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'Facebook',
  tagName: 'a',
  href: '#',
  image: Facebook,
};
