import useFormInput from './useFormInput';

const Form = () => {
  const firstNameProps = useFormInput('Mary');
  const lastNameProps = useFormInput('Poppins');

  return (
    <>
      <label htmlFor='same'>
        First name:
        <input value={firstNameProps.value} onChange={firstNameProps.onChange} />
      </label>
      <label htmlFor='same'>
        Last name:
        <input value={lastNameProps.value} onChange={lastNameProps.onChange} />
      </label>
      <p>
        <b>
          Good morning, {firstNameProps.value} {lastNameProps.value}.
        </b>
      </p>
    </>
  );
};

export default Form;
