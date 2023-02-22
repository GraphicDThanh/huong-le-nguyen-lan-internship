import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Banner } from './index';

export default {
  title: 'PracticeOne/Layout/Banner',
  component: Banner,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = () => <Banner />;

export const Default = Template.bind({});
Default.args = {};
