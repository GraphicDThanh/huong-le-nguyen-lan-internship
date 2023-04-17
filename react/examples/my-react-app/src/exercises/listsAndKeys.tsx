import React from 'react';

const Number = (props) => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number * 2}</li>);
  const listItems2 = props.numbers.map((number) => <li key={number.toString()}>{number}</li>);

  return (
    <>
      <ul>{listItems}</ul>
      <ul>{listItems2}</ul>
    </>
  );
};

export default Number;
