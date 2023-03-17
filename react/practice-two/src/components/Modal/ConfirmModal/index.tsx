import { Button } from 'components/Button';
import { Modal } from '..';
import './index.css';

interface ConfirmModalProps {
  id: string;
  textButtonConfirm: string;
  description: string;
  showHideModal: () => void;
  onConfirm: (id: string) => void;
}

const ConfirmModal = ({
  showHideModal,
  onConfirm,
  description,
  id,
  textButtonConfirm,
}: ConfirmModalProps) => {
  /**
   * @description function handle action confirm of modal
   */
  const handleActionConfirm = () => {
    console.log(id);
    showHideModal();
    onConfirm(id);
  };

  return (
    <Modal showHideModal={showHideModal}>
      <p className='confirm-modal-description'>{description}</p>
      <div className='confirm-modal-cta'>
        <Button
          variant='secondary'
          color='warning'
          text={textButtonConfirm}
          type='button'
          onClick={handleActionConfirm}
        />
        <Button
          variant='secondary'
          color='default'
          text='Cancel'
          type='button'
          onClick={showHideModal}
        />
      </div>
    </Modal>
  );
};

export { ConfirmModal };
