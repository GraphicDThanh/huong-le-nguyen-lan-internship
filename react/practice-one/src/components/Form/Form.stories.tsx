import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { Form } from './index';

export default {
  title: 'PracticeOne/Common/Form',
  component: Form,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = () => {
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('success');
  };

  return <Form onSubmit={onSubmit} />;
};

export const Default = Template.bind({});
