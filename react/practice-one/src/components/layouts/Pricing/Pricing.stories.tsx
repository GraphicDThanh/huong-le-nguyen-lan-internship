import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pricing } from './index';

export default {
  title: 'PracticeOne/Layout/Pricing',
  component: Pricing,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Pricing>;

const Template: ComponentStory<typeof Pricing> = () => <Pricing />;

export const Default = Template.bind({});
Default.args = {};
