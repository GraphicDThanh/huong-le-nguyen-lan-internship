import { memo, useContext, useMemo } from 'react';
import { Provider2Context } from './Provider2';

const Com4 = () => {
  const { handleSetData, value } = useContext(Provider2Context);
  console.log('render4');

  return (
    <div
      className='component-2'
      style={{
        border: '1px solid black',
        padding: '20px',
      }}
    >
      <input type='text' value={value} onChange={handleSetData} />
      <p>com 4</p>
    </div>
  );
};

export default memo(Com4);
