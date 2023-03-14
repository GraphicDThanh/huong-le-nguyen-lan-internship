import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';

export default {
  title: 'PracticeTwo/Button',
  component: Button,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Edit',
  variant: 'primary',
  type: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Edit',
  variant: 'secondary',
  color: 'warning',
  type: 'button',
};
