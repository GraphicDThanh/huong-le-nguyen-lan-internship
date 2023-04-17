import { useState } from 'react';

const FruitPicker = () => {
  const [selectedFruit, setSelectedFruit] = useState('orange');

  return (
    <select value={selectedFruit} onChange={(e) => setSelectedFruit(e.target.value)}>
      <option value='apple'>Apple</option>
      <option value='banana'>Banana</option>
      <option value='orange'>Orange</option>
    </select>
  );
};

export default FruitPicker;
