import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Form } from './index';

export default {
  title: 'PracticeOne/Common/Form',
  component: Form,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => {
  return <Form />;
};

export const Default = Template.bind({});
Default.args = {
  classes: 'form-contact',
};
