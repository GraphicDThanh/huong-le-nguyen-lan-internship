import { memo } from 'react';
import Component3 from './Component3';

const Component2 = memo(
  ({ changeColor, handleChangeColor }: { changeColor: string; handleChangeColor: () => void }) => {
    console.log('render2');

    return (
      <div
        className='component-2'
        style={{ border: '1px solid black', padding: '20px', background: changeColor }}
      >
        <p>This is component 2</p>
        <Component3 handleChangeColor={handleChangeColor} />
      </div>
    );
  },
);

export { Component2 };
