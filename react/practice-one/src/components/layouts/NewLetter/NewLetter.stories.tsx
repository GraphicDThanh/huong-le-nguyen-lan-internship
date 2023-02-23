import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NewLetter } from './index';

export default {
  title: 'PracticeOne/Layout/NewLetter',
  component: NewLetter,
  parameters: {
    backgrounds: {
      default: 'white',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof NewLetter>;

const Template: ComponentStory<typeof NewLetter> = () => <NewLetter />;

export const Default = Template.bind({});
Default.args = {};
