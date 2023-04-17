import { Component1 } from './Component1';

const ComponentBox = () => (
  <div
    className='component-box'
    style={{ border: '1px solid black', width: '300px', padding: '20px' }}
  >
    <h1>Component Box</h1>
    <Component1 />
  </div>
);

export { ComponentBox };
