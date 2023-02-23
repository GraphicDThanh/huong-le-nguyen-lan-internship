import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Footer } from './index';

export default {
  title: 'PracticeOne/Layout/Footer',
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
Default.args = {};
