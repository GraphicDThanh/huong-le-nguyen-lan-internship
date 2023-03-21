import { ReactNode } from 'react';

// Styles
import './index.css';

// Images
import Cancel from 'assets/icons/cancel.svg';

// Components
import { Image } from '@components';

interface ModalProps {
  children: ReactNode;
  showHideModal: () => void;
}

const Modal = ({ children, showHideModal }: ModalProps) => {
  return (
    <div className='overlay'>
      <div className='modal-wrapper'>
        <div className='modal-header'>
          <Image image={Cancel} size='small' onClick={showHideModal} cursorPointer={true} />
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
