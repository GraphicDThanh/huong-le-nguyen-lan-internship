// Styles
import './index.css';

// Components
import { Button, Modal } from '@components';
import { useCallback } from 'react';

interface ModalNotificationProps {
  id?: string;
  textButtonConfirm?: string;
  description: string;
  isConfirm?: boolean;
  onConfirm?: (id: string) => Promise<void>;
  onCancel: () => void;
}

const ModalNotification = ({
  description,
  id,
  textButtonConfirm,
  isConfirm,
  onConfirm,
  onCancel,
}: ModalNotificationProps) => {
  /**
   * @description function handle action confirm of modal
   */
  const handleActionConfirm = useCallback(() => {
    if (id) {
      onConfirm!(id);
    }
  }, [onConfirm, id]);

  return (
    <Modal toggleModal={onCancel}>
      <p className='confirm-modal-description'>{description}</p>
      <div className='confirm-modal-cta'>
        {isConfirm && (
          <>
            <Button
              variant='secondary'
              color='warning'
              text={textButtonConfirm || 'Delete'}
              onClick={handleActionConfirm}
            />
            <Button variant='secondary' color='default' text='Cancel' onClick={onCancel} />
          </>
        )}
      </div>
    </Modal>
  );
};

export default ModalNotification;
