/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useReducer } from 'react';

const initStateTodoList = {
  job: '',
  jobs: [''],
};

const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = (payload: string) => ({
  type: SET_JOB,
  payload,
});

const addJob = (payload: string) => ({
  type: ADD_JOB,
  payload,
});

const deleteJob = (payload: string) => ({
  type: DELETE_JOB,
  payload,
});

const reducerTodo = (
  state: { job: string; jobs: string[] },
  action: { type: string; payload: string },
) => {
  switch (action.type) {
    case SET_JOB:
      return { ...state, job: action.payload };

    case ADD_JOB:
      return { ...state, jobs: [...state.jobs, action.payload] };

    case DELETE_JOB: {
      const newJob = [...state.jobs];
      newJob.splice(Number(action.payload), 1);

      return { ...state, jobs: newJob };
    }
    default:
      throw new Error('Invalid action');
  }
};

const TodoList = () => {
  const [state, dispatch] = useReducer(reducerTodo, initStateTodoList);
  const { job, jobs } = state;
  const handleSubmit = () => {
    dispatch(addJob(job));
    dispatch(setJob(''));
  };

  return (
    <div>
      <h3>TODO</h3>
      <input
        type='text'
        name='text'
        value={job}
        placeholder='Enter todo...'
        onChange={(e) => dispatch(setJob(e.target.value))}
      />
      <br />
      <button type='button' onClick={handleSubmit}>
        Add new todo
      </button>
      <br />
      <ul>
        {jobs &&
          jobs.map((item, index) => (
            <li key={index}>
              {item} <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
            </li>
          ))}
      </ul>
    </div>
  );
};
export { TodoList };
