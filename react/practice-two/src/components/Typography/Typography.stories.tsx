import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Typography from '.';

export default {
  title: 'PracticeTwo/Typography',
  component: Typography,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'tertiary',
  tagName: 'h1',
  text: 'Management',
  size: 'lg',
  weight: 'bold',
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Evan Flores',
  weight: 'regular',
};
