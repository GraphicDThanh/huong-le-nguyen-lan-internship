import { memo, useContext, useMemo } from 'react';
import { WrapContext } from './Provider';

const Com2 = () => {
  const context = useContext(WrapContext);
  const { handleSetText } = context;
  console.log('render2');

  return useMemo(
    () => (
      <div
        className='component-2'
        style={{
          border: '1px solid black',
          padding: '20px',
        }}
      >
        <button type='button' onClick={handleSetText}>
          Change Text
        </button>
        {/* <p>{text}</p> */}
      </div>
    ),
    [handleSetText],
  );
};

export default memo(Com2);
