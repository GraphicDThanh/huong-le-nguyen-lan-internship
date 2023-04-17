import { useContext } from 'react';
import { BoxContext } from './BoxProvider';
import { Component2 } from './Component2';

const ComponentWrapper = () => {
  const { changeColor, handleChangeColor } = useContext(BoxContext);
  console.log('wrapper');

  return <Component2 changeColor={changeColor!} handleChangeColor={handleChangeColor!} />;
};

export { ComponentWrapper };
