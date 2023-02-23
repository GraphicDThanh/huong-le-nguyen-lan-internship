import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Industry } from './index';

export default {
  title: 'PracticeOne/Layout/Industry',
  component: Industry,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Industry>;

const Template: ComponentStory<typeof Industry> = () => <Industry />;

export const Default = Template.bind({});
Default.args = {};
