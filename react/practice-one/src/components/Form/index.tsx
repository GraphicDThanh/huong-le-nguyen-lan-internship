import { FormEvent, useState } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import './index.css';

const Form = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    city: { value: '', text: 'Please Select' },
    time: { value: '', text: '4:00 Available' },
    description: '',
  });
  const listCity = [
    { text: 'Ho Chi Minh', value: 'hcm' },
    { text: 'DaNang', value: 'dn' },
    { text: 'HaNoi', value: 'hn' },
  ];
  const listTime = [
    { text: '4:00 Available', value: '4pm' },
    { text: '5:00 Available', value: '5pm' },
    { text: '6:00 Available', value: '6pm' },
  ];

  const handleOptionsCity = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).dataset.option!;
    const text = (e.target as HTMLButtonElement).innerHTML!;

    setData((prev) => {
      return {
        ...prev,
        city: {
          value: value,
          text: text,
        },
      };
    });
  };

  const handleOptionsTime = (e: React.MouseEvent) => {
    const value = (e.target as HTMLButtonElement).dataset.option!;
    const text = (e.target as HTMLButtonElement).innerHTML!;

    setData((prev) => {
      return {
        ...prev,
        time: {
          value: value,
          text: text,
        },
      };
    });
  };

  const handleOnChange = (e: React.ChangeEvent) => {
    const valueInput = (e.target as HTMLInputElement).value;
    const name = (e.target as HTMLInputElement).name;

    setData((prev) => {
      return {
        ...prev,
        [name]: valueInput,
      };
    });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('send');
  };

  return (
    <form className='form form-contact' onSubmit={(e) => onSubmit(e)}>
      <div className='form-group'>
        <Input
          name='fullName'
          type='text'
          value={data.fullName}
          placeholder='Full Name'
          onChange={handleOnChange}
        />
        <Input
          name='email'
          type='email'
          value={data.email}
          placeholder='example@gmail.com'
          onChange={handleOnChange}
        />
      </div>
      <div className='form-group'>
        <Select data={data.city} selectItems={listCity} onClick={(e) => handleOptionsCity(e)} />
        <Select data={data.time} selectItems={listTime} onClick={(e) => handleOptionsTime(e)} />
      </div>
      <Textarea
        name='description'
        placeholder='Message'
        value={data.description}
        onChange={handleOnChange}
      />
      <div className='form-action'>
        <Button type='submit' title='Book Appointment' variant='tertiary' size='xl' />
      </div>
    </form>
  );
};

export { Form };
