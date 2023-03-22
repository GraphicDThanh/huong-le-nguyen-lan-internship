import { useContext } from 'react';

// Styles
import './index.css';

// Components
import { Button, Modal } from '@components';

// Contexts
import { ModalContext } from '@contexts';

interface NotificationModalProps {
  id: string;
  textButtonConfirm: string;
  description: string;
  onConfirm: (id: string) => Promise<void>;
}

const NotificationModal = ({
  description,
  id,
  textButtonConfirm,
  onConfirm,
}: NotificationModalProps) => {
  const { showHideNotificationModal } = useContext(ModalContext);

  /**
   * @description function handle action confirm of modal
   */
  const handleActionConfirm = () => {
    onConfirm(id);
  };

  return (
    <Modal showHideModal={showHideNotificationModal}>
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
          onClick={showHideNotificationModal}
        />
      </div>
    </Modal>
  );
};

export default NotificationModal;
