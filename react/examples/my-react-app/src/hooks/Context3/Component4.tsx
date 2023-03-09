import { memo, useContext, useMemo } from 'react';
import { BoxContext } from './BoxProvider';

const Component4 = () => {
  const { handleChangeColor } = useContext(BoxContext);
  console.log('4');

  return useMemo(
    () => (
      <div className='component-4' style={{ border: '1px solid black', padding: '20px' }}>
        <p>This is component 4</p>
        <button type='button' onClick={handleChangeColor}>
          Change color
        </button>
      </div>
    ),
    [handleChangeColor],
  );
};

export default Component4;
