import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './index';

export default {
  title: 'PracticeOne/Common/Button',
  component: Button,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Try for free',
  variant: 'primary',
  size: 'xs',
  type: 'button',
  as: 'button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Try for free',
  variant: 'secondary',
  size: 'xs',
  type: 'button',
  as: 'button',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  title: 'Try for free',
  variant: 'tertiary',
  size: 'xs',
  type: 'button',
  as: 'button',
};

export const Quaternary = Template.bind({});
Quaternary.args = {
  title: 'Try for free',
  variant: 'quaternary',
  as: 'a',
  href: '#',
};
