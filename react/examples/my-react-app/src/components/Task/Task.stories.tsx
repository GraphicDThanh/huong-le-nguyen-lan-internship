import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Task from './Task';

export default {
  component: Task,
  title: 'Task',
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Build date picker',
  id: '1',
  state: 'TASK_ARCHIVED',
};

export const Pinned = Template.bind({});
Pinned.args = {
  title: 'QA dropdown',
  id: '1',
  state: '',
};

export const Archived = Template.bind({});
Archived.arg = {
  task: {
    title: 'Build date picker',
    id: '1',
    state: '',
  },
};
