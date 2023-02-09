import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Btn from './Btn';

export default {
  title: 'test Btn',
  component: Btn,
  argTypes: {
    handleOnClick: { action: 'handleOnClick' },
  },
  decorators: [
    (Story) => {
      const handleOnClick = () => {
        console.log('a');
      };

      return (
        <div>
          <Story handleOnclick={handleOnClick} />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'success',
};
