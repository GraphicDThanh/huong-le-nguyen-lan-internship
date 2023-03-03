import { memo } from 'react';

const Content = ({ onIncrease }: { onIncrease: () => void }) => {
  console.log('a');

  return (
    <>
      <div>Hello World!</div>
      <button type='button' onClick={onIncrease}>
        Click Me!
      </button>
    </>
  );
};

export default memo(Content);
