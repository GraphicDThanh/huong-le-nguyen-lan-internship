import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Build date picker',
  state: 'TASK_INBOX',
  id: '1',
};

export const Pinned = Template.bind({});
Pinned.args = {
  title: 'QA dropdown',
  state: 'TASK_PINNED',
  id: '2',
};

export const Archived = Template.bind({});
Archived.args = {
  title: 'Write schema for account menu',
  state: 'TASK_ARCHIVED',
  id: '3',
};
