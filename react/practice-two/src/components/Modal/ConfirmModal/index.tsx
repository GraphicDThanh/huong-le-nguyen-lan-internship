import { useContext } from 'react';

// Styles
import './index.css';

// Components
import { Button, Modal } from '@components';

// Contexts
import { ModalContext } from '@contexts';

interface ConfirmModalProps {
  id: string;
  textButtonConfirm: string;
  description: string;
  onConfirm: (id: string) => Promise<void>;
}

const ConfirmModal = ({ description, id, textButtonConfirm, onConfirm }: ConfirmModalProps) => {
  const { showHideConfirmModal } = useContext(ModalContext);

  /**
   * @description function handle action confirm of modal
   */
  const handleActionConfirm = async () => {
    onConfirm(id);
  };

  return (
    <Modal showHideModal={showHideConfirmModal}>
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
          onClick={showHideConfirmModal}
        />
      </div>
    </Modal>
  );
};

export default ConfirmModal;
