import { memo, useContext } from 'react';
import { BoxContext } from './BoxProvider';
import Component3 from './Component3';

const Component2 = () => {
  const context = useContext(BoxContext);
  const { changeColor } = context;
  console.log('render2');

  return (
    <div
      className='component-2'
      style={{ border: '1px solid black', padding: '20px', background: changeColor }}
    >
      <p>This is component 2</p>
      <Component3 />
    </div>
  );
};

export default memo(Component2);
