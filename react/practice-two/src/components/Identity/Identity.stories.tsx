import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Identity } from './index';
import Product from 'assets/images/product.jpg';
import Avatar from 'assets/images/avatar.jpg';

export default {
  title: 'PracticeTwo/Identity',
  component: Identity,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Identity>;

const Template: ComponentStory<typeof Identity> = (args) => <Identity {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Louis Vuitton',
  image: Product,
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Evan Flores',
  image: Avatar,
  variant: 'circle',
};
