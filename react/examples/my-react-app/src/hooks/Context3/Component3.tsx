import { memo } from 'react';
import Component4 from './Component4';

const Component3 = () => {
  console.log('3');

  return (
    <div className='component-3' style={{ border: '1px solid black', padding: '20px' }}>
      <p>This is component 3</p>
      <Component4 />
    </div>
  );
};

export default memo(Component3);
