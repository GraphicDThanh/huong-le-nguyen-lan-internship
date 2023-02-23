import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Testimonial } from './index';

export default {
  title: 'PracticeOne/Layout/Testimonial',
  component: Testimonial,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = () => <Testimonial />;

export const Default = Template.bind({});
Default.args = {};
