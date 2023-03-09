import { useState } from 'react';

const Example = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('v');

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {title} times</p>
      <button
        type='button'
        onClick={() => {
          setCount(count + 1);
          setTitle('a');
        }}
      >
        Click me
      </button>
    </div>
  );
};

export { Example };
