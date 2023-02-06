import React from 'react';
import './task.css';
import Star from '../../assets/star.svg';

interface Task {
  title: string;
  id: string;
  state: string;
  onArchiveTask: () => void;
  onPinTask: () => void;
}

export default function Task({ title, id, state, onArchiveTask, onPinTask }: Task) {
  return (
    <div className={`list-item ${state}`}>
      <label htmlFor='checked' aria-label={`archiveTask-${id}`} className='checkbox'>
        <input
          type='checkbox'
          name='checked'
          checked={state === 'TASK_ARCHIVED' && true}
          id={`archiveTask-${id}`}
          onChange={() => onArchiveTask()}
        />
      </label>
      <label htmlFor='title' aria-label={title} className='title'>
        <input type='text' value={title} readOnly={true} name='title' placeholder='Input title' />
      </label>
      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={() => onPinTask()}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <img src={Star as string} alt='' />
        </button>
      )}
    </div>
  );
}
