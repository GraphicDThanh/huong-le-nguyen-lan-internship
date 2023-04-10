import { useState } from 'react';

const Form = () => {
  const [age, setAge] = useState('');
  const ageAsNumber = Number(age);

  return (
    <label htmlFor='same'>
      Age:
      <input value={age} onChange={(e) => setAge(e.target.value)} type='number' />
      <button type='button' onClick={() => setAge(String(ageAsNumber + 10))}>
        Add 10 years
      </button>
    </label>
  );
};

export default Form;
