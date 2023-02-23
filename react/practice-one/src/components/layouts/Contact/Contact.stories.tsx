import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Contact } from './index';

export default {
  title: 'PracticeOne/Layout/Contact',
  component: Contact,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = () => <Contact />;

export const Default = Template.bind({});
Default.args = {};
