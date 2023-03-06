import { useContext } from 'react';
import { BoxContext } from './BoxProvider';
import { ComponentWrapper } from './ComponentWrapper';

const Component1 = () => {
  const context = useContext(BoxContext);
  const { text, handleSetText } = context;
  console.log('render1');

  return (
    <div className='component-1' style={{ border: '1px solid black', padding: '20px' }}>
      <p>{text}</p>
      <button type='button' onClick={handleSetText}>
        Change Text
      </button>
      <ComponentWrapper />
    </div>
  );
};

export { Component1 };
