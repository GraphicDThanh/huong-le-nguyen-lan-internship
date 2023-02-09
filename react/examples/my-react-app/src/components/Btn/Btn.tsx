import React from 'react';

interface IBtn {
  title: string;
  handleOnClick: () => void;
}

const Btn = ({ title, handleOnClick }: IBtn) => {
  return <button onClick={() => handleOnClick()}>{title}</button>;
};

export default Btn;
