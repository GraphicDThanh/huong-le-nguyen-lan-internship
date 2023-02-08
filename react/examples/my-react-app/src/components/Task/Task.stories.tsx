import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { useState } from 'react';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  parameters: {
    backgrounds: {
      values: [{ name: 'ocean', value: '#26C6DA' }],
    },
  },
  argTypes: {
    onArchiveTask: { action: 'onArchiveTask' },
    onPinTask: { action: 'onPinTask' },
  },
  decorators: [
    (Story, context) => {
      const { args } = context;
      const [value, setValue] = useState('');

      const handleChange = (e) => {
        setValue(e.target.value);
      };

      return (
        <div>
          <p>{value}</p>
          <Story {...args} title={value} handleOnChange={handleChange} />
        </div>
      );
    },
  ],
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  // title: 'Build date picker',
  status: 'TASK_INBOX',
  id: '1',
};

export const Pinned = Template.bind({});
Pinned.args = {
  // title: 'QA dropdown',
  status: 'TASK_PINNED',
  id: '2',
};

export const Archived = Template.bind({});
Archived.args = {
  // title: 'Write schema for account menu',
  status: 'TASK_ARCHIVED',
  id: '3',
};
