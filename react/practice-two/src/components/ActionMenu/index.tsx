import { MouseEvent } from 'react';

// Styles
import './index.css';

// Components
import { Button } from '@components';

interface ActionMenuProps {
  id?: string;
  handleEdit: (e: MouseEvent<HTMLButtonElement>) => void;
  handleDelete: (e: MouseEvent<HTMLButtonElement>) => void;
}

const ActionMenu = ({ id, handleDelete, handleEdit }: ActionMenuProps) => {
  return (
    <div className='action-menu-wrapper'>
      <Button
        id={id}
        text='Edit'
        color='default'
        type='button'
        onClick={handleEdit}
        variant='primary'
      />
      <Button
        id={id}
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
