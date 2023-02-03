import React from 'react';
import './task.css';

interface Task {
  title: string;
  id: string;
  state: string;
}

export default function Task(task: Task) {
  const onArchiveTask = (id) => {
    console.log('c');
  };

  const onPinTask = (id) => {
    console.log('a');
  };

  return (
    <div className={`list-item ${task.state}`}>
      <label htmlFor='checked' aria-label={`archiveTask-${task.id}`} className='checkbox'>
        <input
          type='checkbox'
          name='checked'
          id={`archiveTask-${task.id}`}
          checked={task.state === 'TASK_ARCHIVED'}
        />
        <span className='checkbox-custom' onClick={() => onArchiveTask(task.id)} />
      </label>
      <label htmlFor='title' aria-label={task.title} className='title'>
        <input
          type='text'
          value={task.title}
          readOnly={true}
          name='title'
          placeholder='Input title'
        />
      </label>
      {task.state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={() => onPinTask(task.id)}
          id={`pinTask-${task.id}`}
          aria-label={`pinTask-${task.id}`}
          key={`pinTask-${task.id}`}
        >
          <span className={`icon-star`}>asd</span>
        </button>
      )}
    </div>
  );
}
