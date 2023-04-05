import { forwardRef, useCallback, useContext } from 'react';

// Styles
import './index.css';

// Components
import { Button } from '@components';

// Context
import { ModalContext } from '@contexts';

interface ActionMenuProps {
  onEdit: () => void;
  onDelete: () => void;
}

const ActionMenu = forwardRef<HTMLDivElement, ActionMenuProps>(function ActionMenu(
  { onDelete, onEdit },
  ref,
) {
  const { showHideNotificationModal } = useContext(ModalContext);

  /**
   * @description function handle action edit button
   */
  const handleEdit = useCallback(() => {
    onEdit();
  }, [onEdit]);

  /**
   * @description function handle action delete button
   */
  const handleDelete = useCallback(() => {
    showHideNotificationModal();
    onDelete();
  }, [onDelete]);

  return (
    <div className='action-menu-wrapper' ref={ref}>
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
});

export default ActionMenu;
