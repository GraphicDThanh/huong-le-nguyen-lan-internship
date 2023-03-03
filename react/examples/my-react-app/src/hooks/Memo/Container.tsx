import { useState } from 'react';
import Content from './Content';

const Container = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Content />
      <h1>{count}</h1>
      <button type='button' onClick={handleClick}>
        Click Me!
      </button>
    </div>
  );
};

export { Container };
