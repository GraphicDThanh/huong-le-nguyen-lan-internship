import './index.css';
import { Button } from 'components/Button';
import { MouseEvent } from 'react';

interface ActionMenuProps {
  id?: string;
  handleEdit: (e: MouseEvent) => void;
  handleDelete: (e: MouseEvent) => void;
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
