import { useContext } from 'react';
import Com1 from './Component1';
import Com2 from './Component2';
import Com3 from './Component3';
import Com4 from './Component4';
import { WrapContext } from './Provider';
import { Provider2 } from './Provider2';

const Box = () => {
  const context = useContext(WrapContext);
  const { text } = context;
  console.log('render-parent');

  return (
    <div
      className='component-box'
      style={{ border: '1px solid black', width: '300px', padding: '20px' }}
    >
      <h1>{text}</h1>
      <Com1 />
      <Com2 />
      <div style={{ padding: '20px' }}>
        <Provider2>
          <Com3 />
          <Com4 />
        </Provider2>
      </div>
    </div>
  );
};

export { Box };
