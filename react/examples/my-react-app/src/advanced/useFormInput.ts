import { ChangeEvent, useState } from 'react';

const useFormInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps = {
    value,
    onChange: handleChange,
  };

  return inputProps;
};

export default useFormInput;
