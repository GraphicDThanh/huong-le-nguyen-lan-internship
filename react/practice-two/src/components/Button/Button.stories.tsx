import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Button from '.';

export default {
  title: 'PracticeTwo/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: 'Edit',
  variant: 'primary',
  type: 'button',
};
Primary.decorators = [
  (Story) => (
    <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
      <Story />
    </div>
  ),
];

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Edit',
  variant: 'secondary',
  color: 'warning',
  type: 'button',
};
Secondary.decorators = [
  (Story) => (
    <div style={{ padding: '3em' }}>
      <Story />
    </div>
  ),
];
