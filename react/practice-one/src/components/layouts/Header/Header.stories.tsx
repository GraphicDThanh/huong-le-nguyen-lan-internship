import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './index';

export default {
  title: 'PracticeOne/Layout/Header',
  component: Header,
  decorators: [
    (Story) => (
      <div style={{ padding: '3em', backgroundColor: '#6A6A6A' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
