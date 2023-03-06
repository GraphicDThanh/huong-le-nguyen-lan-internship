import { useReducer } from 'react';

const initState = 0;
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

const reducer = (state: number, action: string) => {
  switch (action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
};

const ExampleReducer = () => {
  const [count, dispatch] = useReducer(reducer, initState);
  const handleDownEvent = () => {
    dispatch(DOWN_ACTION);
  };
  const handleUpEvent = () => {
    dispatch(UP_ACTION);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button type='button' onClick={handleDownEvent}>
        Down
      </button>
      <button type='button' onClick={handleUpEvent}>
        Up
      </button>
    </div>
  );
};

export { ExampleReducer };
