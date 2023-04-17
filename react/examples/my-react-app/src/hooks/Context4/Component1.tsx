import { memo, useContext, useMemo } from 'react';
import { WrapContext } from './Provider';

const Com1 = () => {
  console.log('render1');

  return (
    <div className='component-1' style={{ border: '1px solid black', padding: '20px' }}>
      <p>com1 </p>
    </div>
  );
};

export default memo(Com1);
