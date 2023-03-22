import { ComponentStory, ComponentMeta } from '@storybook/react';
import ConfirmModal from '.';

export default {
  title: 'PracticeTwo/Modal/ConfirmModal',
  component: ConfirmModal,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = () => {
  const onConfirm = async (id: string) => {
    console.log('id', id);
  };

  return (
    <ConfirmModal
      description='Do you want to delete this ?'
      id='1'
      onConfirm={onConfirm}
      textButtonConfirm='Delete'
    />
  );
};

export const Default = Template.bind({});
