import { useContext } from 'react';
import Component2 from './Component2';
import { WrapperContext } from './WrapperProvider';

const Component1 = () => {
  const context = useContext(WrapperContext);
  const { text, handleSetText } = context;
  console.log('render1');

  return (
    <div className='component-1' style={{ border: '1px solid black', padding: '20px' }}>
      <p>{text}</p>
      <button type='button' onClick={handleSetText}>
        Change Text
      </button>
      <Component2 />
    </div>
  );
};

export { Component1 };
