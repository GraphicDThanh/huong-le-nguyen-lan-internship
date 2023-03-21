import { ComponentStory, ComponentMeta } from '@storybook/react';

// Components
import InputFile from '.';

export default {
  title: 'PracticeTwo/InputFile',
  component: InputFile,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof InputFile>;

const Template: ComponentStory<typeof InputFile> = (args) => {
  return <InputFile {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  text: 'Choose File ...',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  text: 'Choose File ...',
};
