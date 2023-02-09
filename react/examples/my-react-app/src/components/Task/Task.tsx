import './task.css';
import star from '../../assets/star.svg';

interface Task {
  title: string;
  id: string;
  status: string;
  onArchiveTask: () => void;
  onPinTask: () => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Task({
  title,
  id,
  status,
  onArchiveTask,
  onPinTask,
  handleOnChange,
}: Task) {
  return (
    <div className={`list-item ${status}`}>
      <label htmlFor='checked' aria-label={`archiveTask-${id}`} className='checkbox'>
        <input
          type='checkbox'
          name='checked'
          checked={status === 'TASK_ARCHIVED' && true}
          id={`archiveTask-${id}`}
          onChange={onArchiveTask}
        />
      </label>
      <label htmlFor='title' aria-label={title} className='title'>
        <input
          type='text'
          value={title}
          onChange={handleOnChange}
          name='title'
          placeholder='Input title'
        />
      </label>
      {status !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={onPinTask}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <img src={star} alt='' />
        </button>
      )}
    </div>
  );
}
