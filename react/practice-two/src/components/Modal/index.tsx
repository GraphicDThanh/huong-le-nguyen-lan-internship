import './index.css';
import { Image } from 'components/Image';
import Cancel from 'assets/icons/cancel.svg';
import { ReactNode } from 'react';

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
        {children}
      </div>
    </div>
  );
};

export { Modal };
