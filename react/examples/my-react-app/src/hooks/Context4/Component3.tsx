import { useContext, useMemo } from 'react';
import { Provider2Context } from './Provider2';

const Com3 = () => {
  const { count, handleUp } = useContext(Provider2Context);
  console.log('render3');

  return useMemo(
    () => (
      <div
        className='component-2'
        style={{
          border: '1px solid black',
          padding: '20px',
        }}
      >
        <p>{count}</p>
        <p>com 3</p>
        <button type='button' onClick={handleUp}>
          Click
        </button>
      </div>
    ),
    [handleUp, count],
  );
};

export default Com3;
