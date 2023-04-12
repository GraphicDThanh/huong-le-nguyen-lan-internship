import { ComponentStory, ComponentMeta } from '@storybook/react';
import ModalNotification from '.';

export default {
  title: 'PracticeTwo/Modal/ModalNotification',
  component: ModalNotification,
} as ComponentMeta<typeof ModalNotification>;

const Template: ComponentStory<typeof ModalNotification> = (args) => {
  return <ModalNotification {...args} />;
};

export const Notification = Template.bind({});
Notification.args = {
  description: '404 Page Not Found',
  onCancel: () => {
    console.log('close');
  },
};

export const Confirm = Template.bind({});
Confirm.args = {
  id: '1',
  isConfirm: true,
  textButtonConfirm: 'Delete',
  description: 'Do you want to delete this ?',
  onConfirm: async (id: string) => {
    console.log('confirm', id);
  },
  onCancel: () => {
    console.log('close');
  },
};
