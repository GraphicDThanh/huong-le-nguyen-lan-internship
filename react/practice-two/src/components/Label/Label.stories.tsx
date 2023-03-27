import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import Label from '.';

export default {
  title: 'PracticeTwo/Label',
  component: Label,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: '200',
  variant: 'primary',
};

export const Success = Template.bind({});
Success.args = {
  text: 'Available',
  variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
  text: 'Sold out',
  variant: 'warning',
};
