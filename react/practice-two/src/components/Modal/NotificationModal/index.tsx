// Styles
import './index.css';

// Components
import { Button, Modal } from '@components';
import { useCallback } from 'react';

interface NotificationModalProps {
  id?: string;
  textButtonConfirm?: string;
  description: string;
  variant: 'confirm' | 'notification';
  onConfirm?: (id: string) => Promise<void>;
  onCancel: () => void;
}

const NotificationModal = ({
  description,
  id,
  textButtonConfirm,
  variant,
  onConfirm,
  onCancel,
}: NotificationModalProps) => {
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
        {variant === 'confirm' && (
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

export default NotificationModal;
