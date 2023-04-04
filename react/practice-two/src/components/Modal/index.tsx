import { ReactNode } from 'react';

// Styles
import './index.css';

// Images
import Cancel from 'assets/icons/cancel.svg';

// Components
import { Image } from '@components';

interface ModalProps {
  children: ReactNode;
  toggleModal: () => void;
}

const Modal = ({ children, toggleModal }: ModalProps) => {
  return (
    <div className='overlay'>
      <div className='modal-wrapper'>
        <div className='modal-header'>
          <Image image={Cancel} size='sm' onClick={toggleModal} isCursorPointer={true} />
        </div>
        <div className='modal-body'>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
