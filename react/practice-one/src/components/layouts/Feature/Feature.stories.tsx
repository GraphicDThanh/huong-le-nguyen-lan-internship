import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Feature } from './index';

export default {
  title: 'PracticeOne/Layout/Feature',
  component: Feature,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Feature>;

const Template: ComponentStory<typeof Feature> = () => <Feature />;

export const Default = Template.bind({});
Default.args = {};
