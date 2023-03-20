import { MouseEvent } from 'react';

// Styles
import './index.css';

// Components
import { Button } from '@components';

interface ActionMenuProps {
  id?: string;
  handleEdit: (id: string) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ActionMenu = ({ id, handleDelete, handleEdit }: ActionMenuProps) => {
  const onEdit = () => {
    handleEdit(id!);
  };

  return (
    <div className='action-menu-wrapper'>
      <Button text='Edit' color='default' type='button' onClick={onEdit} variant='primary' />
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

export { ActionMenu };
