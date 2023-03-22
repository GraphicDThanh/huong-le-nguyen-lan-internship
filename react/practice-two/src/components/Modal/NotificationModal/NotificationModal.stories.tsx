import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationModal from '.';

export default {
  title: 'PracticeTwo/Modal/NotificationModal',
  component: NotificationModal,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof NotificationModal>;

const Template: ComponentStory<typeof NotificationModal> = () => {
  const onConfirm = async (id: string) => {
    console.log('id', id);
  };

  return (
    <NotificationModal
      description='Do you want to delete this ?'
      id='1'
      onConfirm={onConfirm}
      textButtonConfirm='Delete'
    />
  );
};

export const Default = Template.bind({});
