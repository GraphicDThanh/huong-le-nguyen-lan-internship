import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePage } from './index';

export default {
  title: 'PracticeOne/Page/HomePage',
  component: HomePage,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = () => <HomePage />;

export const Default = Template.bind({});
Default.args = {};
