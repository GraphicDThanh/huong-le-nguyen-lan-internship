import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from './index';
import Avatar from 'assets/images/avatar.jpg';
import Product from 'assets/images/product.jpg';
import More from 'assets/icons/more.svg';

export default {
  title: 'PracticeTwo/Image',
  component: Image,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: Product,
  alt: 'product',
  size: 'normal',
};

export const Circle = Template.bind({});
Circle.args = {
  image: Avatar,
  variant: 'circle',
  alt: 'avatar',
  size: 'small',
};

export const Icon = Template.bind({});
Icon.args = {
  image: More,
  alt: 'icon more',
  size: 'small',
  cursorPointer: true,
};
