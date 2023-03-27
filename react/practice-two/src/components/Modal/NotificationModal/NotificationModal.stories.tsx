import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationModal from '.';

export default {
  title: 'PracticeTwo/Modal/NotificationModal',
  component: NotificationModal,
} as ComponentMeta<typeof NotificationModal>;

const Template: ComponentStory<typeof NotificationModal> = (args) => {
  return <NotificationModal {...args} />;
};

export const Notification = Template.bind({});
Notification.args = {
  variant: 'notification',
  description: '404 Page Not Found',
  onCancel: () => {
    console.log('close');
  },
};

export const Confirm = Template.bind({});
Confirm.args = {
  id: '1',
  variant: 'confirm',
  textButtonConfirm: 'Delete',
  description: 'Do you want to delete this ?',
  onConfirm: async (id: string) => {
    console.log('confirm', id);
  },
  onCancel: () => {
    console.log('close');
  },
};
