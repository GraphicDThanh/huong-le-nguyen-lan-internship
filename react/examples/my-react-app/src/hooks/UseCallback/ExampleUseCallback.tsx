import { useCallback, useState } from 'react';
import Content from './Content';

const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <Content onIncrease={handleClick} />
    </div>
  );
};

export { ExampleUseCallback };
