import { useState } from 'react';

const Input = () => {
  const [firstName, setFirstName] = useState(''); // Declare a state variable...

  return (
    <>
      <label htmlFor='same'>
        First name:
        <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      {firstName !== '' && <p>Your name is {firstName}.</p>}
    </>
  );
};

export default Input;
