import { MouseEvent } from 'react';

// Styles
import './index.css';

// Components
import { Button } from '@components';

interface ActionMenuProps {
  id?: string;
  onEdit: (id: string) => void;
  onDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ActionMenu = ({ id, onDelete, onEdit }: ActionMenuProps) => {
  const handleEdit = () => {
    if (id) {
      onEdit(id);
    }
  };

  return (
    <div className='action-menu-wrapper'>
      <Button text='Edit' color='default' type='button' onClick={handleEdit} variant='primary' />
      <Button text='Delete' color='warning' type='button' onClick={onDelete} variant='primary' />
    </div>
  );
};

export { ActionMenu };
