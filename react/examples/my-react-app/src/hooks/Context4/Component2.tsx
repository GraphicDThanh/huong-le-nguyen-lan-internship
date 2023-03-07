import { memo, useContext, useMemo } from 'react';
import { WrapContext } from './Provider';

const Com2 = () => {
  // const context = useContext(WrapContext);
  // const { text } = context;
  console.log('render2');

  return (
    <div
      className='component-2'
      style={{
        border: '1px solid black',
        padding: '20px',
        // background: changeColor
      }}
    >
      {/* <p>{text}</p> */}
      <p>com 2</p>
    </div>
  );
};

export default memo(Com2);
