import { LegacyRef, useCallback, useContext } from 'react';

// Styles
import './index.css';

// Components
import { Button } from '@components';
import { ModalContext } from '@contexts';

interface ActionMenuProps {
  id?: string;
  onEdit: (id: string) => void;
  onDelete: () => void;
}

const ActionMenu = ({ id, onDelete, onEdit }: ActionMenuProps) => {
  const { showHideNotificationModal } = useContext(ModalContext);

  /**
   * @description function handle action edit button
   */
  const handleEdit = useCallback(() => {
    if (id) {
      onEdit(id);
    }
  }, [onEdit]);

  /**
   * @description function handle action delete button
   */
  const handleDelete = useCallback(() => {
    showHideNotificationModal();
    onDelete();
  }, [onDelete]);

  return (
    <div className='action-menu-wrapper'>
      <Button text='Edit' color='default' type='button' onClick={handleEdit} variant='primary' />
      <Button
        text='Delete'
        color='warning'
        type='button'
        onClick={handleDelete}
        variant='primary'
      />
    </div>
  );
};

export default ActionMenu;
