import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmModal } from '.';

export default {
  title: 'PracticeTwo/Modal/ConfirmModal',
  component: ConfirmModal,
  decorators: [(Story) => <Story />],
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = () => {
  const onConfirm = () => {
    console.log('confirm');
  };

  const showHideModal = () => {
    console.log('show hide modal');
  };

  return (
    <ConfirmModal
      description='Do you want to delete this ?'
      id='1'
      onConfirm={onConfirm}
      showHideModal={showHideModal}
      textButtonConfirm='Delete'
    />
  );
};

export const Default = Template.bind({});
