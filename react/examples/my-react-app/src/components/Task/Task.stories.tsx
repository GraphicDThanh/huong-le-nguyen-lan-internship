import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    handleOnChange: { action: 'handleOnChange' },
  },
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => {
  console.log(args);

  const [value, setValue] = useState('default');

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <Task {...args} title={value} handleOnChange={handleOnChange} />;
};

export const Default = Template.bind({});
Default.args = {
  status: 'TASK_INBOX',
  id: '1',
};

export const Pinned = Template.bind({});
Pinned.args = {
  status: 'TASK_PINNED',
  id: '2',
};

export const Archived = Template.bind({});
Archived.args = {
  status: 'TASK_ARCHIVED',
  id: '3',
};
