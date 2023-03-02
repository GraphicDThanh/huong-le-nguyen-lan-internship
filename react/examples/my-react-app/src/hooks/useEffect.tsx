import { useEffect, useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {time} times</p>

      <button type='button' onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button
        type='button'
        onClick={() => {
          setTime(time + 1);
        }}
      >
        Click me time
      </button>
    </div>
  );
};

export { Count };
